import { clearCountries } from "./clear-countries";

export function insertLoadingGift() {
  clearCountries();
  document.querySelector('.country-list').innerHTML = `
  <div>
    <img src="/images/loading.gif" alt="Loading...">
  </div>
`;
};
