import * as React from 'react'
import styled from "@emotion/styled";
import { Box, useTheme } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { usePopper } from 'react-popper';

export interface ComponentTickChartTooltipProps {
  referenceElement: Element
}

export const ComponentTickChartTooltip = ({referenceElement, ...props}: ComponentTickChartTooltipProps) => {
  const [popperRef, setPopperRef] = React.useState<HTMLElement>(null);
  const arrowRef = React.useRef(null);

  const offsetModifier = React.useMemo(
    () => ({
      name: 'offset',
      options: {
        offset: ({placement, reference, popper }) => {
          return [0, reference.y - referenceElement.parentElement.getBoundingClientRect().y]
        }
      }
    }),
    []
  )

  const { styles, attributes } = usePopper(referenceElement, popperRef, {
    modifiers: [ 
      {name: 'arrow', options: {element: arrowRef.current} },
      offsetModifier
    ]
  })


  return (
    <div ref={setPopperRef} style={styles.popper} {...attributes.popper}>
      Popper Element
      <div ref={arrowRef} style={styles.arrow} />
    </div>
  )
}

//
// Chart
//
export interface ComponentTickChartProps { }

const tickViewbox = [
  {width: 1200, box: "0 0 448 40", days: 90},
  {width: 900, box: "0 0 298 40", days: 60},
  {width: 0, box: "0 0 148 40", days: 30}
]

const TickRect = styled.rect`
  height: 20px;
  width: 3px;

  transition: all .15s ease;
  transform: scaleY(1);
  transform-origin: center center;

  &.hvr-1 {
    transform: scaleY(1.4); 
  }
  &.hvr-2 {
    transform: scaleY(1.2); 
  }
  &.hvr-3 {
    transform: scaleY(1.1); 
  }
`

export const ComponentTickChart = ({...props}: ComponentTickChartProps) => {  
  const [viewbox, setViewbox] = useState(tickViewbox[0]);
  const [isFocused, setFocused] = useState(false);
  const [lastTick, setLastTick] = useState<Element>(null)
  
  // Resizing
  const handleResize = () => {
    setViewbox(tickViewbox.find(v => window.innerWidth >= v.width) || tickViewbox[0])
  } 

  useEffect(() => {
    addEventListener('resize', handleResize)
    return () => removeEventListener('resize', handleResize)
  });

  // Lens Effect
  const cleanLenses = (el: HTMLElement) => {
    for (let i = 0; i < el.children.length; i++) {
      const element = el.children[i];
      element.classList.remove('hvr-1', 'hvr-2', 'hvr-3');
    }
  }

  const mouseEnter = (event: React.MouseEvent<SVGRectElement, MouseEvent>) => {
    cleanLenses(event.currentTarget.parentElement)

    event.currentTarget.classList.add('hvr-1');

    event.currentTarget.previousElementSibling?.classList.add('hvr-2')
    event.currentTarget.previousElementSibling?.previousElementSibling?.classList.add('hvr-3')
    
    event.currentTarget.nextElementSibling?.classList.add('hvr-2')
    event.currentTarget.nextElementSibling?.nextElementSibling?.classList.add('hvr-3')

    // Set as last tick
    setLastTick(event.currentTarget)
  }

  const mouseLeave = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    cleanLenses(event.currentTarget as unknown as HTMLElement)
    setLastTick(null)
    setFocused(false)
  }

  const theme = useTheme();

  return (
    <>
      <Box as="svg" w="100%" height="40px" preserveAspectRatio="none" viewBox={viewbox.box} onMouseEnter={() => setFocused(true)} onMouseLeave={mouseLeave}>
        {
          [...Array(viewbox.days)].map((e, i) => 
            <TickRect
              fill={theme.colors.green[400]}
              y="10"
              x={5 * i}
              key={i}
              rx="2px"
              
              onMouseEnter={mouseEnter}
            />
          )
        }
      </Box>
      
      {isFocused && lastTick !== null && <ComponentTickChartTooltip referenceElement={lastTick} />}

    </>
  )
}

export default ComponentTickChart;