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
                <Link to='/'>
                    <h1 className='text-3xl text-orange-600'>
                        Gold<span className='text-gray-950'>ify</span>
                    </h1>
                </Link>

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
                    <button
                        onClick={handleOpenDrawer}
                        className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out cursor-pointer"
                    >
                        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        {items.length > 0 && (
                            <span className="absolute inset-0 object-right-top -mr-6">
                                <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-orange-600 text-white">
                                    {items.length}
                                </div>
                            </span>
                        )}
                    </button>

                    <Link to='/login' className='bg-orange-600 text-white px-4 py-1.5'>Login</Link>
                </div>

            </header>
            {openDrawer && <CartDrawer setOpenDrawer={setOpenDrawer} />}
        </React.Fragment>
    )
}

export default Header
