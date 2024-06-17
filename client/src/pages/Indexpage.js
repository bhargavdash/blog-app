import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

export default function Indexpage() {
  const[posts,setPosts]=useState([]);

 useEffect(()=>{
  fetch('https://blog-app-2w2i.onrender.com/post').then(response=>{
    response.json().then(posts=>{
      setPosts(posts);
    });
  });
 },[]);

  return (
    <div>
         {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </div>
  )
}
