/* ================== START: Imports ================== */
import { navItems, socialLinks } from '../../utils/const';
import { useNavScroll } from '../../utils/functions';
/* ================== END: Imports ================== */

/* ================== START: Component ================== */
const Footer = () => {
	const { handleNavClick } = useNavScroll();
	return (
		/* ================== START: Footer Section ================== */
		<footer
			className="bg-background/50 backdrop-blur-xl"
			data-aos="fade-up"
			data-aos-delay="300"
		>
			<div className="container mx-auto pt-10 sm:pt-16 pb-8">
				<div className="grid lg:grid-cols-2 gap-8 sm:gap-12 pb-5 sm:pb-8">
					{/* ===== Brand Column ===== */}
					<div className="lg:col-span-1 flex flex-col sm:gap-6 gap-4">
						<a
							href="#"
							className="flex items-center gap-1 cursor-pointer"
							onClick={(e) => handleNavClick(e, 'home')}
						>
							<img src="/images/logo.svg" alt="Site Logo" className="size-11" />
							<div>
								<h3 className="text-xl sm:text-2xl font-bold text-primary">
									ReactifyAI
								</h3>
								<p className="text-xs text-muted-foreground font-medium">
									AI Solutions
								</p>
							</div>
						</a>
						<p className="text-muted-foreground leading-relaxed">
							Leading the future of AI innovation with cutting-edge solutions that
							transform businesses worldwide.
						</p>

						{/* ===== Social Links ===== */}
						<div className="flex gap-4">
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.href}
									aria-label={social.label}
									className="w-10 h-10 rounded-xl bg-secondary hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-110 group"
								>
									<social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
								</a>
							))}
						</div>
					</div>
					{/* ===== Quick Links Column ===== */}
					<div className="lg:col-span-1 flex flex-col gap-4 sm:gap-6">
						<h4 className="font-semibold text-foreground">Quick Links</h4>
						<ul className="grid grid-cols-3 gap-2 sm:gap-4">
							{navItems.map((link, index) => (
								<li key={index}>
									<a
										onClick={(e) => handleNavClick(e, link.id, link.to)}
										className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* ===== Bottom Section ===== */}
				<div className="border-t border-border pt-7 sm:pt-8 flex justify-center items-center gap-4">
					<p className="text-muted-foreground text-sm">
						Copyright © {new Date().getFullYear()} ReactifyAI. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
		/* ================== END: Footer Section ================== */
	);
};
/* ================== END: Component ================== */

/* ================== START: Export ================== */
export default Footer;
/* ================== END: Export ================== */
