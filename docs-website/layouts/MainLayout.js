// layouts/MainLayout.js
import { Box } from '@chakra-ui/react'
import Header from '../components/Header'
// Optionally import Sidebar and Footer if needed

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Box as="main" mt={4}>
        {children}
      </Box>
      {/* Optionally add <Footer /> here */}
    </>
  )
}
