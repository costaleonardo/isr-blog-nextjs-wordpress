import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { queryFunction} from '../lib/api';
import { CMS_NAME } from '../lib/constants'

import Navigation from '../components/navigation';
import Hero from '../components/hero';
import Video from '../components/video';

export default function Index({ allPosts: { edges }, queryPosts, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  const testPost = queryPosts.edges[0]?.node;

  console.log( testPost );
  /**
   * heroPost stores data coming from 'edges' variable
   *  - what does 'edges' store?
   *  - query is called from getAllPostsForHome() in lib/api.tsx
   * 
   * author
   * date
   * excerpt
   * feateredImage
   * slug
   * title
   */

  return (
    <Layout preview={preview}>
      <Head>
        <title> {CMS_NAME}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation />
        <Hero />
        <Video />

        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  /**
   * what data does VAR preview hold?
   */
  const allPosts = await getAllPostsForHome(preview)
  const queryPosts = await queryFunction( preview );

  // Set main component props
  return {
    props: { allPosts, queryPosts, preview },
    revalidate: 10,
  }
}
