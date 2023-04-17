import React, { useEffect, useState, Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCountryId } from '../services/Country'
import './CountryDetails.css'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';



const CountryDetail = (props) => {
  const { id } = useParams()
  const [country, setCountry] = useState([])
  const [borders, setBorders] = useState([])
  const [carga, setCarga] = useState(true);
  const countries = useSelector(state => state.country.countries)



  useEffect(() => {
    const getCountryById = async () => {
      const countryById = await getCountryId(id);
      setCountry(countryById.data);

    }
    getCountryById();
  }, [])

  useEffect(() => {
    if (country.length > 0 && country[0]?.borders) {
      const filterBorders = dataBorders(country[0].borders);
      setBorders(filterBorders);
    }
    setCarga(true)
  }, [country, countries])

  const dataBorders = (borders) => countries.filter(country => borders.includes(country.cca3))



  return (
    <div className='containerDetail'>
      <div className='btnBack'>
        <Link to="/" className='btn'>
          <FontAwesomeIcon icon={faArrowLeft} />
          <p className='btnText'>
            Back
          </p>
        </Link>
      </div>
      {
        country.map(item => {
          return (
            <div key={item.ccn3} className='containerDescription'>
              <div className='divImg'>
                <img className='flag' src={item.flags.svg} alt="flag" />
              </div>
              <div className='countryDescription'>
                <h2>{item.name.common}</h2>
                <div className='countryText'>
                  <div>
                    <p><b>Native name: </b>  {
                      Object.values(item.name.nativeName).at(-1)
                        ?.common
                    }</p>
                    <p><b> Population: </b> {item.population}</p>
                    <p> <b>Region: </b> {item.region}</p>
                    <p><b>Sub Region: </b>{item.subregion}</p>
                    <p><b>Capital: </b> {item.capital}</p>
                  </div>
                  <div>
                    <p><b>Top Level Domain:</b> {item.tld}</p>
                    <p><b>Currencies: </b>
                      {Object.values(item.currencies)[0].name}
                    </p>
                    <p><b>Languages: </b>
                      {Object.values(item.languages).sort().join(", ")}
                    </p>
                  </div>
                </div>

                <div className='itemBorders'>
                  <p><b>Boder countries: &nbsp; </b></p>
                  {
                    carga === true ? (
                      borders.length > 0 ? borders.map(item =>
                      (
                        <div key={item.ccn3} className="borderStyle">
                          {item.name.common}{" "}
                        </div>
                      )
                      ) : (<p>No se reconocen paises vecinos</p>)
                    ) : (<p>Loading...</p>)
                  }
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default CountryDetail