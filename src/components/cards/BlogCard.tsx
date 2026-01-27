import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowRight, User, Calendar } from 'lucide-react';
import { BlogCardProps } from '../../utils/types';
import { Link, useNavigate } from 'react-router-dom';

const BlogCard: React.FC<BlogCardProps> = ({
	id,
	title,
	excerpt,
	author,
	date,
	category,
	image,
	readTime,
	index,
	className = ''
}) => {
	const navigate = useNavigate();
	return (
		<Link
			to={`/blog/${id}`}
			key={index}
			className={`bg-card/50 backdrop-blur-xl border border-primary-foreground/10 hover:shadow-[var(--shadow-glass)] rounded-2xl overflow-hidden transition-all duration-500 group relative ${className}`}
			data-aos="fade-up"
			data-aos-delay={300 + index * 100}
		>
			<div className="relative">
				{/* ===== Blog Post Image ===== */}
				<img
					src={image}
					alt={title}
					className="w-full sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
				/>
				{/* ===== Category Badge ===== */}
				<div className="absolute top-2 sm:top-4 left-2 sm:left-4">
					<Badge
						variant="outline"
						className="bg-background/80 backdrop-blur-sm text-[10px]"
					>
						{category}
					</Badge>
				</div>
			</div>
			<div className="relative flex flex-col gap-2 sm:gap-4 p-4 sm:p-6 dark:bg-gradient-to-br from-gradiant-from/10 via-background/60 to-gradiant-to/30">
				{/* ===== Background Pattern Image ===== */}
				<div className="relative flex flex-col gap-3 z-10">
					{/* ===== Blog Post Title ===== */}
					<h3 className="text-xl font-bold group-hover:text-primary transition-colors">
						{title}
					</h3>
					{/* ===== Blog Post Excerpt ===== */}
					<p className="text-muted-foreground text-sm leading-relaxed">{excerpt}</p>
				</div>
				<div className="relative flex items-center justify-between text-xs text-muted-foreground z-10">
					{/* ===== Author Info ===== */}
					<div className="flex items-center gap-2">
						<User className="w-3 h-3" />
						<span>{author}</span>
					</div>
					{/* ===== Date Info ===== */}
					<div className="flex items-center gap-2">
						<Calendar className="w-3 h-3" />
						<span>{date}</span>
					</div>
				</div>
				<div className="flex items-center justify-between relative z-10">
					{/* ===== Read Time ===== */}
					<span className="text-xs text-primary">{readTime}</span>
					{/* ===== Read More Button ===== */}
					<Button
						variant="glass"
						className="group text-xs"
						onClick={() => navigate(`/blog/${id}`)}
					>
						Read More{' '}
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform " />
					</Button>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
