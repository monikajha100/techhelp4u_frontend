import React from "react";
import Blog from "./Blog";
// import Sidebar from "../components/Sidebar";

const blogs = [
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "Dolorum optio tempore voluptas dignissimos cumque",
    date: "Aug 19,2025",
    comments: 12,
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed alias autem ducimus necessitatibus, facere earum laborum nulla a inventore quod deserunt, nesciunt pariatur minus, ratione dignissimos doloribus voluptates culpa?",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Nisi magni odit consequatur autem nulla dolorem",
    date: "Aug 20,2025",
    comments: 24,
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed alias autem ducimus necessitatibus, facere earum laborum nulla a inventore quod deserunt, nesciunt pariatur minus, ratione dignissimos doloribus voluptates culpa?",
  },
];

function Blogpage() {
  return (
    <div>
      {/* Full width breadcrumb + heading */}
      

      {/* Blogs section */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {blogs.map((blog, index) => (
            <Blog key={index} {...blog} />
          ))}
        </div>
        {/* <div>
          <Sidebar />
        </div> */}
      </div>
    </div>
  );
}

export default Blogpage;
