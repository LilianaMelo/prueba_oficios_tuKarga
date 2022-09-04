import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import MapView from './components/Map/MapView';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />  
      {/* <MapView /> */}
    
    
  </React.StrictMode>
);

reportWebVitals();
