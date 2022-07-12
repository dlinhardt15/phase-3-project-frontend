import React from "react";

function DishCard ({dish, onRemoveDish}) {
    
    
    function handleRemove(e) {
        e.stopPropagation()
        fetch("http://localhost:9292/dishes/" + dish.id, {
            method:'DELETE'
        })
        onRemoveDish(dish)
    }

    return (
        <div>
            <div id="dish-name">{dish.name}</div>
            <img id="dish-image" src={dish.image} alt=""/>
            <br></br>
            <button onClick={handleRemove} className="deletebtn">Delete Dish</button>
        </div>
    )
}


export default DishCard