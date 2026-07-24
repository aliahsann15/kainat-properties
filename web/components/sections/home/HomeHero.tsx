import Image from "next/image";
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
        <section className="kp-home-hero max-[720px]:pt-3" aria-labelledby="home-hero-title">
            <Header />

            <div className="relative z-[2] mx-auto grid w-[min(100%_-_48px,1320px)] grid-cols-[minmax(0,0.94fr)_minmax(420px,0.76fr)] items-center gap-[clamp(2.5rem,6vw,5rem)] pt-[clamp(4rem,8vw,6.5rem)] max-[1080px]:grid-cols-1 max-[720px]:pt-12">
                <div className="max-w-[920px]">
                    <p className="kp-label kp-marker">
                        Property guidance for Islamabad & Rawalpindi
                    </p>

                    <h1
                        id="home-hero-title"
                        className="mt-5 max-w-[920px] text-[clamp(3.4rem,7vw,6.25rem)] leading-[0.96] max-[720px]:text-[clamp(2.9rem,13vw,4.2rem)]"
                    >
                        Explore Property Opportunities with Greater Clarity
                    </h1>

                    <p className="mt-6 max-w-[690px] text-[clamp(1.05rem,1.45vw,1.25rem)] leading-[1.65] text-kp-stone-taupe">
                        Discover residential and investment opportunities through clear
                        project information, on-ground video insights and direct guidance
                        from Kainat Properties.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3.5 max-[720px]:[&_.kp-button]:w-full" aria-label="Hero actions">
                        <a className="kp-button kp-button-primary" href="#opportunities">
                            Explore Opportunities
                        </a>
                        <a
                            className="kp-button kp-button-secondary"
                            href="https://wa.me/923040882985?text=Assalamualaikum%2C%20I%20want%20to%20discuss%20my%20property%20budget%20with%20Kainat%20Properties."
                            target="_blank"
                            rel="noreferrer"
                        >
                            Discuss Budget on WhatsApp
                        </a>
                    </div>

                    <p className="mt-6 max-w-[620px] border-l-2 border-kp-ember pl-3.5 text-sm leading-[1.6] text-kp-stone-taupe">
                        Current prices, availability, payment plans and project status are
                        confirmed at the time of enquiry.
                    </p>
                </div>

                <div className="relative min-h-170 max-[1080px]:min-h-auto" aria-label="Featured project context">
                    <div className="group relative mt-52 ml-auto aspect-square max-w-[520px] overflow-hidden rounded-3xl border border-kp-porcelain/20 shadow-(--kp-shadow-float) isolate max-[1080px]:ml-0 max-[1080px]:max-w-none">
                        <Image
                            className="h-full w-full scale-[1.01] object-cover saturate-[0.9] contrast-[1.02] transition-transform duration-450 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.035]"
                            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1400"
                            alt="Aerial-style urban development context for Islamabad and Rawalpindi property guidance."
                            width={1400}
                            height={1750}
                            priority
                        />
                        <div className="absolute inset-0 z-1 bg-linear-to-b from-transparent from-40% to-kp-estate-plum/90" />
                        <div className="absolute inset-x-0 bottom-0 z-2 grid gap-1 p-8 text-kp-porcelain">
                            <span className="text-[0.72rem] font-extrabold tracking-[0.08em] text-kp-ember uppercase">
                                Recent project focus
                            </span>
                            <strong className="font-serif text-[clamp(1.5rem,2.4vw,2.2rem)] leading-[1.06] font-semibold">
                                Faisal Hills, Faisal Town Phase 2, Saffron City
                            </strong>
                        </div>
                    </div>

                    <form
                        className="absolute -top-22 right-20 z-3 grid w-[min(100%,630px)] max-w-[660px] translate-x-[-4%] translate-y-[7%] gap-5 rounded-[24px] border border-kp-mushroom-mist bg-kp-porcelain/95 p-[clamp(1.25rem,3vw,1.75rem)] shadow-[var(--kp-shadow-float)] max-[1080px]:relative max-[1080px]:mt-[-3rem] max-[1080px]:w-[calc(100%-2rem)] max-[1080px]:max-w-none max-[1080px]:translate-0 max-[720px]:w-full"
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

                        <div className="grid grid-cols-2 gap-3.5 max-[720px]:grid-cols-1">
                            <KpSelect
                                label="Location"
                                name="location"
                                options={locationOptions}
                                placeholder="Select a location"
                            />

                            <KpSelect
                                defaultValue="residential-plot"
                                label="Property type"
                                name="propertyType"
                                options={propertyTypeOptions}
                            />

                            <KpSelect
                                label="Budget"
                                name="budget"
                                options={budgetOptions}
                                placeholder="Select budget range"
                            />

                            <KpSelect
                                defaultValue="cash"
                                label="Payment preference"
                                name="paymentPreference"
                                options={paymentOptions}
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
