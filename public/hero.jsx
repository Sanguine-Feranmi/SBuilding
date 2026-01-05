import imm from '/landing.png'
import find from '/find.png'
import invest from '/invest.png'
import unlock from '/unlock.png'
import effort from '/effort-manage.png'
import CircleButton from '../src/components/landing/circle'
import { FeaturedProp } from '../src/components/properties/featuredProp'
import Testimonial from '../src/components/landing/testimonial'
import Faq from '../src/components/landing/faq'
import Stat from '@/components/landing/stat'


const manage = [
  { icon: find, label: "Find Your Dream Home" },
  { icon: unlock, label: "Unlock Property Value" },
  { icon: effort, label: "Effortless Property Management" },
  { icon: invest, label: "Smart Investments, Informed Decisions" },
]

export default function Hero() {
  return (
    <>
      <div className="flex flex-col w-full md:flex-row-reverse gap-8 mb-20 items-center md:items-stretch">
        {/* Image Section */}
        <div className="imgPart relative flex justify-center items-center bg-gray-900 md:w-1/2 rounded-b-3xl w-full overflow-hidden shadow-lg">
          <img
            src={imm}
            alt="Landing"
            className="w-full h-[260px] md:h-full object-cover md:absolute md:bottom-0"
          />
          <div className="absolute -bottom-10 md:top-10 md:-left-10">
            <CircleButton />
          </div>
        </div>
        {/* Text Section */}
        <div className="txtPart text-white mt-10 md:mt-0 z-10 flex flex-col gap-6 md:w-1/2 md:gap-8 px-4">
          <h1 className="text-3xl md:text-5xl w-full font-bold leading-tight md:leading-tight drop-shadow-lg">
            Discover Your Dream <br /> Property with <span className="text-[#703BF7]">Estatein</span>
          </h1>
          <p className="text-gray-300 font-medium text-base md:text-xl leading-6 md:leading-8">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>
          <div className="bts flex flex-col gap-4 md:flex-row">
            <button className="exploreBtn py-3 px-8 md:px-10 border border-[#703BF7] text-[#703BF7] hover:bg-[#703BF7] hover:text-white rounded-2xl transition-all duration-200 font-semibold shadow">
              Learn More
            </button>
            <button className="contactBtn py-3 px-8 md:px-10 bg-[#703BF7] text-white rounded-2xl hover:bg-[#554679] transition duration-200 font-semibold shadow">
              Browse Properties
            </button>
          </div>
          {/* Stats Cards */}
          <section className="py-6">
            <Stat/>
          </section>
        </div>
      </div>
      {/* Manage Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 bg-[#232323] p-5 rounded-2xl shadow-lg">
        {manage.map((item) => (
          <div
            key={item.label}
            className="bg-[#1a1a1a] py-7 px-4 h-[180px] rounded-2xl border border-white/10 flex flex-col items-center justify-center relative hover:scale-105 transition-transform duration-200 shadow"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-12 h-12 mb-3 object-contain"
            />
            <div className="text-white text-center text-base font-semibold">
              {item.label}
            </div>
            <div className="absolute top-3 right-3">
              <span className="text-white text-xl">↗</span>
            </div>
          </div>
        ))}
      </div>
      {/* Featured Properties */}
      <div className="featured-props my-20 text-white font-bold pb-5 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 md:gap-5 mb-8">
          <h1 className="text-3xl md:text-4xl">Featured Properties</h1>
          <p className="font-light italic text-gray-300 text-base md:text-lg">
            Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.
          </p>
        </div>
        <FeaturedProp />
      </div>
      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-4">
        <Testimonial />
        
      </div>
      <div className="">
        <Faq/>
      </div>
      
    </>
  )
}