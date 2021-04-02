import StatusifyComponent from "@statusify/core/dist/Component/Component";
import ComponentHeader from "./ComponentHeader";
import { ComponentProvider } from "../../../contexts/ComponentContext";
import { Flex } from "@chakra-ui/layout";
import ComponentTickChart from "./metrics/tickChart/ComponentTickChart";

export interface ComponentProps {
  component: StatusifyComponent;
}

export default function Component({ component }: ComponentProps) {
  return (
    <ComponentProvider component={component}>
      <Flex
        bg="gray.800"
        rounded="md"
        shadow="md"
        direction="row"
        align="center"
        flexWrap={['wrap', 'nowrap']}
        padding={4}
      >
        <ComponentHeader />

        <ComponentTickChart />

        
      </Flex>
    </ComponentProvider>
  )
}