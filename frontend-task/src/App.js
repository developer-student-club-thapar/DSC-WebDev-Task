// App.js
import React, { useState } from 'react';
import './App.css';

import moonIcon from './assets/images/moon-icon.svg';
import sunIcon from './assets/images/sun-icon.svg';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
    setNoResults(false);
  };

  const handleSearch = () => {
     
    // make an api call to https://api.github.com/users/${username}
    // and set the response to userData state
    // you may use fetch or axios

  };

  return (

    <div className={`container ${darkMode ? 'dark' : ''}`}>
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
                      <img src="./assets/images/location-icon.svg" alt="" />
                    </div>
                    <p id="location">{userData.location || 'Not Available'}</p>
                  </div>
                  <div className="profile-info">
                    <div className="bottom-icons">
                      <img src="./assets/images/website-icon.svg" alt="" />
                    </div>
                    <a href={userData.blog || '#'} id="page">
                      {userData.blog || 'Not Available'}
                    </a>
                  </div>
                  <div className="profile-info">
                    <div className="bottom-icons">
                      <img src="./assets/images/twitter-icon.svg" alt="" />
                    </div>
                    <a href={`https://twitter.com/${userData.twitter_username}`} id="twitter">
                      {userData.twitter_username || 'Not Available'}
                    </a>
                  </div>
                  <div className="profile-info">
                    <div className="bottom-icons">
                      <img src="./assets/images/company-icon.svg" alt="" />
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
  );
}

export default App;
