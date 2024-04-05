import {useState, useEffect} from "react";
import { HeartIcon } from '@heroicons/react/24/solid'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid'
import Post from "./Post";

//component for displaying the feed data
const Feed=({})=>{
    const [feedPosts, setFeedPosts] = useState('');
    const [userComment, setUserComment] = useState('');
    const handleSaveComment = () => {
        // saveUserComment(userComment);
    };

    // const saveUserComment = async (userComment) => {
    //     try {
    //         const post={
    //             "post_details": userComment,
    //             "post_image_ids": ["image1_id", "image2_id"],
    //             "likes_count": 0,
    //             "comments_count": 0,
    //             "posted_by_userid": "25",
    //             "tags": ["tag1", "tag2"],
    //             "comments": [""]
    //         }
    //         console.log(`Inside the saveUserComment function. UserComment=${userComment}`);
    //         const response = await fetch('http://localhost:3000/posts', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(post),
    //       });
    
    //       if (response.ok) {
    //         const data = await response.json();
    //         console.log("Comment has been saved successfully.")
    //         setUserComment("");
    //       } else {
    //         console.error('User comment has not been saved');
    //       }
    //     } catch (error) {
    //       console.error('Some error in saving the user comment:', error);
    //     }
    //   };
      
      
    useEffect(()=>{
        getListOfPosts();
   }, []);

   async function getListOfPosts(){
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
        const response = await fetch("http://ec2-3-85-45-247.compute-1.amazonaws.com:3000/posts/", requestOptions);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        // Parse the response body as JSON
        const data = await response.json();
        console.log("The response is as follows:");
        console.log(data);
        console.log("got the response from hitting the API");
        setFeedPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }    
}
    if(feedPosts ===""){
        return (
            <>
                <div>Loading the posts ... </div>
            </>
        );
    }

    return (
        <>
            {feedPosts.map((post)=>(
                <Post 
                  details="wejr jwer lkjwerl werwere"
                  likes_count={post.likes_count}
                  comments_count={post.comments_count}
                />
                ))}
            
        </>
    );


}

export default Feed;