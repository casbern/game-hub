import { Game } from "@/hooks/useGames"
import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { PlatformIconsList } from "./PlatformIconsList"

interface Props {
  game: Game
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}/>
      <CardBody> 
        <Heading fontSize='2xl'>{game.name}</Heading>
        <PlatformIconsList platforms={game.parent_platforms.map( p => p.platform )} />
      </CardBody>
    </Card>
  )
}
