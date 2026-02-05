import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='px-20 h-[10vh] flex justify-between items-center'>
            <h1 className='text-3xl text-[#ffd44a]'>Gold<span className='text-gray-950'>ify</span></h1>

            <nav>
                <ul className='flex gap-4 text-gray-950'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Eletronicos</Link></li>
                    <li><Link to='/'>Beleza</Link></li>
                    <li><Link to='/'>Frutas</Link></li>
                    <li><Link to='/'>Contacto</Link></li>
                </ul>
            </nav>

            <Link to='/login' className='bg-[#ffd44a] text-gray-950 px-4 py-2 rounded-lg'>Login</Link>
        </header>
    )
}

export default Header
