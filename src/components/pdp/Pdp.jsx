import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BiMinus, BiPlus } from "react-icons/bi";
import "./pdp.scss";
import RatingStars from "../../util/RatingStars";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  selectEntryByProductId,
  updateQuantity,
} from "../../features/cartSlice";
import AddToCartAlert from "../cart/AddToCartAlert";
const Pdp = ({ product }) => {
  const dispatch = useDispatch();
  const cartEntry = useSelector((state) =>
    selectEntryByProductId(state, product.id)
  );
  const [cartQty, setCartQty] = useState(cartEntry?.quantity || 0);

  const changeQte = (e) => {
    setCartQty();
    const value = e.target.value;
    if (value > 0) {
      setCartQty(value);
    }
  };
  const handelAddToCart = () => {
    const entry = { productId: product.id, quantity: cartQty };
    if (cartEntry) {
      dispatch(updateQuantity(entry));
    } else {
      dispatch(addToCart(entry));
    }
  };
  useEffect(() => {}, [cartEntry]);
  return (
    <div className="pdp-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <p className="product-category">{product.category}</p>
        <RatingStars rate={product.rating?.rate} /> ({product.rating?.count}{" "}
        reviews )<h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-actions">
          <button
            className="update-qte"
            onClick={() => setCartQty(cartQty + 1)}
          >
            <BiPlus />
          </button>
          <input
            type="number"
            step={1}
            value={cartQty}
            min={0}
            onChange={changeQte}
          />
          <button
            className="update-qte"
            disabled={cartQty <= 0}
            onClick={() => setCartQty(cartQty - 1)}
          >
            <BiMinus />
          </button>
          <button
            disabled={cartQty <= 0 || cartEntry?.quantity == cartQty}
            className="add-to-cart"
            onClick={handelAddToCart}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <AddToCartAlert />
    </div>
  );
};

Pdp.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
export default Pdp;
