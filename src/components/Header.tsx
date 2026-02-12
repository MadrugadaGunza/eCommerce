import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../contexts/store'
import CartDrawer from './CartDrawer';
import React from 'react';

const Header = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const { items } = useAppSelector((state) => state.cart);

    const handleOpenDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <React.Fragment>
            <header className='px-15 h-[10vh] flex justify-between items-center'>
                <h1 className='text-3xl text-orange-600'>Gold<span className='text-gray-950'>ify</span></h1>

                <nav>
                    <ul className='flex gap-4 text-gray-950'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Eletronicos</Link></li>
                        <li><Link to='/'>Beleza</Link></li>
                        <li><Link to='/'>Frutas</Link></li>
                        <li><Link to='/'>Contacto</Link></li>
                    </ul>
                </nav>

                <div className='flex items-center gap-4'>
                    {items.length > 0 && (
                        <button className='flex relative cursor-pointer mr-3' onClick={handleOpenDrawer}>
                            <ShoppingCart className='w-6 h-6' />
                            <span
                                className='bg-orange-600 text-white rounded-full absolute left-[16px] top-[-16px] px-2'
                            >
                                {items.length}
                            </span>
                        </button>
                    )}
                    <Link to='/login' className='bg-orange-600 text-white px-4 py-1.5'>Login</Link>
                </div>

            </header>
            {openDrawer && <CartDrawer setOpenDrawer={setOpenDrawer} />}
        </React.Fragment>
    )
}

export default Header
