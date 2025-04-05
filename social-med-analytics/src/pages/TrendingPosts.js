import React, { useEffect, useState } from 'react';

function TrendingPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const trendingPostsData = [
      {
        id: 101,
        title: 'Post One',
        commentCount: 40,
        imageUrl: 'https://via.placeholder.com/150?text=Post+1'
      },
      {
        id: 102,
        title: 'Post Two',
        commentCount: 35,
        imageUrl: 'https://via.placeholder.com/150?text=Post+2'
      },
      {
        id: 103,
        title: 'Post Three',
        commentCount: 35,
        imageUrl: 'https://via.placeholder.com/150?text=Post+3'
      },
      {
        id: 104,
        title: 'Post Four',
        commentCount: 30,
        imageUrl: 'https://via.placeholder.com/150?text=Post+4'
      },
      {
        id: 105,
        title: 'Post Five',
        commentCount: 28,
        imageUrl: 'https://via.placeholder.com/150?text=Post+5'
      },
      {
        id: 106,
        title: 'Post Six',
        commentCount: 28,
        imageUrl: 'https://via.placeholder.com/150?text=Post+6'
      },
    ];

    const sorted = trendingPostsData.sort((a, b) => b.commentCount - a.commentCount);
    const topFiveThreshold = sorted[4] ? sorted[4].commentCount : 0;
    const filtered = sorted.filter(post => post.commentCount >= topFiveThreshold);

    setPosts(filtered);
  }, []);

  return (
    <div>
      <h2>Trending Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="card mb-3">
          <img src={post.imageUrl} className="card-img-top" alt={post.title} />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p>Comments: {post.commentCount}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrendingPosts;
