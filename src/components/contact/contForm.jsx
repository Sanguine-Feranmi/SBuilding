import { ChevronDown, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 md:p-8 mx-auto max-w-6xl">
              {/* Contact Form */}
        <div className="">
        <div className="mb-6 mx-auto px-5 md:px-0 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold">Get in Touch</h2>
            <p className="text-sm sm:text-base mt-2">
                    Ready to find your dream property? Contact us today and let our team help you discover the perfect home.
            </p>
        </div>
                {/* <ContactForm /> */}
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FormInput label="First Name" placeholder="Enter First Name" />
        <FormInput label="Last Name" placeholder="Enter Last Name" />
        <FormInput label="Email" placeholder="Enter your Email" />
        <FormInput label="Phone" placeholder="Enter Phone Number" />
        <FormSelect label="Preferred Location" />
        <FormSelect label="Property Type" />
        <FormSelect label="No. of Bathrooms" />
        <FormSelect label="No. of Bedrooms" />
        
        <div className="lg:col-span-2">
          <FormSelect label="Budget" />
        </div>

        <div className="lg:col-span-2">
          <label className="block text-sm text-white mb-3">
            Preferred Contact Method
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ContactInput
              icon={<Phone size={16} />}
              placeholder="Enter Your Number"
              active
            />
            <ContactInput
              icon={<Mail size={16} />}
              placeholder="Enter Your Email"
            />
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <label className="block text-sm text-white mb-2">Message</label>
          <textarea
            rows={4}
            placeholder="Enter your Message here."
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
          />
        </div>

        <div className="lg:col-span-2 flex items-start gap-3 text-sm text-gray-400">
          <input type="checkbox" className="mt-1 accent-purple-500" />
          <p>
            I agree with{" "}
            <span className="text-gray-300 underline">Terms of Use</span> and{" "}
            <span className="text-gray-300 underline">Privacy Policy</span>
          </p>
        </div>

        <div className="lg:col-span-2 flex justify-start lg:justify-end">
          <button className="w-full sm:w-auto px-8 rounded-xl bg-purple-600 py-3 text-sm font-semibold text-white hover:bg-purple-500 transition">
            Send Your Message
          </button>
        </div>
      </div>
    </div>
  );
}

function FormInput({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm text-white mb-2">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
      />
    </div>
  );
}

function FormSelect({ label }) {
  return (
    <div>
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
  );
}

function ContactInput({ icon, placeholder, active = false }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3">
      {icon}
      <input
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
      />
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          active ? "bg-purple-500" : "border border-purple-500"
        }`}
      />
    </div>
  );
}