import { FloatingHeroIconsProps } from '../../utils/types';
import React from 'react';

const FloatingHeroIcons: React.FC<FloatingHeroIconsProps> = ({ icons }) => (
	<>
		{icons.map((icon, idx) => (
			<div key={idx} className={icon.containerClass || ''} style={icon.style}>
				{React.createElement(icon.component, {
					className: icon.className,
					style: icon.style
				})}
			</div>
		))}
	</>
);

export default FloatingHeroIcons;
