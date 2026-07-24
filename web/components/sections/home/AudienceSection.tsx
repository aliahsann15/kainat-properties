const audiences = [
  {
    title: "First-time buyers",
    copy: "Understand the basic project, payment and verification questions before taking the next step.",
  },
  {
    title: "Property investors",
    copy: "Compare opportunities according to location, development stage, budget and intended holding period.",
  },
  {
    title: "Future homebuilders",
    copy: "Explore residential options with construction, access and livability considerations in mind.",
  },
  {
    title: "Out-of-city and overseas Pakistanis",
    copy: "Use videos and structured digital enquiries to begin research remotely before arranging local verification or representation.",
  },
];

function AudienceSection() {
  return (
    <section className="bg-kp-limestone py-24 md:py-32">
      <div className="mx-auto w-[min(100%_-_48px,1320px)]">
        <p className="kp-label kp-marker">Guidance for different property goals</p>
        <h2 className="mt-5 max-w-[820px] font-serif text-[clamp(2.5rem,5vw,4.6rem)] font-semibold leading-none text-kp-estate-plum">
          Different buyers need different starting points
        </h2>

        <div className="mt-14 grid grid-cols-4 gap-4 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
          {audiences.map((audience) => (
            <article className="rounded-3xl border border-kp-mushroom-mist bg-kp-porcelain p-7" key={audience.title}>
              <h3 className="text-xl font-extrabold leading-tight text-kp-graphite">
                {audience.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-kp-stone-taupe">
                {audience.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AudienceSection;
