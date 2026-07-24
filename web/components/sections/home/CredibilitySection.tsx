function CredibilitySection() {
  return (
    <section className="bg-kp-rose-quartz py-24 md:py-32">
      <div className="mx-auto grid w-[min(100%_-_48px,1320px)] grid-cols-12 gap-10">
        <div className="col-span-5 max-[900px]:col-span-12">
          <p className="kp-label kp-marker">Growing through content, consistency and community</p>
          <h2 className="mt-5 font-serif text-[clamp(2.5rem,5vw,4.6rem)] font-semibold leading-none text-kp-estate-plum">
            Visibility built around education and project coverage
          </h2>
        </div>
        <div className="col-span-7 max-[900px]:col-span-12">
          <p className="text-xl leading-9 text-kp-graphite">
            Kainat Properties is building visibility through real-estate
            education, project coverage and collaborations within Pakistan&apos;s
            property-content ecosystem. The website should collect approved
            media features, interviews and professional endorsements in one
            place.
          </p>
          <div className="mt-8 rounded-3xl border border-kp-estate-plum/15 bg-kp-porcelain p-7">
            <p className="font-bold text-kp-estate-plum">
              Featured by Fetch Pakistan as the founder of Kainat Properties.
            </p>
            <p className="mt-4 text-sm leading-6 text-kp-stone-taupe">
              Do not display influencer photographs, logos, quotes or
              endorsements without explicit permission. Do not convert informal
              social support into a client testimonial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CredibilitySection;
