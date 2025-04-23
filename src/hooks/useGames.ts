
import useData from "./useData"

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


const useGames = () => {
  return useData<Game>("/games")

}

export default useGames