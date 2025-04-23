import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useEffect, useState } from "react"

export interface Plataform {
  id: number
  name: string
  slug: string
}
export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Plataform }[]
  metacritic: number
}

interface FetchGamesResponse {
  count: number
  results:  Game[]
}



const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then( res => {
        setGames(res.data.results)
        setLoading(false)
      })
      .catch(err => {
        if(err instanceof CanceledError) return
        setError(err.message)
        console.error('Error fetching games:', error)
        setLoading(false)
      })

      return () => { controller.abort() }
  }, [])

  return { games, error, loading }

}

export default useGames