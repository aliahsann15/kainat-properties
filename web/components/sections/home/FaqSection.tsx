const faqs = [
  {
    question: "Which areas does Kainat Properties cover?",
    answer:
      "The current public focus is on property and investment opportunities across Islamabad and Rawalpindi. Recent public content includes Faisal Hills, Faisal Town Phase 2 and Saffron City. Contact Kainat Properties to confirm the latest areas and inventory.",
  },
  {
    question: "Are the prices and payment plans shown on the website final?",
    answer:
      "No. Property prices, availability and payment plans can change. Any figures shown should be dated and reconfirmed directly before booking or purchase.",
  },
  {
    question: "Can I request a site visit?",
    answer:
      "Yes, you can submit a site-visit request through the enquiry form. Kainat Properties will confirm availability, timing and arrangements.",
  },
  {
    question: "How do I know whether a project is approved?",
    answer:
      "Approval and NOC status varies by project and can change. Review the latest information from the relevant development authority and project documentation, and obtain independent legal verification where appropriate.",
  },
  {
    question: "Does Kainat Properties guarantee investment returns?",
    answer:
      "No. Real-estate prices and returns depend on market conditions, project development, demand and other risks. Website and social content should be treated as information, not a guaranteed return or financial promise.",
  },
  {
    question: "Can I ask about a project that is not listed?",
    answer:
      "Yes. Share the project name, preferred location and your requirements through WhatsApp or the enquiry form, and Kainat Properties can confirm whether relevant information or options are available.",
  },
];

function FaqSection() {
  return (
    <section className="bg-kp-limestone py-24 md:py-32">
      <div className="mx-auto grid w-[min(100%_-_24px,1400px)] grid-cols-1 gap-10 md:w-[min(100%_-_48px,1400px)] lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="kp-label kp-marker">Frequently asked questions</p>
          <h2 className="mt-5 font-serif text-[clamp(2.5rem,5vw,4.4rem)] font-semibold leading-none text-kp-estate-plum">
            Verify the changing details before moving forward
          </h2>
        </div>
        <div className="grid gap-3 lg:col-span-8">
          {faqs.map((faq) => (
            <details className="group rounded-3xl border border-kp-mushroom-mist bg-kp-porcelain p-6" key={faq.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-extrabold text-kp-graphite">
                {faq.question}
                <span className="text-2xl text-kp-ember transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-7 text-kp-stone-taupe">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
