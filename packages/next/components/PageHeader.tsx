import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import PageContainer from './PageContainer'

export interface PageHeaderProps {
  lastUpdated: Date
}

export const PageHeader = ({ lastUpdated }: PageHeaderProps) => {
  const { t } = useTranslation()

  return (
    <Box bg="gray.900" width="100%" pt="2rem" pb="5rem">
      <PageContainer>
        <Flex justifyContent="space-between" alignItems="center">

          <Heading>{t('header.title')}</Heading>
          
          <Flex direction="column" justifyContent="flex-end" textAlign="right">
            <Heading size="md">{t('header.status')}</Heading>
            <Text color="gray.500">
              {lastUpdated ? t('header.lastUpdated', {date: lastUpdated}) : t('polling')}
            </Text>
          </Flex>

        </Flex>
      </PageContainer>
    </Box>
  )
}

export default PageHeader