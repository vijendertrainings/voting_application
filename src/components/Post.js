import Comment from "./Comment";
import { HeartIcon } from '@heroicons/react/24/solid'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid'
const Post=({details, likes_count, comments_count})=>{
    console.log(details);
    return (
        <>
            <div className="rounded-lg mb-2 p-4 bg-white shadow-lg">
                {/* <p>Second query message = {feed_data[1].query_title}</p> */}
                <div class="flex min-w-0 gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src='https://images.unsplash.com/photo-1711216818787-20d250a3dca3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Feed Image"></img>
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Leslie Alexander</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">11 hrs</p>
                    </div>
                    
                </div>
                <p>
                    {details}
                </p>
                {/* <p className="my-4">We're looking for a skilled AI Architect in Bengaluru! If you have 10+ years of experience with Python, Data Science (AI/ML), SQL, Regression, Time Series Logistic Regression, Naive Bayes, kNN, SVM, Decision Trees, Random Forest, k-Means Clustering NLP, Text Mining, LLM (GPTs), we'd love to hear from you!</p>
                <p className="my-4">Apply by sharing your profile with keerti.s@careerxperts.com. Don't miss out on this opportunity! Follow me for more job updates.</p> */}

                <p className="my-4 h-10 bg-slate-100 flex items-center pl-4 text-sm">4 likes  8 comments</p>
                <div className="flex items-center">
                    <HeartIcon className="h-4 w-4 mr-2 text-black" />
                    <p className="text-black mr-4">Like</p> {/* Text */}
                    <ChatBubbleBottomCenterIcon className="h-4 w-4 mr-2 text-black" /> {/* Icon */}
                    <p className="text-black mr-4">Comment</p> {/* Text */}
                    <HeartIcon className="h-4 w-4 mr-2 text-black" /> {/* Icon */}
                    <p className="text-black">Share</p> {/* Text */}
                </div>
                {/* <hr class="w-9/12 h-0.5 mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
                <hr className="mt-4"></hr>
                <div class="flex min-w-0 gap-x-4 mt-4">
                    <img className="h-9 w-9 flex-none rounded-full bg-gray-50" src='https://images.unsplash.com/photo-1711216818787-20d250a3dca3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Feed Image"></img>
                    <div className="flex items-center min-w-0 flex-auto">
                        {/* <input value={userComment} id="username" name="username" type="username" autoComplete="username" onChange={(e) => setUserComment(e.target.value)} className="w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-100 sm:text-sm sm:leading-6"></input> */}
                        <textarea id="about" onChange={(e) => setUserComment(e.target.value)} name="about" rows="1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>                        
                        {/* <button onClick={handleSaveComment(postID)}  className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 ml-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Post</button> */}
                        {/* <PaperAirplaneIcon className="h-4 w-4 mr-2 text-black" /> Icon */}
                    </div>
                    
                </div>
                {/* {console.log(feedPosts[0].comments[1].details)} */}
                {/* {feedPosts[0].comments.map((comment)=>(
                    <Comment
                        key={comment.id} 
                        user_img_id="https://images.unsplash.com/photo-1711216818787-20d250a3dca3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        comment={comment.details} 
                        comment_date={comment.date}/>
                    ))} */}
                
                {/* <Comment user_img_id="https://images.unsplash.com/photo-1711216818787-20d250a3dca3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" comment="comment2" comment_date="today"/> */}

            </div>
        </>
    );


}

export default Post;