import Link from "next/link";

const categories = [
  {
    title: "Investment Opportunities",
    copy: "Explore projects and property options with a focus on location, development progress, demand and your expected holding period.",
    cta: "Explore Investments",
  },
  {
    title: "Residential Plots",
    copy: "Find options for future construction, family use or long-term value, subject to current availability and documentation.",
    cta: "View Residential Options",
  },
  {
    title: "Instalment Options",
    copy: "Review opportunities that may offer phased payment plans and confirm the latest schedule before making a decision.",
    cta: "Ask About Instalments",
  },
  {
    title: "Site-Visit Insights",
    copy: "Watch project tours and ground-level updates to understand access, surroundings and visible development.",
    cta: "Watch Project Videos",
  },
];

function OpportunityCategories() {
  return (
    <section className="bg-kp-limestone py-24 md:py-32" id="properties">
      <div className="mx-auto w-[min(100%_-_24px,1400px)] md:w-[min(100%_-_48px,1400px)]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kp-label kp-marker">Start with what matters to you</p>
            <h2 className="mt-5 max-w-[560px] font-serif text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[0.98] text-kp-estate-plum">
              Begin with a clearer view of the market
            </h2>
          </div>
          <p className="max-w-[680px] self-end text-lg leading-8 text-kp-stone-taupe md:text-xl md:leading-9 lg:col-span-6 lg:col-start-7">
            Whether you are planning to build, invest for the future or explore
            instalment-based options, Kainat Properties helps you begin with a
            clearer view of the market.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-kp-mushroom-mist bg-kp-mushroom-mist md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <article
              className="group flex min-h-[330px] flex-col justify-between bg-kp-porcelain p-7 transition-colors duration-200 hover:bg-kp-rose-quartz"
              key={category.title}
            >
              <div>
                <span className="font-serif text-5xl text-kp-ember">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 font-sans text-2xl font-extrabold leading-tight text-kp-graphite">
                  {category.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-kp-stone-taupe">
                  {category.copy}
                </p>
              </div>
              <Link
                className="mt-8 font-bold text-kp-estate-plum no-underline transition-transform duration-200 group-hover:translate-x-1"
                href="#enquiry"
              >
                {category.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpportunityCategories;
