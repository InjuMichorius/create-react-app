import { useEffect, useState } from "react";
import './index.scss'
// import Home from './components/home';
import NavBar from './components/navbar';
import UserCreate from './components/user-create';

function App() {
  const [items, setItems] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data));

      const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  function renderItems() {
    return items.map((item, i) => {
      return (
        <div key={i}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <p>No bidding</p>
        </div>
      );
    });
  }

  return (
    <main>
      <NavBar />
      {username === '' && <UserCreate />}
      {renderItems()}
    </main>
  );
}

export default App;
