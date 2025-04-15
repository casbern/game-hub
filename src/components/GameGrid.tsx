
import { Text } from '@chakra-ui/react'
import useGames from '@/hooks/useGames'



export const GameGrid = () => {
  const { games, error } = useGames()
  
  return (
    <>
    {
      error && <Text>{error}</Text>
    }
    <ul>
      {
        games.map( game => (
          <li key={game.id}>
            <h3>{game.name}</h3>
          </li>
        ))
      }
    </ul>
    </>
  )
}
