import { Box, BoxProps } from "@chakra-ui/layout";

import ComponentGroupBody from "./ComponentGroupBody";
import ComponentGroupHeader from "./ComponentGroupHeader";
import { ComponentGroupProvider, useComponentGroup } from "../../../contexts/ComponentGroupContext";
import StatusifyComponentGroup from "@statusify/core/dist/Component/ComponentGroup";

export interface ComponentGroupProps extends BoxProps {
  group: StatusifyComponentGroup
}

export const ComponentGroupDisplay: React.FC = ({ ...props }) => {
  const [{ isCollapsible, isAnonymous }] = useComponentGroup();

  return (
    <Box bg="gray.900" rounded="md" shadow="lg" {...props}>
      {(isCollapsible || !isAnonymous) && <ComponentGroupHeader />}
      <ComponentGroupBody />
    </Box>
  )
}

export default function ComponentGroup({ group, ...props }: ComponentGroupProps) {
  return (
    <ComponentGroupProvider group={group}>
      <ComponentGroupDisplay {...props} />
    </ComponentGroupProvider>
  )
}