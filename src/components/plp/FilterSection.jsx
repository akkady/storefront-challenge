import PropTypes from "prop-types";
import "./filter.scss";
import RatingStars from "../../util/RatingStars";
import { useSelector } from "react-redux";
import { selectAllCategories } from "../../features/categorySlice";
import { AiOutlineClear } from "react-icons/ai";

const FilterSection = ({ categoryCb, ratingCb }) => {
  const categories = useSelector(selectAllCategories) || [];
  const preventFormAction = (e) => {
    e.preventDefault();
  };
  return (
    <aside className="filter-aside">
      <div className="fixed">
        <h3 className="filter-title">Filter By</h3>
        <div className="filter-section">
          <h4 className="section-title">Category</h4>
          <form onSubmit={preventFormAction}>
            <fieldset id="gategories">
              <ul className="category-list">
                {categories.map((category, index) => (
                  <li key={index} className="category-item">
                    <input
                      type="radio"
                      name="category"
                      id={`category_${index}`}
                      onChange={() => categoryCb(category)}
                    />
                    <label htmlFor={`category_${index}`}>{category}</label>
                  </li>
                ))}
              </ul>
            </fieldset>
          </form>
        </div>
        <div className="filter-section">
          <h4 className="section-title">Rating</h4>
          <form onSubmit={preventFormAction}>
            <fieldset id="rates">
              <ul className="rating-list">
                <li className="rating-item">
                  <input
                    type="radio"
                    name="category"
                    id="rate_5"
                    onChange={() => ratingCb(4)}
                  />
                  <label htmlFor="rate_5">
                    <RatingStars rate={5} />
                  </label>
                </li>
                <li className="rating-item">
                  <input
                    type="radio"
                    name="category"
                    id="rate_4"
                    onChange={() => ratingCb(3)}
                  />
                  <label htmlFor="rate_4">
                    <RatingStars rate={4} />
                  </label>
                </li>
                <li className="rating-item">
                  <input
                    type="radio"
                    name="category"
                    id="rate_3"
                    onChange={() => ratingCb(2)}
                  />
                  <label htmlFor="rate_3">
                    <RatingStars rate={3} />
                  </label>
                </li>
                <li className="rating-item">
                  <input
                    type="radio"
                    name="category"
                    id="rate_2"
                    onChange={() => ratingCb(1)}
                  />
                  <label htmlFor="rate_2">
                    <RatingStars rate={2} />
                  </label>
                </li>
                <li className="rating-item">
                  <input
                    type="radio"
                    name="category"
                    id="rate_1"
                    onChange={() => ratingCb(0)}
                  />
                  <label htmlFor="rate_1">
                    <RatingStars rate={1} />
                  </label>
                </li>
              </ul>
            </fieldset>
          </form>
        </div>
        <div className="filter-section">
          <h4 className="section-title">Clear Filter</h4>
          <form action="/">
            <fieldset>
              <button className="clear-btn">
                <AiOutlineClear />
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </aside>
  );
};

FilterSection.propTypes = {
  categoryCb: PropTypes.func,
  ratingCb: PropTypes.func,
};
export default FilterSection;
