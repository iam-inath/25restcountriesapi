import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center justify-center h-screen dark:bg-veryDarkBlueBg dark:text-white bg-veryLightGray text-veryDarkBlueTxt'>
      <h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
      <p className='mt-2 text-lg'>
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate('/')}
        className='flex items-center gap-2 px-3 py-1 mt-4 bg-white border rounded dark:text-white dark:border-none dark:bg-darkBlue shadow-boxShadowThree'
      >
        <IoMdArrowBack /> Back to Home
      </button>
    </div>
  )
}

export default NotFound
