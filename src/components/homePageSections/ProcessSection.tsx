/* ================== START: Imports ================== */
import Heading from './../common/Heading';
import { processSteps } from '../../utils/const';
import { handleMouseMove, handleTouchMove } from '../../utils/functions';
import NeuralLine from './../background_animation/NeuralLine';
import CTACard from './../cards/CTACard';
import ProcessCard from './../cards/ProcessCard';
/* ================== END: Imports ================== */

/* ================== START: Component ================== */
const ProcessSection = () => {
	return (
		/* ================== START: Process Section ================== */
		<section id="process" className="py-10 sm:py-20 relative overflow-hidden">
			<div className="container mx-auto flex flex-col gap-8 sm:gap-16">
				{/* ===== Header ===== */}
				<Heading
					section="How It Works"
					title="Our Proven"
					highlights="AI Innovation"
					subtitle="From initial consultation to final deployment, we follow a structured approach that ensures successful AI implementation and maximum return on investment."
				/>

				<div className="flex flex-col gap-6 sm:gap-12">
					{/* ===== Process Steps ===== */}
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
						{processSteps.map((step, index) => (
							<ProcessCard
								key={index}
								index={index}
								handleMouseMove={handleMouseMove}
								handleTouchMove={handleTouchMove}
								processSteps={processSteps}
								icon={step.icon}
								title={step.title}
								description={step.description}
							/>
						))}
					</div>

					{/* ===== CTA Section ===== */}
					<CTACard
						title="Start Your AI Journey Today"
						subtitle="Ready to revolutionize your business with AI? Our team is here to guide you through every step of the process, from concept to implementation."
						actions="Get Free Consultation"
						delay={800}
					/>
				</div>
			</div>
			<NeuralLine />
		</section>
		/* ================== END: Process Section ================== */
	);
};
/* ================== END: Component ================== */

/* ================== START: Export ================== */
export default ProcessSection;
/* ================== END: Export ================== */
