import "./DishPage.css";
import DishCard from "./DishCard";

function DishPage ({dishes}) {
    return (
        <div>
            {dishes.map(dish => {
                return <DishCard key={dish.id} dish={dish}/>
            })}
        </div>
    )
}

export default DishPage;