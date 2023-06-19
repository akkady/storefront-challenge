import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import "./pdp.scss";
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

export default Pdp;
