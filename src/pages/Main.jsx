import CountryList from '../components/CountryList'
import CountryDetails from '../components/CountryDetails'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useState, Fragment, useEffect } from 'react'

export default function Main() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<CountryList />} />
          <Route path='/details' element={<CountryDetails />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}
