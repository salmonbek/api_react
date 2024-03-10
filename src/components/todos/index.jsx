import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Todos.scss";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10`
        );
        setTodos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <marquee direction="left">
        <h1 className="header">Todos area</h1>
      </marquee>
      <div className="container">
        <div className="todos">
          {todos.map((item) => (
            <div className="todos-content" key={item.id}>
              <div>
                <h5>id: {item.id}</h5>
                <h5>Title: {item.title}</h5>
              </div>
              <div className="todos-comp">
                <h5>{item.completed ? "true" : "false"}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todos;
