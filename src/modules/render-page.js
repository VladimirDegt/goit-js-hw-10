export function renderPage (countries) {
  if (countries.length > 2 && countries.length < 10) {
    const template = countries.map( ({flags, name}) => `
    <li>
      <div class="container-flag-name">
        <svg max-width="150" height="50">
          <image href="${flags.svg}" alt="${name.official}" max-width="150" height="50"/>
        </svg>
        <p>${name.official}</p>
      </div>
    </li>
  `).join('')

    return template;
  }
  if (countries.length === 1) {
    const template = countries.map( ({flags, name, capital, population, languages}) => `
        <div class="container-flag-name">
          <svg max-width="150" height="50">
            <image href="${flags.svg}" alt="${name.official}" max-width="150" height="50"/>
          </svg>
          <p><b>${name.official}</b></p>
        </div>
        <p><b>Capital: </b><span>${capital[0]}</span></p>
        <p><b>Population: </b><span>${population}</span></p>
        <p><b>Languages: </b><span>${Object.values(languages).join(', ')}</span></p>
    `).join('')

    return template;
  }

};
