import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import InfoList from './components/InfoList';
import LoadingIcon from './components/LoadingIcon';
import useFetch from './useFetch';

import Map from './components/Map';
import { validateInput } from './validateInput';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [url, setUrl] = useState(
    `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}`
  );

  const { data: info, isLoading, error, coordinates } = useFetch(url);

  function handleSubmit(e) {
    e.preventDefault();
    // check if input value is valid ip address or domain name
    setUrl(validateInput(inputValue));
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  console.log({ info, error });

  if (error) {
    return <h1>{JSON.stringify(error, null, 2)}</h1>;
  }

  if (isLoading) {
    return <LoadingIcon />;
  }

  return (
    <>
      {info ? (
        <div className="App font-Rubik relative">
          <Header handleSubmit={handleSubmit} handleChange={handleChange} />
          <InfoList info={info} />
          <Map coordinates={coordinates} />
        </div>
      ) : null}
    </>
  );
}

export default App;
