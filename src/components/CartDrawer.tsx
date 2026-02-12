import { X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../contexts/store';
import { clearCart } from '../contexts/cart/cartSlice';

type CartDrawerProps = {
    setOpenDrawer: (value: boolean) => void;
}

const CartDrawer = ({ setOpenDrawer }: CartDrawerProps) => {
    const { items } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    const handleCloseDrawer = () => {
        setOpenDrawer(false);
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="fixed top-0 right-0 h-screen w-[400px] bg-white py-4 shadow-md z-50 flex flex-col">
            <header className='flex justify-between items-center border-b border-gray-200 pb-2 mb-2 px-4'>
                <h5 className='tetx-3xl font-semibold'>Carrinho</h5>
                <button onClick={handleCloseDrawer} className='cursor-pointer'>
                    <X className='text-red-600 w-6 h-6' />
                </button>
            </header>
            <section className="flex-1 overflow-y-auto pl-4 pr-2 pb-2">
                {items.length > 0 ? items.map((item) => (
                    <article key={item.id} className='flex border-b border-gray-200 py-2 gap-1'>
                        <img src={item.thumbnail} alt={item.title} className='w-40 h-30' />
                        <div className='pr-2'>
                            <h5 className='text-lg font-semibold mb-2'>{item.title}</h5>
                            <p className='text-gray-600 mb-2'>R$ {item.price}</p>
                            <div className='flex  gap-4'>
                                <button className='text-2xl font-semibold'>-</button>
                                <span className='text-1xl font-semibold'>{item.quantity}</span>
                                <button className='text-2xl font-semibold'>+</button>
                            </div>
                        </div>
                    </article>
                )) : (
                    <p className='text-gray-500 text-center mt-10'>Seu carrinho está vazio.</p>
                )}
            </section>
            <footer className='pl-2 pr-4 grid gap-2 grid-cols-2'>
                <button className='w-full bg-orange-600 hover:bg-orange-700 text-white py-2 cursor-pointer'>
                    Finalizar Compra
                </button>
                <button
                    onClick={handleClearCart}
                    className='w-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors duration-300 py-2 cursor-pointer'
                >
                    Limpar Carrinho
                </button>
            </footer>
        </div>
    )
}

export default CartDrawer
