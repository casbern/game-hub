import bullsEye from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react'


interface Props {
  rating: number
}

const Emoji = ({rating}: Props) => {
  if (rating < 3) return null

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', title: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'thumbs up', title: 'thumbs up', boxSize: '25px' },
    5: { src: bullsEye, alt: 'bulls eye', title: 'bulls eye', boxSize: '35px' },
  }
  
  return (
    <Image {...emojiMap[rating]} marginTop={1}/>
  )
}

export default Emoji