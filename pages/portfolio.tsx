import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layout/article'

import { WorkGridItem } from '../components/grid-item'

import thumbMiguelAcosta from '../public/images/portfolio/miguelacosta.png'
import thumbSeniaCedeno from '../public/images/portfolio/seniacedeno.png'
import thumbGeostudios from '../public/images/portfolio/geostudios.png'
import thumbSumerly from '../public/images/portfolio/sumerly.png'

const Portfolio = () => (
  <Layout title="Portfolio">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Web Development
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.1}>
          <WorkGridItem 
            id="miguelacosta" 
            title="Dentista | Miguel Acosta" 
            thumbnail={thumbMiguelAcosta}
          >
            Website Made For A Dentist in Portoviejo
          </WorkGridItem>
      </Section>
      <Section delay={0.1}>
          <WorkGridItem
              id="seniacedeno"
              title="Spa | Senia Cedeño"
              thumbnail={thumbSeniaCedeno}
            >
              Website Made For A Spa in Portoviejo
            </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
              id="geostudios"
              title="Geostudios"
              thumbnail={thumbGeostudios}
            >
              Website Made For An Architecture & Construction Company in Portoviejo
            </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
              id="sumerly"
              title="Sumerly Web"
              thumbnail={thumbSumerly}
            >
              Website Made For A Web Extension That Integrates a ChatGPT Window to the Browser.
            </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Mobile Development
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Other Software
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

      </SimpleGrid>
    </Container>
  </Layout>

)

export default Portfolio
