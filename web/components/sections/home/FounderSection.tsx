import Image from "next/image";
import Link from "next/link";

function FounderSection() {
  return (
    <section className="bg-kp-rose-quartz py-24 md:py-32" id="about">
      <div className="mx-auto grid w-[min(100%_-_24px,1400px)] grid-cols-1 items-center gap-10 md:w-[min(100%_-_48px,1400px)] lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              alt="Kainat Urooj presenting a property development in the Islamabad and Rawalpindi region."
              className="h-full w-full object-cover"
              height={1200}
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=900"
              width={900}
            />
            <div className="absolute inset-0 bg-kp-estate-plum/10" />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="kp-label kp-marker">Meet Kainat Urooj</p>
          <h2 className="mt-5 font-serif text-[clamp(2.6rem,5vw,5rem)] font-semibold leading-none text-kp-estate-plum">
            Building a modern, content-led real-estate brand
          </h2>
          <p className="mt-7 text-lg leading-8 text-kp-graphite">
            Kainat Urooj is the founder of Kainat Properties, a growing
            real-estate brand focused on property opportunities, project
            education and direct buyer communication across Islamabad and
            Rawalpindi.
          </p>
          <p className="mt-5 text-lg leading-8 text-kp-graphite">
            Through project videos, site visits and social content, she is
            making real-estate information easier to discover and discuss.
            Kainat Properties brings that content into one structured platform,
            helping visitors move from curiosity to a focused property enquiry.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="kp-button kp-button-primary" href="#about">
              Learn More About Kainat
            </Link>
            <Link className="kp-button kp-button-secondary" href="#social">
              Follow on Instagram
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;
