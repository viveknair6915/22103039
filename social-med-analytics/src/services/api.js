export async function getTopUsers() {
    const response = await fetch('http://localhost:4000/api/top-users');
    return response.json();
  }
  
  export async function getTrendingPosts() {
    const response = await fetch('http://localhost:4000/api/trending-posts');
    return response.json();
  }
  
  export async function getFeedPosts() {
    const response = await fetch('http://localhost:4000/api/feed');
    return response.json();
  }
  