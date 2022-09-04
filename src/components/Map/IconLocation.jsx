import Location from 'leaflet';


export const IconLocation = Location.icon({

    iconUrl: require('../../assets/icon881.png'),
    iconRetinaUrl: require('../../assets/icon881.png'),

    // clases para definir el tamaño del icono

    iconAnchor: null,
    iconSize: [35,35],
    shadowAnchor: null,
    shadowSize: null,
    shadowUrl: null,
    className: "leaflet-venue-icon",    
});
