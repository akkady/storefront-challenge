import { useDispatch, useSelector } from "react-redux";
import { selectProductById } from "../../features/productSlice";
import PropTypes from "prop-types";
import { useState } from "react";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import {
  removeProductFromCart,
  updateQuantity,
} from "../../features/cartSlice";
import { Link } from "react-router-dom";

const CartIem = ({ entry }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(Number(entry.quantity) || 0);

  const product = useSelector((state) =>
    selectProductById(state, entry.productId)
  );
  const removeItem = () => {
    dispatch(removeProductFromCart(entry));
  };
  const updateQty = (increment) => {
    const value = quantity + increment;
    setQuantity(value);
    dispatch(updateQuantity({ ...entry, quantity: value }));
  };
  return (
    <article className="cart-item">
      <div className="cart-image">
        <img
          src={product?.image}
          alt={product?.title}
          className="cart-item-image"
        />
      </div>
      <div className="cart-item-details">
        <h5 className="cart-item-title">
          <Link to={`/product/${entry.productId}`}>{product?.title}</Link>
        </h5>
        <p className="cart-item-category">{product?.category}</p>
        <p className="cart-item-price">${product?.price * quantity}</p>
      </div>
      <div className="cart-item-qty">
        <button className="update-qte" onClick={() => updateQty(1)}>
          <HiOutlinePlusCircle />
        </button>
        <span>{quantity}</span>
        <button
          className="update-qte"
          disabled={quantity <= 0}
          onClick={() => updateQty(-1)}
        >
          <HiOutlineMinusCircle />
        </button>
      </div>
      <div className="cart-item-remove">
        <button onClick={removeItem}>
          <MdDeleteForever />
        </button>
      </div>
    </article>
  );
};

CartIem.propTypes = {
  entry: PropTypes.shape({
    productId: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartIem;
