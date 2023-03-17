import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const [selected, setSelected] = React.useState(location.pathname.slice(1))
    return (
        <nav className='flex items-center justify-center py-2'>
            <ul className='hidden gap-4 sm:flex'>
                <li><Link to="/" onClick={() => setSelected('')} className={`hover:bg-primary hover:text-secondary transition-all px-6 py-2 rounded-full ${selected === '' ? 'bg-primary text-secondary' : ''}`}>Home</Link></li>
                <li><Link to="/team" onClick={() => setSelected('team')} className={`hover:bg-primary hover:text-secondary transition-all px-6 py-2 rounded-full ${selected === 'team' ? 'bg-primary text-secondary' : ''}`}>Team</Link></li>
            </ul>
            <img src={logo} alt="logo" width='150' height='150' />
            <ul className='hidden gap-4 sm:flex'>
                <li><Link to="/video" onClick={() => setSelected('video')} className={`hover:bg-primary hover:text-secondary transition-all px-6 py-2 rounded-full ${selected === 'video' ? 'bg-primary text-secondary' : ''}`}>Video</Link></li>
                <li><Link to="/about" onClick={() => setSelected('about')} className={`hover:bg-primary hover:text-secondary transition-all px-6 py-2 rounded-full ${selected === 'about' ? 'bg-primary text-secondary' : ''}`}>About</Link></li>
            </ul>
        </nav>
    )
}

export default Header