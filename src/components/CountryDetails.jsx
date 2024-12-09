import { IoMdArrowBack } from 'react-icons/io'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Weather from './Weather'
import ExchangeRate from './ExchangeRate'
import LocalTime from './LocalTime'

function CountryDetails() {
  const location = useLocation()
  const navigate = useNavigate()
  const { country, countries } = location.state || {}

  if (!country) {
    return null
  }

  const getBorderCountryName = (code) => {
    const borderCountry = countries.find((c) => c.cca3 === code)
    return borderCountry ? borderCountry.name.common : code
  }

  const handleBorderCountryClick = (border) => {
    const borderCountry = countries.find((c) => c.cca3 === border)
    navigate('/details', { state: { country: borderCountry, countries } })
  }

  return (
    <div className='min-h-screen pt-2 pb-10 mt-20 dark:text-white bg-veryLightGray padding-x dark:bg-veryDarkBlueBg'>
      <div id='details' className='min-h-full'>
        <Link
          to='/'
          className='flex items-center justify-start gap-2 px-3 py-1 mt-20 mb-20 text-center bg-white border rounded dark:text-white dark:border-none dark:bg-darkBlue w-28 shadow-boxShadowThree'
        >
          <IoMdArrowBack /> Back
        </Link>
        <div className='flex gap-24 max-sm:gap-10 max-md:flex-col'>
          <img
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            className='bg-cover sm:h-72 md:w-1/3 sm:w-144'
          />
          <div className='py-3'>
            <h2 className='text-2xl font-bold sm:text-3xl'>
              {country.name.common}
            </h2>
            <div className='flex my-3 mt-10 max-lg:gap-6 lg:gap-24 dark:text-white dark:bg-veryDarkBlueBg max-lg:flex-col'>
              <div>
                <p className='my-2'>
                  <span className='font-semibold'>Native Name:</span>{' '}
                  {country.name.nativeName?.official || country.name.common}
                </p>
                <p className='my-2'>
                  <span className='font-semibold'>Population:</span>{' '}
                  {country.population.toLocaleString('de-DE')}
                </p>
                <p className='my-2'>
                  <span className='font-semibold'>Region:</span>{' '}
                  {country.region}
                </p>
                <p className='my-2'>
                  <span className='font-semibold'>Subregion:</span>{' '}
                  {country.subregion}
                </p>
                <p className='my-2'>
                  <span className='font-semibold'>Area:</span>{' '}
                  {country.area.toLocaleString('de-DE')} sq. Km
                </p>
                <p className='my-2'>
                  <span className='font-semibold'>Capital:</span>{' '}
                  {country.capital}
                </p>
              </div>
              <div>
                <p className='my-2'>
                  <span className='font-semibold'>Top Level Domain:</span>{' '}
                  {country.tld}
                </p>
                <p className='my-2'>
                  <span className='font-semibold'>
                    Language
                    {Object.keys(country.languages || {}).length > 1 ? 's' : ''}
                    :
                  </span>{' '}
                  {Object.values(country.languages || {}).join(', ')}
                </p>
                <p className='my-2'>
                  <span className='font-semibold'>Currencies:</span>{' '}
                  {Object.values(country.currencies || {})
                    .map((currency) => currency.name)
                    .join(', ')}
                </p>
                <p className='flex gap-1 my-2'>
                  <span className='font-semibold'>Exchange Rate:</span>
                  <ExchangeRate currency={Object.keys(country.currencies)[0]} />
                </p>
                <p className='flex gap-1 my-2'>
                  <span className='font-semibold'>Local Time:</span>
                  <LocalTime capital={country.capital} />
                </p>
                <p className='flex gap-1 my-2'>
                  <span className='font-semibold'>
                    Weather in {country.capital}:
                  </span>
                  <Weather city={country.capital} />
                </p>
              </div>
            </div>
            <div className='flex flex-wrap items-center justify-start gap-1 mt-20 dark:text-white dark:bg-veryDarkBlueBg'>
              {country.borders && (
                <p className='my-2'>
                  <span className='font-semibold'>
                    Border Countries ({country.borders.length}):
                  </span>
                </p>
              )}
              {country.borders ? (
                country.borders.map((border) => (
                  <div
                    key={border}
                    className='flex flex-wrap px-4 py-1 bg-white rounded cursor-pointer hover:text-white hover:bg-veryDarkBlueBg dark:hover:bg-darkGray dark:text-white dark:bg-darkBlue'
                    onClick={() => handleBorderCountryClick(border)}
                  >
                    {getBorderCountryName(border)}
                  </div>
                ))
              ) : (
                <div className='font-semibold'>No Border Countries</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails
