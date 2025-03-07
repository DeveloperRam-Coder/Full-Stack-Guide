// components/Sidebar.js
import { Box, List, ListItem, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Sidebar() {
  return (
    <Box
      as="nav"
      width={{ base: 'full', md: '250px' }}
      p={4}
      borderRight="1px solid"
      borderColor="gray.200"
      height="calc(100vh - 64px)" // adjust height based on header size
      position={{ base: 'relative', md: 'sticky' }}
      top={0}
    >
      <List spacing={3}>
        <ListItem>
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/docs/frontend" passHref>
            <Link>Frontend Docs</Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/docs/backend" passHref>
            <Link>Backend Docs</Link>
          </NextLink>
        </ListItem>
      </List>
    </Box>
  )
}
