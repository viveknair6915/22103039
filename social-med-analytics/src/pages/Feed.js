import React, { useEffect, useState } from 'react';
import { getRandomImage } from '../randomImages';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchedPosts = [
      {
        id: 1,
        user: 'Alice',
        content: 'Check this out!',
        timestamp: new Date(),
      },
      {
        id: 2,
        user: 'Bob',
        content: 'New thoughts!',
        timestamp: new Date(),
      }
    ];

    // Add random image to each post
    const postsWithImages = fetchedPosts.map(post => ({
      ...post,
      imageUrl: getRandomImage()
    }));

    setPosts(postsWithImages);
  }, []);

  return (
    <div>
      <h2>Live Feed</h2>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '20px' }}>
          <img src={post.imageUrl} alt="Post" width="150" />
          <h4>{post.user}</h4>
          <p>{post.content}</p>
          <small>{post.timestamp.toString()}</small>
        </div>
      ))}
    </div>
  );
};

export default Feed;
