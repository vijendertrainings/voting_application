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
   
    console.log("inside the body section");
    return (
        <>
            {/* <div className="h-10 justify-center items-center bg-gray-200 max-w-5xl mx-auto grid grid-cols-8 gap-3">
                <div className="text-center">
                    <h2 className="text-xl font-bold">Your Header Text</h2>
                </div>
            </div>
            <div className="flex items-center max-w-5xl mx-auto grid grid-cols-8 gap-3">
                <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4">
                    78
                </div>
                <div>
                    <p>Vihangans Voted So Far ....</p>
                </div>
            </div> */}
            {/* <div className="max-w-5xl mx-auto grid grid-cols-8 gap-3">
                <div className="text-center">
                    <h2 className="text-xl font-bold">Your Header Text</h2>
                </div>
            </div> */}

            <div className="text-center pt-10">
              <h1 className="text-6xl font-bold">Vihanga Voting 2024</h1>
              
              <div className="mt-4">
                <div className="flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full  bg-blue-500 flex items-center justify-center text-white text-6xl font-bold mr-4 mt-10">
                        78
                    </div>
                    <div>
                        <p className="text-4xl">Vihangans voted so far .... </p>
                    </div>
                </div>
              </div>

              <div className="mt-4">
                {/* <button className="bg-green-500 text-white px-4 py-2 text-4xl p-10">Record your Vote</button> */}
                <a href="#" class="rounded-md bg-green-800 px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">I Voted! Record my vote</a>
              </div>

              <div class="container mx-auto mt-10">
                <table class="border-collapse w-full">
                    <thead>
                    <tr>
                        <th class="border border-gray-400 px-4 py-2">Time</th>
                        <th class="border border-gray-400 px-4 py-2">Starting Point</th>
                        <th class="border border-gray-400 px-4 py-2">End Point</th>
                        <th class="border border-gray-400 px-4 py-2">Car Number and Contact person</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">7:00 am</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2" rowspan="6">Innova 1233 (White car)<br/>Sandeep P<br/>(9819727210)<br/>Anil Kumar<br/>(9986730257)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">7:20 am</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">7:40 am</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">12pm</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">12:20 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">12:40 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">1:00 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2">Innova 1233 (White car)<br/>Bhim (Raghuma Uncle driver)<br/>(7093166052)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">1:20 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">1:40 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">2:00 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">2:20 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">2:40 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">3:00 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2">Innova 1233 (White car)<br/>Venu Shikha<br/>(9849000953)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">3:20 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">3:40 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">4:00 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">4:20 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">5:00 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2">Innova 1233 (White car)<br/>Raghuma Uncle Driver<br/>(7093166052)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">5:20 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">5:40 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">6:00 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-4 py-2">6:20 pm</td>
                        <td class="border border-gray-400 px-4 py-2">Mandal Parishad Upper Primary School, Gowlidoddi</td>
                        <td class="border border-gray-400 px-4 py-2">Vihanga Front Gate (Bus Bay)</td>
                        <td class="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    </tbody>
                </table>
                </div>

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