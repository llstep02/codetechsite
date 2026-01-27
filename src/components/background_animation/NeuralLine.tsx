import React from 'react';

const NeuralLine: React.FC<{ className?: string }> = ({ className = '' }) => (
	<div className={`absolute bottom-0 left-0 right-0 w-full ${className}`}>
		<div className="relative h-px overflow-hidden bg-[image:var(--gradient-primary)]  opacity-30" />
	</div>
);

export default NeuralLine;
