import { Link } from "react-router-dom";
import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { id,cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    props.resData?.info;
  const { deliveryTime } = props.resData?.info?.sla;
  return (
    <Link to={`/restaurants/${id}`} className="w-80 p-4 border m-4 bg-gray-500 text-blue-100 rounded-lg">
      <img src={RES_IMG_URL + cloudinaryImageId} alt="" className="w-80 h-[300px]" />
      <h2 className="font-bold text-lg">{name}</h2>
      <h4>{cuisines.join(",")} </h4>
      <h4>{costForTwo}</h4>
      <h4>⭐{avgRating}</h4>
      <h4>{deliveryTime} minutes</h4>
    </Link>
  );
};
export default RestaurantCard;
