import React from "react"
import Banner from "../components/Banner"
import type { Product, ProductsResponse } from "../types";
import { Eye, ShoppingCart } from "lucide-react";
import { useAppDispatch } from "../contexts/store";
import { addToCart } from "../contexts/cart/cartSlice";
import { Link } from "react-router-dom";
import { GET_PRODUCTS } from "../services/product";

const Home = () => {
    const [product, setProduct] = React.useState<ProductsResponse | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const dispatch = useAppDispatch();

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const { url, options } = GET_PRODUCTS();
                const response = await fetch(url, options);
                if (!response.ok) throw new Error("Erro ao buscar produtos");
                const data: ProductsResponse = await response.json();
                setProduct(data);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            description: product.description,
            thumbnail: product.thumbnail,
            price: product.price,
        }));
    }

    return (
        <div className="bg-[#f9f9f9]">
            <Banner />
            <section className="p-10">
                <h3 className="text-4xl font-semibold mb-4">Nossos Productos</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-fr gap-4">
                    {product?.products.map((product) => (
                        <article key={product.id} className="bg-white p-4 shadow-md shadow-gray-100">
                            <img src={product.thumbnail} alt={product.title} className="w-full h-70 object-cover bg-gray-100 mb-4" />
                            <h5 className="mb-2 text-lg font-semibold">{product.title}</h5>
                            <p className="mb-4 text-gray-600">R$ {product.price}</p>
                            <div className="grid gap-2 items-center">
                                <Link
                                    to={`/product/${product.id}`}
                                    className="border border-orange-600 text-orange-600 px-3 py-1.5 flex items-center gap-2 hover:bg-orange-600 hover:text-white transition-colors duration-300"
                                >
                                    <Eye className="w-5 h-5" />
                                    Ver detalhes
                                </Link>

                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-orange-600 text-white px-3 py-1.5 cursor-pointer flex items-center gap-2 hover:bg-orange-700 transition-colors duration-300"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    Add ao carrinho
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home
