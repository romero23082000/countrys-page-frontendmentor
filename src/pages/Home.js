import React, { useState } from 'react'
import Countrys from '../components/Countrys/Countrys';
import Search from '../components/search/Search';
import InputSelect from '../components/select/InputSelect';


const Home = (props) => {

  const { carga, countries, countriesInitial } = props

  const [selectFilter, setSelectFilter] = useState("")
  const [inputSearch, setInputSearch] = useState("")


  const handleSearch = (e) => {
    setInputSearch(e.target.value)
  }
  const handleSelect = (e) => {
    setSelectFilter(e.target.value)
  }

  let dataFilter = !selectFilter ?
    countries : countries.filter(item => item.region === selectFilter)

  return (
    <div className='content'>
      <div className='inputs'>
        <Search handleSearch={handleSearch} inputSearch={inputSearch} />
        <InputSelect handleSelect={handleSelect} selectFilter={selectFilter} />
      </div>
      <div className='cards'>

        {
          !selectFilter && !inputSearch &&
          countriesInitial.map((item) => {
            return (
              <Countrys item={item} key={item.ccn3} />
            )
          })
        }
        {
          (selectFilter || inputSearch) &&
            dataFilter
              .filter((item) =>
                item.name.common.toLowerCase().includes(inputSearch.toLowerCase())
              ).length > 0 ? (
            dataFilter
              .filter((item) =>
                item.name.common.toLowerCase().includes(inputSearch.toLowerCase())
              )
              .map((item) => {
                return (
                  <Countrys item={item} key={item.ccn3} />
                )
              })
          ) : (
            carga === true ? (<p className='no-data'>Loading...</p>) :
              (dataFilter
                .filter((item) =>
                  item.name.common.toLowerCase().includes(inputSearch.toLowerCase())
                ).length === 0 &&
                <p className='no-data'>Sin resultados para {inputSearch}</p>)
          )
        }
      </div>
    </div>
  )
}

export default Home