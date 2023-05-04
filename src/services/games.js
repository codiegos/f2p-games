// https://www.freetogame.com/api-doc
const BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f2c0708bcamsh258e4513f44d6c8p1e79e7jsnd4196d0971b1',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
}
export async function getGames ({ filters }) {
  const { platform, tags } = filters
  const isTags = tags?.some(tag => tag)
  const newTags = isTags && tags.join('.')
  const url = isTags ? `${BASE_URL}/filter?tag=${newTags}&platform=${platform}` : `${BASE_URL}/games?platform=${platform}`

  try {
    const response = await fetch(url, options)
    const games = await response.json()
    return games
  } catch (error) {
    console.log(error)
  }
}
