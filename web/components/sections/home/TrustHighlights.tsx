const highlights = [
  {
    title: "On-ground project coverage",
    copy: "See site-visit observations and development context before starting a conversation.",
  },
  {
    title: "Clearer project information",
    copy: "Understand the location, property type, payment approach and key questions to verify.",
  },
  {
    title: "Direct, personalized guidance",
    copy: "Move from general social-media content to a conversation based on your actual requirements.",
  },
];

function TrustHighlights() {
  return (
    <section className="bg-kp-limestone py-20">
      <div className="mx-auto grid w-[min(100%_-_48px,1320px)] grid-cols-3 gap-px overflow-hidden rounded-3xl border border-kp-mushroom-mist bg-kp-mushroom-mist max-[900px]:grid-cols-1">
        {highlights.map((highlight) => (
          <article className="bg-kp-porcelain p-8 md:p-10" key={highlight.title}>
            <div className="mb-8 h-1.5 w-10 bg-kp-ember" />
            <h2 className="font-sans text-2xl font-extrabold leading-tight text-kp-graphite">
              {highlight.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-kp-stone-taupe">
              {highlight.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TrustHighlights;
