import Link from "next/link";

const steps = [
  "Share your requirements. Tell us your preferred location, property type, budget, payment preference and expected buying timeline.",
  "Review relevant options. Explore project pages, videos and available information connected to your requirements.",
  "Ask questions and request a visit. Discuss current prices, availability, documentation and site-visit arrangements directly.",
  "Verify before proceeding. Confirm project approvals, ownership documents, payment terms and transaction requirements before booking or purchasing.",
];

function EnquiryJourney() {
  return (
    <section className="bg-kp-limestone py-24 md:py-32">
      <div className="mx-auto w-[min(100%_-_24px,1400px)] md:w-[min(100%_-_48px,1400px)]">
        <div className="max-w-[760px]">
          <p className="kp-label kp-marker">A clearer way to begin your property search</p>
          <h2 className="mt-5 font-serif text-[clamp(2.5rem,5vw,4.6rem)] font-semibold leading-none text-kp-estate-plum">
            You do not need to arrive with every answer
          </h2>
          <p className="mt-6 text-lg leading-8 text-kp-stone-taupe">
            Start with your goals, then verify the details that matter before
            making any commitment.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article className="rounded-3xl border border-kp-mushroom-mist bg-kp-porcelain p-7" key={step}>
              <span className="font-serif text-5xl text-kp-ember">
                {index + 1}
              </span>
              <p className="mt-8 text-base leading-7 text-kp-stone-taupe">
                {step}
              </p>
            </article>
          ))}
        </div>

        <Link className="kp-button kp-button-primary mt-10" href="#contact">
          Start Your Property Enquiry
        </Link>
      </div>
    </section>
  );
}

export default EnquiryJourney;
