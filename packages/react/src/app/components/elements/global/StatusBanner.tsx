import { Flex, FlexProps, Heading } from "@chakra-ui/layout";
import { useTranslation } from "react-i18next";
import useGlobalSeverity from "../../../hooks/useGlobalSeverity"
import useSeverityColor from "../../../hooks/useSeverityColor";
import CirclePulse from "../util/CirclePulse";

export interface StatusBannerProps extends FlexProps { }

export default function StatusBanner({ ...props }: StatusBannerProps) {
  const { t } = useTranslation();
  const severity = useGlobalSeverity();
  const severityColor = useSeverityColor(severity, 'gray');
  
  return (
    <Flex
      direction="row"
      align="center"
      bg="gray.800"
      rounded="md"
      shadow="lg"
      padding={8}
      {...props}
    >
      <CirclePulse 
        size="40px" 
        frozen={severity === undefined} 
        colorScheme={severityColor} 
        />

      <Heading size="lg" ml={4}>
        { severity ? t(`statusBanner.${severity.id}`) : t('polling') }
      </Heading>
    </Flex>
  )
}