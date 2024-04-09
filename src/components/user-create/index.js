// UserCreate.jsx
import React, { useState } from 'react';
import ImageSlider from "./components/imageSlider";
import UsernameInput from "./components/usernameInput";
import logoImage from '../../assets/images/logo.png';

function UserCreate() {
  const [username, setUsername] = useState('');

  // Function to update the username state
  const handleUsernameSubmit = (newUsername) => {
    setUsername(newUsername);
  };

  // Render UsernameInput only if username is not set
  if (!username) {
    return (
      <div className="user-create-container">
        <h2 className="user-create-container__subtitle">Multiplayer</h2>
        <img src={logoImage} alt="Logo" />
        <ImageSlider />
        <UsernameInput onSubmit={handleUsernameSubmit} />
      </div>
    );
  } else {
    // If username is set, render null
    return null;
  }
}

export default UserCreate;
