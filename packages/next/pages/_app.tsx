import { ChakraProvider, extendTheme } from '@chakra-ui/react'

//TODO: Move to config file
const colors = {

}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
