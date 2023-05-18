import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Heading,
    Center,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layout/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/portfolio'
  import P from '../../components/paragraph'
  
  const Portfolio = () => (
    <Layout title="Sumerly">
      <Container>
        <Title>
          Sumerly <Badge>2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/portfolio/sumerly.png" alt="icon" />
        </Center>

        <P>
          Website Made For A Web Extension That Integrates a ChatGPT Window to the Browser.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, Javascript</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Link</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://sumerly-web.vercel.app/">
              <Badge mr={2}>Website</Badge>
                https://sumerly-web.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Container>
    </Layout>
  )
  
  export default Portfolio
  