import React from 'react'
import type { Product } from '../types';
import { GET_PRODUCT_BY_ID } from '../services/product';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = React.useState<Product | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const { url, options } = GET_PRODUCT_BY_ID(id ? { id: parseInt(id) } : { id: 0 });
                const response = await fetch(url, options);
                if (!response.ok) throw new Error("Erro ao buscar produtos");
                const data: Product = await response.json();
                setProduct(data);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, []);

    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4 h-[90vh] px-15'>
            <article>
                <img src={product?.images[0]} alt="" className='bg-gray-100 h-[90vh]' />
            </article>
            <article className='pt-4'>
                <h2 className='font-semibold text-3xl mb-4'>{product?.title}</h2>
                <p className='text-gray-500 text-lg text-justify'>{product?.description}</p>
                <p className='text-lg mt-2'>R$ {product?.price}</p>
                <div className='flex items-center gap-2 mt-4'>
                    <button className='bg-orange-600 text-white px-4 py-2 hover:bg-orange-700 flex items-center gap-2 transition-colors duration-300 cursor-pointer'>
                        <ShoppingCart className='w-5 h-5' />
                        Adicionar ao carrinho
                    </button>
                    <button className='bg-orange-100 text-orange-600 px-2 py-2 hover:bg-orange-600 hover:text-orange-100 flex items-center gap-2 transition-colors duration-300 cursor-pointer rounded-full'>
                        <Heart className='w-6 h-6' />
                    </button>
                </div>
            </article>
        </section>
    )
}

export default ProductDetails
