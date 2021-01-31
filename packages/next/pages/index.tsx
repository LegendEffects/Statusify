import Head from 'next/head'
import { Flex, Box, Container, Heading, Text, Circle, Button, keyframes } from '@chakra-ui/react'
import { AiOutlineFullscreen } from 'react-icons/ai'
import ComponentGroup from '../components/component/ComponentGroup';

const pageWidth = '1140px';

const pulse = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 0;
  }
`

export default function Home() {
  return (
    <Flex height="100vh" direction="column">
      <Box bg="gray.900" width="100%" pt="2rem" pb="5rem">
        <Container maxWidth={pageWidth}>
          <Flex justifyContent="space-between" alignItems="center">
            <Flex>
              <Heading>Status Page</Heading>
            </Flex>

            <Flex direction="column" justifyContent="flex-end" textAlign="right">
              <Heading size="md">Service Status</Heading>
              <Text color="gray.500">Last Updated: DATE</Text>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Container maxWidth={pageWidth}>
        <Flex marginTop="-30px" rounded="md" bg="gray.800" shadow="lg" padding="2rem" alignItems="center">
          <Circle size="40px" bg="green.400" marginRight="1rem">
            <Circle size="100%" bg="green.500" animation={`${pulse} 2s ease infinite`} />
          </Circle>
          <Heading size="lg">All Services <Box as="span" color="green.400">Operational</Box>.</Heading>
            
        </Flex>
      </Container>


      <Container maxWidth={pageWidth} marginTop="1.5rem">
        <ComponentGroup>
        </ComponentGroup>
      </Container>


      <Container maxWidth={pageWidth} marginTop="auto" marginBottom="1.5rem">
        <Flex justifyContent="flex-end">
          <Button as="a" href="#" leftIcon={<AiOutlineFullscreen />}>NOC View</Button>    
        </Flex>
      </Container>
    
    </Flex>
  )
}
