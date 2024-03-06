import { useState, useEffect } from 'react';

export const useGetLatLon = (address) => {
  const [{ results }, setState] = useState({ results: [] });

  useEffect(() => {
    console.log('address123', address, results.length);
    if (!address && results.length > 0) {
      setState({ results: [] });
    }
    if (!address) return;

    const getLocation = async () => {
      return fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(address)}`);
    };

    // This function will be invoked after 700ms of inactivity
    const timer = setTimeout(() => {
      return getLocation()
        .then((response) => response.json())
        .then((data) => {
          if (data.results) setState(data);
        })
        .catch((error) => {
          console.log('error', error);
        });
    }, 700);

    // Cleanup function to clear the timeout if the dependency changes before the timeout

    return () => clearTimeout(timer);
  }, [address]);

  return results || [];
};
