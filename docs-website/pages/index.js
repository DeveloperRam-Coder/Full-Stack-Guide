// pages/index.js
import DocumentationLayout from '../components/DocumentationLayout'
import { Heading, Text } from '@chakra-ui/react'

export default function Home() {
  const frontendContent = (
    <>
      <Heading mb={4}>Frontend Documentation</Heading>
      <Text>
        This section covers your frontend setup, components, design guidelines, and interactive UI features.
      </Text>
      {/* Additional frontend MDX or components can be loaded here */}
    </>
  )

  const backendContent = (
    <>
      <Heading mb={4}>Backend Documentation</Heading>
      <Text>
        Explore API endpoints, database schemas, server configuration, and integration details.
      </Text>
      {/* Additional backend MDX or components can be loaded here */}
    </>
  )

  return (
    <DocumentationLayout
      frontendContent={frontendContent}
      backendContent={backendContent}
    />
  )
}
