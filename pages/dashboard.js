import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
import LatestArticle from '../components/LatestArticle'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import ar31 from '../data/data.json'
import GoogleMaps from '@components/GoogleMaps'

export default function Dashboard({ projects, articles }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Afrah Rayan 31 - Produits patisseries et emballage</title>
          <meta name="title" content="Afrah Rayan 31 - Produits patisseries et emballage" />
          <meta name="keywords" content="afrah, afrah rayan" />
          <meta
            name="description"
            content="Produits patisseries et emballage"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://afrahrayan31.netlify.app" />
          <meta
            property="og:title"
            content="Afrah Rayan 31 - Produits patisseries et emballage"
          />
          <meta
            property="og:description"
            content="Produits patisseries et emballage"
          />
          <meta property="og:image" content="https://i.imgur.com/AOMvmeJ.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://afrahrayan31.netlify.app/" />
          <meta
            property="twitter:title"
            content="Afrah Rayan 31 - Produits patisseries et emballage"
          />
          <meta
            property="twitter:description"
            content="Afrah Rayan 31 - Produits patisseries et emballage"
          />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/AOMvmeJ.png"
          />
        </Head>

        <Stack
          as="main"
          spacing="144px"
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '15vh', md: '22.5vh' }}
        >
          <Introduction />
          <AboutMe />
          <GoogleMaps />
          {/* <FeaturedProjects projects={projects} />
          <LatestArticle articles={articles} />
          <ContactMe /> */}
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: ar31.projects,
      articles: ar31.articles,
    },
  }
}
