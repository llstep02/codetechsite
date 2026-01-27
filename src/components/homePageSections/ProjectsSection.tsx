/* ================== START: Imports ================== */
import ProjectCard from './../cards/ProjectCard';
import Heading from './../common/Heading';
import { projects } from '../../utils/const';
import NeuralLine from './../background_animation/NeuralLine';
import BgGlow from './../background_animation/BgGlow';
import { useNavigate } from 'react-router-dom';
import { Button } from './../ui/button';

/* ================== END: Imports ================== */

/* ================== START: Component ================== */
const ProjectsSection = () => {
	const navigate = useNavigate();
	return (
		/* ================== START: Projects Section ================== */
		<section id="projects" className="py-10 sm:py-20 relative overflow-hidden">
			{/* ===== Background Elements ===== */}
			<BgGlow variant="primary" size="lg" positionClass="top-1/4 left-0" opacity={0.1} />
			<BgGlow variant="secondary" size="lg" positionClass="bottom-1/4 right-0" opacity={0.1} />

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
						{(projects ?? []).slice(0, 3).map((project, index) => (
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
					<div className="text-center" data-aos="fade-up" data-aos-delay="600">
						<Button variant='hero' size='lg' className='w-fit mx-auto' onClick={() => navigate(`/projects`)}>View All Projects</Button>
					</div>
				</div>
			</div>
			<NeuralLine />
		</section>
		/* ================== END: Projects Section ================== */
	);
};
/* ================== END: Component ================== */

/* ================== START: Export ================== */
export default ProjectsSection;
/* ================== END: Export ================== */
