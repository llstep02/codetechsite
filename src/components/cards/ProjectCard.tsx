import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectCardProps } from '../../utils/types';
import { Link, useNavigate } from 'react-router-dom';

const ProjectCard: React.FC<ProjectCardProps> = ({
	id,
	image,
	title,
	description,
	category,
	technologies,
	results,
	animationDelay = 300,
	className = ''
}) => {
	const navigate = useNavigate();
	return (
		<Link
			to={`/projects/${id}`}
			className={`bg-card/50 backdrop-blur-xl border border-primary-foreground/10 hover:shadow-[var(--shadow-glass)] rounded-2xl overflow-hidden transition-all duration-500 group flex flex-col ${className}`}
			data-aos="fade-up"
			data-aos-delay={animationDelay}
		>
			<div className="relative overflow-hidden">
				<img
					src={image}
					alt={title}
					className="w-full sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
				/>
				{category && (
					<div className="absolute top-2 sm:top-4 left-2 sm:left-4">
						<Badge
							variant="outline"
							className="bg-background/80 backdrop-blur-sm border-primary/30 text-[10px] sm:py-2 py-1 px-2"
						>
							{category}
						</Badge>
					</div>
				)}
			</div>

			<div className="flex flex-col gap-3 sm:gap-4 grow relative dark:bg-gradient-to-br from-gradiant-from/10 via-background/60 to-gradiant-to/30  p-4 sm:p-6 ">
				<div className="flex flex-col gap-1.5 sm:gap-3 grow z-1">
					<h3 className="text-lg sm:text-xl font-bold group-hover:text-primary">
						{title}
					</h3>
					<p className="text-muted-foreground text-sm leading-relaxed grow">
						{description}
					</p>
				</div>

				<div className="flex flex-wrap gap-1 sm:gap-2 z-1">
					{technologies.map((tech, techIndex) => (
						<span
							key={techIndex}
							className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border text-muted-foreground"
						>
							{tech}
						</span>
					))}
				</div>

				{results && (
					<div className="bg-card/50 backdrop-blur-xl border border-primary-foreground/10 p-2 sm:p-3 rounded-lg z-1">
						<p className="text-xs text-muted-foreground">
							<span className="font-semibold text-primary-foreground">Results:</span>{' '}
							{results}
						</p>
					</div>
				)}

				<div className="flex gap-3 z-1">
					<Button
						className="flex-1 group border hover:border-primary border-primary/30 !bg-primary/5"
						onClick={() => navigate(`/projects/${id}`)}
					>
						<ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
						View Details
					</Button>
					<Button variant="glass" className="!bg-transparent">
						<Github className="w-4 h-4" />
					</Button>
				</div>
			</div>
		</Link>
	);
};

export default ProjectCard;
