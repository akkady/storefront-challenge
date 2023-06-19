import "./filter.scss";
const FilterSection = () => {
  return (
    <aside className="filter-aside">
      <div className="fixed">
        <h3 className="filter-title">Filter</h3>
        <div className="filter-section">
          <h4 className="section-title">Category</h4>
          <ul className="category-list">
            <li className="category-item">Men's Clothing</li>
            <li className="category-item">Women's Clothing</li>
            <li className="category-item">Electronics</li>
            <li className="category-item">Home &amp; Kitchen</li>
          </ul>
        </div>
        <div className="filter-section">
          <h4 className="section-title">Price</h4>
          <input type="range" className="price-slider" min="0" max="100" />
        </div>
        <div className="filter-section">
          <h4 className="section-title">Rating</h4>
          <ul className="rating-list">
            <li className="rating-item">4 stars &amp; up</li>
            <li className="rating-item">3 stars &amp; up</li>
            <li className="rating-item">2 stars &amp; up</li>
            <li className="rating-item">1 star &amp; up</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
export default FilterSection;
