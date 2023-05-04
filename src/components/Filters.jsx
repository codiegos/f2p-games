import React, { useId } from 'react'
import { GENRE_TAGS } from '../utils/genreTags'
import MultiCheck from './MultiCheck'
import { useFilters } from '../hooks/filters'

function Filters () {
  const plataformId = useId()
  const { setFilters } = useFilters()

  const handleChangePlatform = (event) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      platform: event.target.value

    }))
  }
  const handleTagChange = (event) => {
    const { checked, value } = event.target
    setFilters((prevFilter) => {
      if (checked) {
        return {
          ...prevFilter,
          tags: [...prevFilter.tags, value]
        }
      }
      const newTags = prevFilter.tags.filter(tag => tag !== value)
      console.log(newTags)
      return {
        ...prevFilter,
        tags: newTags
      }
    })
  }

  return (
    <section className='flex flex-col justify-around items-start gap-4 mx-auto sm:flex-row sm:mx-0'>
      <div className='flex items-center gap-4'>
        <label htmlFor={plataformId}>Plataform: </label>
        <select id={plataformId} className='outline-none p-1.5 rounded-md bg-secondary focus:ring-1 ring-primary' onChange={handleChangePlatform}>
          <option value='pc'>PC</option>
          <option value='browser'>BROWSER</option>
        </select>
      </div>

      <MultiCheck genreTags={GENRE_TAGS} onChange={handleTagChange} />
    </section>
  )
}

export default Filters
