import HeroSection from '../components/homePageSections/HeroSection'
import AboutSection from '../components/homePageSections/AboutSection'
import BlogSection from '../components/homePageSections/BlogSection'
import ContactSection from './../components/homePageSections/ContactSection'
import FactsSection from './../components/homePageSections/FactsSection'
import ProcessSection from './../components/homePageSections/ProcessSection'
import ProjectsSection from '../components/homePageSections/ProjectsSection'
import ServicesSection from '../components/homePageSections/ServicesSection'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProcessSection />
            <FactsSection />
            <ProjectsSection />
            <BlogSection />
            <ContactSection />
        </>
    )
}

export default HomePage