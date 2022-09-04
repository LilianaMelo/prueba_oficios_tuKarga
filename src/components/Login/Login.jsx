// import React from 'react';
import React, { Fragment, useEffect, useState } from 'react';


const Home = () => <h1>Home</h1>

const Login = () => {

  

    // const url = `https://api.delivery.iguarayalabs.com/app/login/data?username=${username}&password=${password}`;
    // ${username}&${password}

    // console.log(url.data);


    const [ userInfo, setUserInfo ] = useState({
      USERNAME: 'j@topolabs', 
      PASSWORD: '12345'
    });  

    const buttonSubmit = async (e) => { 

        // const USERNAME = "j@topolabs.com";
        // const PASSWORD = "12345"

        e.preventDefault();
        
        var url = 'https://api.delivery.iguarayalabs.com/app/login'; // ?USERNAME=${USERNAME}&PASSWORD=${PASSWORD}

        const data = {
          "USERNAME": "j@topolabs.com",
          "PASSWORD": "12345", 
        }

        fetch(url, {
          method: 'POST',
          // mode: 'no-cors',
          // cache: 'default',
          headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data) // aqui va el state del form  'USERNAME': 'j@topolabs', 'PASSWORD': '12345'    
        } ) .then( res => res.json())
            .catch (error => console.error("OPERACIÓN FALLIDA!!!", error) ) 
            .then(res => console.log("OPERACIÓN EXITOSA?", res))
        
    
    } // buttonSubmit

    
    const inputChange = (e) => { 
        setUserInfo(e.target.value);   
    }
    

    return (

      // <h1>Login</h1>

        <Fragment>

          <Home />
        
            <h1>Iniciar Sesión</h1>

            <form>

                <input type="text" placeholder="Correo" name='USERNAME' onChange={inputChange}/>
                <input type="password" placeholder="Contraseña" name='PASSWORD' onChange={inputChange} />

                <button onClick={buttonSubmit} className='button'  >Ingresar</button>

                <p><b>Olvidé mi contraseña</b></p>
                <p>¿No tienes una cuenta? <b>Registrate</b>  </p>

            </form>
            
        
        </Fragment>
        
    )
}

export default Login