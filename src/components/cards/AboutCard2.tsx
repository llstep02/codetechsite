import BgGlow from '../background_animation/BgGlow';
import DecorativeDot from '../background_animation/DecorativeDot';
import { AboutCard2Props } from '../../utils/types';
import React from 'react';

const AboutCard2: React.FC<AboutCard2Props> = ({
	icon: Icon,
	value,
	label,
	description,
	onMouseMove,
	onTouchMove,
	className = ''
}) => {
	return (
		<div
			className={`group relative overflow-visible rounded-3xl transition-all duration-700 backdrop-blur-sm bg-card hover:shadow-2xl card ${className}`}
			onMouseMove={onMouseMove}
			onTouchMove={onTouchMove}
		>
			<div className="glow"></div>
			<div className="relative z-10 items-center w-full hover:scale-105 transition-transform duration-300 border rounded-3xl h-full sm:p-8 p-5 flex flex-col gap-4 sm:gap-6">
				<div className="absolute inset-0">
					<BgGlow
						variant="primary"
						size="sm"
						positionClass="-top-10 -right-10"
						opacity={0.1}
					/>
					<DecorativeDot
						className="top-1/4 right-1/4"
						size="w-2 h-2"
						colorClass="bg-primary/20"
						variant="pulse"
					/>
					<DecorativeDot
						className="top-1/2 right-1/3"
						size="w-1.5 h-1.5"
						colorClass="bg-primary/25"
						variant="none"
						style={{ animation: 'pulse 3s ease-in-out infinite' }}
					/>
				</div>

				<div className="flex items-center justify-center sm:size-14 size-10 rounded-2xl bg-primary/10">
					<Icon className="sm:size-8 size-5 text-primary" />
				</div>

				<div className="flex flex-col gap-1 items-center">
					<div className="text-lg font-semibold text-primary">{value}</div>
					<div className="text-base font-semibold">{label}</div>
					<div className="text-sm text-muted-foreground  leading-relaxed">
						{description}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutCard2;
