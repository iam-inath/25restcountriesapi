import React from 'react'
import { useNavigate } from 'react-router-dom'

function CountryCard({ countries, fullCountries }) {
  const navigate = useNavigate()

  function handleClick(country) {
    navigate('/details', { state: { country, countries: fullCountries } })
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <ul className='flex flex-wrap justify-center gap-20 md:flex-row'>
        {countries.map((country) => (
          <li key={country.cca3} className='m-auto '>
            <div
              className='flex flex-col w-auto cursor-pointer rounded-mc max-sm:w-full h-80 border-1 bg-darkGray border-darkBlue'
              onClick={() => handleClick(country)}
            >
              <img
                src={country.flags.png}
                alt='country flag'
                className='h-40 bg-cover max-sm:w-96 w-72'
              />
              <div className='h-40 p-4 bg-white max-sm:w-96 w-72 dark:text-white dark:bg-darkBlue'>
                <h3 className='mb-3 text-xl font-bold'>
                  {country.name.common}
                </h3>
                <p>
                  <span className='font-semibold'>Population:</span>{' '}
                  {country.population.toLocaleString('de-DE')}
                </p>
                <p>
                  <span className='font-semibold'>Region:</span>{' '}
                  {country.region}
                </p>
                <p>
                  <span className='font-semibold'>Capital:</span>{' '}
                  {country.capital}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CountryCard
