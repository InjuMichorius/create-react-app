import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import './index.scss'
// import Home from './components/home';
import NavBar from './components/navbar';
import UserCreate from './components/user-create';
import GameSelection from './components/game-selection';

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
    <Router>
      <main>
        <NavBar />
        <Switch>
          <Route exact path="/">
            {username === '' && <UserCreate />}
            <GameSelection />
            {renderItems()}
          </Route>
          {/* Define other routes here */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
