import { Box, BoxProps } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import dayjs from "dayjs";
import useSeverityTicks from "../../../../../hooks/useSeverityTicks";
import { useLaminar } from "../../../../../contexts/LaminarContext";

const TICK_VIEWBOXES = [
  {width: 1200, box: "0 0 448 40", days: 90},
  {width: 900, box: "0 0 298 40", days: 60},
  {width: 0, box: "0 0 148 40", days: 30}
];

const TickRectStyle: BoxProps['sx'] = {
  height: '20px',
  width: '3px',
  transition: 'all .1s ease',
  transform: 'scaleY(1)',
  transformOrigin: 'center center',

  '&.hvr-1': {
    transform: 'scaleY(1.4)'
  },
  '&.hvr-2': {
    transform: 'scaleY(1.2)'
  },
  '&.hvr-3': {
    transform: 'scaleY(1.1)'
  },
};

interface CurrentTick {
  index: number;
  element: HTMLElement;
}

export default function ComponentTickChart() {
  const { severityColors } = useLaminar();
  const [ viewbox, setViewbox ] = React.useState(TICK_VIEWBOXES[0]);
  const [ isFocused, setIsFocused ] = React.useState(false);
  const [ currentTick, setCurrentTick ] = React.useState<CurrentTick | undefined>(undefined);
  const svgContainerRef = React.createRef<HTMLDivElement>();

  const range = React.useMemo(() => {
    return {
      start: dayjs().subtract(viewbox.days, 'days').startOf('day').toDate(),
      end: new Date()
    }
  }, [ viewbox ]);

  const ticks = useSeverityTicks(range);

  // Hover Effect
  const clearHoverEffect = () => {
    if(!svgContainerRef) return;
    const svgRef = svgContainerRef.current?.firstChild as HTMLElement;

    for(let i = 0; i < svgRef?.children.length; i++) {
      svgRef.children[i].classList.remove('hvr-1', 'hvr-2', 'hvr-3');     
    }
  }

  const mouseEnter = (event: React.MouseEvent<SVGRectElement, MouseEvent>, i: number) => {
    clearHoverEffect();

    event.currentTarget.classList.add('hvr-1');

    event.currentTarget.previousElementSibling?.classList.add('hvr-2')
    event.currentTarget.previousElementSibling?.previousElementSibling?.classList.add('hvr-3')
    
    event.currentTarget.nextElementSibling?.classList.add('hvr-2')
    event.currentTarget.nextElementSibling?.nextElementSibling?.classList.add('hvr-3')

    // Set as last tick
    setCurrentTick({
      index: i,
      element: event.currentTarget as unknown as HTMLElement
    });
  }
  
  // Handle Resizing
  React.useEffect(() => {
    const handleResize = () => {
      setViewbox(TICK_VIEWBOXES.find(v => window.innerWidth >= v.width) || TICK_VIEWBOXES[0]);
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  // Clear Effects on Unfocus
  React.useEffect(() => {
    if(isFocused === false) {
      clearHoverEffect();
    }
  }, [ isFocused ]);

  return (
    <Box
      display="flex"
      align="center"
      w="full"
      h="40px"
      viewBox={viewbox.box}
      onMouseEnter={() => { setIsFocused(true)  }}
      onMouseLeave={() => { setIsFocused(false) }}
      ref={svgContainerRef}
    >
      <Box 
        as="svg"
        w="100%"
        h="40px" 
        preserveAspectRatio="none"
        viewBox={viewbox.box}
        >
          {
            ticks.map((tick, i) => (
              <Box
                key={i}
                as="rect"
                sx={TickRectStyle}
                fill={`${severityColors[tick.severity.id]}.400`}
                x={5 * i}
                y="10"
                rx="2px"
                onMouseEnter={((e: any) => {
                  mouseEnter(e, i)
                }) as any}
                />
            ))
          }
      </Box>
    </Box>
  )
}