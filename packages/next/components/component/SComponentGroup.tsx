import { Box, Collapse, Flex, Icon, SlideFade, Stack, Text, Tooltip } from "@chakra-ui/react"
import ComponentGroup from "@statusify/core/dist/Component/ComponentGroup"
import Severity from "@statusify/core/dist/Severity/Severity"
import { useContext, useEffect, useState } from "react"
import { AiOutlineMinus, AiOutlinePlus, AiOutlineQuestionCircle } from "react-icons/ai"
import StatusifyContext from "../../StatusifyContext"
import SComponent from "./SComponent"

export interface ComponentGroupProps {
  group: ComponentGroup
}

export const SComponentGroup = ({group, ...props}: ComponentGroupProps) => {
  const [isCollapsed, setCollapsed] = useState(false)
  const [severity, setSeverity] = useState<Severity>(null)

  const statusify = useContext(StatusifyContext)

  useEffect(() => {
    statusify.getSeverityForGroup(group).then(setSeverity);
  }, []);

  return (
    <Box bg="gray.900" rounded="md" shadow="lg">
      <Flex justifyContent="space-between" px="2rem" py="1rem" alignItems="center" cursor="pointer" onClick={() => setCollapsed(!isCollapsed)}>
        <Flex alignItems="center">
          <Text fontWeight="bold" marginRight=".5rem">{group.name}</Text>
          {group.description && <Tooltip shouldWrapChildren label={group.description}>
            <AiOutlineQuestionCircle />
          </Tooltip>}
        </Flex>
        
        <Flex alignItems="center">

          <SlideFade in={isCollapsed}>
            <Text marginRight=".75rem" color="green.400">{severity && severity.name}</Text>
          </SlideFade>

          <Icon as={isCollapsed ? AiOutlinePlus : AiOutlineMinus} />
        </Flex>
      </Flex>

      <Collapse in={!isCollapsed}>
        <Stack padding="1rem" paddingTop=".5rem" spacing={5}>
          {group.components.map((component, i) => <SComponent key={i} component={component} />)}
        </Stack>
      </Collapse>
    </Box>
  )
}

export default SComponentGroup