import { footerData } from "./footerData";

export default function Footer() {
    const { brand, newsletter, links, socials, copyright } =
        footerData;



    return (
        <>
            <footer className="bg-[#0f0f10] text-gray-400">
      {/* CTA SECTION */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Start Your Real Estate Journey Today
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed">
              {brand.description}
            </p>
          </div>

          <div className="lg:text-right">
            <a
              href={brand.cta.href}
              className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-8 py-4
              text-white font-medium transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              {brand.cta.label}
            </a>
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-14 lg:grid-cols-[1.3fr_2fr]">
        {/* BRAND + NEWSLETTER */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center">
              <span className="text-white font-bold">
                {brand.logo}
              </span>
            </div>
            <span className="text-xl font-semibold text-white">
              {brand.name}
            </span>
          </div>

          <form className="mt-8 relative max-w-sm">
            <input
              type="email"
              placeholder={newsletter.placeholder}
              className="w-full rounded-xl bg-[#161618] border border-white/10 px-5 py-4 pr-14
              text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg
              bg-violet-600 text-white flex items-center justify-center hover:bg-violet-500"
              aria-label="Subscribe"
            >
              ➜
            </button>
          </form>
        </div>

        {/* LINKS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {links.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-white mb-5">
                {group.title}
              </h3>
              <ul className="space-y-3 text-sm">
                {group.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM BAR */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            {copyright}
            <a href="#" className="ml-2 hover:text-white">
              Terms & Conditions
            </a>
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#161618]
                hover:bg-violet-600 text-gray-400 hover:text-white transition"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </footer>
        </>
    )
}