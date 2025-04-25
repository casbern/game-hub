import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
  onSelectSortOrder: (sortOrder: string) => void
  sortOrder: string
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {

  const sortOptions = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ]

  const currentSortOption = sortOptions.find(option => option.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: {currentSortOption?.label || "Relevance"}</MenuButton>
      <MenuList>
        {
          sortOptions.map(option => (
            <MenuItem onClick={() => onSelectSortOrder(option.value)} key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))  
        }
      </MenuList>
    </Menu>
  )
}

export default SortSelector