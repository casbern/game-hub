
import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '@/hooks/useGames'
import { GameCard } from './GameCard'
import  GameCardSkeleton  from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'

export const GameGrid = () => {
  const { data, error, loading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]
  
  return (
    <>
    {
      error && <Text>{error}</Text>
    }
    <SimpleGrid columns={ {sm: 1, md: 2, xl: 3, "2xl": 4} } padding={10} spacing={3} >
      
      {
        loading && skeletons.map( skeleton => (
          <GameCardContainer>
            <GameCardSkeleton key={skeleton}/>
          </GameCardContainer>
        ))
      }

      {
        data.map( game => (
          <GameCardContainer> 
            <GameCard key={game.id} game={game}/>
          </GameCardContainer>
            
        ))
      }
    </SimpleGrid>
    </>
  )
}
