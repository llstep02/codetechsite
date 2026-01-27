/* ================== START: Imports ================== */
import { Badge } from '../ui/badge';
import { Shield } from 'lucide-react';
import { aboutAchievements, aboutFeatures } from '../../utils/const';
import AboutCard1 from '../cards/AboutCard1';
import AboutCard2 from '../cards/AboutCard2';
import { handleMouseMove, handleTouchMove } from '../../utils/functions';
import NeuralLine from '../background_animation/NeuralLine';
import BgGlow from '../background_animation/BgGlow';
import CardGradientBg from '../background_animation/CardGradientBg';

/* ================== END: Imports ================== */

/* ================== START: Component ================== */
const AboutSection = () => {
	return (
		/* ================== START: About Section ================== */
		<section id="about" className="py-10 sm:py-20 relative overflow-hidden">
			{/* ===== Background Elements ===== */}
			<BgGlow variant="primary" size="lg" positionClass="top-1/4 right-0" opacity={0.1} />
			<BgGlow variant="secondary" size="lg" positionClass="bottom-1/4 left-0" opacity={0.1} />

			<div className="container mx-auto relative z-10 flex flex-col gap-12 sm:gap-20">
				<div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
					{/* ===== Content Column ===== */}
					<div className="flex flex-col gap-5 sm:gap-8">
						{/* ===== About Title & Description ===== */}
						<div className="flex flex-col gap-4 sm:gap-6">
							<Badge
								variant="outline"
								className="text-primary border-primary/30 w-fit mx-auto sm:mx-0"
								data-aos="fade-right"
							>
								About ReactifyAI
							</Badge>

							<h2
								className="text-4xl md:text-6xl font-bold leading-tight "
								data-aos="fade-right"
								data-aos-delay="100"
							>
								Leading the Future of{' '}
								<CardGradientBg className="bg-clip-text text-transparent text-nowrap">
									AI Innovation
								</CardGradientBg>
							</h2>

							<p
								className="text-lg text-muted-foreground leading-relaxed"
								data-aos="fade-right"
								data-aos-delay="200"
							>
								At ReactifyAI, we're not just building AI solutions – we're crafting
								the future. Since our founding, we've been at the forefront of
								artificial intelligence, helping businesses transform their
								operations and achieve unprecedented growth through intelligent
								automation and data-driven insights.
							</p>
						</div>

						{/* ===== Features List ===== */}
						<div className="flex flex-col gap-5 sm:gap-6">
							{aboutFeatures.map((feature, index) => (
								<AboutCard1
									key={index}
									icon={feature.icon}
									title={feature.title}
									description={feature.description}
									animationDelay={300 + index * 100}
								/>
							))}
						</div>

						{/* ===== Certification Badge ===== */}
						<div
							className="relative flex items-center gap-3 text-sm text-muted-foreground bg-card/50 backdrop-blur-xl border border-primary-foreground/10 p-4 rounded-xl w-fit "
							data-aos="fade-right"
							data-aos-delay="600"
						>
							<Shield className="w-5 h-5 text-matrix" />
							<span className="font-medium">
								ISO 27001 Certified & GDPR Compliant
							</span>
						</div>
					</div>

					{/* ===== Visual Column ===== */}
					<div className="relative" data-aos="fade-left" data-aos-delay="400">
						<div className="bg-card/50 backdrop-blur-xl border border-primary-foreground/10 p-5 sm:p-8 rounded-3xl shadow-primary relative overflow-hidden">
							{/* ===== Animated Visual Background ===== */}
							<img
								src={import.meta.env.VITE_ABOUT_IMAGE}
								alt="AI Technology Workspace"
								className="w-full sm:h-96 object-cover rounded-2xl relative z-10"
							/>
						</div>
					</div>
				</div>
				{/* ===== Achievements Grid ===== */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
					{aboutAchievements.map((achievement, index) => (
						<AboutCard2
							key={index}
							icon={achievement.icon}
							value={achievement.value}
							label={achievement.label}
							description={achievement.description}
							onMouseMove={handleMouseMove}
							onTouchMove={handleTouchMove}
						/>
					))}
				</div>
			</div>
			<NeuralLine />
		</section>
		/* ================== END: About Section ================== */
	);
};
/* ================== END: Component ================== */

/* ================== START: Export ================== */
export default AboutSection;
/* ================== END: Export ================== */
