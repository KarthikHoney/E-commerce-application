import './index.css'

const CartItems = prop => {
  const {itemsDetails} = prop
  const {name, weight, price, image} = itemsDetails

  return (
    <li>
      <div className="item-container">
        <img className="item-image" src={image} alt={name} />
        <h1 className="item-price">{price}</h1>
        <p className="item-name">{name}</p>
        <p className="item-weight">{weight}</p>
      </div>
    </li>
  )
}
export default CartItems
