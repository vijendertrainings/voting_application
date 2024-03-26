import { HeartIcon } from '@heroicons/react/24/solid'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid'
const Feed=({})=>{
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
                <p className="my-4">We're looking for a skilled AI Architect in Bengaluru! If you have 10+ years of experience with Python, Data Science (AI/ML), SQL, Regression, Time Series Logistic Regression, Naive Bayes, kNN, SVM, Decision Trees, Random Forest, k-Means Clustering NLP, Text Mining, LLM (GPTs), we'd love to hear from you!</p>
                <p className="my-4">Apply by sharing your profile with keerti.s@careerxperts.com. Don't miss out on this opportunity! Follow me for more job updates.</p>

                <p className="my-4 h-10 bg-slate-100 flex items-center pl-4 text-sm">4 likes  8 comments</p>
                <div className="flex items-center">
                    <HeartIcon className="h-4 w-4 mr-2 text-black" />
                    <p className="text-black mr-4">Like</p> {/* Text */}
                    <ChatBubbleBottomCenterIcon className="h-4 w-4 mr-2 text-black" /> {/* Icon */}
                    <p className="text-black mr-4">Comment</p> {/* Text */}
                    <HeartIcon className="h-4 w-4 mr-2 text-black" /> {/* Icon */}
                    <p className="text-black">Share</p> {/* Text */}
                </div>
            </div>
            
            <div className="rounded-lg mb-2 p-2  bg-white shadow-lg">
                <p>Feed Post 2</p>
                {/* <p>Second query message = {feed_data[1].query_title}</p> */}
            </div>
        </>
    );


}

export default Feed;