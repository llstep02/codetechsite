import React from 'react';

const FaqsCard3: React.FC = () => (
	<div className="bg-card/50 backdrop-blur-xl border border-gradiant-via/30 rounded-2xl p-5 sm:p-8 relative overflow-hidden group">
		{/* Content */}
		<h4 className="text-lg sm:text-xl font-semibold bg-primary bg-clip-text text-transparent mb-4 z-10 relative">
			Need Immediate Assistance?
		</h4>
		<div className="flex flex-col gap-2 z-10 relative">
			<div className="flex items-center gap-3">
				<div className="w-3 h-3 rounded-full bg-muted-foreground mr-2"></div>
				<span className="text-sm text-muted-foreground">
					Email: <span className="text-primary-foreground font-semibold">hello@reactifyai.com</span>
				</span>
			</div>
			<div className="flex items-center gap-3">
				<div className="w-3 h-3 rounded-full bg-muted-foreground mr-2"></div>
				<span className="text-sm text-muted-foreground">
					Phone: <span className="text-primary-foreground font-semibold">+1 (555) 123-4567</span>
				</span>
			</div>
			<div className="flex items-center gap-3">
				<div className="w-3 h-3 rounded-full bg-muted-foreground mr-2"></div>
				<span className="text-sm text-muted-foreground">
					Available: <span className="text-primary-foreground font-semibold">24/7 Support</span>
				</span>
			</div>
		</div>
	</div>
);

export default FaqsCard3;
