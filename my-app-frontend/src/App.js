import './App.css';
import React, {useEffect, useState} from "react";
import Header from "./Header.js";
import DishPage from "./DishPage.js"

function App() {
  
  const [dishes, setDishes] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:9292/dishes")
    .then((r) => r.json())
    .then((data) => setDishes(data))}, [])
  

  return (
    <div className="App">
      <Header />
      <DishPage dishes={dishes}/>
    </div>
  );
}

export default App;
