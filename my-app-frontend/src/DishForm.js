function DishForm () {


    return (
        <form id="new-dish">
            <input id="new-name" placeholder="Name">
            </input>
            <br></br>
            <input id="new-description" placeholder="Description"></input>
            <br></br>
            <input id="new-image-url" placeholder="Image URL"></input>
            <br></br>
            <input id="new-spice" placeholder="Spice"></input>
            <br></br>
            <input id="new-cuisine" placeholder="Cuisine"></input>
        </form>
    )
}

export default DishForm