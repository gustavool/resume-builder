import { useEffect, useState } from 'react';

export default function useFetch(url, options = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, options)
      .then(async (response) => {
        const json = await response.json();
        setValue(json);
        console.log('json', json);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { isLoading, value, error };
}
