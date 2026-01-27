import React from 'react';
import CardGradientBg from '../background_animation/CardGradientBg';
import { HeroCardProps } from '../../utils/types';

const HeroCard: React.FC<HeroCardProps> = ({ icon: Icon, value, label, index, classname }) => {
	return (
		<div
			className={`bg-card/50 backdrop-blur-xl border hover:shadow-[var(--shadow-glass)] rounded-2xl  transition-all duration-500 group relative overflow-hidden from-destructive-foreground/20 via-secondary-foreground/40 to-accent-foreground/20 border-primary/30 hover:border-primary/60 hover:shadow-primary/30 p-5 sm:p-8 group ${classname}`}
			data-aos="zoom-in"
			data-aos-delay={600 + index * 100}
		>
			<CardGradientBg
				hover
				gradientClass="bg-[image:var(--gradient-primary)]"
				gridOpacity={0.1}
			/>

			<div className="relative z-10 flex flex-col gap-2 sm:gap-4 items-center">
				<div className="inline-flex p-3 rounded-xl border backdrop-blur-sm bg-primary/10 border-primary/20 w-fit self-center transition-transform">
					<Icon className="h-6 w-6 text-primary" />
				</div>
				<div className="flex flex-col gap-2 sm:gap-3 items-center">
					<div className="text-3xl md:text-4xl font-bold">{value}</div>
					<div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
						{label}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroCard;
