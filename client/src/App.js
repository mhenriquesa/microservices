import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';


export default function App() {

  return <div>
    <h1>
      Create Post
    </h1>
      <PostCreate />
      <hr />
      <h1>Post List</h1>
      <PostList />
      <hr />
  </div>
}
