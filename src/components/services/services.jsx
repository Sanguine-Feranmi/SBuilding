import FindCard from "./findCard";
import {
  BarChart3,
  PieChart,
  Handshake,
  BadgeCheck,
  TrendingUp,
  Lightbulb,
  Layers3,
} from "lucide-react";

const services = [
  {
    title: "Valuation Mastery",
    description:
      "Discover the true worth of your property with our expert valuation services.",
    icon: BarChart3,
  },
  {
    title: "Strategic Marketing",
    description:
      "Selling a property requires more than just a listing; it demands a strategic marketing.",
    icon: PieChart,
  },
  {
    title: "Negotiation Wizardry",
    description:
      "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    icon: Handshake,
  },
  {
    title: "Closing Success",
    description:
      "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    icon: BadgeCheck,
  },
];

const heroContent = {
  title: "Smart Investments,\nInformed Decisions",
  subtitle:
    "Building a real estate portfolio requires a strategic approach.",
  highlightCard: {
    title: "Unlock Your Investment Potential",
    description:
      "Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
    cta: "Learn More",
  },
};

const insights = [
  {
    title: "Market Insight",
    description:
      "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions.",
    icon: BarChart3,
  },
  {
    title: "ROI Assessment",
    description:
      "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments.",
    icon: TrendingUp,
  },
  {
    title: "Customized Strategies",
    description:
      "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs.",
    icon: Lightbulb,
  },
  {
    title: "Diversification Mastery",
    description:
      "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations.",
    icon: Layers3,
  },
];

export default function Services() {
  return (
    <div className="bg-[#141414] min-h-screen text-white flex flex-col items-center">
      <div className="w-full py-20 bg-gradient-to-r from-[#404248] to-[#1A1A1A]">
        <h1 className="text-3xl font-semibold mb-4">Services Page</h1>
        <p className="text-gray-400 leading-relaxed">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life.
        </p>
      </div>
      <div className="pb-8">
        <FindCard/>
      </div>
    <section className="bg-black px-4 py-20 w-full">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Discover a World of Possibilities</h2>
          <p className="text-sm sm:text-base mt-2">
            Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home
          </p>
        </div>
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Service Cards */}
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-xl hover:border-purple-500/30 transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10">
                    <Icon className="text-purple-400" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="relative lg:col-span-2 rounded-2xl border border-white/10 bg-[#0f0f0f] p-8 overflow-hidden">
            {/* Background lines */}
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,#ffffff0f_1px,transparent_0)] [background-size:18px_18px]" />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Unlock the Value of Your Property Today
                </h3>
                <p className="text-sm text-gray-400 max-w-xl">
                  Ready to unlock the true value of your property? Explore our
                  Property Selling Service categories and let us help you
                  achieve the best deal possible for your valuable asset.
                </p>
              </div>
              <button className="w-fit rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-purple-600 hover:border-purple-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className=" px-4 pt-10 pb-20">
         <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Discover a World of Possibilities</h2>
          <p className="text-sm sm:text-base mt-2">
            Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home
          </p>
        </div>
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Service Cards */}
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-xl hover:border-purple-500/30 transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10">
                    <Icon className="text-purple-400" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="relative lg:col-span-2 rounded-2xl border border-white/10 bg-[#0f0f0f] p-8 overflow-hidden">
            {/* Background lines */}
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,#ffffff0f_1px,transparent_0)] [background-size:18px_18px]" />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Unlock the Value of Your Property Today
                </h3>
                <p className="text-sm text-gray-400 max-w-xl">
                  Ready to unlock the true value of your property? Explore our
                  Property Selling Service categories and let us help you
                  achieve the best deal possible for your valuable asset.
                </p>
              </div>

              <button className="w-fit rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-purple-600 hover:border-purple-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full bg-black px-4 py-20 items-center">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Header and Highlight Card */}
          <div className="space-y-10">
            {/* Header */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-white leading-snug whitespace-pre-line">
                {heroContent.title}
              </h2>
              <p className="text-sm text-gray-400">
                {heroContent.subtitle}
              </p>
            </div>

            {/* Highlight Card */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(135deg,white_1px,transparent_1px)] bg-[length:16px_16px]" />

              <div className="relative z-10 space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  {heroContent.highlightCard.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {heroContent.highlightCard.description}
                </p>
                <button className="w-full rounded-xl border border-white/10 bg-black/40 py-2.5 text-sm text-white hover:bg-white/10 transition">
                  {heroContent.highlightCard.cta}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Insight Cards */}
          <div className="space-y-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {insights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10">
                    <Icon size={18} className="text-purple-400" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}