import type { NextPage } from 'next'
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layout/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Home: NextPage = () => {
  return (
    
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Martin Veliz
          </Heading>
          <p>Software Developer, Cloud Practicer, Blockchain Enthusiast.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="none"
            maxWidth="120px"
            display="inline-block"
            borderRadius="10"
            src="/images/martinveliz.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          Since little my curiosity and my desire to know more has taken me to learn 
          new abilities by myself, I developed a love for technology as I grew up and 
          I became a self-taught full-stack developer.
          I love launching products, from planning to designing and solving real-life
          problems with code.
          This approach in life took me to launch my first startup called Volva in 2020.
          I'm currently working on a new project called Adamo.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/portfolio">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="green" borderRadius="0px">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <BioSection>
          <BioYear>2019 to present</BioYear>
          Freelancing
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Started a Degree in Mechatronics Engineering at Tecnológico de Monterrey.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Founded Volva, Inc.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at Festi, a Mobile Application For Making Orders In Restaurants.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Technologies I ♥
        </Heading>
        <Paragraph>
          Dart, Python, Javascript, Go, Nodejs, React, Flutter, Wordpress.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/jmartinvz3" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<Icon as={IoLogoGithub} />}
                borderRadius="0px"
              >
                @jmartinvz3
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/martinvz20" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<Icon as={IoLogoTwitter} />}
                borderRadius="0px"
              >
                @MartinVZ20
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/martin.velizz" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<Icon as={IoLogoInstagram} />}
                borderRadius="0px"
              >
                @martin.velizz
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <Link href="https://medium.com/@jmartinvz">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="green" borderRadius="0px">
              Popular posts
            </Button>
          </Link>
        </Box>
      </Section>
    </Container>
 
  )
}

export default Home
