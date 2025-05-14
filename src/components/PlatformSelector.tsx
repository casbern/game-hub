import { Button, Menu, MenuButton, MenuList, MenuItem, Spinner } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import { Platform } from "../hooks/useGames"

interface Props {
  onSelectedPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {

  const { data, error, isLoading } = usePlatforms()

  //If there is an error, do not show this instead of showing an errot to the user.
  if (error) return null

  if(isLoading) return <Spinner />

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || "Platforms"}</MenuButton>
      <MenuList>
        {
          data?.results.map( (platform) => (
            <MenuItem key={platform.id} onClick={ () => onSelectedPlatform(platform)}>{platform.name}</MenuItem>
          ))
        }
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector