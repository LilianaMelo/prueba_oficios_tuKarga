// import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import MapView from './components/Map/MapView';
// import Login from './components/Login/Login';
// import Navbar from './components/Navbar/Navbar';
import ServicesList from './components/ServicesList/ServicesList';
import MapView from './components/Map/MapView';



function App() {


    return (

        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<MapView />} />
                <Route path='/:id' element={<ServicesList  /> } />
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

const Home = () => {
        

    return (

        <>

            <h1>Home</h1>
            {/* <MapView /> */}
            <ServicesList  />

        </>
        
    );
}

export default App;
