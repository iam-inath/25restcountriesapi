import React, { useState, useEffect } from 'react'
import axios from 'axios'

function LocalTime({ capital }) {
  const [localTime, setLocalTime] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchLocalTime() {
      setLoading(true)
      setError(null)
      try {
        const response = await axios.get(
          `https://api.ipgeolocation.io/timezone?apiKey=${
            import.meta.env.VITE_LOCAL_TIME_API_KEY
          }&location=${capital}`
        )
        setLocalTime(response.data.date_time_txt)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching local time data:', error)
        setError('Failed to fetch local time.')
        setLoading(false)
      }
    }

    if (capital) {
      fetchLocalTime()
    }
  }, [capital])

  if (loading) return <div>Loading local time...</div>
  if (error) return <div>{error}</div>
  if (!localTime) return <div>Not available right now</div>

  return (
    <div>
      <p>{localTime}</p>
    </div>
  )
}

export default LocalTime
