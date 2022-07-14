import "./Header.css";
import {NavLink} from "react-router-dom";

function Header ({setDishes}) {
    
    function resetDishes () {
            fetch("http://localhost:9292/dishes")
            .then((r) => r.json())
            .then((data) => setDishes(data))
    }

    return (
        <div id="header">
            <br></br>
            <br></br>
            <br></br>
            <NavLink to="/">
            <span id="title" onClick={() => resetDishes}>
                Spice It Up!
            </span>
            </NavLink>
            <NavLink to="/dishform">
                <span id="new-dish-button">Add a Dish!</span>
            </NavLink>
            <NavLink to="/cuisineform">
                <span id="new-cuisine-button">Add a Cuisine!</span>
            </NavLink>
        </div>
    )
};

export default Header;