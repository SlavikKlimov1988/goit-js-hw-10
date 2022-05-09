export function countriCardTempleit({ obj}) {
   return `
   <div class="cauntri_info-conteiner">
      <div class="cauntri_info-wraper">  
         <div class="cauntri_info-flag">
            <img class="country-info__flags" src="${obj.coatOfArms.svg}" alt="${name.official}" width="50" />
            <h2 class="country-info__name">${name.official}</h2>
         </div>
      </div>
      <p class="country-info__capital"><span class="country-info__weight">Capital:</span> ${capital}</p>
      <p class="country-info__population"><span class="country-info__weight">Population:</span> ${population}</p>
      <p class="country-info__languages"><span class="country-info__weight">Languages:</span> ${Object.values(
        languages,
      )}</p>
   </div>`;
};