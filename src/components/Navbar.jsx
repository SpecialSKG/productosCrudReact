import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="mx-auto px-6 py-3 bg-cyan-800">
            <div className="flex items-center justify-between">
                <div className="text-white font-bold text-xl">
                    <Link to={'/'}>Home</Link>
                </div>

                <div className="hidden md:block">
                    <ul className="flex items-center space-x-8">
                        <li className='text-white'><Link to={'/'}>Inicio</Link></li>
                        <li className='text-white'><Link to={'/catalogo'}>Catalago</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;