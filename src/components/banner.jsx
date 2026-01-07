import { useState } from "react";

function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#0a0a0a] text-white flex items-center justify-between px-4 md:px-8 py-3 pt-16 relative overflow-hidden">
      <div className="flex items-center gap-2 text-sm md:text-base">
        <span className="text-yellow-400">✨</span>
        <span>
          Discover Your Dream Property with <span className="font-medium">Estatein</span>
          <a href="#" className="underline underline-offset-4 ml-2 hover:text-gray-300">
            Learn More
          </a>
        </span>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 flex items-center justify-center w-6 h-6 rounded-full hover:bg-gray-700 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default Banner;