import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './ServicesList.css'

const ServicesList = () => {

    const id = 131

    const [ service, setService ] = useState();

    // const { service_name, date_text, price_text, status_string } = service; 

    // const {  } = resultado

    const urlApi = `https://api.delivery.iguarayalabs.com/app/services-list/0/${id}`

    useEffect( () => {
        ( async function () {
            const data = await fetch(urlApi).then((res) => res.json());
            setService(data.data);
            // console.log(data.data);
        })();
    },[urlApi])
   

    // const set = new Set([data.data]);

    const set = new Set(["one", "two", "three"]); // ejemplo de extraer info de un array de un objeto

    return (

        <>

            <Navbar />

                <div>
                    {Array.from(set).map( element => {
                        return(
                            <div key={element}>
                                <h2>{element}</h2>
                            </div>
                        )
                    })}
                </div>


            <div className='container-title'>
                <h2>Mis servicios</h2>
                <button className='btn-service'>Nuevo Servicio</button>
            </div>    

           
            <table className='content-table'>
                <thead>
                    <tr className='column'>
                        <th>Id</th>
                        <th>Servicio</th>
                        <th>Fecha</th>
                        <th>Ciudad</th>
                        <th>Dirección</th>
                        <th>Valor $</th>
                        <th>Estado</th>
                    </tr>
                </thead>
            </table>

            <table className='content-table'>

                <tbody>
                    <tr className='row'>
                        <td> 1 </td>
                        <td> Indefinido </td>
                        <td>12 juni 22</td>
                        <td> Bogotá </td>
                        <td> calle 23 b # 45 </td>
                        <td>$ 50.000</td> 
                        <td> No funcional </td>
                    </tr>

                    {/*
                    <tr className='row'>
                        <td>2</td>
                        <td>MENSAJERIA</td>
                        <td>30/JUN/22</td>
                        <td>BOGOTÁ</td>
                        <td>CLL 123 # 23 -64</td>
                        <td>$ 100.000 COP</td>
                        <td>Activo</td>
                    </tr>

                    <tr className='row'>
                        <td>3</td>
                        <td>MENSAJERIA</td>
                        <td>10/JUL/22</td>
                        <td>BOGOTÁ</td>
                        <td>CLL 23 # 23 -64</td>
                        <td>$ 100.000 COP</td>
                        <td>Activo</td>
                    </tr>
                    */}
                    
                </tbody>

            </table>

            <Footer />
        
        </>

        
    ) // () return

}
    
export default ServicesList