import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '../components/index'
import { getPosts } from '../services'
import { FeaturedPosts } from "../sections/index"

// const posts = [
//   { title: 'React Testing', excerpt: 'Lear React Testing'},
//   { title: 'React with Tailwind', excerpt: 'Lear React with Tailwind'}
// ]

export default function Home({ posts }) {
  //   console.log(posts);

  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Next Blogs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}
