import './App.css';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import InfoList from './components/InfoList';
import LoadingIcon from './components/LoadingIcon';

import Map from './components/Map';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState([]);
  const [info, setInfo] = useState({});
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setAddress('192.212.174.101');

    setInfo({
      ip: '192.212.174.101',
      location: {
        country: 'US',
        region: 'California',
        city: 'South San Gabriel',
        lat: 34.04915,
        lng: -118.09462,
        postalCode: '',
        timezone: '-07:00',
        geonameId: 5397771
      },
      as: {
        asn: 7127,
        name: 'SCE',
        route: '192.212.0.0/15',
        domain: '',
        type: ''
      },
      isp: 'Southern California Edison',
      proxy: {
        proxy: false,
        vpn: false,
        tor: false
      }
    });

    setCoordinates([34.04915, -118.09462]);
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setAddress(inputValue);
    const ipRegex = new RegExp(
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    );

    const domainNameRegex = new RegExp(
      /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/
    );

    if (ipRegex.test(address) || domainNameRegex.test(address)) {
      setIsLoading(true);

      async function fetching() {
        const response = await fetch(
          `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&ipAddress=${address}`
        );
        const data = await response.json();
        setInfo(data);
        const {
          location: { lat, lng }
        } = data;
        setCoordinates([lat, lng]);

        setIsLoading(false);
        console.log(coordinates);
      }
      fetching();
      return;
    } else {
      console.error('Provided ip or domain name is not valid!!!');
    }

    // check if input value is valid ip address or domain name
  }

  function handleChange(e) {
    setAddress(e.target.value);
  }

  return (
    <>
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <div className="App font-Rubik relative">
          <Header
            info={info}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            address={address}
          />
          <InfoList info={info} />
          <Map coordinates={coordinates} />
        </div>
      )}
    </>
  );
}

export default App;
