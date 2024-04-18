import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.scss";
import NavBar from "./organisms/NavBar";
import UserCreate from "./pages/UserCreate";
import GameSelection from "./pages/GameSelection";
import WordScramble from "./pages/WordScramble";

function App() {
  const [items, setItems] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data));

    const storedUsername = localStorage.getItem("username");
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
        <Routes>
          <Route path="/" element={<UserCreate />} />
          <Route
            path="/game-selection"
            element={username ? <GameSelection /> : <Navigate to="/" />}
          />
          <Route path="/word-scramble" element={<WordScramble />} />
        </Routes>
        {renderItems()}
      </main>
    </Router>
  );
}

export default App;
