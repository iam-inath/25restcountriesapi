import axios from 'axios'
import React, { useState, useEffect } from 'react'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

function Weather({ city }) {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true)
      setError(null)
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        )
        setWeather(response.data)
      } catch (error) {
        console.error('Error fetching weather data:', error)
        setError('Failed to fetch weather data.')
      } finally {
        setLoading(false)
      }
    }

    if (city) {
      fetchWeather()
    }
  }, [city])

  const getWeatherEmoji = (description) => {
    switch (description) {
      case 'clear sky':
        return '☀️'
      case 'few clouds':
        return '🌤️'
      case 'scattered clouds':
        return '☁️'
      case 'broken clouds':
        return '🌥️'
      case 'shower rain':
        return '🌧️'
      case 'rain':
        return '🌦️'
      case 'thunderstorm':
        return '⛈️'
      case 'snow':
        return '❄️'
      case 'mist':
        return '🌫️'
      default:
        return '🌫️'
    }
  }

  if (loading) return <div>Loading weather...</div>
  if (error) return <div>{error}</div>
  if (!weather) return <div>Weather data not available.</div>

  const { main, weather: weatherDetails, wind, sys } = weather
  const description = weatherDetails[0].description.toLowerCase()
  const emoji = getWeatherEmoji(description)
  console.log('Weather Description:', description)
  console.log('Weather Emoji:', emoji)

  return (
    <div className='flex flex-wrap gap-1'>
      <p>
        T°: {Math.round(main.temp - 273.15)}°C{emoji}
      </p>
      | <p>Wind🌬️: {wind.speed} m/s</p> |
      <p>Sunrise☀️: {new Date(sys.sunrise * 1000).toLocaleTimeString()}</p> |
      <p>Sunset🌥️: {new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
    </div>
  )
}

export default Weather
