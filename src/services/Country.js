import axios from 'axios'

export const getCountry = () => {
  const paises = axios.get(`https://restcountries.com/v3.1/all`).then(response => {
    return response
  })
  return paises
}

export const getCountryId = (code) => {
  const pais = axios.get(`https://restcountries.com/v3.1/alpha/${code}`).then(response => {
    return response
  })
  return pais
}

