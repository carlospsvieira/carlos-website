import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowIHelpSection from "@/components/HowIHelpSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen">
    <SiteHeader />
    <HeroSection />
    <ServicesSection />
    <HowIHelpSection />
    <ExperienceSection />
    <TechStackSection />
    <PortfolioSection />
    <ContactSection />
    <footer className="py-8 border-t border-border">
      <div className="container text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Carlo Vieira - React Engineer. All rights reserved.
      </div>
    </footer>
  </div>
);

export default Index;
