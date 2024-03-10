import React from 'react'
import User from './components/user/User';
import { Route, Routes } from 'react-router-dom';
import Todos from './components/todos';
import Post from './components/post/index';
import Comment from './components/comment/index'
import Galery from './components/galery/index'
import Alboms from './components/alboms/index'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path='todos/:id' element={<Todos />}/>
        <Route path='posts/:id' element={<Post />}/>
        <Route path='comment/:id' element={<Comment />}/>
        <Route path='alboms/:id' element={<Alboms />}/>
        <Route path='galery/:id' element={<Galery />}/>
      </Routes>
    </div>
  );
}

export default App