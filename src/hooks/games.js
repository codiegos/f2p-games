import { useEffect, useState } from 'react'
import { getGames } from '../services/games'
import mockGames from '../mocks/games.json'

export function useGames ({ filters }) {
  console.log(filters)
  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchGames = async () => {
      setIsLoading(true)
      try {
        const games = await getGames({ filters })
        console.log(games)
        setGames(mockGames)
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
