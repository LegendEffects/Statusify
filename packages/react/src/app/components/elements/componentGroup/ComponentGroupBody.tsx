import { Stack } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import { useComponentGroup } from "../../../contexts/ComponentGroupContext"
import Component from "../component/Component";

export default function ComponentGroupBody() {
  const [ { group, collapsed } ] = useComponentGroup();

  return (
    <Collapse in={!collapsed}>
      <Stack padding={4} pt={2} spacing={4}>
        { group.components.map((component, i) => <Component key={i} component={component} />) }
      </Stack>
    </Collapse>
  )
}