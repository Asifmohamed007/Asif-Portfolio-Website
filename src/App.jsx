import Preloader from './components/Preloader.jsx';
import SideHeader from './components/SideHeader.jsx';
import MobileNav from './components/MobileNav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import BackToTop from './components/BackToTop.jsx';
import useReveal from './hooks/useReveal.js';
import usePageProtection from './hooks/usePageProtection.js';
import { projectModals } from './data/projects.js';

export default function App() {
  useReveal();
  usePageProtection();
  return (
    <>
      <Preloader />
      <SideHeader />
      <MobileNav />
      <main className="page-wrapper-two">
        <Hero />
        <About />
        <Resume>
          <Projects />
          <Contact />
        </Resume>
        <Footer />
        <ProjectModal id="gnc" label="Own projects" projects={projectModals.gnc} />
        <ProjectModal id="coming" label="College projects" projects={projectModals.coming} />
        <BackToTop />
      </main>
    </>
  );
}
