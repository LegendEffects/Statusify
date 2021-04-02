import StatusifyComponentGroup from "@statusify/core/dist/Component/ComponentGroup";
import ComponentGroup from "../app/components/elements/componentGroup/ComponentGroup";
import DefaultLayout from "../app/components/layouts/DefaultLayout";
import { useStatusify } from "../app/contexts/StatusifyContext";
import React from "react";
import { Container, Stack } from "@chakra-ui/layout";

export default function Home() {
  const [groups, setGroups] = React.useState<StatusifyComponentGroup[]>([]);
  const statusify = useStatusify();

  React.useEffect(() => {
    statusify.getComponentGroups().then(setGroups);
  }, [statusify]);

  return (
    <DefaultLayout>
      <Container maxW="container.xl" mt={16}>
        <Stack spacing={4}>
          {groups.map((group, i) => <ComponentGroup key={i} group={group} />)}
        </Stack>
      </Container>
    </DefaultLayout>
  )
}