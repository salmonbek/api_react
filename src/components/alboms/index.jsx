import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import "./Todos.scss";

function Post() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/albums?_page=1&_limit=10`
        );
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <marquee direction="left">
        <h1 className="header">Albums area</h1>
      </marquee>
      <div className="container">
        <div className="todos">
          {posts?.map((item, index) => {
            if (item?.userId === item?.userId) {
              return (
                <div className="todos-content" key={index}>
                  <div>
                    <h5>id: {item.id}</h5>
                    <h5>Title: {item.title}</h5>

                    <Link to={`/galery/${item.id}`}>
                      <button className="comment">Gallary</button>
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
