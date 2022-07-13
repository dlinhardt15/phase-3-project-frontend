import React, {useState} from "react";

function DishCard ({dish, onRemoveDish, editDescription, setDescription, description}) {
    
    
    function handleRemove(e) {
        e.stopPropagation()
        fetch("http://localhost:9292/dishes/" + dish.id, {
            method:'DELETE'
        })
        onRemoveDish(dish)
    }
    const [toggle, setToggle] = useState(false)
    
    function handleEdit(e) {
        e.stopPropagation()
        setToggle(toggle ? false : true)
    }

    function submitDescription (e) {
        // console.log(e.target.value)
        const newDescription = e.target.value;
        // console.log(newDescription)
        setDescription(newDescription)
    }
   
    return (
        <div>
            <div id="dish-name">{dish.name}</div>
            <img id="dish-image" src={dish.image} alt=""/>
            <div id="dish-description">{dish.description}</div>
            <button onClick={handleRemove} className="deletebtn">Delete Dish</button>
            <button onClick={handleEdit} className="edit-btn">Edit Description</button>
            <form id="edit-description-form"  onSubmit={(e) => {
                e.preventDefault()
                editDescription(dish.id)
            }} style={{ display: toggle ? "block" : "none" }}>
                <input id="edit-description-input" placeholder="Put description here" name="description" type="text" value={description} onChange={submitDescription}></input>
                <button>Change It Up</button>
            </form>
        </div>
    )
}


export default DishCard