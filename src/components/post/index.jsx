import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import "./Todos.scss";

function Post() {
  const [posts, setPost] = useState([]);
  const [page, setPage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}_limit=10`
        );
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  const handleChange = (type) => {
    if (type === "next") {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <marquee direction="left">
        <h1 className="header">Posts</h1>
      </marquee>
      <div className="container">
        <div className="todos">
          {posts?.map((item) => (
            <div className="todos-content" key={item.id}>
              <div>
                <h5>id: {item.id}</h5>
                <h5>Title: {item.title}</h5>
                <Link to={`/comment/${item.id}`}>
                  <button
                    onClick={() => handleChange("next")}
                    className="comment"
                  >
                    Comment
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
