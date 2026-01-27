import React from 'react';
import { Sparkles } from 'lucide-react';
import CardGradientBg from '../background_animation/CardGradientBg';

const FaqsCard2: React.FC = () => (
	<div className="bg-card/50 backdrop-blur-xl border border-primary-foreground/10  sm:p-8 p-5 rounded-3xl overflow-hidden relative flex flex-col gap-6 items-center justify-center group">
		<CardGradientBg className="opacity-0 dark:opacity-10" />
		<div className="sm:w-20 sm:h-20 w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-2">
			<Sparkles className="size-8 sm:size-10 text-white" />
		</div>

		<h3 className="text-2xl sm:text-3xl font-bold bg-primary bg-clip-text text-transparent text-center mb-2">
			Still Have Questions?
		</h3>

		<p className="text-muted-foreground text-center mb-4">
			Our AI experts are here to help you understand how artificial intelligence can transform
			your business operations and drive growth.
		</p>

		<div className="grid grid-cols-2 gap-4 w-full text-center">
			<div className="bg-card/50 backdrop-blur-xl border border-primary-foreground/10 p-4 rounded-xl flex flex-col items-center">
				<div className="text-2xl sm:text-3xl font-bold">&lt; 2hrs</div>
				<div className="text-xs text-muted-foreground">Response Time</div>
			</div>
			<div className="bg-card/50 backdrop-blur-xl border border-primary-foreground/10 p-4 rounded-xl flex flex-col items-center">
				<div className="text-2xl sm:text-3xl font-bold">100%</div>
				<div className="text-xs text-muted-foreground">Free Consultation</div>
			</div>
		</div>
	</div>
);

export default FaqsCard2;
