import React from 'react';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Markers from './Markers'; 
import Navbar from '../Navbar/Navbar';
import './Map.css';


import { useState } from 'react';


import moto from './Images/Moto.png'
import Footer from '../Footer/Footer';

const MapView = () => { 
    // aqui va la informacion del detalle.

    const id = 2; 
    const [ infoData, setInfoData ] = useState([]);

    const { price_text, type_pay, status_string, address } = infoData;

    // console.log("Esta es la info: " + service_name); // si trae la informacion.
    // console.log(uuid); // si trae la informacion.
    // console.log(price_text,  type_pay, status_string); // si trae la informacion.


    const urlAPI = `https://api.delivery.iguarayalabs.com/app/services-detail/${id}`

    useState(() => {
        (async function () {
            const respuesta = await fetch(urlAPI).then((res) => res.json());
            setInfoData(respuesta.data);
            console.log(respuesta.data);
        })();

    }, [urlAPI]);

    /* useState(() => {
        (() {

        })()
    },[]); */




    return (  //, bogotá 4.632457, -74.073243
        
        <>    
                
            <Navbar />

                {/* <p>Aqui va el Array: </p>
                
                {Array.from(address).map( item => {
                    console.log(item.longitud)
                    console.log(item.latitud)
                    return(
                        <div key={item}>
                            <h4>{item.address}</h4>
                        </div>
                    )
                })

                } */}

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


                        

                        {/* <br />
                        <br />
                        <br /> */}
                       
                        <p className='note'>* Nota: Recuerda que si ya prepagaste el servicio y al finalizar la diligencia el profesional excede los 60 minutos, debera cancelarse en efetivo al profesional.</p>
                        
                        
                </div>

                <MapContainer center={{lat:'4.7129253914906215', lng:'-74.071895898515'}} zoom={13} >

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