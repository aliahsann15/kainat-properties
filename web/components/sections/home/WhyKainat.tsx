const reasons = [
  {
    title: "Clarity before commitment",
    copy: "Start with understandable project information rather than relying only on promotional claims.",
  },
  {
    title: "A practical, on-ground perspective",
    copy: "Use site-visit content and development observations as a starting point for deeper verification.",
  },
  {
    title: "Guidance shaped around your goals",
    copy: "Discuss your budget, purpose, payment preference and buying timeline instead of receiving a generic list.",
  },
  {
    title: "Direct communication",
    copy: "Move smoothly from a project page or video to a property-specific WhatsApp enquiry.",
  },
];

function WhyKainat() {
  return (
    <section className="bg-kp-limestone py-24 md:py-32">
      <div className="mx-auto grid w-[min(100%_-_48px,1320px)] grid-cols-12 gap-10">
        <div className="col-span-5 max-[900px]:col-span-12">
          <p className="kp-label kp-marker">Why Kainat Properties</p>
          <h2 className="mt-5 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-none text-kp-estate-plum">
            Property decisions deserve more than a short caption
          </h2>
          <p className="mt-6 text-lg leading-8 text-kp-stone-taupe">
            Kainat Properties connects digital content with a more organized
            enquiry experience, so you can understand an opportunity, compare
            your priorities and ask better questions before moving forward.
          </p>
        </div>

        <div className="col-span-7 grid grid-cols-2 gap-4 max-[900px]:col-span-12 max-[640px]:grid-cols-1">
          {reasons.map((reason) => (
            <article
              className="rounded-3xl border border-kp-mushroom-mist bg-kp-porcelain p-7"
              key={reason.title}
            >
              <h3 className="text-xl font-extrabold leading-tight text-kp-graphite">
                {reason.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-kp-stone-taupe">
                {reason.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyKainat;
