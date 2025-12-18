import React from "react";
import { UserIcon, ClockIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

function Blog({image,title,date,comments,about}){
    return(
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
            <img src={image} alt={title} className="w-full h-90 oject-cover"/>
            <div className="p-4">
                <h2 className="font-semibold text-xl mb-3 transition hover:text-red-500 cursor-pointer leading-snug">{title}</h2>
                {/* <div className="text-sm text-gray-500 mb-3">
                    {date} • {comments} Comments
                </div> */}
                <div className="flex items-center text-gray-500 text-sm space-x-4 mt-2 mb-3">
                    <div className="flex items-center space-x-1">
                    <UserIcon className="h-4 w-4" /> <span>John Doe</span>
                    </div>
                    <div className="flex items-center space-x-1">
                    <ClockIcon className="h-4 w-4" /> <span>{date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                    <ChatBubbleLeftRightIcon className="h-4 w-4" /> <span>{comments}</span>
                    </div>
                </div>

                <p className="text-md text-gray-700 mb-2">{about}</p>
                {/* <div className="flex justify-end">
                    <button className=" text-white bg-red-500 hover:bg-red-400 cursor-pointer transition rounded-md px-5 py-2">Read More</button>
                </div> */}
            </div>
        </div>
    )
}

export default Blog;