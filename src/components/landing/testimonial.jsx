import { Star, StarHalf } from 'lucide-react';
import imgg from '/wade.png';
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const star = [
    { id: 1, icon: <Star size={20} className="text-yellow-400" /> },
    { id: 2, icon: <Star size={20} className="text-yellow-400" /> },
    { id: 3, icon: <Star size={20} className="text-yellow-400" /> },
    { id: 4, icon: <Star size={20} className="text-yellow-400" /> },
    { id: 5, icon: <StarHalf size={20} className="text-yellow-400" /> }
];

const testimonials = [
    {
        title: 'Exceptional Service',
        desc: 'Estatein provided exceptional service throughout my home buying journey. Their team was knowledgeable, responsive, and truly cared about finding the perfect property for me.',
        name: 'Wade Warren',
        country: 'USA, California',
        img: imgg,
        star
    },
    {
        title: 'Outstanding Experience',
        desc: 'The team at Estatein made my property search effortless. Their expertise and dedication helped me find my dream home quickly and efficiently.',
        name: 'Sarah Johnson',
        country: 'USA, New York',
        img: imgg,
        star
    },
    {
        title: 'Professional Service',
        desc: 'From start to finish, Estatein provided professional and reliable service. I highly recommend them for anyone looking to buy or sell property.',
        name: 'Mike Chen',
        country: 'USA, Texas',
        img: imgg,
        star
    },
    {
        title: 'Trusted Partner',
        desc: 'Estatein has been our trusted real estate partner for years. Their market knowledge and customer service are unmatched in the industry.',
        name: 'Emily Davis',
        country: 'USA, Florida',
        img: imgg,
        star
    }
];

export default function Testimonial() {
    return (
        <div className='w-full bg-[#000000] py-20'>
            <div className="text-white mb-8 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">What our client says</h1>
                <p className="text-gray-400">
                    Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
                </p>
            </div>
            <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
}
