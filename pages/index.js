import Head from "next/head";
import { FeaturedPosts } from "../sections/index";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import Link from "next/link";

export default function Home({ posts }) {
	const about = () => {
        return <>
            <h6 className="mb-1">Dream Green</h6>
            <hr />

            <p className="text-white mt-5">
                We are committed to sustainability, innovation, and customer 
                satisfaction. At Green Acres, we believe in responsible and sustainable 
                practices that minimize our impact on the environment. Join us in creating 
                beautiful, healthy, and sustainable gardens for a better future.
            </p>
        </>;
    }

    const contact = () => {
        return <>
            <h6 className="mb-1">Contact Information</h6>
            <hr />

            <div><p className="text-white mb-2 mt-5">Av. No Name, 1234 - São Paulo-SP</p></div>
            <div><p className="text-white mb-2">+55 (11) 3000-0000</p></div>
            <div><p className="text-white mb-2">+55 (11) 9 9000-0000</p></div>
            <div><p className="text-white mb-2">contact@greenacres.com</p></div>
        </>;
    }

	return (
		<>
			<div className="container mx-auto px-10 mb-8">
				<Head>
					<title>Green Acres Blog</title>
				</Head>
				<FeaturedPosts />
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					<div className="lg:col-span-8 col-span-1">
						{posts.map((post, index) => (
							<PostCard key={index} post={post.node} />
						))}
					</div>
					<div className="lg:col-span-4 col-span-1">
						<div className="lg:sticky relative top-8">
							<PostWidget />
							<Categories />
						</div>
					</div>
				</div>
			</div>

			<section className="bg-green-800 text-white">
				<div className="grid md:grid-cols-3 items-center mx-12">
					<div className="px-12 my-12">
						<Link href="/">
							<img src="/favicon.png" className="mx-auto" alt='Green Acres' />
						</Link>
					</div>

					<div className="px-12 my-12 md:max-w-lg">
						{about()}
					</div>

					<div className="px-12 mt-12 mb-14 md:max-w-lg">
						{contact()}
					</div>
					
				</div>
			</section>
		</>
		
	);
}

export async function getStaticProps() {
	const posts = (await getPosts()) || [];

	return {
		props: { posts },
	};
}
