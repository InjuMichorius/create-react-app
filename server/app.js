const express = require("express");

const app = express();

const PORT = process.env.PORT || 4242;

app.listen(PORT, () => console.log("Server started"));

app.use(express.static("build"));

const items = [
  {
    name: "Laptop",
    price: 500,
  },
  {
    name: "Desktop",
    price: 700,
  },
  {
    name: "Mobile",
    price: 700,
  },
];

app.get("/api/items", (req, res) => {
  res.send(items);
});
