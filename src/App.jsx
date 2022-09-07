import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MapView from './components/Map/MapView';
import ServicesList from './components/ServicesList/ServicesList';
import Login from './components/Login/Login';



function App() {

    return (

        <div>
            <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                <Route path='/' element={<Login />} />
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

            {/* <ServicesList  /> */}

            <Login />

        </>
        
    );
}

export default App;
