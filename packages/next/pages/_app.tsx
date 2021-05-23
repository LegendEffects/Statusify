import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import StatusifyContext from '../StatusifyContext'
import StatusifyInstance from '../StatusifyInstance'
import LaminarOptions from '../src/LaminarOptions'
import LaminarConfig from '../laminar.config'
import '../src/i18n'

//TODO: Move to config file
const colors = {

}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <LaminarOptions.Provider value={LaminarConfig}>
        <StatusifyContext.Provider value={StatusifyInstance}>
          
          <Component {...pageProps} />

        </StatusifyContext.Provider>
      </LaminarOptions.Provider>
    </ChakraProvider>
  )
}

export default MyApp
