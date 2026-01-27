import React from 'react';

interface DecorativeDotProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: 'pulse' | 'ping' | 'none';
	size?: string; // tailwind size classes e.g. "w-2 h-2"
	colorClass?: string; // tailwind color class e.g. "bg-primary-foreground/20"
	roundedClass?: string; // e.g. "rounded-full"
}

/*...existing code...*/
const DecorativeDot: React.FC<DecorativeDotProps> = ({
	variant = 'pulse',
	size = 'w-2 h-2',
	colorClass = 'bg-primary-foreground/20',
	roundedClass = 'rounded-full',
	className = '',
	style,
	...rest
}) => {
	const animClass =
		variant === 'pulse' ? 'animate-pulse' : variant === 'ping' ? 'animate-ping' : '';
	return (
		<div
			className={`absolute ${size} ${colorClass} ${roundedClass} ${animClass} ${className}`}
			style={style}
			{...rest}
		/>
	);
};

export default DecorativeDot;
/*...existing code...*/
