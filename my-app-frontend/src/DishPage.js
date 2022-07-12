import "./DishPage.css";
import DishCard from "./DishCard";

function DishPage ({dishes}) {
    return (
        <div className="grid">
            {dishes.map(dish => {
                return <DishCard key={dish.id} dish={dish}/>
            })}
        </div>
    )
}

export default DishPage;