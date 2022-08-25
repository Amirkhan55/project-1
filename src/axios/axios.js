import React, { useState } from "react";
import Axios from "axios";
import { Posts } from "./Posts";
import { useEffect } from "react";
import { Pagination } from "../pagination";
import "./card.css";

export default function UseofAxios() {
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const truncate = (Text) =>
    Text?.length > 50 ? `${Text.substring(0, 40)}...` : Text;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div>
        <Posts posts={currentPosts} loading={loading} truncate={truncate} />
        <div className="card">
          <Pagination postsPerPage={postsPerPage} paginate={paginate} />
        </div>
      </div>
    </>
  );
}
