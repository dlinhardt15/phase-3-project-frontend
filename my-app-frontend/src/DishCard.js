

function DishCard ({dish}) {
    return (
        <div>
            <div id="dish-name">{dish.name}</div>
            <img id="dish-image" src={dish.image} alt=""/>
        </div>
    )
}

export default DishCard