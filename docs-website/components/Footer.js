// components/Footer.js
import { Box, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      as="footer"
      py={4}
      textAlign="center"
      borderTop="1px solid"
      borderColor="gray.200"
      mt={8}
    >
      <Text fontSize="sm">
        © {new Date().getFullYear()} Docs Website. All rights reserved.
      </Text>
    </Box>
  )
}
