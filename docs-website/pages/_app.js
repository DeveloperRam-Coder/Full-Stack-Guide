// pages/_app.js
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import MainLayout from '../layouts/MainLayout'
import theme from '../styles/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      {/* Persist initial color mode */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}

export default MyApp
