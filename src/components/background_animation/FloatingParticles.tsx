import { FloatingParticlesUniversalProps } from '../../utils/types';
import React from 'react';

const FloatingParticlesUniversal: React.FC<FloatingParticlesUniversalProps> = ({
	count = 10,
	sizeClass = 'w-2 h-2',
	colorClass = 'bg-primary opacity-60',
	animationClass = 'animate-particle-float',
	containerClass = 'absolute inset-0 overflow-hidden pointer-events-none',
	style,
	randomizeAnimation = true
}) => (
	<div className={containerClass} style={style}>
		{Array.from({ length: count }).map((_, i) => {
			const randomStyle = randomizeAnimation
				? {
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
					animationDelay: `${Math.random() * 2}s`
				}
				: {};
			return (
				<div
					key={i}
					className={`absolute rounded-full ${sizeClass} ${colorClass} ${animationClass}`}
					style={randomStyle}
				/>
			);
		})}
	</div>
);

export default FloatingParticlesUniversal;
