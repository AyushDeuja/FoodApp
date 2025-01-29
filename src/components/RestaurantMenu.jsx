import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () =>{
    const data = await fetch(
        "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Coca Cola</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
