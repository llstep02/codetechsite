import { Badge } from '../ui/badge';
import CardGradientBg from '../background_animation/CardGradientBg';
import { HeadingProps } from '../../utils/types';

const Heading = ({ section, title, highlights, subtitle }: HeadingProps) => {
	return (
		<div className="sm:text-center flex flex-col gap-6 sm:gap-8">
			<Badge
				variant="outline"
				className="text-primary border-primary/30 w-fit mx-auto"
				data-aos="fade-up"
			>
				{section}
			</Badge>
			<div className="flex flex-col gap-3 sm:gap-5">
				<h2
					className="text-4xl sm:text-6xl font-bold"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					{title}{' '}
					<CardGradientBg className="bg-clip-text text-transparent text-nowrap">
						{highlights}
					</CardGradientBg>
				</h2>

				<p
					className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					{subtitle}
				</p>
			</div>
		</div>
	);
};

export default Heading;
