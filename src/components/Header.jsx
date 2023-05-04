import React from 'react'
import Filters from './Filters'

function Header () {
  return (
    <header className='flex flex-col gap-6'>
      <h1 className='text-5xl text-center'>
        F<span className='text-primary'>2</span>P GAMES
        <span className='text-primary'> NOW!</span>
      </h1>
      <Filters />
    </header>
  )
}

export default Header
