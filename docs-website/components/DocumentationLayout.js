// components/DocumentationLayout.js
import { Box, Flex } from '@chakra-ui/react'

export default function DocumentationLayout({ frontendContent, backendContent }) {
  return (
    <Flex height="100vh" overflow="hidden">
      {/* Frontend Docs Section */}
      <Box width="50%" borderRight="1px solid" borderColor="gray.200" p={4} overflowY="auto">
        {frontendContent}
      </Box>
      {/* Backend Docs Section */}
      <Box width="50%" p={4} overflowY="auto">
        {backendContent}
      </Box>
    </Flex>
  )
}
