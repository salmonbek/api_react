import React, { useEffect, useState } from "react";
import axios from "axios";
import "./User.scss";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((respons) => {
      console.log(respons);
      setUsers(respons.data);
    });
  }, []);
  return (
    <div>
      <div className="header">
        <marquee direction="left">
          <h1>Users area</h1>
        </marquee>
      </div>
      <div className="container">
        <div className="main">
          {users.map((item, index) => {
            return (
              <div className="main-content" key={index}>
                <h5>Name: {item.name}</h5>
                <h5>UserName: {item.username}</h5>
                <h5>Email: {item.email}</h5>
                <h5>Adress: {item.address.street}</h5>
                <Link to={`/posts/${item.id}`}>
                  <button>Post</button>
                </Link>
                <Link to={`/todos/${item.id}`}>
                  <button>To-do</button>
                </Link>
                <Link to={`/alboms/${item.id}`}>
                  <button>Albums</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default User;
