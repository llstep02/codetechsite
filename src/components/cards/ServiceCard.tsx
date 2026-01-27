import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import FloatingParticlesBg from '../background_animation/FloatingParticlesBg';
import FloatingGeometricShapesBg from '../background_animation/FloatingGeometricShapesBg';
import { ServiceCardProps } from '../../utils/types';
import { Link, useNavigate } from 'react-router-dom';

const ServiceCard: React.FC<ServiceCardProps> = ({
	id,
	icon: Icon,
	title,
	description,
	features,
	animationDelay = 300,
	className = ''
}) => {
	const navigate = useNavigate();
	return (
		<Link to={`/services/${id}`} className={`relative ${className}`}>
			{/* Floating Particles */}
			<FloatingParticlesBg opacity={0.7} hoverOpacity={1} />

			{/* Floating Geometric Shapes */}
			<FloatingGeometricShapesBg opacity={0.3} />
			<div className="relative" data-aos="fade-up" data-aos-delay={animationDelay}>
				<div className="bg-card backdrop-blur-xl border border-primary-foreground/10 hover:shadow-[var(--shadow-glass)] rounded-2xl transition-transform duration-500 group p-5 sm:p-8 flex flex-col gap-4 sm:gap-6">
					{/* ===== Icon ===== */}
					<div
						className={`size-10 sm:size-16 rounded-2xl bg-primary/10 flex items-center justify-center transition-transform mx-auto z-10`}
					>
						<Icon className={`size-5 sm:size-8 text-primary`} />
					</div>

					<div className="flex flex-col gap-2 sm:gap-3 z-10">
						<h3 className="text-lg sm:text-xl font-bold text-center">{title}</h3>
						<p className="text-muted-foreground leading-relaxed">{description}</p>
					</div>

					{/* ===== Features ===== */}
					<div className="flex flex-col gap-1 sm:gap-2 z-10">
						{features.map((feature, featureIndex) => (
							<div
								key={featureIndex}
								className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
							>
								<Sparkles className="size-2.5 sm:size-3 text-primary shrink-0" />
								<span className="text-muted-foreground">{feature}</span>
							</div>
						))}
					</div>

					{/* ===== Learn More ===== */}
					<Button
						variant="glass"
						className="text-base sm:text-lg z-10"
						onClick={() => navigate(`/services/${id}`)}
					>
						Learn More
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
					</Button>
				</div>
			</div>
		</Link>
	);
};

export default ServiceCard;
