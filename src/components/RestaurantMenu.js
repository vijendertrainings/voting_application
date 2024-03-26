import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_API_URL} from "../constants";

const RestaurantMenu=()=>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log("The value of params is " + resId);

    if (resInfo === null || resInfo === undefined) return <Shimmer />;
    console.log("The value of resInfo1 is as follows");
    console.log(resInfo?.cards[2]);
    
    const {name, cuisines, costForTwoMessage} =resInfo?.cards[0]?.card?.card?.info;
    console.log("The value of name is " + name);
    // const {itemCards} =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel;
    // console.log("The value of itemCards is " + itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* <h2>Menu</h2>
            <ul>
                {itemCards.map(item =><li key={item.card.info.id}>{item.card.info.name}</li>)}
                
            </ul> */}
        </div>
    );
}

export default RestaurantMenu;