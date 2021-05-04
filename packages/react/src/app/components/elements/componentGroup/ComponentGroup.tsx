import { Box, BoxProps } from "@chakra-ui/layout";
import StatusifyComponentGroup from "@statusify/core/dist/Component/ComponentGroup";
import { ComponentGroupProvider } from "../../../contexts/ComponentGroupContext";
import ComponentGroupBody from "./ComponentGroupBody";
import ComponentGroupHeader from "./ComponentGroupHeader";

export interface ComponentGroupProps extends BoxProps {
  group: StatusifyComponentGroup
}

export default function ComponentGroup({ group, ...props }: ComponentGroupProps) {
  return (
    <ComponentGroupProvider group={group}>
      <Box bg="gray.900" rounded="md" shadow="lg" {...props}>
        <ComponentGroupHeader />
        <ComponentGroupBody />
      </Box>
    </ComponentGroupProvider>
  )
}