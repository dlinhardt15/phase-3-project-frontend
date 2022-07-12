import './App.css';
import React, {useEffect, useState} from "react";
import Header from "./Header.js";
import DishPage from "./DishPage.js";
import DishForm from "./DishForm.js";
import {Switch, Route} from "react-router-dom";

function App() {
  
  const [dishes, setDishes] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:9292/dishes")
    .then((r) => r.json())
    .then((data) => setDishes(data))}, [])
  
  const initialValues = {
    name: "",
    description: "",
    image: "",
    spice_id: 0,
    cuisine_id: 0
  }
  const [formData, setFormData] = useState(initialValues)

  function submitForm () {
    fetch("http://localhost:9292/dishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...formData})
    })
    .then(response => response.json())
    .then(data => setDishes([...dishes, data]))

    setFormData(initialValues)
  }
  function onRemoveDish(deletedDish) {
    const dishesToDisplay = dishes.filter(dish => dish !== deletedDish)
    setDishes(dishesToDisplay)
}


  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path="/form">
        <DishForm submitForm={submitForm} formData={formData} setFormData={setFormData}/>
      </Route>
      <Route path="/">
        <DishPage dishes={dishes} onRemoveDish={onRemoveDish}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;