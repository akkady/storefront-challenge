import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
const CartButton = () => {
  return (
    <Link className="cart-button" to="/cart">
      <MdOutlineShoppingCart />
      <span className="cart-label">cart</span>
      <span className="cart-count">3</span>
    </Link>
  );
};
export default CartButton;
