import Footer from "@/components/layouts/Footer";
import AudienceSection from "@/components/sections/home/AudienceSection";
import CredibilitySection from "@/components/sections/home/CredibilitySection";
import EnquiryJourney from "@/components/sections/home/EnquiryJourney";
import FaqSection from "@/components/sections/home/FaqSection";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import FinalCta from "@/components/sections/home/FinalCta";
import HomeHero from "@/components/sections/home/HomeHero";
import FounderSection from "@/components/sections/home/FounderSection";
import MainEnquiry from "@/components/sections/home/MainEnquiry";
import OpportunityCategories from "@/components/sections/home/OpportunityCategories";
import TrustHighlights from "@/components/sections/home/TrustHighlights";
import VideosInsights from "@/components/sections/home/VideosInsights";
import WhyKainat from "@/components/sections/home/WhyKainat";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HomeHero />
      <TrustHighlights />
      <OpportunityCategories />
      <FeaturedProjects />
      <WhyKainat />
      <FounderSection />
      <EnquiryJourney />
      <VideosInsights />
      <AudienceSection />
      <CredibilitySection />
      <MainEnquiry />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
