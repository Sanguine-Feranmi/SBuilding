import { useState } from "react";
import {
  ChevronDown,
  MapPin,
  Home,
  DollarSign,
  Calendar,
  Layers,
  Search,
  Phone, 
  Mail,
} from "lucide-react";
import { FeaturedProp } from "./featuredProp";

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
    <div className="pHero bg-[#1A1A1A] px-6 py-12 text-white">
        {/* Header */}
        <div className="max-w-5xl mb-10">
            <h1 className="text-3xl font-semibold mb-4">Properties Page</h1>
            <p className="text-gray-400 leading-relaxed">
                Welcome to Estatein, where your dream property awaits in every corner
                of our beautiful world. Explore our curated selection of properties,
                each offering a unique story and a chance to redefine your life.
            </p>
        </div>
        <div className="flex flex-col gap-4">
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

                        {/* Divider */}
                        <span className="h-6 w-px bg-white/20" />

                        {/* Button */}
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
            <div className= "w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-4 md:w-3/4 lg:w-full mx-auto">
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

                            {/* Dropdown */}
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
        <div className="mt-20">
           <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Discover a World of Possibilities</h2>
          <p className="text-sm sm:text-base mt-2">
Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home          </p>
        </div>
        <div className="">
            <FeaturedProp/>
        </div>
        </div>
        <div className="">
        <div className="mt-20">
           <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Meet Our Team</h2>
          <p className="text-sm sm:text-base mt-2">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
        </div>
        <div className="">
                  <div className="w-full min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.9)]">

        {/* Input Group */}
        {[
          { label: "First Name", placeholder: "Enter First Name" },
          { label: "Last Name", placeholder: "Enter Last Name" },
          { label: "Email", placeholder: "Enter your Email" },
          { label: "Phone", placeholder: "Enter Phone Number" },
        ].map((field, i) => (
          <div key={i} className="mb-5">
            <label className="block text-sm text-white mb-2">
              {field.label}
            </label>
            <input
              placeholder={field.placeholder}
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>
        ))}

        {/* Select Fields */}
        {[
          "Preferred Location",
          "Property Type",
          "No. of Bathrooms",
          "No. of Bedrooms",
          "Budget",
        ].map((label, i) => (
          <div key={i} className="mb-5">
            <label className="block text-sm text-white mb-2">{label}</label>
            <div className="relative">
              <select className="w-full appearance-none rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-gray-500 focus:outline-none">
                <option>Select {label}</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>
        ))}

        {/* Preferred Contact Method */}
        <div className="mb-6">
          <label className="block text-sm text-white mb-3">
            Preferred Contact Method
          </label>

          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3">
              <Phone size={16} className="text-white" />
              <input
                placeholder="Enter Your Number"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
              />
              <span className="h-2.5 w-2.5 rounded-full bg-purple-500" />
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3">
              <Mail size={16} className="text-white" />
              <input
                placeholder="Enter Your Email"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
              />
              <span className="h-2.5 w-2.5 rounded-full border border-purple-500" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-sm text-white mb-2">Message</label>
          <textarea
            placeholder="Enter your Message here."
            rows={4}
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
          />
        </div>

        {/* Terms */}
        <div className="flex items-start gap-3 mb-6 text-sm text-gray-400">
          <input type="checkbox" className="mt-1 accent-purple-500" />
          <p>
            I agree with{" "}
            <span className="text-gray-300 underline">
              Terms of Use
            </span>{" "}
            and{" "}
            <span className="text-gray-300 underline">
              Privacy Policy
            </span>
          </p>
        </div>

        {/* Submit */}
        <button className="w-full rounded-xl bg-purple-600 py-3 text-sm font-semibold text-white hover:bg-purple-500 transition">
          Send Your Message
        </button>
      </div>
    </div>  
        </div>
        </div>
        </div>
    </div>
);
}