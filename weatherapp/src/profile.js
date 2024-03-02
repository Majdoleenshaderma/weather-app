// Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    city: '',
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get('api/user')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put('api/user', userData)
      .then(response => {
        setEditMode(false);
      })
      .catch(error => {
        console.error('Error updating user details:', error);
      });
  };

  return (
    <>
      <div >
        {editMode ? (
          <div className="wrapper" >
            <form >
              <div className="login_box">
                <div className="login-header">
                  <span>EditProfile</span>
                </div>
                <div className="input_box">
                  <input type="text" id="user" class="input-field" name="username" value={userData.username} onChange={handleInputChange} placeholder='UserName' />
                  <input type="email" id="user" class="input-field" name="email" value={userData.email} onChange={handleInputChange} placeholder='Email' />
                  <input type="text" id="user" class="input-field" name="city" value={userData.governorate} onChange={handleInputChange} placeholder='City' />
                  <input type="password" id="user" class="input-field" name="password" value={userData.password} onChange={handleInputChange} placeholder='Password' />
                  <button className="input-submit" onClick={handleSubmit}>Save</button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="wrapper" >
            <form >
              <div className="login_box">
                <div className="login-header">
                  <span> Profile</span>
                </div>
                <div className="input_box">
                  <p id="user" class="input-field">Username: {userData.username}</p>
                  <p id="user" class="input-field">Email: {userData.email}</p>
                  <p id="user" class="input-field">City: {userData.city}</p>
                  <p id="user" class="input-field">Password: {userData.password}</p>
                  <button className="input-submit" onClick={(event) => { event.preventDefault(); setEditMode(true) }}>Edit</button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
export default Profile;
