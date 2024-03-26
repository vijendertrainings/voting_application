import {useEffect, useState} from "react";
import { MENU_API_URL} from "../constants";

const useRestaurantMenu = (resId)=>{
    const[resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenuData();
    }, []);

    const fetchMenuData = async()=>{
        console.log("The URL to fetch data is "+MENU_API_URL+resId);
        const data = await fetch(MENU_API_URL+resId);
        
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;