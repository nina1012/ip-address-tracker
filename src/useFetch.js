import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [coordinates, setCoordinates] = useState();

  useEffect(() => {
    async function fetching() {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        console.log('from usefetch');

        const {
          location: { lat, lng }
        } = data;
        setCoordinates([lat, lng]);
        console.log(coordinates);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetching();
  }, [url]);

  return { data, isLoading, error, coordinates };
};

export default useFetch;
