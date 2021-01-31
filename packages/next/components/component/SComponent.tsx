import { Flex, Text } from "@chakra-ui/react"
import ComponentTickChart from "../charts/ComponentTickChart"

export interface ComponentProps {
  name: string
}

export const Component = ({name, ...props}: ComponentProps) => {
  return (
    <Flex bg="gray.800" rounded="md" shadow="md" padding="1rem" direction="row" alignItems="center" flexWrap={["wrap", "nowrap"]}>
      <Flex width={["100%", "auto"]} direction="row" justifyContent={["space-between", "flex-start"]}>
        <Text minWidth="150px" wordBreak="keep-all" whiteSpace="nowrap" marginRight="1rem">{name}</Text>
        <Text color="green.400" marginRight="1rem">100.00%</Text>
      </Flex>
      <ComponentTickChart></ComponentTickChart>
    </Flex>

  )
}

export default Component