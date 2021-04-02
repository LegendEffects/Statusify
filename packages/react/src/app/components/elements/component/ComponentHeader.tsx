import { Box, Flex, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { useComponent } from "../../../contexts/ComponentContext";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import useSeverityColor from "../../../hooks/useSeverityColor";
import useSeverity from "../../../hooks/useSeverity";

export default function ComponentHeader() {
  const component = useComponent();
  const severity = useSeverity(component);
  const severityColor = useSeverityColor(severity);

  return (
    <Flex 
      direction="row"
      width={['full', 'auto']}
      justify={['space-between', 'flex-start']}
      mr={[null, 8]}
      >
        <Flex direction="row" align="center" mr={4} minW="180px">
          <Text wordBreak="keep-all" whiteSpace="nowrap" mr={2} minW="150px">
            {component.name}
          </Text>

          {component.description && (
            <Box>
              <Tooltip shouldWrapChildren label={component.description}>
                <AiOutlineQuestionCircle />
              </Tooltip>
            </Box>
          )}
        </Flex>

        <Tooltip>
          <Text color={`${severityColor}.400`}>
            100%
          </Text>
        </Tooltip>
    </Flex>
  )
}