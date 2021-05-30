import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [coordinates, setCoordinates] = useState();

  useEffect(() => {
    async function fetching() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        const {
          location: { lat, lng }
        } = data;
        setCoordinates([lat, lng]);
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
