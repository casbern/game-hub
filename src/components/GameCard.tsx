import { Game } from "@/hooks/useGames"
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import { PlatformIconsList } from "./PlatformIconsList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "@/services/image-url"
import Emoji from "./Emoji"


interface Props {
  game: Game
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card height="100%"  borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)}/>
      <CardBody> 
        <HStack justifyContent="space-between" marginBottom="3">
          <PlatformIconsList platforms={game.parent_platforms.map( p => p.platform )} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{game.name} <Emoji rating={game.rating_top} /></Heading>
      </CardBody>
    </Card>
  )
}
