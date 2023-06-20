import { useDispatch, useSelector } from "react-redux";
import CartIem from "./CartIem";
import "./cart.scss";
import { removeAllFromCart, selectCartEntries } from "../../features/cartSlice";
import AddToCartAlert from "./AddToCartAlert";
import useCalculateCartTotal from "../../util/hooks/useCalculateCartTotalPrice";
import { useEffect } from "react";
const Cart = () => {
  const dispatch = useDispatch();
  const cartEntries = useSelector(selectCartEntries);
  const totalPrice = useCalculateCartTotal(cartEntries);
  useEffect(() => {}, [cartEntries]);
  let content = "";
  if (cartEntries?.length > 0) {
    content = (
      <section className="cart">
        <div className="cart-header">
          <h3 className="cart-title">Shopping Cart</h3>
        </div>
        <div className="cart-body">
          <section className="cart-items">
            <div>
              <button
                id="remove-btn"
                onClick={() => dispatch(removeAllFromCart())}
              >
                Remove All
              </button>
            </div>
            {cartEntries.map((entry) => (
              <CartIem key={entry.productId} entry={entry} />
            ))}
          </section>
          <div className="cart-total">
            <div className="cart-checkout">
              <h5>
                Total Price:
                <span className="cart-total-amount">${totalPrice}</span>
              </h5>
              <h5>
                Total items:
                <span className="cart-total-amount">{cartEntries?.length}</span>
              </h5>
              <div>
                <button className="checkout-btn">Checkout</button>
              </div>
            </div>
          </div>
        </div>
        <AddToCartAlert />
      </section>
    );
  } else {
    content = (
      <section className="empty-cart">
        You have no product in your cart
        <AddToCartAlert />
      </section>
    );
  }
  return content;
};

export default Cart;
