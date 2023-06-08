import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <span className="brand">Brand Name</span>
        <button className="get-users-btn" onClick={getUsers}>
          Get Users
        </button>
      </nav>
      <div className="user-grid">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          users.map((user) => (
            <div className="user-card" key={user.id}>
              <img className="avatar" src={user.avatar} alt="User Avatar" />
              <h3 className="name">{`${user.first_name} ${user.last_name}`}</h3>
              <p className="email">{user.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
