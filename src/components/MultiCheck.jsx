import { useId } from 'react'

function MultiCheck ({ genreTags }) {
  const multiCheckId = useId()
  return (
    <div>
      <label className='bg-secondary focus:ring-1 outline-none focus:ring-primary rounded-md p-1.5 peer flex items-center' htmlFor={multiCheckId}>
        Tags
        <svg className='w-4 h-4 ml-3' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
        </svg>
      </label>
      <input type='checkbox' id={multiCheckId} className='peer' hidden />
      <div className='absolute bg-secondary rounded-md peer-checked:block' id='id1' hidden>
        <ul className='p-2.5 space-y-2 rounded-md overflow-y-auto max-h-96'>
          {genreTags.map((genre, i) => (
            <li className='flex items-center rounded hover:bg-blue-300 hover:text-gray-700' key={genre}>
              <input id={i} type='checkbox' className='w-4 h-4 mx-1' />
              <label htmlFor={i} className='w-full p-1'>{genre}</label>
            </li>
          ))}
          <button className='bg-red-500 '>hola</button>
        </ul>
      </div>
    </div>
  )
}

export default MultiCheck
