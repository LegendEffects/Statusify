import Component from "../component/Component";
import { Collapse } from "@chakra-ui/transition";
import { Stack } from "@chakra-ui/layout";
import { useComponentGroup } from "../../../contexts/ComponentGroupContext"

export default function ComponentGroupBody() {
  const [{ group, isAnonymous, isCollapsible, collapsed }] = useComponentGroup();

  return (
    <Collapse in={!isCollapsible || !collapsed}>
      <Stack padding={4} pt={(!isAnonymous || isCollapsible) ? 2 : undefined} spacing={4}>
        { group.components.map((component, i) => <Component key={i} component={component} />) }
      </Stack>
    </Collapse>
  )
}