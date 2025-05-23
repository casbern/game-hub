import { Badge } from "@chakra-ui/react"

interface Props {
  score: number
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : score > 50 ? "orange" : "red"

  return (
    <Badge fontSize={14} paddingX={2} borderRadius={4} colorScheme={color}>{ score }</Badge>
  )
}

export default CriticScore