import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const {loggedInUser} = useContext(UserContext)
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    totalRatingsString,
  } = resData?.info || {};

  return (
    <div className="m-4 p-4 w-[244px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        alt="res-logo"
        className="rounded-lg w-[200px] h-[200px]"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <p>{totalRatingsString} STARS</p>
      <p>Delivery Time: {sla?.deliveryTime} mins</p>
      <p>Average Rating: {avgRating} ⭐</p>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

//Higher order Component

//Input - RestaurantCard ==> RestaurantCardOpen

export const withOpen = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white px-2 mx-2 rounded-lg">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
