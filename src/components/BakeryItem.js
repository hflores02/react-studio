// TODO: create a component that displays a single bakery item
export function BakeryItem({item, handleClick, image}) {
    return (
        <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <img src={image}></img >
            <button onClick={() => handleClick(item.price, item.name)}>Add to Cart!</button>
        </div>
    )
}