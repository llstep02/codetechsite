/* ================== START: Imports ================== */

import { useEffect } from 'react';
import NeuralLine from './../components/background_animation/NeuralLine';
import CTACard from './../components/cards/CTACard';
import ProjectCard from './../components/cards/ProjectCard';
import Heading from './../components/common/Heading';
import { projects } from '../utils/const';
import BgGlow from '../components/background_animation/BgGlow';

/* ================== END: Imports ================== */

/* ================== START: Component ================== */
const ProjectsPage = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);
	return (
		/* ================== START: Projects Section ================== */
		<section className="py-10 sm:py-20 sm:pt-40 pt-32 relative overflow-hidden">
			{/* ===== Background Elements ===== */}
			<BgGlow variant="primary" size="lg" positionClass="top-1/4 left-0" opacity={0.1} />
			<BgGlow
				variant="secondary"
				size="lg"
				positionClass="bottom-1/4 right-0"
				opacity={0.1}
			/>

			<div className="container mx-auto relative z-10 flex flex-col gap-8 sm:gap-16">
				{/* ===== Header ===== */}
				<Heading
					section="Our Projects"
					title="Transforming Industries with"
					highlights="AI Innovation"
					subtitle="Explore our portfolio of successful AI implementations across various industries, showcasing real-world impact and measurable results."
				/>

				<div className=" flex flex-col gap-8 sm:gap-12">
					{/* ===== Projects Grid ===== */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
						{projects.map((project, index) => (
							<ProjectCard
								key={project.id}
								id={project.id}
								image={project.image}
								title={project.title}
								description={project.description}
								category={project.category}
								technologies={project.technologies}
								results={project.results}
								animationDelay={300 + index * 100}
							/>
						))}
					</div>

					{/* ===== CTA Section ===== */}
					<CTACard
						title="Ready to Start Your AI Project?"
						subtitle="Let's discuss how we can transform your business with custom AI solutions tailored to your specific needs and objectives."
						actions="Get Started Today"
						delay={800}
						to="/contact"
					/>
				</div>
			</div>
			<NeuralLine />
		</section>
		/* ================== END: Projects Section ================== */
	);
};
/* ================== END: Component ================== */

/* ================== START: Export ================== */
export default ProjectsPage;
/* ================== END: Export ================== */
