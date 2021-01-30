import { Flex, Text } from "@chakra-ui/react"
import ComponentTickChart from "../charts/ComponentTickChart"

export interface ComponentProps {

}

export const Component = ({...props}: ComponentProps) => {
  return (
    <Flex bg="gray.800" rounded="md" shadow="md" padding="1rem" direction="row" alignItems="center">
      <Text wordBreak="keep-all" whiteSpace="nowrap" marginRight="1rem">Component Name</Text>
      <Text color="green.400" marginRight="1rem">100.00%</Text>
      <ComponentTickChart></ComponentTickChart>
    </Flex>

  )
}

export default Component