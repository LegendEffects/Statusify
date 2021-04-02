import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { useTranslation } from "react-i18next";

export interface PageHeaderProps {
  lastUpdated: Date
}

export default function PageHeader() {
  const { t } = useTranslation();

  return (
    <Box
      width="full"
      bg="gray.900"
      pt={16}
      pb={20}
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Heading>
            {t('header.title')}
          </Heading>

          <Flex
            direction="column"
            justify="space-between"
            textAlign="right"
          >
            <Text color="gray.500">
              {t('polling')}
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}