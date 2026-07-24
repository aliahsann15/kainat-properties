import Link from "next/link";

function Header() {
  return (
    <header
      className="relative z-[3] mx-auto grid min-h-[72px] w-[min(100%_-_48px,1320px)] grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[18px] border border-kp-mushroom-mist/75 bg-kp-porcelain/90 py-3 pr-3.5 pl-5 shadow-[0_18px_48px_rgb(42_25_49_/_8%)] max-[1080px]:grid-cols-[1fr_auto] max-[720px]:min-h-16 max-[720px]:rounded-[14px]"
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
        className="flex flex-wrap items-center justify-center gap-[clamp(1rem,2vw,2rem)] text-sm font-bold text-kp-stone-taupe max-[1080px]:hidden"
        aria-label="Main navigation"
      >
        <a
          className="no-underline transition-colors duration-200 hover:text-kp-estate-plum"
          href="#properties"
        >
          Properties
        </a>
        <a
          className="no-underline transition-colors duration-200 hover:text-kp-estate-plum"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="no-underline transition-colors duration-200 hover:text-kp-estate-plum"
          href="#videos"
        >
          Videos & Insights
        </a>
        <a
          className="no-underline transition-colors duration-200 hover:text-kp-estate-plum"
          href="#about"
        >
          About Kainat
        </a>
      </nav>

      <a
        className="kp-button kp-button-primary min-h-[46px] px-4 max-[720px]:hidden"
        href="#enquiry"
      >
        Discuss Your Investment
      </a>
    </header>
  );
}

export default Header;
