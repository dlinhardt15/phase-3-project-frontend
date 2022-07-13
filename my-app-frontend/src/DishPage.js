import "./DishPage.css";
import DishCard from "./DishCard";

function DishPage ({dishes, onRemoveDish, editDescription, setDescription, description}) {
    return (
        <div className="grid">
            {dishes.map(dish => {
                return <DishCard key={dish.id} dish={dish} onRemoveDish={onRemoveDish} editDescription={editDescription} setDescription={setDescription} description={description}/>
            })}
        </div>
    )
}

export default DishPage;