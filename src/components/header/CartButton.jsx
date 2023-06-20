import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartCount } from "../../features/cartSlice";
const CartButton = () => {
  const count = useSelector(selectCartCount);
  return (
    <Link className="cart-button" to="/cart">
      <MdOutlineShoppingCart />
      <span className="cart-label">cart</span>
      <span className="cart-count">{count}</span>
    </Link>
  );
};
export default CartButton;
