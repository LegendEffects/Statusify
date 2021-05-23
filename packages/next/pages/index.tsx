import { Button, Container, Flex, Stack } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react';

import { AiOutlineFullscreen } from 'react-icons/ai'
import ComponentGroup from '@statusify/core/dist/Component/ComponentGroup';
import PageHeader from '../components/PageHeader';
import SComponentGroup from '../components/component/SComponentGroup'
import Severity from '@statusify/core/dist/Severity/Severity';
import { StatusBanner } from '../components/StatusBanner';
import StatusifyContext from '../StatusifyContext';
import { useTranslation } from 'react-i18next';

const pageWidth = '1140px';

const Home = () => {
  const [globalSeverity, setGlobalSeverity] = useState<Severity>(null);
  const [componentGroups, setComponentGroups] = useState<ComponentGroup[]>([]);
  const [lastUpdated, setLastUpdated] = useState<Date>(null);

  const statusify = useContext(StatusifyContext)
  const { t } = useTranslation();

  useEffect(() => {
    // Fetch Groups
    statusify.getComponentGroups().then(setComponentGroups)

    // Fetch Global Severity
    statusify.getGlobalSeverity().then(setGlobalSeverity)
  }, [])

  // Update
  useEffect(() => {
    setLastUpdated(new Date())
  }, [globalSeverity, componentGroups])

  return (
    <Flex height="100vh" direction="column">
      <PageHeader lastUpdated={lastUpdated} />

      <StatusBanner severity={globalSeverity} />


      <Container maxWidth={pageWidth} marginTop="1.5rem">
        <Stack spacing={5}>
          {componentGroups.map((group, i) => <SComponentGroup key={i} group={group} /> )}
        </Stack>

      </Container>


      <Container maxWidth={pageWidth} marginTop="auto" marginBottom="1.5rem">
        <Flex justifyContent="flex-end">
          <Button as="a" href="#" leftIcon={<AiOutlineFullscreen />}>NOC View</Button>    
        </Flex>
      </Container>
    
    </Flex>
  )
}

export default Home
