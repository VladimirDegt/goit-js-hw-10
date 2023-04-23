import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { clearCountries } from './clear-countries';

export function fetchCountries(name){
  
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`).then((response) => {
    if(response.ok) {
      return response.json()
    } else {
      clearCountries();
      return Notify.failure('Oops, there is no country with that name')
    }
  })
};
