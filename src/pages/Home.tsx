import React from "react"
import Banner from "../components/Banner"
import type { Product, ProductsResponse } from "../types";
import { ShoppingCart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../contexts/store";
import { addToCart } from "../contexts/cart/cartSlice";

const Home = () => {
    const [product, setProduct] = React.useState<ProductsResponse | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state) => state.cart);
    console.log(items)

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://dummyjson.com/products");
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
        console.log({
            id: product.id,
            title: product.title,
            description: product.description,
            thumbnail: product.thumbnail,
            price: product.price,
        });

        dispatch(addToCart({
            id: product.id,
            title: product.title,
            description: product.description,
            thumbnail: product.thumbnail,
            price: product.price,
        }))
    }

    return (
        <div className="bg-[#f9f9f9]">
            <Banner />
            <section className="px-20 py-10">
                <h3 className="text-4xl font-semibold mb-4">Nossos Productos</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-fr gap-4">
                    {product?.products.map((product) => (
                        <article key={product.id} className="bg-white p-4 rounded-lg shadow-md shadow-gray-100">
                            <img src={product.thumbnail} alt={product.title} className="w-full h-70 object-cover bg-gray-100 rounded-md mb-4" />
                            <h5 className="mb-4 text-1xl font-semibold">{product.title}</h5>
                            <p className="text-justify mb-2 text-gray-600">{product.description}</p>
                            <p className="mb-4 font-bold">R$ {product.price}</p>
                            <button
                                onClick={() => handleAddToCart(product)}
                                className="bg-amber-400 text-amber-950 rounded-lg px-4 py-2 cursor-pointer flex items-center gap-1"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Adicionar ao carrinho
                            </button>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home
