import { Circle, Flex, Heading, keyframes } from "@chakra-ui/react"
import Severity from "@statusify/core/dist/Severity/Severity"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import LaminarOptions from "../src/LaminarOptions"
import PageContainer from "./PageContainer"

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

export interface StatusBannerProps {
  severity: Severity
}

export const StatusBanner = ({ severity }: StatusBannerProps) => {
  const options = useContext(LaminarOptions)
  const { t } = useTranslation()

  return (
    <PageContainer>
      
      <Flex 
        marginTop="-30px" 
        rounded="md" 
        bg="gray.800" 
        shadow="lg" 
        padding="2rem" 
        alignItems="center"
        >
        
        <Circle 
          size="40px" 
          bg={`${options.colors.severities[severity?.id]}.400`}
          marginRight="1rem"
          >
          <Circle 
            size="100%" 
            bg={`${options.colors.severities[severity?.id]}.500`}
            animation={`${pulse} 2s ease infinite`}
            />
        </Circle>

        <Heading size="lg">
          {severity ? t(`statusBanner.${severity.id}`) : t('polling')}
        </Heading>
      </Flex>

    </PageContainer>
  )
}