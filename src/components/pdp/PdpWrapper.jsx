import { useSelector } from "react-redux";
import Pdp from "./Pdp";
import { selectProductById } from "../../features/productSlice";
import { useParams } from "react-router-dom";

const PdpWrapper = () => {
  const { id } = useParams();
  const product = useSelector((state) => selectProductById(state, Number(id)));
  if (!product)
    return (
      <article>
        <h3>404-Product not found</h3>
      </article>
    );

  return <Pdp product={product} />;
};
export default PdpWrapper;
