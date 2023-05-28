import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '@/components';

const posts = [
  {title: '10 Gardening Tips', excerpt: 'Learn the most useful tips for your garden'},
  {title: '10 Things you shouldn\'t do in your garden', excerpt: '1. Don\'t set your plants on fire. 2. Don\'t step on it...'}
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Green Acres Blog</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div class="lg:col-span-4 col-span-1">        
          {posts.map((post) => <PostCard post={post} key={post.title} />)}
        </div>
        <div class="lg:col-span-4 col-span-1">
          <div class="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      
    </div>
  )
}
