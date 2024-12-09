import axios from 'axios'
import React, { useState, useEffect } from 'react'

const API_KEY = import.meta.env.VITE_EXCHANGE_RATES_API_KEY

function ExchangeRate({ currency }) {
  const [exchangeRate, setExchangeRate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchExchangeRate() {
      setLoading(true)
      setError(null)
      try {
        const apiUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/USD/${currency}`
        const response = await axios.get(apiUrl)
        console.log('API Response:', response.data)
        if (response.data.result === 'success') {
          setExchangeRate(response.data)
        } else {
          setError('Failed to fetch exchange rate.')
        }
      } catch (error) {
        console.error('Error fetching exchange rate data:', error)
        setError('Failed to fetch exchange rate.')
      } finally {
        setLoading(false)
      }
    }

    if (currency) {
      fetchExchangeRate()
    }
  }, [currency])

  if (loading) return <div>Loading exchange rates...</div>
  if (error) return <div>{error}</div>
  if (!exchangeRate) return <div>Exchange rate not available.</div>

  return (
    <div>
      <p>
        1 USD = {exchangeRate.conversion_rate} {currency}
      </p>
    </div>
  )
}

export default ExchangeRate
