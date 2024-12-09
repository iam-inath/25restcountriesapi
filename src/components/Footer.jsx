import React from 'react'

function Footer() {
  return (
    <div className='flex items-center justify-center w-full h-16 bg-veryLightGray dark:bg-veryDarkBlueBg dark:text-veryLightGray text-veryDarkBlueTxt'>
      <p className='text-sm'>
        Challenge by Frontend Mentor - Developed by{' '}
        <a
          href='https://katshi.dev'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Developer Portfolio'
          className='font-bold tracking-wide'
        >
          katshidev
        </a>
      </p>
    </div>
  )
}

export default Footer
