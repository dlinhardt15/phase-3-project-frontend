import "./DishPage.css";
import DishCard from "./DishCard";

function DishPage ({cuisines, dishes, setDishes, onRemoveDish, editDescription, setDescription, description}) {
    
    const cuisineOptions = cuisines.map((cuisine) => {
        return <span value={cuisine.id} key={cuisine.id} onClick={() => filterDishes(cuisine)}>{cuisine.name}</span>
    })

    function filterDishes (cuisine) {
        // console.log(cuisine.id)
        const filteredDishes = dishes.filter(dish => dish.cuisine_id === cuisine.id)
        // console.log(filteredDishes)
        setDishes(filteredDishes)
    }

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
        </div> 
    )
}

export default DishPage;