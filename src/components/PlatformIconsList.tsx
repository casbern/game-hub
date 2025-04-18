import { Plataform } from "@/hooks/useGames"
import { HStack, Icon } from "@chakra-ui/react"
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { IconType } from "react-icons"

interface Props {
  platforms: Plataform[]
}

export const PlatformIconsList = ( {platforms}: Props ) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    web: BsGlobe
  }

  return (
    <HStack marginY={'10px'} spacing={2}>
      {
        platforms.map( (platform) => (
          <Icon as={iconMap[platform.slug]} color="gray.500"/>
        ))
      }
    </HStack>
  )
}
