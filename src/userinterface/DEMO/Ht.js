import React from "react";
import { useNavigate } from 'react-router-dom';
function Hero() 
{
   const navigate = useNavigate();
  const slide = {
    image:
      "https://static.vecteezy.com/system/resources/previews/024/791/094/non_2x/team-of-corporate-people-celebration-happy-office-workers-celebrate-win-golden-cup-teamwork-trophy-and-success-persons-flat-illustration-vector.jpg",
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
            Meet the{" "}
            <span className="bg-gradient-to-r from-blue-700 to-purple-400 bg-clip-text text-transparent">
              TechHelp4U
            </span>{" "}
            Team
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-600 leading-relaxed max-w-xl mx-auto">
            Not superheroes — just students with a{" "}
            <span className="font-semibold text-blue-500">spark</span> 💡
            <br />
            Together, we’re building, supporting, and growing into something
            bigger.
          </p>

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
        Team
      </li>
    </ol>
  </nav>

  <h2 className="text-secondary">Team</h2>
</div>

    </>
  );
}

export default Hero;
