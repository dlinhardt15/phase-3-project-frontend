import "./Header.css";
import {NavLink} from "react-router-dom"

function Header () {

    return (
        <div id="header">
            <br></br>
            <br></br>
            <br></br>
            <NavLink to="/">
            <span id="title">
                Spice It Up!
            </span>
            </NavLink>
            <NavLink to="/form">
                <span id="new-dish-button">Add a Dish!</span>
            </NavLink>
        </div>
    )
};

export default Header;