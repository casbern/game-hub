import { HStack, Image } from '@chakra-ui/react'
import Logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

export const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={10}>
      <Image src={Logo} boxSize='60px' />
      <ColorModeSwitch />
    </HStack>
  )
}
