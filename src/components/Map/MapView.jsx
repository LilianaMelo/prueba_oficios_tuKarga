import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Markers from './Markers'; 
import Navbar from '../Navbar/Navbar';
import './Map.css';

import moto from './Images/Moto.png'
import Footer from '../Footer/Footer';


const MapView = () => { 
    // aqui va la informacion del detalle.

    // const ServicesList = ServicesList({id}); // importa el id del servicesList

    // const id = 1 ; 

    const {id} = useParams(); // id del servicio y mismo de la urlApi
    const [ infoData, setInfoData ] = useState([]);

    const { price_text, type_pay, status_string, address } = infoData;

    // console.log("Esta es la info: " + service_name); // si trae la informacion.
    // console.log(uuid); // si trae la informacion.
    // console.log(price_text,  type_pay, status_string); // si trae la informacion.


    const urlAPI = `https://api.delivery.iguarayalabs.com/app/services-detail/${id}`

    useEffect(() => {
        (async function () {
            const respuesta = await fetch(urlAPI).then((res) => res.json());
            setInfoData(respuesta.data);
            // console.log(respuesta.data);
        })();

    }, [urlAPI]);

    /* useState(() => {
        (() {

        })()
    },[]); */

    return (  
        
        <>    
                
            <Navbar />
                <div className='container'>

                <div className='container-1'>
                    <h2>Servicio {status_string}</h2>
                        <div className='id-mensajero'>
                            <img src='https://w0.peakpx.com/wallpaper/892/855/HD-wallpaper-pedro-perestrello-male-bw-model-black-face-man-white.jpg' alt='mensajero' className='img-msjr'/>
                            <h5 className='inf-mensajero'>Tu mensajero va en camino <br/><h6>Edgar Romero</h6></h5>
                        </div>

                        <br />
                        
                        <div className='vehicle'>
                            <img src={moto} className='moto' alt='mensajero'/>
                            <p>Moto KPP 45F</p>
                        </div>
                        <p className='parrafo'><br />$ Costo servicio: {price_text}</p>
                        <p className='parrafo'>$ Medio de pago: {type_pay}</p> 
                    <div className='container-note'>
                        <p className='note'>* Nota: Recuerda que si ya prepagaste el servicio y al finalizar la diligencia el profesional excede los 60 minutos, debera cancelarse en efetivo al profesional.</p>
                    </div>
                </div>
                <MapContainer center={{lat:'4.68651425', lng:'-74.09029325'}} zoom={13} >
                    <TileLayer 
                        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>

                    <Markers address={address}/>
                </MapContainer>
            </div>
            <Footer />
        </>
    )
}

export default MapView