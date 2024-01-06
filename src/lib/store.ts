import { writable } from "svelte/store";

type Country = {
    "countryName": string,
    "checked": boolean
}

let countSelectedCountries = writable(0)

const allCountries = writable<Country[]>([
    { "countryName": "États-Unis", "checked": false },
    { "countryName": "Canada", "checked": false },
    { "countryName": "Royaume-Uni", "checked": false },
    { "countryName": "France", "checked": false },
    { "countryName": "Allemagne", "checked": false },
    { "countryName": "Japon", "checked": false },
    { "countryName": "Chine", "checked": false },
    { "countryName": "Inde", "checked": false },
    { "countryName": "Brésil", "checked": false },
    { "countryName": "Australie", "checked": false }
]);

allCountries.subscribe(countries => {
    const selectedCount = countries.reduce((acc, country) => { return country.checked ? acc + 1 : acc }, 0)
    countSelectedCountries.set(selectedCount);
})

export { allCountries, countSelectedCountries };