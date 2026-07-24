import Link from "next/link";

function Header() {
  return (
    <header
      className="relative z-[3] mx-auto grid min-h-16 w-[min(100%_-_24px,1400px)] grid-cols-[1fr_auto] items-center gap-4 rounded-[14px] border border-kp-mushroom-mist/75 bg-kp-porcelain/90 py-3 pr-3.5 pl-5 shadow-[0_18px_48px_rgb(42_25_49_/_8%)] md:w-[min(100%_-_48px,1400px)] lg:min-h-[72px] lg:grid-cols-[auto_1fr_auto] lg:rounded-[18px]"
      aria-label="Primary"
    >
      <Link
        href="/"
        className="grid text-kp-estate-plum no-underline leading-none"
        aria-label="Kainat Properties home"
      >
        <span className="font-serif text-[1.55rem] font-semibold">Kainat</span>
        <strong className="mt-1 text-[0.62rem] font-extrabold tracking-[0.2em] uppercase">
          Properties
        </strong>
      </Link>

      <nav
        className="hidden flex-wrap items-center justify-center gap-[clamp(1rem,2vw,2rem)] text-sm font-bold text-kp-stone-taupe lg:flex"
        aria-label="Main navigation"
      >
        <Link
          className="no-underline transition-colors duration-200 hover:text-kp-estate-plum"
          href="#properties"
        >
          Properties
        </Link>
        <Link
          className="no-underline transition-colors duration-200 hover:text-kp-estate-plum"
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className="no-underline transition-colors duration-200 hover:text-kp-estate-plum"
          href="#videos"
        >
          Videos & Insights
        </Link>
        <Link
          className="no-underline transition-colors duration-200 hover:text-kp-estate-plum"
          href="#about"
        >
          About Kainat
        </Link>
      </nav>

      <Link
        className="kp-button kp-button-primary hidden text-sm md:text-base min-h-11.5 px-4 md:inline-flex"
        href="#enquiry"
      >
        Discuss Your Investment
      </Link>
    </header>
  );
}

export default Header;
