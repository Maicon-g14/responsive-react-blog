import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts, getPostsId } from "../services";

const Pagination = ({postsPerPage}) => {
	const [postsId, setPostsId] = useState(1)
	const [lastPage, setLastPage] = useState(1)
	const [currentPage, setPage] = useState(1);
	const [currentPageContent, setCurrentPageContent] = useState([]);
	
	const requestPosts = (previousId=null, nextId=null) => {
		getPosts(postsPerPage, previousId, nextId).then(response => {
			setCurrentPageContent(response)
		}).catch(error => {
			console.log(error);
		})
	}

	useEffect(() => {
		requestPosts()
		getPostsId().then(response => {
			setPostsId(response);
			setLastPage(Math.ceil(response.length / postsPerPage));
		}).catch(error => {
			console.log(error);
		})
	}, [])
	
	
	const nextPage = () => {
		if (currentPage < lastPage) {
			setPage(currentPage+1);
			requestPosts(null, JSON.stringify(currentPageContent[currentPageContent.length-1].node.id));
		}
	}

	const previousPage = () => {
		if (currentPage > 1) {
			setPage(currentPage-1)
			requestPosts(JSON.stringify(currentPageContent[0].node.id));
		}
	}
	
	return <>
		{currentPageContent.map((post, index) => (
			<PostCard key={index} post={post.node} />
		))}

		<div className="flex justify-center">
			<button className="p-2 border-2 border-solid" onClick={previousPage}>prev</button>
			<div className="p-2 border-2 border-solid">{currentPage}</div>
			<button className="p-2 border-2 border-solid" onClick={nextPage}>next</button>
		</div>
	</>
};


export default Pagination;

