import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PropertyCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () =>
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="bg-[#141415] border border-white/10 rounded-2xl p-4 space-y-4">
      {/* THUMBNAILS */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`min-w-[90px] h-[60px] rounded-lg overflow-hidden border 
              ${i === index ? "border-purple-500" : "border-white/10"}`}
          >
            <img src={img} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* MAIN IMAGE */}
      <div className="relative grid md:grid-cols-2 gap-4">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            className="rounded-xl object-cover w-full h-[420px]"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>

        {images[index + 1] && (
          <img
            src={images[index + 1]}
            className="rounded-xl object-cover w-full h-[420px]"
          />
        )}

        {/* CONTROLS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 bg-black/40 px-4 py-2 rounded-full">
          <button onClick={prev}>
            <ChevronLeft className="text-white" />
          </button>
          <button onClick={next}>
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
