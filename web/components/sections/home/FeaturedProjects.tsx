import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Faisal Hills",
    badge: "Project Guide",
    copy: "Explore block-level context, visible development, location considerations and key questions for buyers and investors.",
    primaryCta: "Explore Faisal Hills",
    secondaryCta: "Ask for Latest Availability",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Faisal Town Phase 2",
    badge: "Latest Coverage",
    copy: "Review current development context, access considerations, project updates and the information you should verify before booking.",
    primaryCta: "View Project Guide",
    secondaryCta: "Discuss Your Requirements",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Saffron City Rawalpindi",
    badge: "Site Visit",
    copy: "See site-visit coverage, development observations and location context for buyers considering opportunities in the Rawalpindi growth corridor.",
    primaryCta: "Explore Saffron City",
    secondaryCta: "Request Current Details",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=1200",
  },
];

function FeaturedProjects() {
  return (
    <section className="bg-kp-estate-plum py-24 text-kp-porcelain md:py-32" id="projects">
      <div className="mx-auto w-[min(100%_-_24px,1400px)] md:w-[min(100%_-_48px,1400px)]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kp-label kp-marker">Projects currently in focus</p>
            <h2 className="mt-5 font-serif text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-none text-kp-porcelain!">
              Browse project guides and recent market coverage
            </h2>
          </div>
          <p className="max-w-[720px] self-end text-lg leading-8 text-kp-porcelain/75 lg:col-span-6 lg:col-start-7">
            Specific inventory, prices, approval status and payment terms must
            be reconfirmed before any commitment.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              className={index === 0 ? "group overflow-hidden rounded-3xl bg-kp-porcelain text-kp-graphite lg:col-span-1" : "group overflow-hidden rounded-3xl bg-kp-porcelain text-kp-graphite"}
              key={project.title}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  alt={`${project.title} project context`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  height={800}
                  src={project.image}
                  width={1200}
                />
                <span className="absolute top-5 left-5 rounded-full bg-kp-rose-quartz px-4 py-2 text-xs font-extrabold tracking-[0.08em] text-kp-estate-plum uppercase">
                  {project.badge}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-extrabold leading-tight">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-kp-stone-taupe">
                  {project.copy}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link className="kp-button kp-button-primary min-h-11 px-4" href="#enquiry">
                    {project.primaryCta}
                  </Link>
                  <Link className="font-bold text-kp-estate-plum no-underline" href="#enquiry">
                    {project.secondaryCta}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-kp-porcelain/15 pt-8">
          <Link className="kp-button kp-button-accent" href="#properties">
            View All Projects & Opportunities
          </Link>
          <p className="max-w-[640px] text-sm leading-6 text-kp-porcelain/70">
            Can&apos;t find the exact option you need? Share your preferred location,
            budget and timeline for a more relevant response.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
