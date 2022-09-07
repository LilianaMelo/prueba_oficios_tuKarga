import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './ServicesList.css'

const ServicesList = () => {

    const id = 131 // id usuario que se logea

    const [ list, setService ] = useState([]);
    // console.log("datos lista");
    // console.log(list);

    const urlApi = `https://api.delivery.iguarayalabs.com/app/services-list/0/${id}`

    useEffect( () => {
        ( async function () {
            const respuesta = await fetch(urlApi).then((res) => res.json());
            setService(respuesta.data); // .data
            // console.log(respuesta.data); 
        })();
    },[urlApi])
    
    let display = ("");

    if (list) {
        display = list.map((item, i) => { 
            const { id, service_name, status_string, price_text, date_text } = item;
            // id del item o servicio enviarlo al Map view.
            // console.log("informacion del servicio: " );
            // console.log(id, service_name, status_string, price_text, date_text); {/* se envia este id a la vista del mapa */}
            return (

                <Link
                    key={id}
                    className="link-page-map"
                    to={`${id}`}
                >
                <table className='content-table'>
                    <tbody className='tbody'>
                        <tr className='row' >
                            <th key={i} className="id-fondo">{id}</th>
                            <td>{service_name}</td>
                            <td>{date_text}</td>
                            <td>"-Ciudad"</td>
                            <td>"-Dirección"</td>
                            <td>{price_text}</td> 
                            <td>{status_string}</td>
                        </tr>
                        <hr />
                    </tbody>
                </table>

                </Link>
            );
        })  // retornar la vista aqui.. mirar Card     
    } else {
        display = <h2> No se encontro información.</h2>;
    }   
    return (
        <>
            <Navbar />
            <div className='container-title'>
                    <h2>Mis servicios</h2>
                    <button className='btn-service'>Nuevo Servicio</button>
            </div>     
                <table className='content-table'>
                    <tbody>
                        {display}
                    </tbody>
                </table>
            <Footer />
        </>
    )
}
    
export default ServicesList