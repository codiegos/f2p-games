import React from 'react'
// https://www.freetogame.com/api-doc
import { GENRE_TAGS } from '../utils/genreTags'
import MultiCheck from './MultiCheck'
function Filters () {
  return (
    <section className='flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        <label htmlFor=''>Plataform: </label>
        <select id='' className='outline-none p-1.5 rounded-md bg-secondary focus:ring-1 ring-primary'>
          <option value='pc'>PC</option>
          <option value='browser'>BROWSER</option>
        </select>
      </div>

      <MultiCheck genreTags={GENRE_TAGS} />
    </section>
  )
}

export default Filters
