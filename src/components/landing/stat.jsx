const stats = [
  { value: "200+", label: "Happy Customers" },
  { value: "10k+", label: "Properties For Clients" },
  { value: "16+", label: "Years of Experience" },
];

export default function Stat() {
 return(
    <>
        {/* <section className="py-6"> */}
            <div className="max-w-3xl mx-auto px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-700 rounded-2xl p-6 text-center bg-[#18181b] shadow-md"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                    <p className="text-gray-400 mt-2 text-base">{stat.label}</p>
                  </div>
                ))}
                {/* Full-width card for Years of Experience */}
                <div className="md:col-span-2 border border-gray-700 rounded-2xl p-6 text-center bg-[#18181b] shadow-md">
                  <p className="text-3xl md:text-4xl font-bold text-white">{stats[2].value}</p>
                  <p className="text-gray-400 mt-2 text-base">{stats[2].label}</p>
                </div>
              </div>
            </div>
          {/* </section> */}
    </>
 )
}