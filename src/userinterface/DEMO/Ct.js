import React from "react";
import { useNavigate } from 'react-router-dom';
function Hero() {
   const navigate = useNavigate();
  const slide = {
    image:
      "https://www.pexels.com/photo/black-iphone-4-263564/",
    title: "Welcome to TECHhelp4U",
    subtitle: "Your trusted tech community",
    button: "Join us",
  };

  return (
    <>
      {/* Hero Section */}
      
      <div
        className="relative w-full h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl px-6">
<h1 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-4">
  <span className="text-black">Contact </span>
  <span className="bg-gradient-to-r from-blue-700 to-purple-400 bg-clip-text text-transparent inline-block">
    TechHelp4U
  </span>
</h1>


          <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-600 leading-relaxed max-w-xl mx-auto">
            We’re all ears and hearts.{" "}
            <span className="font-semibold text-blue-500">Drop us a message -</span> 💡
            <br />
            whether you want to volunteer, collaborate, or just talk about tech over chai.


Or use the form below — let’s make something meaningful, together.

          </p>
          
            


— 

 <button
  onClick={() => navigate('/contact')}
  className="mt-6 px-6 py-3 bg-[#0d6efd] text-white rounded-full text-lg font-medium hover:bg-blue-500 cursor-pointer transition"
>
  {slide.button}
</button>
        </div>
      </div>

      {/* Team Section */}
<div className="container" style={{ marginTop: 54 }}>
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb justify-content-start mb-3">
      <li className="breadcrumb-item">
        <a href="home">Home</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Contact
      </li>
    </ol>
  </nav>

  <h2 className="text-secondary">Contact</h2>
</div>

    </>
  );
}

export default Hero;
