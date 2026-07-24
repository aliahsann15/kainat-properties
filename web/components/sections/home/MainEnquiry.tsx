import KpInput from "@/components/ui/kp-input";
import { KpSelect } from "@/components/ui/kp-select";

const projectOptions = [
  { label: "Faisal Hills", value: "faisal-hills" },
  { label: "Faisal Town Phase 2", value: "faisal-town-phase-2" },
  { label: "Saffron City Rawalpindi", value: "saffron-city-rawalpindi" },
  { label: "Other / not sure yet", value: "other" },
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

const timelineOptions = [
  { label: "Immediately", value: "immediately" },
  { label: "1-3 months", value: "1-3-months" },
  { label: "3-6 months", value: "3-6-months" },
  { label: "Researching", value: "researching" },
];

const siteVisitOptions = [
  { label: "I would like to request a site visit", value: "request-site-visit" },
  { label: "Not yet", value: "not-yet" },
];

function MainEnquiry() {
  return (
    <section className="bg-kp-limestone py-24 md:py-32" id="contact">
      <div className="mx-auto grid w-[min(100%_-_24px,1400px)] grid-cols-1 gap-10 md:w-[min(100%_-_48px,1400px)] lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kp-label kp-marker">Tell us what you are looking for</p>
          <h2 className="mt-5 font-serif text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-none text-kp-estate-plum">
            A more relevant starting point, not a generic list
          </h2>
          <p className="mt-6 text-lg leading-8 text-kp-stone-taupe">
            Share a few details so Kainat Properties can respond with a more
            relevant starting point.
          </p>
          <p className="mt-8 rounded-3xl bg-kp-rose-quartz p-6 text-sm leading-6 text-kp-estate-plum">
            Assalamualaikum, I have submitted an enquiry through the Kainat
            Properties website. Preferred project: {"{project}"}. Budget:
            {" {budget}"}. Payment preference: {"{paymentPreference}"}. Buying
            timeline: {"{timeline}"}.
          </p>
        </div>

        <form className="grid gap-5 rounded-3xl border border-kp-mushroom-mist bg-kp-porcelain p-6 shadow-[var(--kp-shadow-float)] md:p-8 lg:col-span-7">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <KpInput
              label="Full name"
              name="name"
              placeholder="Your name"
              required
              validation="name"
            />
            <KpInput
              label="WhatsApp number"
              name="whatsapp"
              placeholder="03XX XXXXXXX"
              required
              validation="phone"
            />
            <KpInput
              label="Current city/country"
              name="city"
              placeholder="Where are you contacting us from?"
              required
              validation="location"
            />
            <KpSelect
              label="Preferred location/project"
              name="preferredProject"
              options={projectOptions}
              placeholder="Select or write your preference"
              required
            />
            <KpSelect label="Property type" name="propertyType" options={propertyTypeOptions} required />
            <KpSelect label="Budget range" name="budget" options={budgetOptions} placeholder="Select a range" required />
            <KpSelect label="Payment preference" name="paymentPreference" options={paymentOptions} required />
            <KpSelect label="Buying timeline" name="timeline" options={timelineOptions} required />
            <KpSelect label="Site visit" name="siteVisit" options={siteVisitOptions} required />
            <div className="md:col-span-2">
              <KpInput
                label="Additional message"
                multiline
                name="message"
                placeholder="Tell us what matters most to you"
                validation="message"
              />
            </div>
          </div>
          <button className="kp-button kp-button-accent" type="submit">
            Send My Property Enquiry
          </button>
          <p className="text-sm leading-6 text-kp-stone-taupe">
            Thank you. Your enquiry has been received. Kainat Properties will
            review your requirements and respond through the contact details you
            provided.
          </p>
        </form>
      </div>
    </section>
  );
}

export default MainEnquiry;
