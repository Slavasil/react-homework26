import { useEffect, useState } from 'react';

function useJsonFetch(url, options) {
  let [fetchState, setFetchState] = useState([null, true, false]);
  useEffect(() => {
    fetch(url, options).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setFetchState([data, false, null]);
        }, (error) => {
          console.error(error);
          setFetchState([null, false, 'json parse error']);
        });
      } else {
        setFetchState([null, false, 'http error ' + response.status]);
      }
    }, (error) => {
      console.error(error);
      setFetchState([null, false, 'network error']);
    });
  }, [url, options]);
  return fetchState;
}

export default useJsonFetch;