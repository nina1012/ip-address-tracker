import './App.css';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import InfoList from './components/InfoList';

import Map from './components/Map';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    setAddress('192.212.174.101');
    setInfo({
      ip: '192.212.174.101',
      location: 'Brooklyn, NY 10001',
      timezone: 'UTC -05.00',
      isp: 'SpaceX Starlink'
    });
    setCoordinates([34.08057, -118.07285]);
  }, []);

  // console.log(coordinates);

  return (
    <div className="App font-Rubik relative">
      <Header info={info} />
      <InfoList info={info} />
      <Map coordinates={coordinates} />
    </div>
  );
}

export default App;
