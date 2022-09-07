import React from 'react'
import './Footer.css'
import logo from './Images/MarcaFooter.png';
import mediosPago from './Images/Medios.png';
import logosRedes from './Images/Logos_redes.png'


const Footer = () => {

    return (

        <footer>
            <div className='Footer'>
                <img className='logo'src={logo} alt="logo"/>
                <div className='group-links'>
                    <div className='links-footer'>
                        <p>Empresas</p>
                        <p>Transportador</p>
                        <p>Iniciar Sesión</p>
                    </div>
                    <div className='links-footer'>
                        <p>info@oficios.co</p>
                        <p>Cra 9 # 123 - 36, Piso 7</p>
                        <p>Edificio Usaquen</p>
                        <p>Bogotá Colombia</p>
                    </div>
                    <div className='links-footer'>
                        <p>Recibimos todo tipo de pagos</p>
                        <div className=''>
                            <img src={mediosPago} alt="mediosPago"/>
                        </div>
                    </div>
                    <div className='links-footer'>
                        <p>Siguenos en todas nuestra redes</p>
                        <div className='group-img-redes'>
                            <img className='img-redes' src={logosRedes} alt="redes"/>
                        </div>
                    </div>
                </div>
                <div className='group-copy'>
                    <hr />
                    <p><br />Todos los derechos reservados - Copyrigth2022 - Bogotá/Colombia</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer