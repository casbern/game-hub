import useGenres, { Genre } from "@/hooks/useGenres"
import getCroppedImageUrl from "@/services/image-url"
import { HStack, Image, List, ListItem, Spinner, Button, Heading } from "@chakra-ui/react"

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}


const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {

  const { data, loading, error } = useGenres()

  console.log(data)

  if(error) return null

  if(loading) return <Spinner />

  return (
    <>
      <Heading fontSize='2xl' marginBottom='3'>Genres</Heading>
      <List>
        {data.map(genre => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image boxSize="32px" objectFit='cover' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
            
              <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={ () => onSelectGenre(genre) } fontSize="lg" variant="link">
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
    
  )
}

export default GenreList