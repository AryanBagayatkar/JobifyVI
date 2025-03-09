import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleLike = async (id) => {
    await axios.patch(`http://localhost:5000/api/posts/${id}/like`);
    setPosts(posts.map((post) => (post._id === id ? { ...post, likes: post.likes + 1 } : post)));
  };

  return (
    <div className="container">
      {posts.map((post) => (
        <div className="card mb-3" key={post._id}>
          <div className="card-body">
            <h5>{post.title}</h5>
            <p>{post.description}</p>
            <img src={post.photo} alt="An image" />
            <p>{post.pdf}</p>
            <button onClick={() => handleLike(post._id)} className="btn btn-primary">Like ({post.likes})</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
