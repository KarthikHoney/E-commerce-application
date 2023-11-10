import './index.css'
import {HiOutlineShoppingCart} from 'react-icons/hi'

const Header = prop => {
  const {title} = prop
  return (
    <div className="head-container">
      <h1 className="head">{title}</h1>
      <p className="icons">{HiOutlineShoppingCart}</p>
    </div>
  )
}
export default Header
