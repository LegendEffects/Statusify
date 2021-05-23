import { Box, Flex, Text, Tooltip } from "@chakra-ui/react"
import Component from "@statusify/core/dist/Component/Component"
import Severity from "@statusify/core/dist/Severity/Severity"
import { useContext, useEffect, useState } from "react"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import StatusifyContext from "../../StatusifyContext"
import ComponentTickChart from "../charts/ComponentTickChart"

export interface ComponentProps {
  component: Component
}

export const SComponent = ({component, ...props}: ComponentProps) => {
  const [severity, setSeverity] = useState<Severity>(null)

  const statusify = useContext(StatusifyContext)

  useEffect(() => {
    statusify.getSeverityForComponent(component).then(setSeverity)
  }, [])

  return (
    <Flex bg="gray.800" rounded="md" shadow="md" padding="1rem" direction="row" alignItems="center" flexWrap={["wrap", "nowrap"]}>
      <Flex width={["100%", "auto"]} direction="row" justifyContent={["space-between", "flex-start"]}>

        <Flex direction="row" alignItems="center" marginRight="1rem" minWidth="180px">
          <Text wordBreak="keep-all" whiteSpace="nowrap" marginRight=".5rem" minWidth="150px">
            {component.name}
          </Text>
          {component.description && <Tooltip shouldWrapChildren label={component.description}>
            <AiOutlineQuestionCircle />
          </Tooltip>}
          
        </Flex>

        <Tooltip label={severity && severity.name}>
          <Text color="green.400" marginRight="1rem">100.00%</Text>
        </Tooltip>

      </Flex>
      <ComponentTickChart></ComponentTickChart>
    </Flex>

  )
}

export default SComponent