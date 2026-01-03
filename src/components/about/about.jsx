import Stat from '../landing/stat'
import house from '/SubContainer.png'
import { Star, GraduationCap, Users, BadgeCheck } from "lucide-react";


const values = [
  {
    title: "Trust",
    description:
      "Trust is the cornerstone of every successful real estate transaction.",
    icon: Star,
  },
  {
    title: "Excellence",
    description:
      "We set the bar high for ourselves. From the properties we list to the services we provide.",
    icon: GraduationCap,
  },
  {
    title: "Client-Centric",
    description:
      "Your dreams and needs are at the center of our universe. We listen, understand.",
    icon: Users,
  },
  {
    title: "Our Commitment",
    description:
      "We are dedicated to providing you with the highest level of service and professionalism.",
    icon: BadgeCheck,
  },
];

export default function About (){
    return (
        <div className="bg-[#141414] text-white p-4 sm:p-8">
            {/* first  */}
            <div className="flex flex-col gap-8 sm:gap-10 md:flex-row-reverse max-w-6xl mx-auto">
                <div className="img w-full md:w-1/2 mx-auto mt-6 sm:mt-10">
                    <img
                        src={house}
                        className="w-full h-auto object-cover rounded-lg max-h-64 sm:max-h-96 md:max-h-[420px]"
                        alt=""
                    />
                </div>
                <div className="flex flex-col gap-4 justify-between w-full md:w-1/2">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold">Our Journey</h2>
                        <p className="text-sm sm:text-base mt-2">
                            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
                        </p>
                    </div>
                    <div>
                        <Stat />
                    </div>
                </div>
            </div>
            {/* value */}
            <div className="mt-10 flex flex-col lg:flex-row-reverse gap-8 sm:gap-10 max-w-6xl mx-auto justify-center items-center">
                <div className="mb-6 lg:w-1/2">
                    <h2 className="text-2xl sm:text-3xl font-bold">Our Value</h2>
                    <p className="text-sm sm:text-base mt-2">
                        Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
                    </p>
                </div>
                <div className='lg:w-1/2' >
                    <section className="bg-black text-white py-10 px-2 sm:px-6 rounded-lg">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
                                {values.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col md:flex-row gap-4 sm:gap-5 border-b border-white/10 pb-8 last:border-b-0"
                                        >
                                            {/* Icon */}
                                            <div className="flex-shrink-0 flex md:block justify-center">
                                                <div className="w-12 h-12 rounded-full border border-purple-500 flex items-center justify-center">
                                                    <Icon className="text-purple-500" size={22} />
                                                </div>
                                            </div>

                                            {/* Text */}
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-white/60 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}