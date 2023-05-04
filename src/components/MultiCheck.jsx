import { useEffect, useRef, useState } from 'react'
import { SelectDownIcon } from './Icons'
import { useFilters } from '../hooks/filters'

function MultiCheck ({ genreTags, onChange }) {
  const { filters } = useFilters()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className='bg-secondary focus:ring-1 outline-none focus:ring-primary rounded-md p-2 peer flex items-center'>
        GAME TAGS
        <SelectDownIcon />
      </button>
      {isOpen && (
        <ul className='absolute bg-secondary ring-1 ring-primary ring-inset p-2.5 space-y-2 rounded-md overflow-y-auto max-h-96 uppercase'>
          {genreTags.map((tag, i) => (
            <li className='flex items-center rounded hover:bg-blue-300 hover:text-gray-700' key={tag}>
              <input
                id={i}
                type='checkbox'
                checked={filters.tags.includes(tag)}
                value={tag}
                className='w-4 h-4 mx-1'
                onChange={onChange}
              />
              <label htmlFor={i} className='w-full p-1'>{tag}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MultiCheck
