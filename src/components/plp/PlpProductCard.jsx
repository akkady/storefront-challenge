import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const PlpProductCard = ({ product }) => {
  const { title, price, category, image } = product;

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-details">
        <span className="product-catagory">{category}</span>
        <h4 className="product-title">
          <Link to={`product/${product.id}`}>{title}</Link>
        </h4>
        <div className="product-bottom-details">
          <p className="product-price">${price}</p>
          <Link to="#" className="add-to-cart">
            <MdAddShoppingCart />
          </Link>
        </div>
      </div>
    </article>
  );
};
export default PlpProductCard;
