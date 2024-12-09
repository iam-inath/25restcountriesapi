import React, { useState, useEffect } from 'react'
import { IoIosSearch } from 'react-icons/io'
import CountryCard from './CountryCard'

function CountryList() {
  const [countries, setCountries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [region, setRegion] = useState('all')
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all', { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setCountries(data)
      })
      .catch((error) => {
        setError(error.message)
        console.error('Error fetching data:', error)
      })
  }, [])

  const handleSearchChange = (e) => {
    const sanitizedInput = e.target.value.replace(/[^a-zA-Z\s]/g, '')
    setSearchQuery(sanitizedInput)
  }

  const handleRegionChange = (e) => {
    setRegion(e.target.value)
  }

  const filteredCountries = countries
    .filter((country) => {
      if (region === 'all') return true
      return country.region.toLowerCase() === region.toLowerCase()
    })
    .filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    })

  return (
    <div className='pt-1 mt-20 bg-veryLightGray text-veryDarkBlueTxt padding-x dark:bg-veryDarkBlueBg'>
      {error ? (
        <div className='text-red-500'>Error fetching data: {error}</div>
      ) : (
        <>
          <div className='flex flex-wrap items-center justify-between my-10'>
            <div className='flex pl-4 items-center justify-between h-[45px] gap-3 max-md:mb-3 bg-white rounded dark:text-white dark:bg-darkBlue max-sm:w-full placeholder:text-sm md:w-1/4'>
              <IoIosSearch className='h-full w-[5%]' />
              <input
                type='text'
                value={searchQuery}
                onChange={handleSearchChange}
                className='border-none outline-none text-darkGray placeholder:text-sm dark:bg-darkBlue dark:text-white px-3 focus:border-none active:border-none h-full w-[95%]'
                placeholder='Search for a country...'
              />
            </div>

            <div className='flex text-sm max-md:mt-6 max-sm:w-1/2 '>
              <select
                value={region}
                onChange={handleRegionChange}
                name={'continent'}
                className='w-full p-3 rounded-md dark:text-white dark:bg-darkBlue'
              >
                <option value='all'>Filter by Region</option>
                <option value='africa'>Africa</option>
                <option value='americas'>America</option>
                <option value='asia'>Asia</option>
                <option value='europe'>Europe</option>
                <option value='oceania'>Oceania</option>
              </select>
            </div>
          </div>
          <div className=''>
            <CountryCard
              countries={filteredCountries}
              fullCountries={countries}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default CountryList
