import NextLink from 'next/link'
import { Heading, Box, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

interface TitleProps {
  children: React.ReactNode;
}

export const Title = ({ children } : TitleProps) => (
  <Box>
    <NextLink href="/portfolio">
      <Link>Portfolio</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

interface MetaProps {
  children: React.ReactNode;
}

export const Meta = ({ children } : MetaProps) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
