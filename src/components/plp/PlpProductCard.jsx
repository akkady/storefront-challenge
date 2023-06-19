import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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

PlpProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
export default PlpProductCard;
