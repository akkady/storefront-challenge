import { useDispatch, useSelector } from "react-redux";
import {
  resetActionStatus,
  selectCartActionStatus,
} from "../../features/cartSlice";
import { useEffect } from "react";
import "./alert.scss";
const AddToCartAlert = () => {
  const dispatch = useDispatch();
  const actionStatus = useSelector(selectCartActionStatus);
  const status = actionStatus.status;
  const disply = status != "idle";
  const message = actionStatus.message;
  useEffect(() => {
    setTimeout(() => {
      dispatch(resetActionStatus());
    }, 2000);
  }, [disply, dispatch, message]);
  return (
    disply && (
      <div
        className={`add-to-cart-alert ${
          status == "failed" ? "alert-bg-failed" : "alert-bg-success"
        }`}
      >
        {message}
      </div>
    )
  );
};
export default AddToCartAlert;
