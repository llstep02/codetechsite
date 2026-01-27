import { FloatingParticlesBgProps } from '../../utils/types';
import React from 'react';


const FloatingParticlesBg: React.FC<FloatingParticlesBgProps> = ({
	opacity = 0.7,
	hoverOpacity = 1,
	className = ''
}) => (
	<div className={`absolute inset-0 pointer-events-none z-100 ${className}`}>
		<div
			className={`absolute inset-0 opacity-${Math.round(
				opacity * 100
			)} group-hover:opacity-${Math.round(
				hoverOpacity * 100
			)} transition-opacity duration-700`}
			style={{ opacity }}
		>
			<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-ping"></div>
			<div className="absolute top-3/4 right-1/3 w-1 h-1 bg-primary/60 rounded-full animate-pulse"></div>
			<div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-primary/35 rounded-full animate-bounce"></div>
		</div>
	</div>
);

export default FloatingParticlesBg;
