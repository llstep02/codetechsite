/* ================== START: Imports ================== */
import { useEffect } from "react";
import { team } from "../utils/const";
import Heading from "./../components/common/Heading";
import TeamCard from "./../components/cards/TeamCard";
import NeuralLine from "./../components/background_animation/NeuralLine";
/* ================== END: Imports ================== */

/* ================== START: Component ================== */
const TeamPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        /* ================== START: Team Section ================== */
        <section id="team" className="py-10 sm:py-20 sm:pt-40 pt-32 relative overflow-hidden">
            {/* ===== Background Elements ===== */}

            <div className="container mx-auto relative z-10 flex flex-col gap-8 sm:gap-16">
                {/* ===== Header ===== */}
                <Heading
                    section="Our Team"
                    title="Meet the"
                    highlights="AI Experts"
                    subtitle="Our world-class team of AI specialists, researchers, and engineers are dedicated to delivering cutting-edge solutions."
                />

                {/* ===== Team Grid ===== */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
                    {team.map((member, index) => (
                        <TeamCard
                            key={index}
                            image={member.image}
                            name={member.name}
                            role={member.role}
                            bio={member.bio}
                            index={index}
                        />
                    ))}
                </div>
            </div>
            <NeuralLine />
        </section>
        /* ================== END: Team Section ================== */
    );
};
/* ================== END: Component ================== */

/* ================== START: Export ================== */
export default TeamPage;
/* ================== END: Export ================== */
