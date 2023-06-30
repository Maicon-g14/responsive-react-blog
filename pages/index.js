import Head from "next/head";
import { FeaturedPosts } from "../sections/index";
import { Footer, Pagination, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

export default function Home() {
	return (
		<>
			<div className="container mx-auto px-10 mb-8">
				<Head>
					<title>Green Acres Blog</title>
				</Head>
				<FeaturedPosts />
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					<div className="lg:col-span-8 col-span-1">
						<Pagination 
							postsPerPage={2}
						/>
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
				<Footer />
			</section>
		</>
	);
}


