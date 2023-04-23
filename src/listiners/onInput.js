import { getCountry } from "..";
import { fetchCountries } from "../modules/fetchCountries";
import { insertLoadingGift } from "../modules/insert-loading-gif";

export function onInput(e) {
  const findCountry = e.target.value.trim();
  if(!findCountry) {
    return
  }
  insertLoadingGift()
  fetchCountries(findCountry).then(getCountry).catch(()=>console.log('Такая страна не найдена'));
};
