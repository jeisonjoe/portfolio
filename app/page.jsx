import HeroSection from "./components/Homepage/HeroSection";
import FeaturedWorks from "./components/Homepage/FeaturedWorks";
import ProjectsSection from "./components/Homepage/ProjectsSection";
import ExperienceSection from "./components/Homepage/ExperienceSection";
import StatCards from "./components/Homepage/StatCards";
import ToolsAndTechnologiesSection from "./components/Homepage/ToolsAndTechnologiesSection";
import ServicesSection from "./components/Homepage/ServicesSection";

export default function Home() {
  return (
    <main className="pt-[92px] bg-home-bg">
      <HeroSection />
      <StatCards />
      <ToolsAndTechnologiesSection />
      <ServicesSection />
      <FeaturedWorks />
      <ProjectsSection />
      <ExperienceSection />
    </main>
  );
}
