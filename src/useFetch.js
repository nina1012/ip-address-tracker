import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    async function fetching() {
      try {
        // if url is undefined, reset all the data and url to userLocationInfo and throw an error
        if (url) {
          setIsLoading(true);
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
          const {
            location: { lat, lng }
          } = data;
          setCoordinates([lat, lng]);
          setIsLoading(false);
        } else {
          reset();
          throw new TypeError('Invalid input value');
        }
      } catch (error) {
        setError(error);
      }
    }
    fetching();
  }, [url]);

  function reset() {
    setData(null);
    setError(null);
    setIsLoading(false);
    setCoordinates();
  }

  return { data, isLoading, error, coordinates, reset };
};

export default useFetch;
