import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text>The page you're looking for was not found.</Text>
      <Divider my={10} />

      <Box my={10} align="center">
        <NextLink href="/">
          <Button colorScheme="green" borderRadius='0px'>Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
