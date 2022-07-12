import "./DishPage.css";
import DishCard from "./DishCard";

function DishPage ({dishes, onRemoveDish}) {
    return (
        <div className="grid">
            {dishes.map(dish => {
                return <DishCard key={dish.id} dish={dish} onRemoveDish={onRemoveDish}/>
            })}
        </div>
    )
}

export default DishPage;