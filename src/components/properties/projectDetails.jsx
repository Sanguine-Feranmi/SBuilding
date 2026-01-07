import { useParams } from "react-router-dom";
import { BedDouble, Bath, Ruler } from "lucide-react";
import { motion } from "framer-motion";
import PropertyCarousel from "./PropertyCarousel";
import PricingBreakdown from "./PricingBreakdown";
import FAQ from "./FAQ";

import image from "/fcard.png";

const properties = [
  {
    id: "seaside-serenity-villa",
    title: "Seaside Serenity Villa",
    location: "Malibu, California",
    price: 1250000,
    images: [image, image, image, image],
    description:
      "Discover your piece of paradise with the Seaside Serenity Villa. This stunning property features open floor plans, breathtaking ocean views, and direct access to pristine sandy beaches.",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 Sq. Ft",
    features: [
      "Expansive oceanfront terrace",
      "Gourmet kitchen with top-tier appliances",
      "Private beach access",
      "Master suite with spa-inspired bathroom",
      "Secure garage and storage space",
    ],
  },
  {
    id: "rusty-retreat-cottage",
    title: "Rusty Retreat Cottage",
    location: "Mountain View, Colorado",
    price: 550000,
    images: [image, image, image, image],
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community with modern amenities and beautiful mountain views.",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,800 Sq. Ft",
    features: [
      "Mountain view terrace",
      "Modern kitchen appliances",
      "Gated community access",
      "Master bedroom with walk-in closet",
      "Two-car garage",
    ],
  },
  {
    id: "urban-loft-downtown",
    title: "Urban Loft Downtown",
    location: "New York, NY",
    price: 850000,
    images: [image, image, image, image],
    description:
      "Modern downtown loft with industrial design, high ceilings, and panoramic city views in the heart of Manhattan.",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 Sq. Ft",
    features: [
      "Panoramic city views",
      "Industrial design elements",
      "High ceilings",
      "Modern appliances",
      "Rooftop access",
    ],
  },
  {
    id: "family-estate-suburbs",
    title: "Family Estate Suburbs",
    location: "Austin, Texas",
    price: 720000,
    images: [image, image, image, image],
    description:
      "Spacious family home with large backyard, modern kitchen, and excellent school district in quiet suburban neighborhood.",
    bedrooms: 5,
    bathrooms: 4,
    area: "3,200 Sq. Ft",
    features: [
      "Large backyard",
      "Modern kitchen with island",
      "Excellent school district",
      "Master suite with bathroom",
      "Three-car garage",
    ],
  },
];

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) return <div>Property not found</div>;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#0f0f10] text-white min-h-screen px-4 py-16"
    >
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">{property.title}</h1>
            <p className="text-gray-400">{property.location}</p>
          </div>
          <div className="text-xl font-bold">
            ${property.price.toLocaleString()}
          </div>
        </div>

        {/* CAROUSEL */}
        <PropertyCarousel images={property.images} />

        {/* DESCRIPTION + FEATURES */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-400 leading-relaxed">
              {property.description}
            </p>

            <div className="flex gap-4 mt-4">
              <Feature icon={<BedDouble />} label={`${property.bedrooms} Bedrooms`} />
              <Feature icon={<Bath />} label={`${property.bathrooms} Bathrooms`} />
              <Feature icon={<Ruler />} label={property.area} />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              Key Features & Amenities
            </h2>
            <ul className="space-y-3">
              {property.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="text-purple-500">⚡</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PRICING */}
        <PricingBreakdown price={property.price} />

        {/* FAQ */}
        <FAQ />

        {/* INQUIRY FORM */}
        <div className="bg-[#141415] border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">
            Inquire About {property.title}
          </h3>

          <form className="grid md:grid-cols-2 gap-4">
            <input className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500" placeholder="First Name" />
            <input className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500" placeholder="Last Name" />
            <input className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500" placeholder="Email" />
            <input className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500" placeholder="Phone" />
            <textarea
              className="md:col-span-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none h-28"
              placeholder="Your Message"
            />
            <button className="md:col-span-2 bg-purple-600 hover:bg-purple-700 transition py-4 rounded-xl">
              Send Your Message
            </button>
          </form>
        </div>

      </div>
    </motion.section>
  );
}

const Feature = ({ icon, label }) => (
  <div className="flex items-center gap-2 bg-[#141415] px-4 py-2 rounded-xl border border-white/10">
    {icon}
    <span>{label}</span>
  </div>
);

