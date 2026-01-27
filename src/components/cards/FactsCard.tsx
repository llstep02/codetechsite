import React from 'react';
import CardGradientBg from '../background_animation/CardGradientBg';
import FloatingParticlesBg from '../background_animation/FloatingParticlesBg';
import { FactsCardProps } from '../../utils/types';

const FactsCard: React.FC<FactsCardProps> = ({
	icon: Icon,
	value,
	label,
	description,
	index,
	classname
}) => {
	return (
		<div className="relative" data-aos="zoom-in" data-aos-delay={300 + index * 100}>
			<div
				className={`border border-primary-foreground/10 hover:shadow-[var(--shadow-glass)] p-5 sm:p-8 rounded-2xl text-center transition-all duration-500 group relative overflow-hidden bg-card dark:bg-transparent flex flex-col gap-3 sm:gap-5 h-full ${classname}`}
			>
				{/* Card background animation and icon scale on hover */}
				<CardGradientBg
					gridOpacity={0.1}
					gradientClass="bg-card"
				/>
				<div className="flex flex-col gap-4 sm:gap-6 relative z-10">
					<div className="sm:size-20 size-10 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
						<Icon className="sm:size-10 size-5 text-primary" />
					</div>
					<div className="relative z-10 flex flex-col gap-4 sm:gap-6">
						<div className="flex flex-col gap-2 sm:gap-3">
							<div className="text-3xl md:text-5xl font-bold text-primary">
								{value}
							</div>
							<h3 className="text-lg sm:text-xl font-semibold ">{label}</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								{description}
							</p>
						</div>
						{/* Floating particles */}
						<FloatingParticlesBg opacity={0.7} hoverOpacity={1} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FactsCard;
