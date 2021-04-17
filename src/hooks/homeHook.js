import {useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const useDatafetch = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  const refreshList = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://rosterbuster.aero/wp-content/uploads/dummy-response.json',
        {
          headers: {
            cache: 'no-store',
          },
          timeout: 3000,
        },
      );

      const data = await response.json();

      setData(data);
      console.log('done');
      setLoading(false);
      setIsError(false);
      storeInLocalstorage(data);
    } catch (error) {
      console.log({error});
      getFromLocalstorage();
      setIsError(true);
      setLoading(false);
    }
  };

  const storeInLocalstorage = async inputData => {
    await AsyncStorage.setItem('data', JSON.stringify(inputData));
  };

  const getFromLocalstorage = async () => {
    try {
      const tempData = await AsyncStorage.getItem('data');

      if (tempData != null) {
        console.log('found in localstorage');
        setData(tempData);
        setLoading(false);
        setIsError(false);
      } else {
        console.log('localstorage empty');
        setLoading(false);
        setIsError(true);
        setData(null);
      }
    } catch (error) {
      console.log('localstorage empty');
      setLoading(false);
      setIsError(true);
      setData(null);
    }

    // .then(element => {
    //     console.log('fetched from local storage');
    //     setData(JSON.parse(element));
    //   })
    //   .catch(error => {
    //     console.log('Empty local storage');
    //     setIsError(true);
    //   });
  };

  return {isLoading, isError, data, refreshList};
};
