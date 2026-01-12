import { Suspense, lazy } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';
import DecorativeShapes from '@/components/DecorativeShapes';

// Lazy load heavy components
const ProjectsSection = lazy(() => import('@/components/ProjectsSection'));
const SocialProofSection = lazy(() => import('@/components/SocialProofSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));

// Loading fallback component with skeleton
const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center min-h-[200px]">
    <div className="flex flex-col items-center gap-2">
      <div className="h-2 w-32 bg-muted animate-pulse rounded" />
      <div className="h-2 w-24 bg-muted animate-pulse rounded" />
    </div>
  </div>
);

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
        <Suspense fallback={<SectionLoader />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SocialProofSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
