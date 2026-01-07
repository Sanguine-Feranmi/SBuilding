import imm from '/landing.png'
import CircleButton from '../src/components/landing/circle'
import { FeaturedProp } from '../src/components/properties/featuredProp'
import Testimonial from '../src/components/landing/testimonial'
import FAQ from '../src/components/properties/FAQ'
import Stat from '@/components/landing/stat'
import FindCard from '@/components/services/findCard'


export default function Hero() {
  return (
    <>
      <div className="flex flex-col w-full md:flex-row-reverse gap-8 mb-20 items-center md:items-stretch lg:w-full mx-auto px-4">
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
      <FindCard/>
      {/* Featured Properties */}
      <div className="featured-props my-20 text-white font-bold pb-5 px-10 mx-auto">
        <div className="flex flex-col gap-3 md:gap-5 mb-8">
          <h1 className="text-3xl md:text-4xl">Featured Properties</h1>
          <p className="font-light italic text-gray-300 text-base md:text-lg">
            Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.
          </p>
        </div>
        <FeaturedProp />
      </div>
      {/* Testimonials */}
      <div className="w-full mx-auto">
        <Testimonial />
        
      </div>
      <div className="pb-10">
        <FAQ/>
      </div>
    </>
  )
}