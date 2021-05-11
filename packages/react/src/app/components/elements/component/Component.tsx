import StatusifyComponent from "@statusify/core/dist/Component/Component";
import ComponentHeader from "./ComponentHeader";
import { ComponentProvider } from "../../../contexts/ComponentContext";
import { Flex } from "@chakra-ui/layout";
import ComponentTickChart from "./metrics/tickChart/ComponentTickChart";
import ComponentLatencyGraph from "./metrics/latency/ComponentLatencyGraph";
import useComponentInfo from "../../../hooks/useComponentInfo";

export interface ComponentProps {
  component: StatusifyComponent;
}

export default function Component({ component }: ComponentProps) {
  const info = useComponentInfo(component);

  return (
    <ComponentProvider component={component}>
      <Flex
        direction="column"
        bg="gray.800"
        rounded="md"
        shadow="md"
        >
          <Flex
            direction="row"
            align="center"
            flexWrap={[ 'wrap', 'nowrap' ]}
            padding={4}
            >
              <ComponentHeader />
              <ComponentTickChart />
          </Flex>
          
          {info.hasLatency && <ComponentLatencyGraph />}
      </Flex>
    </ComponentProvider>
  )
}