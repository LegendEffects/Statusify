import { Box, Collapse, Flex, Icon, SlideFade, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import SComponent from "./SComponent"

export interface ComponentGroupProps {

}

export const ComponentGroup = ({...props}: ComponentGroupProps) => {
  const [isCollapsed, setCollapsed] = useState(false)

  return (
    <Box bg="gray.900" rounded="md" shadow="lg">
      <Flex justifyContent="space-between" px="2rem" py="1rem" alignItems="center" cursor="pointer" onClick={() => setCollapsed(!isCollapsed)}>
        <Text fontWeight="bold">Component Group</Text>
        
        <Flex alignItems="center">

          <SlideFade in={isCollapsed}>
            <Text marginRight=".75rem" color="green.400">Operational</Text>
          </SlideFade>

          <Icon as={isCollapsed ? AiOutlinePlus : AiOutlineMinus} />
        </Flex>
      </Flex>

      <Collapse in={!isCollapsed}>
        <Stack padding="1rem" paddingTop=".5rem" spacing={5}>
          <SComponent />
          <SComponent />
        </Stack>
      </Collapse>
    </Box>
  )
}

export default ComponentGroup