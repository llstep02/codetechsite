/* ================== START: Imports ================== */
import { useEffect, useRef, useState } from "react";
import Heading from "./../components/common/Heading";
import BgGlow from "./../components/background_animation/BgGlow";
import { faqs } from "../utils/const";
import FaqsCard1 from "../components/cards/FaqsCard1";
import FaqsCard2 from "./../components/cards/FaqsCard2";
import FaqsCard3 from "../components/cards/FaqsCard3";
import NeuralLine from "./../components/background_animation/NeuralLine";
/* ================== END: Imports ================== */

/* ================== START: Component ================== */
const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    // Duration should match FaqsCard1 close/open transition (ms)
    const animationDuration = 700;
    const openTimeoutRef = useRef<number | null>(null);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        /* ================== START: FAQs Section ================== */
        <section className="py-10 sm:py-20 sm:pt-40 pt-32 relative overflow-hidden">
            {/* ===== Background Elements ===== */}
            <BgGlow variant="primary" size="lg" positionClass="top-1/4 right-1/4" opacity={0.1} />
            <BgGlow variant="secondary" size="lg" positionClass="bottom-1/4 left-1/4" opacity={0.1} />

            <div className="container mx-auto relative z-10 flex flex-col gap-8 sm:gap-16">
                {/* ===== Header ===== */}
                <Heading
                    section="Frequently Asked Questions"
                    title="Everything You Need to"
                    highlights="Know About AI"
                    subtitle="Get answers to the most common questions about our AI solutions,
            implementation process, and how we can help transform your business."
                />

                {/* ===== FAQ Grid ===== */}
                <div className="grid lg:grid-cols-2 gap-5 sm:gap-8">
                    {/* ===== FAQ List ===== */}
                    <div className="flex flex-col gap-3 sm:gap-4">
                        {faqs.map((faq, index) => (
                            <FaqsCard1
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                index={index}
                                open={openIndex === index}
                                onToggle={() => {
                                    // If clicking the already-open item -> close it
                                    if (openIndex === index) {
                                        setOpenIndex(null);
                                        return;
                                    }

                                    // If another item is open, close it first, then open the clicked one
                                    if (openIndex !== null && openIndex !== index) {
                                        setOpenIndex(null);
                                        // clear any existing timeout
                                        if (openTimeoutRef.current) {
                                            window.clearTimeout(openTimeoutRef.current);
                                        }
                                        // after animationDuration, open the requested index
                                        openTimeoutRef.current = window.setTimeout(() => {
                                            setOpenIndex(index);
                                            openTimeoutRef.current = null;
                                        }, animationDuration);
                                        return;
                                    }

                                    // Otherwise, open the clicked item immediately
                                    setOpenIndex(index);
                                }}
                            />
                        ))}
                    </div>

                    {/* ===== FAQ Visual/Stats ===== */}
                    <div
                        className="flex flex-col gap-5 sm:gap-8"
                        data-aos="fade-left"
                        data-aos-delay="400"
                    >
                        {/* ===== AI Assistant Visual ===== */}
                        <FaqsCard2 />
                        {/* ===== Quick Contact (Now using FaqsCard3) ===== */}
                        <FaqsCard3 />
                    </div>
                </div>
            </div>
            <NeuralLine />
        </section>
        /* ================== END: FAQs Section ================== */
    );
};

/* ================== START: Export ================== */
export default FAQPage;
/* ================== END: Export ================== */
