import { IMG_CDN_URL } from "../constants";
const RestaurantCard=({name, cuisines, cloudinaryImageId, avgRating})=>{
    
    // const {name, cuisines, cloudinaryImageId, avgRating}=restaurant;
    // console.log({name});
    return(
        <div className="m-4 p-4 w-[225px] rounded-lg style bg-blue-50 hover:bg-blue-100">
            <img src={IMG_CDN_URL+cloudinaryImageId} className="rounded-lg"></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.length>0?cuisines.join(", "):console.log('hi there')}</h4>
            <h4>{avgRating}</h4>
        </div>
    );
}


export default RestaurantCard;