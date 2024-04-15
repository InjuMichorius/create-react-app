function Button({ isInput, value, type }) {
  if (isInput) {
    return <input type={type} value={value}/>;
  } else {
    return <button>Play</button>;
  }
}

export default Button;
