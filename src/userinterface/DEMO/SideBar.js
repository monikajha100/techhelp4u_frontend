import React from "react";
import { FaSearch } from "react-icons/fa";

function Sidebar(){
    const tags=[
        "IT","Design","Development","Buisness","Smart"
    ];
    return(
        <div className="bg-white shadow-lg rounded-lg p-4">
            <div className="mb-6">
                <h3 className="font-semibold mb-2  text-lg">Search</h3>

                <div className="flex">
                    <input type="text" placeholder="Search..." className="w-full border border-gray-400 rounded-l-md px-3 py-2 focus:outline-none" />
                    <button className="bg-red-500 text-white px-4 rounded-r-md">
                        <FaSearch/>
                    </button>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Categories</h3>
                <ul className="space-y-2 text-gray-600 transition cursor-pointer">
                    <li className="hover:text-red-500">General <span className="text-gray-400">(25)</span></li>
                    <li className="hover:text-red-500">Lifestyle <span className="text-gray-400">(12)</span> </li>
                    <li className="hover:text-red-500">Travel <span className="text-gray-400">(5)</span> </li>
                </ul>
            </div>

            <div className="mb-3">
                <h3 className="font-semibold text-lg mb-2">Recent Posts</h3>
                <ul className="space-y-3">
                <li className="flex space-x-3 items-center">
                    <img src="https://images.unsplash.com/photo-1538587888044-79f13ddd7e49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN1cHxlbnwwfHwwfHx8MA%3D%3D" alt="recent" className="w-14 h-14 rounded object-cover" />
                    <div>
                        <p className="text-sm font-semibold text-gray-700 hover:text-red-500 cursor-pointer">Nihil blanditiis at in nihil autem</p>
                        <span className="text-xs text-gray-500">Jan 1, 2024</span>
                    </div>
                </li>

                <li className="flex space-x-3 items-center">
                    <img src="https://media.istockphoto.com/id/1497523107/photo/businessman-holding-black-alarm-clock-with-clockwise-countdown-from-work-to-retirement.webp?a=1&b=1&s=612x612&w=0&k=20&c=yku5VRb_Z7hqlPnrnTd6-IdAehsN8T8xx69zXwiDdZ4=" alt="recent" className="w-14 h-14 rounded object-cover"/>
                    <div>
                        <p className="text-sm font-semibold text-gray-700 hover:text-red-500 cursor-pointer">Et dolores corrupti quae illo quod dolor</p>
                        <span className="text-xs text-gray-500">Jan 1, 2024</span>
                    </div>
                </li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold text-lg mb-2  pb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span
                    key={index}
                    className="px-3 py-1 border rounded text-gray-500 cursor-pointer hover:bg-red-500 hover:text-white transition"
                    >
                    {tag}
                    </span>
                ))}
                </div>
            </div>


        </div>
    )
}
export default Sidebar;