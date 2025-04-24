
import useData from "./useData"
import { Genre } from "./useGenres"

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


const useGames = (selectedGenre: Genre | null ) => {
  return useData<Game>("/games", { params: { genres: selectedGenre?.id }}, [selectedGenre?.id])

}

export default useGames