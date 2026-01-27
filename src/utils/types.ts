/* ================== START: Types ================== */
export interface IContactForm {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
}

export interface HeadingProps {
	section: string;
	title?: string;
	highlights: string;
	subtitle: string;
}

export type FAQCard1Props = {
	question: string;
	answer: string;
	index: number;
	className?: string;
};

export type AboutCard1Props = {
	icon: React.ElementType;
	title: string;
	description: string;
	animationDelay?: number;
	className?: string;
};

export type AboutCard2Props = {
	icon: React.ElementType;
	value: string | number;
	label: string;
	description?: string;
	onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
	onTouchMove?: React.TouchEventHandler<HTMLDivElement>;
	className?: string;
};

export type BlogCardProps = {
	id: number;
	title: string;
	excerpt: string;
	author: string;
	date: string;
	category: string;
	image: string;
	readTime?: string;
	index: number;
	className?: string;
};

export type CTACardProps = {
	title: string;
	subtitle?: string;
	actions?: string;
	delay?: number;
	className?: string;
	to?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type HeroCardProps = {
	icon: React.ElementType;
	value: string | number;
	label: string;
	index: number;
	classname?: string;
};

export type ProcessCardProps = {
	icon: React.ElementType;
	value?: string | number;
	label?: string;
	index: number;
	className?: string;
	handleMouseMove?: React.MouseEventHandler<HTMLDivElement>;
	handleTouchMove?: React.TouchEventHandler<HTMLDivElement>;
	processSteps: {
		icon: React.ElementType;
		title: string;
		description: string;
	}[];
	title: string;
	description: string;
};

export type ProjectCardProps = {
	id: number;
	image: string;
	title: string;
	description: string;
	category?: string;
	technologies: string[];
	results?: string;
	animationDelay?: number;
	className?: string;
};

export type ServiceCardProps = {
	id?: number;
	icon: React.ElementType;
	title: string;
	description: string;
	features: string[];
	animationDelay?: number;
	className?: string;
};

export type TeamCardProps = {
	image: string;
	name: string;
	role: string;
	bio: string;
	index: number;
	classname?: string;
};

export type FactsCardProps = {
	icon: React.ElementType;
	value: string | number;
	label: string;
	description: string;
	index: number;
	classname?: string;
};

export type CardFloatingShapesProps = {
	particles?: boolean;
	geometric?: boolean;
	particleOpacity?: number;
	particleHoverOpacity?: number;
	geometricOpacity?: number;
	geometricHoverOpacity?: number;
	className?: string;
};

export type CardGradientBgProps = {
	className?: string;
	hover?: boolean;
	gradientClass?: string;
	gridOpacity?: number;
	icon?: React.ElementType;
	iconClass?: string;
	iconScale?: number;
	children?: React.ReactNode;
};

export type FloatingGeometricShapesBgProps = {
	opacity?: number;
	className?: string;
};

export type FloatingHeroIconsProps = {
	icons: {
		component: React.ElementType;
		className?: string;
		style?: React.CSSProperties;
		containerClass?: string;
	}[];
};

export type FloatingParticlesUniversalProps = {
	count?: number;
	sizeClass?: string;
	colorClass?: string;
	animationClass?: string;
	containerClass?: string;
	style?: React.CSSProperties;
	randomizeAnimation?: boolean;
};

export type FloatingParticlesBgProps = {
	opacity?: number;
	hoverOpacity?: number;
	className?: string;
};
