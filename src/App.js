import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { addCountrys } from './features/country/countries';
import CountryDetail from './pages/CountryDetail';
import Home from './pages/Home';
import { getCountry } from './services/Country.js';


function App() {
  const [countries, setCountries] = useState([])
  const [countriesInitial, setCountriesInitial] = useState([])
  const [carga, setCarga] = useState(true);
  const countryRedux = useSelector(state => state.country.countries)
  const dispatch = useDispatch()

  useEffect(() => {
    getCountry().then((response) => {
      dispatch(
        addCountrys(response.data)
      )
      if (response.data.length > 0) {
        filterInitial(response.data)
      }
      setCarga(false)
    })
  }, [])


  const filterInitial = (dataCountries) => {
    let countInitial = [
      "Germany",
      "United States",
      "Brazil",
      "Iceland",
      "Afghanistan",
      "Åland Islands",
      "Albania",
      "Algeria"
    ]
    let Countrys = []
    for (let i = 0; i < countInitial.length; i++) {
      let data = dataCountries.filter((item) => item.name?.common === countInitial[i])
      if (data) {
        Countrys.push(data[0])
      }
    }
    setCountriesInitial(countriesInitial.concat(Countrys))
  }

  return (

    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home countries={countryRedux} countriesInitial={countriesInitial} carga={carga} />} />
        <Route path='/country/:id' element={<CountryDetail countries={countries} />} />
      </Routes>
    </div>

  );
}

export default App;
