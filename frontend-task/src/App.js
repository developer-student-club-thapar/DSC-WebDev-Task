// App.js
import React, { useState } from 'react';
import './App.css';
import axios from "axios";
import moonIcon from './assets/images/moon-icon.svg';
import sunIcon from './assets/images/sun-icon.svg';
import location from './assets/images/location-icon.svg';
import website from './assets/images/website-icon.svg';
import twitter from './assets/images/twitter-icon-x.svg';
import company from './assets/images/company-icon.svg';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";






const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const handleModeToggle = () => {
    setDarkMode(!darkMode);

    darkMode === false ? document.querySelector("body").classList.add("dark") : document.querySelector("body").classList.remove("dark")

  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
    setNoResults(false);
  };

  const handleSearch = async () => {
    

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setNoResults(false);
      toast.success('Fetched Data', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch  (error) {
      console.error("Failed to make request:", error.message);
      setNoResults(true);
      setUserData(null);
      toast.error('Please Type Correct Username', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
   
  

  };

  return (
    <div>

    <ToastContainer />
      <div className={`container`}>

        <header className="header">
          <h1 className="title">Github Finder</h1>
          <div id="btn-mode" onClick={handleModeToggle}>
            <p id="mode-text">{darkMode ? 'LIGHT' : 'DARK'}</p>
            <div className="icon-container">
              <img id="mode-icon" src={darkMode ? sunIcon : moonIcon} alt="" />
            </div>
          </div>
        </header>



        <main>

          <div id="app">
            <div className="searchbar-container active">
              <svg className='imageUrl' viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
                />
              </svg>
              <input type="search" name="user-input" id="input" placeholder="Enter a GitHub username..." value={username} onChange={handleInputChange} required />
              <div className="error">
                {noResults && <p id="no-results">no search results</p>}
              </div>
              <button className="btn-search" id="submit" onClick={handleSearch}>Search</button>
            </div>

            {userData && (
              <div className="profile-container">
                <div className="profile-content">
                  <div className="profile-header">
                    <img id="avatar" src={userData.avatar_url} alt={userData.login} />
                    <div className="profile-info-wrapper">
                      <div className="profile-name">
                        <h2 id="name">{userData.name || userData.login}</h2>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer" id="user">
                          @{userData.login}
                        </a>
                      </div>
                      <p id="date">Joined {new Date(userData.created_at).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <p id="bio">{userData.bio || 'This profile has no bio'}</p>
                  <div className="profile-stats-wrapper">
                    <div className="profile-stat">
                      <p className="stat-title">Repos</p>
                      <p id="repos" className="stat-value">
                        {userData.public_repos}
                      </p>
                    </div>
                    <div className="profile-stat">
                      <p className="stat-title">Followers</p>
                      <p id="followers" className="stat-value">
                        {userData.followers}
                      </p>
                    </div>
                    <div className="profile-stat">
                      <p className="stat-title">Following</p>
                      <p id="following" className="stat-value">
                        {userData.following}
                      </p>
                    </div>
                  </div>
                  <div className="profile-bottom-wrapper">
                    <div className="profile-info">
                      <div className="bottom-icons">
                        <img src={location} alt="location" />
                      </div>
                      <p id="location">{userData.location || 'Not Available'}</p>
                    </div>
                    <div className="profile-info">
                      <div className="bottom-icons">
                        <img src={website} alt="Website" />
                      </div>
                      <a href={userData.blog || '#'} id="page">
                        {userData.blog || 'Not Available'}
                      </a>
                    </div>
                    <div className="profile-info">
                      <div className="bottom-icons">
                        <img src={twitter} alt="Twitter" />
                      </div>
                      <a href={`https://twitter.com/${userData.twitter_username}`} id="twitter">
                        {userData.twitter_username || 'Not Available'}
                      </a>
                    </div>
                    <div className="profile-info">
                      <div className="bottom-icons">
                        <img src={company} alt="Company" />
                      </div>
                      <p id="company">{userData.company || 'Not Available'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;