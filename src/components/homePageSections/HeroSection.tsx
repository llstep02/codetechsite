import { Button } from './../ui/button';
import { ArrowRight, Cpu, Play, Sparkles, Zap } from 'lucide-react';
import { heroStats } from '../../utils/const';
import HeroCard from './../cards/HeroCard';
import NeuralLine from './../background_animation/NeuralLine';
import FloatingParticles from './../background_animation/FloatingParticles';
import FloatingHeroIcons from './../background_animation/FloatingHeroIconsProps';
import CardGradientBg from './../background_animation/CardGradientBg';

const HeroSection = () => {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden sm:pt-40 sm:pb-20 pt-32 pb-10"
		>
			<div className="absolute inset-0 z-0">
				<img
					src={import.meta.env.VITE_HERO_IMAGE}
					alt="Background"
					className="w-full h-full object-cover opacity-10"
				/>

				<div className="absolute inset-0 bg-[image:var(--gradient-primary)] opacity-10" />
				<div className="absolute inset-0 bg-background/30" />

			</div>
			<FloatingParticles />

			{/* ===== Floating Hero Icons (Universal Component) ===== */}
			<FloatingHeroIcons
				icons={[
					{
						component: Zap,
						className: 'w-12 h-12 text-accent floating',
						containerClass: 'absolute top-1/3 right-20 opacity-20',
						style: { animationDelay: '2s' }
					},
					{
						component: Cpu,
						className: 'w-14 h-14 floating',
						containerClass: 'absolute bottom-1/4 left-1/4 opacity-20',
						style: { animationDelay: '4s' }
					}
				]}
			/>

			{/* ===== Main Content ===== */}
			<div className="relative z-10 container mx-auto text-center">
				<div className="max-w-5xl mx-auto flex flex-col items-center gap-8 sm:gap-12">
					{/* ===== Animated Badge ===== */}
					<div className="flex flex-col gap-4 sm:gap-6">
						<div
							className="inline-flex items-center gap-2 sm:gap-3 glass-card border border-primary/30 rounded-full px-6 py-3 w-fit mx-auto"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<Sparkles className="size-5 text-primary" />
							<span className="text-sm font-semibold text-primary">
								AI Automation for Growth
							</span>
						</div>
						<div className="flex flex-col gap-4 sm:gap-6">
							{/* ===== Main Heading ===== */}
							<div data-aos="fade-up" data-aos-delay="200">
								<h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight">
									<CardGradientBg className="bg-clip-text text-transparent block sm:pb-4">
										Simplifying Tech
									</CardGradientBg>
									<span className="">To Empower Your</span>
									<br />
									<span className="">Business Growth!</span>
								</h1>
							</div>

							{/* ===== Description ===== */}
							<p
								className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
								data-aos="fade-up"
								data-aos-delay="300"
							>
								Working hard to build safe and beneficial artificial intelligence
								systems while observing how our research helps others achieve their
								outcomes through cutting-edge automation.
							</p>
						</div>
					</div>

					{/* ===== CTA Buttons ===== */}
					<div
						className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
						data-aos="fade-up"
						data-aos-delay="400"
					>
						<Button
							variant="hero"
							size="lg"
							className="text-base sm:text-lg px-10 py-7 relative overflow-hidden group"
						>
							<span className="relative z-10 flex items-center gap-3">
								Explore Our Services
								<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
							</span>
							<CardGradientBg className="opacity-0 group-hover:opacity-30 transition-opacity" />
						</Button>
						<Button
							variant="glass"
							size="lg"
							className="relative text-base sm:text-lg px-10 py-7"
						>
							<Play className="w-6 h-6" />
							Learn More
						</Button>
					</div>

					{/* ===== Enhanced Stats ===== */}
					<div
						className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 w-full"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						{heroStats.map((stat, index) => (
							<HeroCard key={index} {...stat} index={index} />
						))}
					</div>
				</div>
			</div>
			<NeuralLine />
		</section>
	);
};

export default HeroSection;
