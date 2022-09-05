import React from 'react';
import { Marker, Popup } from 'react-leaflet'; 
import { IconLocation } from './IconLocation';


const Markers = ({address} ) => {
    console.log("mapa");
    console.log(address);
    
    // address.map((item, i) ==> .map recorre el array[ item, item, item, item ] item es cada cosa que hay dentro del array.

    if (address)  {

        const markers = address.map((item, i) => (
            <Marker key={i} position={[item.latitud, item.longitud]} icon={IconLocation} >📌
                <Popup>
                    {item.address_format} 📌
                </Popup>
            </Marker>
        ));
        return markers;
    } else {
        console.log("No sirve");
    }
};

export default Markers

// Eliminar
// <div>
// {Array.from(set).map( element => {
//     return(
//         <div key={element}>
//             <h2>{element}</h2>
//         </div>
//     )
// })}
// </div>