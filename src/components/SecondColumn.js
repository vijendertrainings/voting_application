import Post from "./Post";
import Calendar from "./Calendar";
import Login from "./Login";
import Feed from "./Feed";

const SecondColumn=({feed_data})=>{
    console.log("loading the feed for the menu = " + feed_data);
    switch(feed_data){
        case "login":
        {
            return (
                    <Login/>
            );
        }
        case "feed":
        {
            return (
                    <Feed/>
            );
        }
        case "calendar":
        {
            return (
                <Calendar/>
        );
        }

        // case "posts":
        // {
        //     return (
        //         <Post/>
        // );
        // }

        default:
        {
            return (
            <Feed/>
        );
        }

        
    }


}

export default SecondColumn;