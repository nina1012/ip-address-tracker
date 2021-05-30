import './App.css';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import InfoList from './components/InfoList';
import LoadingIcon from './components/LoadingIcon';
import useFetch from './useFetch';

import Map from './components/Map';

function App() {
  const [address, setAddress] = useState('');
  const [inputValue, setInputValue] = useState('');

  // const { data: info, isLoading, error, coordinates } = useFetch(
  //   `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}`
  // );

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setAddress(inputValue);
  //   const ipRegex = new RegExp(
  //     /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  //   );

  //   const domainNameRegex = new RegExp(
  //     /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/
  //   );

  //   console.log(address);

  //   // check if input value is valid ip address or domain name
  // }

  // function handleChange(e) {
  //   setAddress(e.target.value);
  // }

  return (
    <>
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <div className="App font-Rubik relative">
          <Header
            info={info}
            // handleSubmit={handleSubmit}
            // handleChange={handleChange}
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
