import PropTypes from "prop-types";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RatingStars = ({ rate }) => {
  const filledStars = Math.floor(rate);
  const emptyStars = 5 - filledStars;

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(<AiFillStar key={i} />);
  }
  for (let j = 0; j < emptyStars; j++) {
    stars.push(<AiOutlineStar key={filledStars + j} />);
  }

  return <div>{stars}</div>;
};

RatingStars.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default RatingStars;
