import {Component, useState} from "react";
import {useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
// import {RestaurantList} from "../constants";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { RestaurantList } from "../constants";
import LeftMenu from "./LeftMenu";
import Calendar from "./Calendar";
import SecondColumn from "./SecondColumn";

const Body=()=>{
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState(allRestaurants);
    const [searchText, setSearchText]=useState("");
    const [updateTF, setUpdateTF] = useState("False");
    const [queries, setQueries]=useState([]);
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    
 
    useEffect(()=>{
        //  getListOfQueries();
    }, []);


    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.43380119259478&lng=78.33226491154215&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);

        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setAllRestaurants(RestaurantList);
        // setting the Fitered Restaurants
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestaurants(RestaurantList);        
    }

    async function getListOfQueries(){
        const token = localStorage.getItem('token');


        const headers = {
            'Authorization': 'Bearer '+token,
            'Content-Type': 'application/json', // Optional depending on your API requirements
            // Add any other headers as needed
          };
          
          const requestOptions = {
            method: 'GET',
            headers: headers,
            // Add other options like body, credentials, etc. if needed
          };
          
          try {
            const response = await fetch("http://localhost:3000/queries/", requestOptions);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            
            // Parse the response body as JSON
            const data1 = await response.json();
            console.log("The response is as follows:");
            // console.log(data1);
            console.log("got the response from hitting the API");
            setQueries(data1);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        //   const json1 = await data1.json();
        //   console.log(json1);
        
    }

////this is the code for displaying the list of all restaurants
    // return (allRestaurants.length ===0)? <Shimmer />:(
    //     <>
    //         <div className="m-4 p-4">
    //             {<input type="text" className="border border-solid border-blue" placeholder="Search here" value={searchText} onChange={(e)=>{setSearchText(e.target.value);}}></input> }
    //             <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
    //                 const data = filterData(searchText, allRestaurants);
    //                 setFilteredRestaurants(data);
    //             }}>Search Me</button>
    //         </div>
            
    //         <div className="flex flex-wrap">
    //             {filteredRestaurants.map((restaurant)=>{
    //                 return(
    //                      <Link key={restaurant.info.id}     to={"/restaurants/"+restaurant.info.id}><RestaurantCard {...restaurant.info} /></Link>
    //                 );
    //             })

    //             }

    //         </div>
    //     </>
    // );


    // if(queries.length==0){
    //     return <Shimmer/>
    // }else
    console.log("inside the body section");
    return (
        <>
            <div className="max-w-5xl mx-auto grid grid-cols-8 gap-3">
                <div className="">
                    <LeftMenu state_prop_value={setSelectedMenuItem}/>
                </div>

                <div className="col-span-5">
                    <SecondColumn feed_data={selectedMenuItem}/>
                </div>

                <div className="col-span-2">
                    <Calendar/>
                </div>
                
                {/* <MyComponent /> */}
            </div>
            
        </>
    );
}

function filterData(searchText, allRestaurants){
    if(searchText==""){
        return allRestaurants;
    }else{
        return allRestaurants.filter((restaurant)=>restaurant.info.name.includes(searchText));
    }
    
    
}

export default Body;