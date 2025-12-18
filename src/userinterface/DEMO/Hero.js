import React, { useState,useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: "https://static.vecteezy.com/system/resources/previews/004/755/606/large_2x/minimal-work-space-creative-flat-lay-of-workspace-desk-top-view-office-desk-with-laptop-mock-up-notebooks-and-plant-on-white-wooden-background-top-view-with-copy-space-flat-laygraphy-photo.jpg",
    title: "Welcome to TECHhelp4U",
    subtitle: "Your trusted tech community",
    button: "Get Started",
  },
  {
    id: 2,
    image: "https://as2.ftcdn.net/jpg/03/00/56/61/1000_F_300566136_b8TwZKGOqvkrTiu2L0ZIU2I5mLuypbHH.jpg",
    title: "Where Passion Meets Possibility",
    subtitle: "Explore. Learn. Grow.",
    button: "Get Started",
  },
];

function Hero() {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();


    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 8000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
        
            {slides.map((slide, index) => (
                <div key={slide.id}
                    className={`absolute inset-0   transition-opacity duration-1000 ease-in-out ${
                    index === current ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    }}
                >

                    <div className="absolute inset-0 bg-white/70 z-0"></div>

                    <div className=" relative w-full h-full z-10  bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 drop-shadow-lg"> 
                            {slide.id === 1 ? (
                                <>
                                Welcome to{" "}
                                <span style={{color: "#2563eb"}}>
                                    TECH<span style={{ color: "#111827" }}>help4U</span>
                                </span>
                                </>
                            ) : (
                                <span className="bg-gradient-to-r from-gray-700 via-blue-500 to-gray-700 bg-clip-text text-transparent">{slide.title}</span>
                            )}
                            
                        </h1>
                        <p className="text-lg md:text-2xl mt-4 text-gray-500"> {slide.subtitle} </p>
                       <button
  onClick={() => navigate('/contact')}
  className="mt-6 px-6 py-3 bg-[#0d6efd] text-white rounded-full text-lg font-medium hover:bg-blue-500 cursor-pointer transition"
>
  {slide.button}
</button>
                    </div>
                </div>
            ))}

        
            <button onClick={prevSlide}
                    className="absolute z-20 top-1/2 left-4 transform -translate-y-1/2  rounded-full text-gray-400 hover:text-gray-500"
            >
                <ChevronLeft size={32} />
            </button>

        
            <button onClick={nextSlide}
                    className="absolute z-20 top-1/2 right-4 transform -translate-y-1/2  rounded-full text-gray-400 hover:text-gray-500  "
            >
                <ChevronRight size={32} />
            </button>
        </div>
    );
}

export default Hero;