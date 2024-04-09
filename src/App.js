import { useEffect, useState } from "react";
import './index.scss'
import Home from '../src/components/home'; // Import the Home component

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
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
      <Home />
      <h1>Example webshop</h1>
      {renderItems()}
    </main>
  );
}

export default App;
