function Button({ isInput, value, type, onClick }) {
  if (isInput) {
    return <input type={type} value={value}/>;
  } else {
    return <button onClick={onClick}>Play</button>;
  }
}

export default Button;
