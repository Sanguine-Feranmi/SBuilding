import { Star, StarHalf } from 'lucide-react';
import imgg from '/wade.png';
import { Flex } from "@radix-ui/themes";
import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
Button

let star = [
    { id: 1, icon: <Star size={20} className="text-yellow-400" /> },
    { id: 2, icon: <Star size={20} className="text-yellow-400" /> },
    { id: 3, icon: <Star size={20} className="text-yellow-400" /> },
    { id: 4, icon: <Star size={20} className="text-yellow-400" /> },
    { id: 5, icon: <StarHalf size={20} className="text-yellow-400" /> }
];
let testy = [ 
    { title: 'Exceptional Service', desc: 'Estatein provided exceptional service throughout my home buying journey. Their team was knowledgeable, responsive, and truly cared about finding the perfect property for me.', name: 'Wade Warren', country: 'USA, California', img: imgg },
    { title: 'Exceptional Service', desc: 'Estatein provided exceptional service throughout my home buying journey. Their team was knowledgeable, responsive, and truly cared about finding the perfect property for me.', name: 'Wade Warren', country: 'USA, California', img: imgg },
    { title: 'Exceptional Service', desc: 'Estatein provided exceptional service throughout my home buying journey. Their team was knowledgeable, responsive, and truly cared about finding the perfect property for me.', name: 'Wade Warren', country: 'USA, California', img: imgg },
    { title: 'Exceptional Service', desc: 'Estatein provided exceptional service throughout my home buying journey. Their team was knowledgeable, responsive, and truly cared about finding the perfect property for me.', name: 'Wade Warren', country: 'USA, California', img: imgg },
    { title: 'Exceptional Service', desc: 'Estatein provided exceptional service throughout my home buying journey. Their team was knowledgeable, responsive, and truly cared about finding the perfect property for me.', name: 'Wade Warren', country: 'USA, California', img: imgg },
    { title: 'Exceptional Service', desc: 'Estatein provided exceptional service throughout my home buying journey. Their team was knowledgeable, responsive, and truly cared about finding the perfect property for me.', name: 'Wade Warren', country: 'USA, California', img: imgg },
    { title: 'Exceptional Service', desc: 'Estatein provided exceptional service throughout my home buying journey. Their team was knowledgeable, responsive, and truly cared about finding the perfect property for me.', name: 'Wade Warren', country: 'USA, California', img: imgg },
    { title: 'Exceptional Service', desc: 'Estatein provided exceptional service throughout my home buying journey. Their team was knowledgeable, responsive, and truly cared about finding the perfect property for me.', name: 'Wade Warren', country: 'USA, California', img: imgg },
    { title: 'Exceptional Service', desc: 'Estatein provided exceptional service throughout my home buying journey. Their team was knowledgeable, responsive, and truly cared about finding the perfect property for me.', name: 'Wade Warren', country: 'USA, California', img: imgg },
    { title: 'Exceptional Service', desc: 'Estatein provided exceptional service throughout my home buying journey. Their team was knowledgeable, responsive, and truly cared about finding the perfect property for me.', name: 'Wade Warren', country: 'USA, California', img: imgg },
    { title: 'Exceptional Service', desc: 'Estatein provided exceptional service throughout my home buying journey. Their team was knowledgeable, responsive, and truly cared about finding the perfect property for me.', name: 'Wade Warren', country: 'USA, California', img: imgg },
    { title: 'Exceptional Service', desc: 'Estatein provided exceptional service throughout my home buying journey. Their team was knowledgeable, responsive, and truly cared about finding the perfect property for me.', name: 'Wade Warren', country: 'USA, California', img: imgg },
];

export default function Testimonial() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    
    // Create infinite array by duplicating testimonials
    const infiniteTestimonials = [...testy, ...testy, ...testy];
    
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;
        
        const handleScroll = () => {
            const scrollLeft = scrollContainer.scrollLeft;
            const containerWidth = scrollContainer.clientWidth;
            const cardWidth = 520; // card width + gap
            
            // Calculate which card is in the center of the viewport
            const centerPosition = scrollLeft + containerWidth / 2;
            const currentIndex = Math.floor(centerPosition / cardWidth);
            setActiveIndex(currentIndex % testy.length);
            
            // Reset scroll position for infinite effect
            const maxScroll = cardWidth * testy.length;
            if (scrollLeft >= maxScroll * 2) {
                scrollContainer.scrollLeft = maxScroll;
            } else if (scrollLeft <= 0) {
                scrollContainer.scrollLeft = maxScroll;
            }
        };
        
        scrollContainer.addEventListener('scroll', handleScroll);
        // Set initial scroll position to middle set
        scrollContainer.scrollLeft = 520 * testy.length;
        
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <div>
            <div className="text-white mb-8">
                <h1 className="text-3xl font-bold mb-4">What our client says</h1>
                <p className="text-gray-400">Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
            </div>
            <div className="relative">
                <div 
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide pb-4" 
                    style={{scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth'}}
                >
                    {infiniteTestimonials.map((item, index) => {
                        const isActive = (index % testy.length) === activeIndex;
                        return (
                            <div 
                                key={index} 
                                className={`border border-gray-700 rounded-2xl p-6 bg-[#111] flex-shrink-0 transition-all duration-300 ${
                                    isActive ? 'min-w-[500px] max-w-[500px] scale-100' : 'min-w-[400px] max-w-[400px] scale-90 opacity-70'
                                }`}
                            >
                                <div className="flex gap-1 mb-4">
                                    {star.map((starItem) => (
                                        <div key={starItem.id}>
                                            {starItem.icon}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-400 italic mb-6">"{item.desc}"</p>
                                <div className="flex items-center gap-3">
                                    <Flex align="center">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    </Flex>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-white">{item.name}</h3>
                                        <p className="text-gray-500 text-sm">{item.country}</p>
                                        <Button className="text-white">ewerh</Button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none"></div> */}
            </div>
        </div>
    )
}