// import logo from './logo.svg';
import React, { useState } from 'react';
import { Fragment, useEffect, } from 'react';
import './App.css';
// import MapView from './components/Map/MapView';
// import Login from './components/Login/Login';
// import Navbar from './components/Navbar/Navbar';
// import ServicesList from './components/ServicesList/ServicesList';
import MapView from './components/Map/MapView';


function App() {

    // const [userInfo, setUserInfo ] = useState([]);//Ok 

    // const { id, uuid } = userInfo;
    // console.log(data);

    // const id = {data}.id};
    // // console.log(id);

    // https://api.delivery.iguarayalabs.com/app ==> URL principal

    /*
    const url = `https://api.delivery.iguarayalabs.com/app/services-detail/${35}`

    useEffect(() => {
        (async function(){
            const data = await fetch(url).then(res => res.json());
            setUserInfo(data.data);
            // console.log(data.data);
        })();
    }, [url])
    */


    return (

        <Fragment>

      
            {/* <ServicesList  />  */}
 
            <MapView />

            
            
            {/* <Navbar /> */}
            {/* <Login />  */}
            

        </Fragment>
        
    );

}

export default App;
