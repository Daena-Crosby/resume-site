import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import SocialProofSection from '@/components/SocialProofSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import DecorativeShapes from '@/components/DecorativeShapes';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Global decorative background */}
      <DecorativeShapes />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <SocialProofSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
