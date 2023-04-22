import { Notify } from 'notiflix/build/notiflix-notify-aio';

import './css/styles.css';
import { renderPage } from './modules/render-page';
import { onInput } from './listiners/onInput';
import { clearCountries } from './modules/clear-countries';

const DEBOUNCE_DELAY = 300;
const debounce = require('lodash.debounce');

export function getCountry(countries){
  if(countries.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.')
    clearCountries();
    return
  }
  if (countries.length > 2 && countries.length < 10) {
    const template = renderPage (countries)
    clearCountries();
    document.querySelector('.country-list').innerHTML = template;
    return
  }
  if (countries.length === 1) {
    const template = renderPage (countries)
    clearCountries();
    document.querySelector('.country-info').innerHTML = template;
    return
  }
};

document.querySelector('#search-box').addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
