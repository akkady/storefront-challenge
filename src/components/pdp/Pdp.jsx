import { useState } from "react";
import PropTypes from "prop-types";
import { BiMinus, BiPlus } from "react-icons/bi";
import "./pdp.scss";
import RatingStars from "../../util/RatingStars";
const Pdp = ({ product }) => {
  const [cardQty, setCardQty] = useState(0);
  const changeQte = (e) => {
    setCardQty();
    const value = e.target.value;
    if (value > 0) {
      setCardQty(value);
    }
  };
  return (
    <div className="pdp-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <p className="product-category">{product.category}</p>
        <RatingStars rate={product.rating?.rate} /> ({product.rating?.count}{" "}
        reviews)
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-actions">
          <button
            className="update-qte"
            onClick={() => setCardQty(cardQty + 1)}
          >
            <BiPlus />
          </button>
          <input
            type="number"
            step={1}
            value={cardQty}
            min={0}
            onChange={changeQte}
          />
          <button
            className="update-qte"
            disabled={cardQty <= 0}
            onClick={() => setCardQty(cardQty - 1)}
          >
            <BiMinus />
          </button>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
      </div>
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
