import { useState } from "react";
import {
  ChevronDown,
  MapPin,
  Home,
  DollarSign,
  Calendar,
  Layers,
  Search,
} from "lucide-react";
import { FeaturedProp } from "./featuredProp";
import ContactForm from "../contact/contForm";

const filters = [
  {
    label: "Location",
    icon: MapPin,
    options: ["New York", "London", "Dubai", "Lagos", "Toronto"],
  },
  {
    label: "Property Type",
    icon: Home,
    options: ["Apartment", "Villa", "Townhouse", "Commercial"],
  },
  {
    label: "Price Range",
    icon: DollarSign,
    options: ["$50k - $100k", "$100k - $300k", "$300k - $1M", "$1M+"],
  },
  {
    label: "Category",
    icon: Layers,
    options: ["Luxury", "Family Home", "Investment", "Short Stay"],
  },
  {
    label: "Build Year",
    icon: Calendar,
    options: ["2024", "2020 - 2023", "2015 - 2019", "Before 2015"],
  },
];

export default function Properties() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [query, setQuery] = useState("");

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    console.log("Searching for:", query);
  };

  return (
    <div className="pHero bg-[#1A1A1A] text-white">
      {/* Header */}
      <div className="w-full py-20 bg-gradient-to-r from-[#404248] to-[#1A1A1A]">
        <h1 className="text-3xl font-semibold mb-4">Properties Page</h1>
        <p className="text-gray-400 leading-relaxed">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life.
        </p>
      </div>

      <div className="flex flex-col gap-4 px-5">
        {/* Search Form */}
        <div className="w-full md:w-3/4 mx-auto">
          <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl w-full">
            <div className="flex items-center rounded-xl bg-white/10 ring-1 ring-white/10 backdrop-blur-lg overflow-hidden">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a property..."
                className="flex-1 bg-transparent px-5 py-4 text-sm text-white w-full placeholder-gray-400 focus:outline-none"
              />
              <span className="h-6 w-px bg-white/20" />
              <button
                type="submit"
                className="flex items-center gap-2 bg-purple-600 px-5 py-4 text-sm font-medium text-white hover:bg-purple-700 transition"
              >
                <Search size={18} />
                Search
              </button>
            </div>
          </form>
        </div>
        {/* Filters */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-4 md:w-3/4 lg:w-full mx-auto">
          {filters.map((filter, index) => {
            const Icon = filter.icon;
            const isOpen = activeDropdown === index;

            return (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex w-full items-center justify-between rounded-lg bg-white/10 px-4 py-3 text-sm font-medium ring-1 ring-white/10 hover:bg-white/15 transition"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="text-gray-400" />
                    <span className="h-5 w-px bg-white/20" />
                    <span>{filter.label}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`transition ${
                      isOpen ? "rotate-180 text-gray-400" : "text-gray-400"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="absolute left-0 z-20 mt-2 w-full rounded-lg bg-[#222] ring-1 ring-white/10 shadow-xl">
                    <ul className="py-2">
                      {filter.options.map((option, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Properties */}
      <div className="mt-20 px-5 ">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Discover a World of Possibilities</h2>
          <p className="text-sm sm:text-base mt-2">
            Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home
          </p>
        </div>
        <div>
          <FeaturedProp/>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-20 bg-[#0b0b0f] py-20">
        <div className="mb-6 mx-auto px-5 md:px-0 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold">Get in Touch</h2>
          <p className="text-sm sm:text-base mt-2">
            Ready to find your dream property? Contact us today and let our team help you discover the perfect home.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
} 