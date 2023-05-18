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
          <p>Mechatronics Engineering Student, Software Developer, Cloud Practitioner.</p>
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
            src="/images/martinveliz.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          Since little my curiosity and my desire to know more have taken me to learn 
          new abilities by myself, I developed a love for technology as I grew up and 
          I became a self-taught full-stack developer.
          I love creating a positive impact with the products I launch, from planning to designing and solving real-life
          problems with code.
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
          <BioYear>2019 - present</BioYear>
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
          Worked at Festi, a mobile application for making orders in restaurants.
        </BioSection>
        <BioSection>
          <BioYear>2022 - 2023</BioYear>
          Worked at Go Out, a mobile application for making and finding nearby events.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Technologies I ♥
        </Heading>
        <Paragraph>
          Dart, Python, Javascript, Typescript, Svelte, Go, Nodejs, React, Flutter, Java, C#, Wordpress.
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
