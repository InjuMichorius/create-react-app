// UsernameInput.jsx
import React, { useState } from 'react';

function UsernameInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('username', inputValue);
    localStorage.setItem('points', 0);
    onSubmit(inputValue);
  };

  return (
    <form className="username-input-container" onSubmit={handleSubmit}>
      <input type="text" id="username" minLength="3" maxLength="6" value={inputValue} onChange={handleInputChange} />
      <label htmlFor="username" className={inputValue ? 'active' : ''}>Username</label>
      <input type="submit" value="Start" />
    </form>
  );
}

export default UsernameInput;
