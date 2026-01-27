import { handleMouseMove, handleTouchMove } from '../../utils/functions';
import { Button } from '../ui/button';
import { Linkedin, X, Github, Star } from 'lucide-react';
import React from 'react';
import { TeamCardProps } from '../../utils/types';

const TeamCard: React.FC<TeamCardProps> = ({ image, name, role, bio, index, classname }) => {
	return (
		<div
			className={`bg-card backdrop-blur-xl border border-primary-foreground/10 rounded-2xl text-center transition-all duration-500 group card p-4 sm:p-6 flex flex-col gap-4 ${classname}`}
			data-aos="zoom-in"
			data-aos-delay={300 + index * 100}
			onMouseMove={handleMouseMove}
			onTouchMove={handleTouchMove}
		>
			<div className="glow" style={{ zIndex: 1 }}></div>
			<div className="relative mb-2" style={{ zIndex: 2 }}>
				<img
					src={image}
					alt={name}
					className="sm:w-24 sm:h-24 w-12 h-12 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
				/>
				<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary/70 rounded-full flex items-center justify-center">
					<Star className="w-3 h-3 text-white" />
				</div>
			</div>
			<div className="flex flex-col gap-1 sm:gap-2" style={{ zIndex: 2 }}>
				<h3 className="text-lg sm:text-xl font-bold bg-primary bg-clip-text text-transparent">
					{name}
				</h3>
				<p className="font-medium mb-1">{role}</p>
				<p className="text-muted-foreground text-xs sm:text-sm">{bio}</p>
			</div>
			<div className="flex justify-center gap-3" style={{ zIndex: 2 }}>
				<Button variant="glass">
					<Linkedin className="size-3 sm:size-4" />
				</Button>
				<Button variant="glass">
					<X className="size-3 sm:size-4" />
				</Button>
				<Button variant="glass">
					<Github className="size-3 sm:size-4" />
				</Button>
			</div>
		</div>
	);
};

export default TeamCard;
