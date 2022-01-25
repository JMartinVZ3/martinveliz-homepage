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
    <Layout title="Spa Senia Cedeño">
      <Container>
        <Title>
          Dentista Miguel Acosta <Badge>2021</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/portfolio/miguelacosta.png" alt="icon" />
        </Center>

        <P>
          Website Made For Miguel Acosta, who is a Dentist in Portoviejo.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Wordpress, Javascript, PHP</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Link</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://miguelacostadentista.com/">
              <Badge mr={2}>Website</Badge>
                https://miguelacostadentista.com/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Container>
    </Layout>
  )
  
  export default Portfolio
  