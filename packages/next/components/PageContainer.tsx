import { Container } from "@chakra-ui/react"
import { useContext } from "react"
import LaminarOptions from "../src/LaminarOptions"

export const PageContainer = ({ children }) => {
  const options = useContext(LaminarOptions)

  return (
    <Container maxWidth={options.pageWidth}>
      {children}
    </Container>
  )
}

export default PageContainer