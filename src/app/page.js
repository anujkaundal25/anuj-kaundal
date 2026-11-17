import SiteLayout from "@/component/ui/SiteLayout";
import HeroSection from "@/component/home/HeroSection";
import AboutMe from "@/component/home/AboutMe";
import Skills from "@/component/home/Skills";
import Services from "@/component/home/Services";
import PortfolioSection from "@/component/home/Project";
import Contact from "@/component/home/Contact";
import Footer from "@/component/ui/Footer";

export default function Home() {
  return (
    <SiteLayout>
      <HeroSection />
      <AboutMe />
      <Skills/>
      {/* <Services/> */}
      <PortfolioSection/>
      <Contact/>
      <Footer/>
    </SiteLayout>
  );
}
