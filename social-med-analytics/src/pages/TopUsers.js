import React, { useEffect, useState } from 'react';
import { getRandomImage } from '../randomImages';

function TopUsers() {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const users = [
      { id: 1, name: 'Alice', postCount: 20 },
      { id: 2, name: 'Bob', postCount: 15 },
      { id: 3, name: 'Charlie', postCount: 15 },
      { id: 4, name: 'David', postCount: 10 },
      { id: 5, name: 'Eva', postCount: 8 },
    ];

    const usersWithImages = users.map(user => ({
      ...user,
      imageUrl: getRandomImage()
    }));

    const sortedUsers = usersWithImages.sort((a, b) => b.postCount - a.postCount);

    setTopUsers(sortedUsers.slice(0, 5)); 
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">👤 Top Users</h2>
      <div className="row">
        {topUsers.map(user => (
          <div key={user.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src={user.imageUrl}
                className="card-img-top"
                alt={`${user.name}'s avatar`}
              />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                  <span className="badge bg-primary">{user.postCount} posts</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopUsers;
