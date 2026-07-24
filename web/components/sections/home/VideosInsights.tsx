const videos = [
  "Faisal Town Phase 2 — Latest Development, Delivery and Investment Questions",
  "Faisal Hills — Complete Tour, Block Overview and Investment Guide",
  "Saffron City Rawalpindi — Site Visit and Development Update",
];

function VideosInsights() {
  return (
    <section className="bg-kp-estate-plum py-24 text-kp-porcelain md:py-32" id="videos">
      <div className="mx-auto grid w-[min(100%_-_48px,1320px)] grid-cols-12 gap-10">
        <div className="col-span-5 max-[900px]:col-span-12">
          <p className="kp-label kp-marker">Watch the market before you enter it</p>
          <h2 className="mt-5 font-serif text-[clamp(2.6rem,5vw,4.8rem)] font-semibold leading-none text-kp-porcelain!">
            Project tours, development updates and practical discussions
          </h2>
          <p className="mt-6 text-lg leading-8 text-kp-porcelain/75">
            Each video can be paired with a project page so viewers can move
            directly from learning to a relevant enquiry.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="kp-button kp-button-accent" href="#videos">
              Watch More Property Videos
            </a>
            <a className="kp-button border border-kp-porcelain/40 text-kp-porcelain" href="#social">
              Subscribe to Kainat Properties on YouTube
            </a>
          </div>
        </div>

        <div className="col-span-7 grid gap-4 max-[900px]:col-span-12">
          {videos.map((video) => (
            <article
              className="group grid grid-cols-[120px_1fr] items-center gap-5 rounded-3xl border border-kp-porcelain/15 bg-kp-porcelain/8 p-4 max-[640px]:grid-cols-1"
              key={video}
            >
              <div className="flex aspect-video items-center justify-center rounded-2xl bg-kp-porcelain text-kp-estate-plum">
                <span className="h-0 w-0 border-y-14 border-y-transparent border-l-22 border-l-kp-ember" />
              </div>
              <h3 className="text-xl font-extrabold leading-tight text-kp-porcelain!">
                {video}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideosInsights;
