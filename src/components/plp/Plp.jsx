import { useSelector } from "react-redux";
import PlpProductCard from "./PlpProductCard";
import "./plp.scss";
import {
  selectError,
  selectProductByCategoryAndRates,
  selectStatus,
} from "../../features/productSlice";
import Spinner from "../../util/spinner/Spinner";
import { useEffect } from "react";
import AddToCartAlert from "../cart/AddToCartAlert";

const Plp = ({ categoryFilter, ratingFilter }) => {
  const products =
    useSelector((state) =>
      selectProductByCategoryAndRates(state, categoryFilter, ratingFilter)
    ) || [];
  const productsStatus = useSelector(selectStatus);

  const error = useSelector(selectError);

  let content = "";
  if (productsStatus === "succeeded") {
    content = products.map((product) => (
      <PlpProductCard key={product.id} product={product} />
    ));
  } else if (productsStatus === "loading") {
    content = (
      <div className="content-loading">
        <Spinner />
      </div>
    );
  } else if (productsStatus === "failed") {
    content = <p className="content-error">{error} :/</p>;
  }

  useEffect(() => {}, [categoryFilter, ratingFilter]);

  return (
    <section className="product-section">
      <AddToCartAlert />
      {content}
    </section>
  );
};
export default Plp;
