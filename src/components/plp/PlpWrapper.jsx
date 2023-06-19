import FilterSection from "./FilterSection";
import Plp from "./Plp";
import { useState } from "react";

const PlpWrapper = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [ratingFilter, setratingFilter] = useState(0);

  return (
    <>
      <FilterSection
        categoryCb={setCategoryFilter}
        ratingCb={setratingFilter}
      />
      <Plp categoryFilter={categoryFilter} ratingFilter={ratingFilter} />
    </>
  );
};
export default PlpWrapper;
