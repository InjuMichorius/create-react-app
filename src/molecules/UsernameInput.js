import React, { useState } from 'react';

function UsernameInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    localStorage.setItem('username', inputValue);
    localStorage.setItem('points', 0);
  };

  return (
    <fieldset className="username-input-container">
      <input type="text" id="username" minLength="2" maxLength="6" value={inputValue} onChange={handleInputChange} />
      <label htmlFor="username" className={inputValue ? 'active' : ''}>Username</label>
    </fieldset>
  );
}

export default UsernameInput;
