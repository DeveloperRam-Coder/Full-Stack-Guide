// components/Header.js
import { Flex, Heading, Spacer } from '@chakra-ui/react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <Flex as="header" p={4} align="center" boxShadow="sm">
      <Heading size="md">Docs Website</Heading>
      <Spacer />
      <ThemeToggle />
    </Flex>
  )
}
