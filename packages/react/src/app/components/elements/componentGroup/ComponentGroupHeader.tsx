import { Box, Flex, Text } from "@chakra-ui/layout";

import { AiOutlineQuestionCircle } from "react-icons/ai"
import ComponentGroupHeaderToggleIndicator from "./ComponentGroupHeaderToggleIndicator";
import { SlideFade } from "@chakra-ui/transition";
import { Tooltip } from "@chakra-ui/tooltip";
import { useComponentGroup } from "../../../contexts/ComponentGroupContext"
import useSeverity from "../../../hooks/useSeverity";
import useSeverityColor from "../../../hooks/useSeverityColor";
import { useTranslation } from "react-i18next";

export default function ComponentGroupHeader() {
  const { t } = useTranslation(); 
  const [{ group, collapsed, isAnonymous, isCollapsible }, dispatch ] = useComponentGroup();
  const severity = useSeverity(group);
  const severityColor = useSeverityColor(severity);

  return (
    <Flex
      justify="space-between"
      align="center"
      px={8}
      py={4}
      cursor={isCollapsible && 'pointer'}
      onClick={() => { dispatch({type: 'toggle'}) }}
    >
      {!isAnonymous ? (
        <Flex align="center">

          <Text fontWeight="bold" size="md">
            {group.name}
          </Text>

          {group.description && (
            <Box ml={2}>
              <Tooltip shouldWrapChildren label={group.description}>
                <AiOutlineQuestionCircle />
              </Tooltip>
            </Box>
          )}
        </Flex>
      ) : (<div />)}

      <Flex align="center">
        <SlideFade in={isCollapsible && collapsed}>
          {severity && (
            <Tooltip label={t('components.group.overallStatusTooltip')}>
              <Text color={`${severityColor}.400`}>
                {severity.name}
              </Text>
            </Tooltip>
          )}
        </SlideFade>
        
        {isCollapsible && (
          <ComponentGroupHeaderToggleIndicator 
            ml={4} 
            collapsed={collapsed} 
            color="whiteAlpha.700"
            />
        )}
      </Flex>
    </Flex>
  )
}