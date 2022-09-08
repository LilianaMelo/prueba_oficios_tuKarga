import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MapView from './components/Map/MapView';
import ServicesList from './components/ServicesList/ServicesList';
import Login from './components/Login/Login';

import {login} from './assets/data'


function App() {



    return (

        <div>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/:id' element={<ServicesList  /> } /> 
                <Route path='/:id/:id' element={<MapView />} />
    
            </Routes>
        </div>

    );
}

    // const [userInfo, setUserInfo ] = useState([]);//Ok 

    // const { id, uuid } = userInfo;
    // console.log(data);

    // const id = {data}.id};
    // // console.log(id);

    // https://api.delivery.iguarayalabs.com/app ==> URL principal


const Home = () => {
        

    return (

        <>

            {/* <ServicesList  /> */}
            {/* username={username} password={password} */}
       
            <Login login={login} />

        </>
        
    );
}

export default App;
