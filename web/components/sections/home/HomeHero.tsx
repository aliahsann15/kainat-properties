import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layouts/Header";
import { KpSelect } from "@/components/ui/kp-select";

const locationOptions = [
    { label: "Islamabad", value: "islamabad" },
    { label: "Rawalpindi", value: "rawalpindi" },
    { label: "Faisal Hills", value: "faisal-hills" },
    { label: "Faisal Town Phase 2", value: "faisal-town-phase-2" },
    { label: "Saffron City Rawalpindi", value: "saffron-city-rawalpindi" },
];

const propertyTypeOptions = [
    { label: "Residential plot", value: "residential-plot" },
    { label: "Commercial plot", value: "commercial-plot" },
    { label: "House", value: "house" },
    { label: "Apartment", value: "apartment" },
    { label: "Other", value: "other" },
];

const budgetOptions = [
    { label: "Under PKR 50 lakh", value: "under-50-lakh" },
    { label: "PKR 50 lakh - 1 crore", value: "50-lakh-1-crore" },
    { label: "PKR 1 crore - 2 crore", value: "1-crore-2-crore" },
    { label: "PKR 2 crore+", value: "2-crore-plus" },
];

const paymentOptions = [
    { label: "Cash", value: "cash" },
    { label: "Instalments", value: "instalments" },
    { label: "Open to both", value: "open-to-both" },
];

function HomeHero() {
    return (
        <section
            className="kp-home-hero bg-kp-limestone pt-3 pb-16 lg:bg-[radial-gradient(circle_at_7%_22%,rgb(216_111_82_/_16%),transparent_30%),linear-gradient(112deg,var(--kp-limestone)_0%,var(--kp-limestone)_58%,var(--kp-estate-plum)_58%,var(--kp-estate-plum)_100%)] lg:pt-4 lg:pb-24"
            aria-labelledby="home-hero-title"
        >
            <Header />

            <div className="relative z-[2] mx-auto grid w-[min(100%_-_24px,1400px)] grid-cols-1 items-center gap-12 pt-12 md:w-[min(100%_-_48px,1400px)] md:gap-16 md:pt-20 lg:grid-cols-[minmax(0,0.94fr)_minmax(420px,0.76fr)] lg:gap-[clamp(2.5rem,6vw,5rem)] lg:pt-[clamp(4rem,8vw,6.5rem)]">
                <div className="max-w-[920px]">
                    <p className="kp-label kp-marker">
                        Property guidance for Islamabad & Rawalpindi
                    </p>

                    <h1
                        id="home-hero-title"
                        className="mt-5 max-w-[920px] text-[clamp(2.9rem,13vw,4.2rem)] leading-[0.96] md:text-[clamp(3.8rem,9vw,5.7rem)] lg:text-[clamp(4.2rem,7vw,6.5rem)]"
                    >
                        Explore Property Opportunities with Greater Clarity
                    </h1>

                    <p className="mt-6 max-w-[690px] text-[clamp(1.05rem,1.45vw,1.25rem)] leading-[1.65] text-kp-stone-taupe">
                        Discover residential and investment opportunities through clear
                        project information, on-ground video insights and direct guidance
                        from Kainat Properties.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3.5 [&_.kp-button]:w-full md:[&_.kp-button]:w-auto" aria-label="Hero actions">
                        <Link className="kp-button kp-button-primary" href="#opportunities">
                            Explore Opportunities
                        </Link>
                        <Link
                            className="kp-button kp-button-secondary"
                            href="https://wa.me/923040882985?text=Assalamualaikum%2C%20I%20want%20to%20discuss%20my%20property%20budget%20with%20Kainat%20Properties."
                            target="_blank"
                            rel="noreferrer"
                        >
                            Discuss Budget on WhatsApp
                        </Link>
                    </div>

                    <p className="mt-6 max-w-[620px] border-l-2 border-kp-ember pl-3.5 text-sm leading-[1.6] text-kp-stone-taupe">
                        Current prices, availability, payment plans and project status are
                        confirmed at the time of enquiry.
                    </p>
                </div>

                <div className="relative min-h-0 lg:min-h-[680px]" aria-label="Featured project context">
                    <div className="group isolate relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-3xl border border-kp-porcelain/20 shadow-[var(--kp-shadow-float)] lg:mt-52 lg:ml-auto lg:max-w-[520px]">
                        <Image
                            className="h-full w-full scale-[1.01] object-cover saturate-[0.9] contrast-[1.02] transition-transform duration-[450ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.035]"
                            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1400"
                            alt="Aerial-style urban development context for Islamabad and Rawalpindi property guidance."
                            width={1400}
                            height={1750}
                            priority
                        />
                        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent from-40% to-kp-estate-plum/90" />
                        <div className="absolute inset-x-0 bottom-0 z-[2] grid gap-1 p-6 text-kp-porcelain md:p-8">
                            <span className="text-[0.72rem] font-extrabold tracking-[0.08em] text-kp-ember uppercase">
                                Recent project focus
                            </span>
                            <strong className="font-serif text-[clamp(1.5rem,2.4vw,2.2rem)] leading-[1.06] font-semibold">
                                Faisal Hills, Faisal Town Phase 2, Saffron City
                            </strong>
                        </div>
                    </div>

                    <form
                        className="relative z-[3] mx-auto mt-10 grid w-full max-w-[660px] gap-5 rounded-[24px] border border-kp-mushroom-mist bg-kp-porcelain/95 p-5 shadow-[var(--kp-shadow-float)] md:w-[calc(100%-2rem)] md:p-7 lg:absolute lg:top-[-5.5rem] lg:right-20 lg:mt-0 lg:w-[min(100%,630px)] lg:translate-x-[-4%] lg:translate-y-[7%]"
                        id="enquiry"
                    >
                        <div>
                            <p className="kp-label">Quick property enquiry</p>
                            <h2 className="mt-1 font-serif text-[clamp(1.8rem,3vw,2.35rem)] leading-[1.05]">
                                What are you looking for?
                            </h2>
                            <p className="mt-2 text-[0.94rem] leading-[1.55] text-kp-stone-taupe">
                                Share your priorities and discover opportunities that better
                                match your budget, location and payment plan.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
                            <KpSelect
                                label="Location"
                                name="location"
                                options={locationOptions}
                                placeholder="Select a location"
                                required
                            />

                            <KpSelect
                                defaultValue="residential-plot"
                                label="Property type"
                                name="propertyType"
                                options={propertyTypeOptions}
                                required
                            />

                            <KpSelect
                                label="Budget"
                                name="budget"
                                options={budgetOptions}
                                placeholder="Select budget range"
                                required
                            />

                            <KpSelect
                                defaultValue="cash"
                                label="Payment preference"
                                name="paymentPreference"
                                options={paymentOptions}
                                required
                            />
                        </div>

                        <button className="kp-button kp-button-accent" type="submit">
                            Find Relevant Opportunities
                        </button>

                        <p className="-mt-2 text-[0.8rem] text-kp-stone-taupe">
                            Your details will only be used to respond to your property enquiry.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default HomeHero
