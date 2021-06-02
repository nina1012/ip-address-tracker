import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import InfoList from './components/InfoList';
import LoadingIcon from './components/LoadingIcon';
import useFetch from './useFetch';

import Map from './components/Map';
import { validateInput } from './validateInput';

function App() {
  const userLocationInfo = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}`;
  const [inputValue, setInputValue] = useState('');
  const [url, setUrl] = useState(userLocationInfo);

  const { data: info, isLoading, error, coordinates, reset } = useFetch(url);

  function handleSubmit(e) {
    e.preventDefault();
    // check if input value is valid ip address or domain name
    setUrl(validateInput(inputValue));
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  if (error) {
    const resetToUserLocationInfo = () => {
      reset();
      setUrl(userLocationInfo);
    };
    return (
      <div className="text-center flex flex-col h-screen items-center justify-center">
        <pre className="text-red-500 text-2xl mb-6">
          {// JSON.stringify(error)
          JSON.stringify(error.message, null, 2)}
          <br />
        </pre>
        <button
          onClick={resetToUserLocationInfo}
          style={{ backgroundColor: '#505ec1' }}
          className="text-medium text-white py-2 px-7 text-3xl"
        >
          Retry
        </button>
      </div>
    );
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
