/* ================== START: Imports ================== */
import NeuralLine from './../background_animation/NeuralLine';
import Heading from './../common/Heading';
import { facts } from '../../utils/const';
import FactsCard from './../cards/FactsCard';
import BgGlow from './../background_animation/BgGlow';
/* ================== END: Imports ================== */

/* ================== START: Component ================== */
const FactsSection = () => {
	return (
		/* ================== START: Facts Section ================== */
		<section id="facts" className="py-10 sm:py-20 relative overflow-hidden">
			{/* ===== Background Elements ===== */}
			<BgGlow variant="primary" size="lg" positionClass="top-0 left-1/4" opacity={0.1} />
			<BgGlow variant="secondary" size="lg" positionClass="bottom-0 right-1/4" opacity={0.1} />

			<div className="container mx-auto relative z-10 flex flex-col gap-8 sm:gap-16">
				{/* ===== Header ===== */}
				<Heading
					section="Our Impact"
					title="Numbers That Speak for"
					highlights="Our Excellence"
					subtitle="Since our inception, we've been dedicated to delivering exceptional AI solutions that drive real business results and create lasting value for our clients worldwide."
				/>

				<div className=" flex flex-col gap-10 sm:gap-12">
					{/* ===== Facts Grid ===== */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
						{facts.map((fact, index) => (
							<FactsCard
								key={index}
								icon={fact.icon}
								value={fact.value}
								label={fact.label}
								description={fact.description}
								index={index} />
						))}
					</div>
					{/* ===== End Facts Grid ===== */}
				</div>
			</div>
			<NeuralLine />
		</section>
		/* ================== END: Facts Section ================== */
	);
};
/* ================== END: Component ================== */

/* ================== START: Export ================== */
export default FactsSection;
/* ================== END: Export ================== */
