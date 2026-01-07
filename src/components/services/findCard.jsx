import effort from '/effort-manage.png'
import find from '/find.png'
import invest from '/invest.png'
import unlock from '/unlock.png'




const manage = [
  { icon: find, label: "Find Your Dream Home" },
  { icon: unlock, label: "Unlock Property Value" },
  { icon: effort, label: "Effortless Property Management" },
  { icon: invest, label: "Smart Investments, Informed Decisions" },
]

export default function FindCard() {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 bg-[#232323] p-5 rounded-2xl shadow-lg">
                {manage.map((item) => (
                <div
                    key={item.label}
                    className="bg-[#1a1a1a] py-7 px-4 h-[180px] rounded-2xl border border-white/10 flex flex-col items-center justify-center relative hover:scale-105 transition-transform duration-200 shadow"
                >
                    <img
                    src={item.icon}
                    alt={item.label}
                    className="w-12 h-12 mb-3 object-contain"
                    />
                    <div className="text-white text-center text-base font-semibold">
                    {item.label}
                    </div>
                    <div className="absolute top-3 right-3">
                    <span className="text-white text-xl">↗</span>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}