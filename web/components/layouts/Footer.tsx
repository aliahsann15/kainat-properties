import Link from "next/link";

const footerGroups = [
  {
    title: "Explore",
    links: ["Properties", "Projects", "Investment Opportunities", "Latest Project Updates"],
  },
  {
    title: "Company",
    links: ["About Kainat", "Videos & Insights", "Contact"],
  },
  {
    title: "Help",
    links: ["Start an Enquiry", "Request a Site Visit", "WhatsApp"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Use", "Property Disclaimer"],
  },
];

function Footer() {
  return (
    <footer className="bg-kp-graphite py-16 text-kp-porcelain">
      <div className="mx-auto w-[min(100%_-_24px,1400px)] md:w-[min(100%_-_48px,1400px)]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="grid leading-none">
              <span className="font-serif text-3xl font-semibold">Kainat</span>
              <strong className="mt-2 text-xs font-extrabold tracking-[0.2em] uppercase">
                Properties
              </strong>
            </div>
            <p className="mt-6 max-w-[430px] text-base leading-7 text-kp-porcelain/70">
              Kainat Properties is a founder-led real-estate brand helping
              buyers and investors explore property opportunities, project
              updates and market insights across Islamabad and Rawalpindi.
            </p>
            <p className="mt-6 text-sm text-kp-porcelain/70">
              WhatsApp / Phone: 0304-0882985
            </p>
            <p className="mt-2 text-sm text-kp-porcelain/65">
              E-mail: investwithkainat@gmail.com
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:col-span-8">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="inline-flex w-fit pb-1 font-sans text-sm font-extrabold tracking-[0.08em] text-kp-ember! uppercase">
                  {group.title}
                </h2>
                <ul className="mt-5 grid gap-3 text-sm text-kp-porcelain/70">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link className="no-underline transition-colors duration-200 hover:text-kp-porcelain" href="#contact">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-kp-porcelain/10 pt-8">
          <p className="max-w-[70em]! text-xs leading-6 text-kp-porcelain/55">
            All property information, prices, availability, payment plans,
            development updates and approval details are subject to change and
            must be independently verified before any transaction. Nothing on
            this website constitutes legal, tax or investment advice, and no
            return is guaranteed.
          </p>
          <div className="mt-6 flex flex-wrap justify-between gap-4 text-xs text-kp-porcelain/55">
            <p>© 2026 Kainat Properties. All rights reserved.</p>
            <p>Website designed and developed by Ali Ahsan.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
