import "./DishPage.css";
import DishCard from "./DishCard";
import {useState} from "react";

function DishPage ({cuisines, dishes, onRemoveDish, editDescription, setDescription, description}) {
    
    // const [presentedDishes, setPresentedDishes] = useState({})
    // const [filterToggle, setFilterToggle] = useState(true)

    // function filterDishes (id) {
    //     const filteredDishes = dishes.map(dish => {
    //         if (id === dish.cuisine_id) {
    //             return <DishCard key={dish.id} dish={dish} onRemoveDish={onRemoveDish} editDescription={editDescription} setDescription={setDescription} description={description}/>
    //         }
    //     })
    //     // console.log(filteredDishes)
    //     setFilterToggle(filterToggle ? false : true)
    //     setPresentedDishes(filteredDishes)
        
    // }
    const cuisineOptions = cuisines.map((cuisine) => {
        return <span value={cuisine.id} key={cuisine.id} onClick={() => console.log(cuisine.id)}>{cuisine.name}</span>
    })

    

    return (
        <div>
            <div id="filter-option">
                {cuisineOptions}
            </div>
            <br></br>
            <div className="grid">
                {dishes.map(dish => {
                    return <DishCard key={dish.id} dish={dish} onRemoveDish={onRemoveDish} editDescription={editDescription} setDescription={setDescription} description={description}/>
            })}
            </div>
            {/* <div className="grid">
                {presentedDishes}
            </div> */}
        </div> 
    )
}

export default DishPage;