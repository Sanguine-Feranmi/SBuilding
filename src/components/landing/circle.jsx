import { useState, useEffect } from "react";
// import { ArrowUpRight } from "lucide-react";

export default function CircleButton() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      setRotation(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="relative w-40 h-40 flex items-center justify-center rounded-full 
                 bg-black/60 backdrop-blur-md border border-gray-500/30 
                 
                 transition-all duration-500 text-white select-none overflow-hidden"
    >
      {/* Circular Text */}
      <svg
        viewBox="0 0 100 100"
        className="absolute w-full h-full transition-transform duration-75 ease-linear"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          id="circlePath"
          d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
          fill="none"
        />

        <text
          fill="white"
          fontSize="6.5"
          fontWeight="500"
          letterSpacing="1"
        >
          <textPath href="#circlePath" startOffset="0" textLength="260">
            ✨ Discover Your Dream Property ✨ Discover Your Dream Property ✨
          </textPath>
        </text>
      </svg>

      {/* Center Arrow */}
      <div
        className="absolute flex items-center justify-center w-12 h-12 rounded-full 
                   bg-white/90 text-black  hover:bg-white 
                   transition duration-300 ease-out"
      >
        {/* <ArrowUpRight size={22} /> */}
      </div>
    </div>
  );
}
