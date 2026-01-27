/* ================== START: Imports ================== */
import ServiceCard from './../cards/ServiceCard';
import Heading from './../common/Heading';
import { services } from '../../utils/const';
import NeuralLine from './../background_animation/NeuralLine';
import { Button } from './../ui/button';
import { useNavigate } from 'react-router-dom';
/* ================== END: Imports ================== */

/* ================== START: Component ================== */
const ServicesSection = () => {
	const navigate = useNavigate();
	return (
		/* ================== START: Services Section ================== */
		<section id="services" className="py-10 sm:py-20 relative">
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
						{(services ?? []).slice(0, 3).map((service, index) => (
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
					<div className="text-center" data-aos="fade-up" data-aos-delay="600">
						<Button variant='hero' size='lg' className='w-fit mx-auto' onClick={() => navigate(`/services`)}>View More Services</Button>
					</div>
				</div>
			</div >
			<NeuralLine />
		</section >
		/* ================== END: Services Section ================== */
	);
};
/* ================== END: Component ================== */

/* ================== START: Export ================== */
export default ServicesSection;
/* ================== END: Export ================== */
