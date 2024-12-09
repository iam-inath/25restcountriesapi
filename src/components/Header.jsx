import { MdBedtime } from 'react-icons/md'
import React, { useState, useEffect } from 'react'

function Header() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      document
        .getElementById('theme-color-dark')
        .setAttribute('content', 'hsl(200, 15%, 8%)')
      document
        .getElementById('theme-color-light')
        .setAttribute('content', 'hsl(200, 15%, 8%)')
    } else {
      document.documentElement.classList.remove('dark')
      document
        .getElementById('theme-color-dark')
        .setAttribute('content', 'hsl(0, 0%, 98%)')
      document
        .getElementById('theme-color-light')
        .setAttribute('content', 'hsl(0, 0%, 98%)')
    }

    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className='fixed top-0 z-50 flex flex-wrap items-center justify-between w-full h-20 bg-white dark:bg-veryDarkBlueBg dark:text-white text-veryDarkBlueTxt padding-x dark:shadow-darkShadowThree shadow-lightShadowThree'>
      <div>
        <h2 className='text-xl font-semibold max-sm:text-lg'>
          Where in the world?
        </h2>
      </div>
      <a
        onClick={() => setIsDark(!isDark)}
        className='flex items-center justify-end gap-2 cursor-pointer max-sm:text-sm'
      >
        <MdBedtime />
        <h2>Dark Mode</h2>
      </a>
    </div>
  )
}

export default Header
