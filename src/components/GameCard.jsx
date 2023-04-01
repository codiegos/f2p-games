import React from 'react'
function GameCard ({ games }) {
  return (
    <ul className='grid place-items-center place-content-center sm:grid-cols-2 xl:grid-cols-3 gap-12 pt-12'>
      {
        games.map(({ id, thumbnail, title, genre }) => (
          <li key={id} className='flex flex-col justify-center items-center ring-1 ring-primary'>
            <img src={thumbnail} alt='' className='' />
            <h5>{title}</h5>
            <p>{genre}</p>
          </li>
        ))
      }
    </ul>
  )
}

export default GameCard
