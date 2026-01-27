import React from 'react';

type Variant = 'primary' | 'secondary' | 'neural';
type Size = 'sm' | 'md' | 'lg' | 'xl' | string;

const variantToGradient: Record<Variant, string> = {
	primary: 'bg-primary',
	secondary: 'bg-[image:var(--gradient-secondary)]',
	neural: 'bg-[image:var(--gradient-primary)]',
};

const sizeToClasses: Record<string, string> = {
	sm: 'w-48 h-48',
	md: 'w-72 h-72',
	lg: 'w-96 h-96',
	xl: 'w-[28rem] h-[28rem]'
};

type Props = {
	variant?: Variant;
	size?: Size;
	className?: string;
	style?: React.CSSProperties;
	positionClass?: string; // additional position helpers like 'top-0 right-0'
	opacity?: number;
	blur?: string;
};

const BgGlow: React.FC<Props> = ({
	variant = 'primary',
	size = 'lg',
	className = '',
	style,
	positionClass = '',
	opacity = 0.1,
	blur = 'blur-3xl'
}) => {
	const gradientClass = variantToGradient[variant] ?? variantToGradient.primary;
	const sizeClass = typeof size === 'string' ? sizeToClasses[size] ?? sizeToClasses.lg : '';

	return (
		<div
			className={`absolute ${positionClass} ${sizeClass} ${blur} rounded-full ${gradientClass} opacity-${Math.round(
				opacity * 100
			)} ${className}`}
			style={style}
			aria-hidden
		/>
	);
};

export default BgGlow;
