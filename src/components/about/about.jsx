import Stat from '../landing/stat';
import house from '/SubContainer.png';
import { Star, GraduationCap, Users, BadgeCheck, Twitter, Send, Globe, Layers, ExternalLink, Quote } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import React from "react";
import { DraggableCard
} from "@/components/ui/draggable-card";

import Team1 from '/Team1.png';
import Team2 from '/Team2.png';
import Team3 from '/Team3.png';
import Team4 from '/Team4.png';


const caseStudies = [
  {
    since: "Since 2019",
    company: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimonial:
      "Estatein’s expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    since: "Since 2018",
    company: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    testimonial:
      "Estatein’s ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
  {
    since: "Since 2019",
    company: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimonial:
      "Estatein’s expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    since: "Since 2018",
    company: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    testimonial:
      "Estatein’s ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
  {
    since: "Since 2019",
    company: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimonial:
      "Estatein’s expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    since: "Since 2018",
    company: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    testimonial:
      "Estatein’s ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
  {
    since: "Since 2019",
    company: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimonial:
      "Estatein’s expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    since: "Since 2018",
    company: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    testimonial:
      "Estatein’s ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
]


const teamMembers = [
  {
    id: 1,
    name: "Max Mitchell",
    role: "Founder",
    image: "/Team1.png",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Chief Real Estate Officer",
    image: "/Team2.png",
  },
  {
    id: 3,
    name: "David Brown",
    role: "Head of Property Management",
    image: "/Team3.png",
  },
  {
    id: 4,
    name: "Michael Turner",
    role: "Legal Counsel",
    image: "/Team4.png",
  },
];
// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

// Data arrays
const steps = [
  {
    title: "Discover a World of Possibilities",
    description: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location.",
  },
  {
    title: "Narrowing Down Your Choices",
    description: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites.",
  },
  {
    title: "Personalized Guidance",
    description: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    title: "See It for Yourself",
    description: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look.",
  },
  {
    title: "Making Informed Decisions",
    description: "Before making an offer, our team will assist you with due diligence, including inspections, legal checks, and market analysis.",
  },
  {
    title: "Getting the Best Deal",
    description: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

const values = [
  {
    title: "Trust",
    description: "Trust is the cornerstone of every successful real estate transaction.",
    icon: Star,
  },
  {
    title: "Excellence",
    description: "We set the bar high for ourselves. From the properties we list to the services we provide.",
    icon: GraduationCap,
  },
  {
    title: "Client-Centric",
    description: "Your dreams and needs are at the center of our universe. We listen, understand.",
    icon: Users,
  },
  {
    title: "Our Commitment",
    description: "We are dedicated to providing you with the highest level of service and professionalism.",
    icon: BadgeCheck,
  },
];

const cardsData = [
  {
    title: "Trust",
    description: "Trust is the foundation of every meaningful and successful relationship we build.",
  },
  {
    title: "Excellence",
    description: "We consistently deliver quality by holding ourselves to the highest standards.",
  },
  {
    title: "Client-Centric",
    description: "Your needs, goals, and satisfaction are always at the center of what we do.",
  },
];

export default function About() {
  return (
    <div className="bg-[#141414] text-white p-4 sm:p-8">
      {/* Our Journey Section */}
      <section className="flex flex-col gap-8 sm:gap-10 md:flex-row-reverse max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 mx-auto mt-6 sm:mt-10">
          <img
            src={house}
            className="w-full h-auto object-cover rounded-lg max-h-64 sm:max-h-96 md:max-h-[420px]"
            alt="Our Journey"
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
      </section>

      {/* Our Values Section */}
      <section className="mt-10 flex flex-col lg:flex-row-reverse gap-8 sm:gap-10 max-w-6xl mx-auto justify-center items-center">
        <div className="mb-6 lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Values</h2>
          <p className="text-sm sm:text-base mt-2">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-black text-white py-10 px-2 sm:px-6 rounded-lg">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
                {values.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row gap-4 sm:gap-5 border-b border-white/10 pb-8 last:border-b-0"
                    >
                      <div className="flex-shrink-0 flex md:block justify-center">
                        <div className="w-12 h-12 rounded-full border border-purple-500 flex items-center justify-center">
                          <Icon className="text-purple-500" size={22} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="mt-10">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Achievements</h2>
          <p className="text-sm sm:text-base mt-2">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
        </div>
        <div className="py-16">
          <div className="mx-auto max-w-6xl px-4 grid gap-6 md:grid-cols-3">
            {cardsData.map((card, index) => (
              <Card key={index} className="w-full">
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigating Process Section */}
      <section className="mt-10">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Navigating Process</h2>
          <p className="text-sm sm:text-base mt-2">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
        </div>
        <div className="bg-[#0b0b0f] px-6 py-10 rounded-lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {steps.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-[#111115] rounded-xl p-6 border border-[#1f1f2a]
                           shadow-[0_0_30px_rgba(139,92,246,0.15)]
                           hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(139,92,246,0.25)]
                           transition-all duration-300"
              >
                <span
                  className="absolute left-0 top-6 h-10 w-[2px] bg-violet-500
                             group-hover:h-14 transition-all duration-300"
                />
                <p className="text-sm text-gray-400 mb-2">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Team  */}

      <div className="mt-20">
           <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Meet Our Team</h2>
          <p className="text-sm sm:text-base mt-2">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
        </div>
    <section className="w-full bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative rounded-2xl bg-gradient-to-b from-[#0f0f0f] to-[#050505] border border-white/10 p-5 shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[280px] object-cover"
                />

                {/* Twitter Icon */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#6d28d9] p-3 rounded-full shadow-lg">
                  <Twitter size={18} className="text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="text-center mt-6">
                <h3 className="text-white text-lg font-semibold">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {member.role}
                </p>
              </div>

              {/* Button */}
              <div className="mt-6 flex items-center justify-between bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <span className="text-sm text-white">
                  Say Hello 👋
                </span>
                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#6d28d9] hover:bg-[#5b21b6] transition">
                  <Send size={16} className="text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
      {/* unknon */}
      <div className="">
          
      </div>
    </div>
  );
}