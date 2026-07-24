import Link from "next/link";

function FinalCta() {
  return (
    <section className="bg-kp-estate-plum py-24 text-kp-porcelain md:py-32">
      <div className="mx-auto w-[min(100%_-_24px,1400px)] md:w-[min(100%_-_48px,1400px)]">
        <div className="max-w-[900px]">
          <h2 className="font-serif text-[clamp(3rem,7vw,6.6rem)] font-semibold leading-none text-kp-porcelain!">
            Ready to Discuss Your Property Goals?
          </h2>
          <p className="mt-7 max-w-[760px] text-xl leading-9 text-kp-porcelain/75">
            Tell us what you are considering, whether it is a residential plot,
            an investment opportunity or an instalment-based option. Kainat
            Properties will help you begin with clearer questions and current
            information.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link className="kp-button kp-button-accent" href="#contact">
              Start Your Enquiry
            </Link>
            <Link
              className="kp-button border border-kp-porcelain/40 text-kp-porcelain"
              href="https://wa.me/923040882985?text=Assalamualaikum%2C%20I%20want%20to%20chat%20with%20Kainat%20Properties."
              rel="noreferrer"
              target="_blank"
            >
              Chat on WhatsApp
            </Link>
          </div>
          <p className="mt-6 text-sm leading-6 text-kp-porcelain/65">
            No commitment required. Current availability and commercial terms
            are confirmed during the conversation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
