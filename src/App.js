import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import ErrorPage from "./components/ErrorPage.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";



const BurgerKing={
    name:"Burger King",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8523266de1213e8ea57e5df4eedf747e",
    cuisines: ["Pizza", "Burger"],
    rating: "4.2"
}



const AppLayout=()=>{
    return (
        <>
        <div className="to-blue-100">
            {/* <Header></Header> */}
            <Outlet/>
        </div>
        </>
    );

}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            },           
        ],
        errorElement:<ErrorPage/>
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);