import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./Todos.scss";

function Post() {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10"
        );
        setComment(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <marquee direction="left">
        <h1 className="header">Comment area</h1>
      </marquee>
      <div className="container">
        <div className="todos">
          {comment?.map((item) => (
            <div className="todos-content" key={item.id}>
              <div>
                <h5>Comment: {item.body}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
