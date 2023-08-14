import React from 'react'
import { useGames } from '../hooks/games'
import { useFilters } from '../hooks/filters'

function GameCard () {
  const { filters } = useFilters()
  const { games, isLoading } = useGames({ filters })

  return !isLoading
    ? (
      <ul className='grid place-items-center place-content-center sm:grid-cols-2 xl:grid-cols-3 gap-12'>
        {games?.map(({ id, thumbnail, title, genre }) => (
          <li
            key={id}
            className='flex flex-col justify-center items-center ring-1 ring-primary bg-secondary'
          >
            <img
              src={thumbnail}
              alt={title}
            />
            <div className='w-5/6 text-center divide-y-2 py-2'>
              <h5>{title}</h5>
              <p>{genre}</p>
            </div>
          </li>
        ))}
      </ul>
      )
    : (
      <div className='flex items-center justify-center '>
        <div className='w-40 h-40 border-t-4 border-b-4 border-primary rounded-full animate-spin' />
      </div>
      )
}

export default GameCard
