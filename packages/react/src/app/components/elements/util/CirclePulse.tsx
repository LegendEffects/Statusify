import { Circle, SquareProps } from "@chakra-ui/layout";
import { ThemeTypings } from "@chakra-ui/styled-system";
import { keyframes } from "@chakra-ui/system";

export interface CirclePulseProps extends SquareProps {
  colorScheme: ThemeTypings["colorSchemes"] | (string & {})
  duration?: number
  frozen?: boolean
}

const pulseAnimation = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 0;
  }
`

export default function CirclePulse({ colorScheme, duration, frozen, ...props }: CirclePulseProps) {
  return (
    <Circle 
    bg={`${colorScheme}.500`} 
    {...props}
    >
      {!frozen && (
        <Circle 
          bg={`${colorScheme}.400`}
          size="full"
          animation={`${pulseAnimation} ${duration || 2}s infinite`}
          transitionTimingFunction="ease-out"
          />
      )}
    </Circle>
  )
}