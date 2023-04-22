import { getCountry } from "..";
import { fetchCountries } from "../modules/fetchCountries";

export function onInput(e) {
  const findCountry = e.target.value.trim();
  fetchCountries(findCountry).then(getCountry).catch(()=>console.log('Такая страна не найдена'));
};
