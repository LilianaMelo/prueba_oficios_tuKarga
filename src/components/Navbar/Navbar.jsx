import React from 'react';
import './Navbar.css'
import logo from './Marca.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    return ( 
        
        <header>
            <nav className='navbar'>
                <div className='containerNavbar'>
                    <Link to="/">
                        <img src={logo} alt='logo' href='*' />
                    </Link>    
                </div>
                <div className='box-elements'>
                    <a href='*'>Home</a>
                    <a href='*'>Mis Servicios</a>
                    <a href='*'>Recargas</a>
                    <a href='*'>Mi perfil</a>
                    <a href='*'>Encuentas</a>
                    <button className='btn-nav' href='*'>TK</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar