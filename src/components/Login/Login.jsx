import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import logo from '../Navbar/Marca.png'
import btnsSelec from './Btns_Seleccionables.png'
import './Login.css';


const Login = () => {
    
  onsubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    login(username, password);

  }

  const login = () => {
    let username = "";
    let password = "";
      if(username ===  "j@topolabs.com" && password === 12345 ) {
          alert("Login correcto");
      }   else {
              alert("Login incorrecto");
          }
  }; 



    const id = 131;

    return (

        <Fragment>

          <header>
            <nav className='navbar'>
                <div className='containerNavbar'>
                    {/* <a href='*'>Logo</a> */}
                    <img src={logo} alt='logo' href='*' />
                </div>
                <div className='box-elements'>
                    <a href='*'>Home</a>
                    <a href='*'>Empresas</a>
                    <a href='*'>Transportador</a>
                    <button className='btn-nav' href='*'>Ingresar</button>
                </div>
            </nav>
        </header>
        
            

            <form className='container-form' onSubmit={onsubmit}>

              <h1>Iniciar Sesión</h1>
              <p>Selecciona el tipo de usuario para iniciar sesión</p>

                <img src={btnsSelec} alt="botones" className='btnsSelec' />

                <input 
                type="text" 
                placeholder="Correo" 
                name='username' 
          
                />
                
                <input type="password" placeholder="Contraseña" name='password' />
            
                {/* <button className='button'>Ingresar</button> */}

                <p><b>Olvidé mi contraseña</b></p>
                <p>¿No tienes una cuenta? <b>Registrate</b>  </p>

                <Link  key={login} to={`${id}`} className='button' style={{ textDecoration:"none" }}>Ingresar</Link>
            
            </form>
          <Footer />
        </Fragment>
    )
}

export default Login