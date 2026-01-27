/* ================== START: Imports ================== */
import { services } from '../utils/const';
import Heading from './../components/common/Heading';
import ServiceCard from './../components/cards/ServiceCard';
import CTACard from './../components/cards/CTACard';
import NeuralLine from './../components/background_animation/NeuralLine';
import { useEffect } from 'react';
/* ================== END: Imports ================== */

/* ================== START: Component ================== */
const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        /* ================== START: Services Section ================== */
        <section className="py-10 sm:py-20 sm:pt-40 pt-32 relative">
            <div className="container mx-auto flex flex-col gap-8 sm:gap-16 relative">
                {/* ===== Header ===== */}
                <Heading
                    section="Our Services"
                    title="Comprehensive"
                    highlights="AI Solutions"
                    subtitle="From machine learning to automation, we offer a full spectrum of AI services designed to transform your business operations and drive sustainable growth."
                />
                <div className="flex flex-col gap-8 sm:gap-12">
                    {/* ===== Services Grid ===== */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                        {(services ?? []).map((service, index) => (
                            <ServiceCard
                                key={service.id ?? service.title ?? index}
                                id={service.id}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                features={service.features}
                                animationDelay={300 + index * 100}
                            />
                        ))}
                    </div>
                    {/* ===== CTA ===== */}
                    <CTACard
                        title="Ready to Transform Your Business?"
                        subtitle={"Let's discuss how our AI solutions can help you achieve your goals and stay ahead of the competition."}
                        actions="Schedule a Consultation"
                        delay={800}
                        to='/contact'
                    />
                </div>
            </div >
            <NeuralLine />
        </section >
        /* ================== END: Services Section ================== */
    );
};
/* ================== END: Component ================== */

/* ================== START: Export ================== */
export default ServicesPage;
/* ================== END: Export ================== */
