import { useEffect, useState } from 'react'
import { getGames } from '../services/games'

export function useGames ({ filters }) {
  console.log(filters)
  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchGames = async () => {
      setIsLoading(true)
      try {
        const games = await getGames({ filters })
        setGames(games)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchGames()
  }, [filters])
  return { games, isLoading }
}
