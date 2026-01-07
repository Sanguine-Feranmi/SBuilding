import FindCard from "../services/findCard";
import ContactForm from "./contForm";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const tabs = [
  { label: "All", value: "all" },
  { label: "Regional", value: "regional" },
  { label: "International", value: "international" },
];
const locations = [
  {
    type: "regional",
    title: "Main Headquarters",
    address: "123 Estatein Plaza, City Center, Metropolis",
    description:
      "Our main headquarters serves as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    email: "info@estatein.com",
    phone: "+1 (123) 456-7890",
    city: "Metropolis",
  },
  {
    type: "regional",
    title: "Regional Offices",
    address: "456 Urban Avenue, Downtown District, Metropolis",
    description:
      "Estatein’s presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
    email: "info@estatein.com",
    phone: "+1 (123) 628-7890",
    city: "Metropolis",
  },
  {
    type: "international",
    title: "International Office",
    address: "78 Global Way, Business Bay, London",
    description:
      "Our international office supports cross-border investments and global clients with market-specific insights and tailored strategies.",
    email: "global@estatein.com",
    phone: "+44 20 7946 0958",
    city: "London",
  },
];

export default function Contact() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredLocations =
    activeTab === "all"
      ? locations
      : locations.filter((l) => l.type === activeTab);
    return (
        <div className="contact bg-[#141414] min-h-screen text-white flex flex-col items-center">
            <div className="w-full py-20 bg-gradient-to-r from-[#404248] to-[#1A1A1A]  px-10">
        <h1 className="text-3xl font-semibold mb-4">Get In Touch with Sanguine</h1>
                <p className="text-gray-400 leading-relaxed">
                Welcome to Estatein, where your dream property awaits in every corner
                of our beautiful world. Explore our curated selection of properties,
                each offering a unique story and a chance to redefine your life.
                </p>
            </div>
      <div className="pb-8">
        <FindCard/>
      </div>
      <div>
        <ContactForm/>
      </div>

      <section className="w-full bg-black px-4 py-20">
      <div className="mx-auto max-w-7xl space-y-10">

        {/* Tabs */}
        <div className="flex gap-2 bg-black/40 border border-white/10 rounded-xl p-1 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 text-sm rounded-lg transition ${
                activeTab === tab.value
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLocations.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.8)] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">
                    {item.title}
                  </p>
                  <h3 className="text-lg font-semibold text-white">
                    {item.address}
                  </h3>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Contact Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-gray-300">
                    <Mail size={14} />
                    {item.email}
                  </span>

                  <span className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-gray-300">
                    <Phone size={14} />
                    {item.phone}
                  </span>

                  <span className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-gray-300">
                    <MapPin size={14} />
                    {item.city}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button className="mt-6 w-full rounded-xl bg-purple-600 py-3 text-sm font-semibold text-white hover:bg-purple-500 transition">
                Get Direction
              </button>
            </div>
          ))}
        </div>

      </div>
      </section>
    </div>
  );
}