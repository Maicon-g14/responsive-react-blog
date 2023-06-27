import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { getCategories } from "../services";

const Header = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((newCategories) => {
			setCategories(newCategories);
		});
	}, []);

	return (
		<>
			<div className="bg-green-700 pt-2">
				<div className="container flex items-center justify-between mx-auto">
					<div>
						<Link href="/" className="mt-10">
							<Image
								src="/favicon.png"
								className="cursor-pointer"
								alt="Green Acres"
								height="60px"
								width="60px"
							/>
						</Link>
					</div>
					<div>
						{categories.map((category, index) => (
							<Link
								key={index}
								href={`/category/${category.slug}`}
							>
								<span className="mt-2 text-white ml-4 font-semibold cursor-pointer">
									{category.name}
								</span>
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className="mb-10 pb-1 bg-green-800" />
		</>
	);
};

export default Header;
