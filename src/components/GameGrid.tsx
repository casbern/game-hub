
import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '@/hooks/useGames'
import { GameCard } from './GameCard'
import  GameCardSkeleton  from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'

import { GameQuery } from '@/App'

interface Props {
  gameQuery: GameQuery
  
}

export const GameGrid = ({ gameQuery }: Props ) => {
  const { data, error, isLoading } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6]

  if(error) return <Text>{error?.message}</Text>
  
  return (
    
    <SimpleGrid columns={ {sm: 1, md: 2, xl: 3, "2xl": 4} } paddingLeft={10} spacing={6} >
      
      {
        isLoading && skeletons.map( skeleton => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))
      }

      {
        data?.results.map( game => (
          <GameCardContainer key={game.id}> 
            <GameCard game={game}/>
          </GameCardContainer>
            
        ))
      }
    </SimpleGrid>
    
  )
}
