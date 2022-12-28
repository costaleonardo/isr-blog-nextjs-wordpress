import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'

import { getAllPostsForHome } from '../lib/api'
import { queryFunction} from '../lib/api';
import { getPostList } from '../lib/api'

import { CMS_NAME } from '../lib/constants'

import Navigation from '../components/navigation';
import Hero from '../components/hero';
import Posts from '../components/posts';

export default function Playground( { postList: { edges }, preview } ) {
  // const heroPost = edges[0]?.node
  const postList = edges.slice(1); // pass this VAR into <Posts /> component

  return (
    <Layout preview={preview}>
    <Head>
      <title> {CMS_NAME}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Navigation />
    <Hero />
   <Posts posts={postList} />
  </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  /**
   * Posts
   */
  const postList = await getPostList( preview );
  // const allPosts = await getAllPostsForHome(preview)
  // const queryPosts = await queryFunction( preview );

  return {
    props: { postList, preview },
    revalidate: 10,
  }
}