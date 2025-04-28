import { HStack, Image } from '@chakra-ui/react'
import Logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={'space-between'} padding={10}>
      <Image src={Logo} boxSize='60px' />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  )
}
