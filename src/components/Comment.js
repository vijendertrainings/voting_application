import {useState} from "react";

const Comment=({user_img_id, comment, comment_date})=>{
    return (
        <>
            <div class="flex min-w-0 gap-x-4 mt-4">
                <img className="h-9 w-9 flex-none rounded-full bg-gray-50" src={user_img_id} alt="Feed Image"></img>
                <div className="flex items-center min-w-0 flex-auto">
                    <p className="flex w-full rounded-md border border-transparent bg-blue-50 px-2 py-2 text-sm font-medium shadow-sm">{comment}</p>
                </div>
            </div>
        </>
    );


}

export default Comment;