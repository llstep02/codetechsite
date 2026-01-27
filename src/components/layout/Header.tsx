import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// ...existing code... (headlessui Transition not needed here)
import { Button } from '../ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { pagesMenu, blogMenu } from '../../utils/const';
import { services, projects } from '../../utils/const';
import DropDown from '../ui/DropDown';
import NeuralLine from '../background_animation/NeuralLine';
import ThemeToggle from '../common/ThemeToggle';

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState<string>('home'); // used on home route (scroll)
	const [isPagesOpen, setIsPagesOpen] = useState(false);
	const [isBlogOpen, setIsBlogOpen] = useState(false);
	// dropdown open state removed (handled inside DropDown)

	const navigate = useNavigate();
	const location = useLocation();

	const scrollToSection = (id: string) => {
		// helper that waits for an element to appear in the DOM (with timeout)
		const waitForElement = (elId: string, timeout = 2000, interval = 50) =>
			new Promise<HTMLElement | null>((resolve) => {
				const stopAt = Date.now() + timeout;
				const tryFind = () => {
					const el = document.getElementById(elId);
					if (el) return resolve(el);
					if (Date.now() > stopAt) return resolve(null);
					setTimeout(tryFind, interval);
				};
				tryFind();
			});

		const doScrollTo = (el: HTMLElement | null) => {
			if (el) {
				const headerHeight = 80;
				const pos = el.getBoundingClientRect().top + window.pageYOffset;
				window.scrollTo({ top: pos - headerHeight, behavior: 'smooth' });
			} else if (id === 'home') {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}
		};

		(async () => {
			if (location.pathname !== '/') {
				// navigate and wait for the target element to render
				navigate('/');
				const el = await waitForElement(id, 2500, 50);
				doScrollTo(el);
			} else {
				const el = document.getElementById(id);
				doScrollTo(el);
			}
			setIsMenuOpen(false);
		})();
	};

	useEffect(() => {
		const onScroll = () => {
			setIsScrolled(window.scrollY > 20);

			// update activeSection only when on home page
			if (location.pathname === '/') {
				const ids = ['home', 'about'];
				let found = 'home';
				for (const id of ids) {
					const el = document.getElementById(id);
					if (!el) continue;
					const rect = el.getBoundingClientRect();
					if (rect.top <= 120 && rect.bottom > 120) {
						found = id;
						break;
					}
				}
				setActiveSection(found);
			} else {
				setActiveSection('');
			}
		};

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [location.pathname]);

	// activeMain calculation removed — DropDown receives activePath directly

	// click handlers
	const handleContactClick = (e?: React.MouseEvent) => {
		if (e) e.preventDefault();
		scrollToSection('contact');
	};

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
				isScrolled ? 'bg-card/50 backdrop-blur-xl border-b border-border' : 'bg-transparent'
			}`}
		>
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<button
						type="button"
						aria-label="Go to home"
						className="flex items-center gap-1 cursor-pointer"
						onClick={() => scrollToSection('home')}
					>
						<img src="/images/logo.svg" alt="Site Logo" className="size-11" />
						<div>
							<h1 className="text-xl sm:text-2xl font-bold text-primary">
								ReactifyAI
							</h1>
							<p className="text-xs text-muted-foreground font-medium text-left">
								AI Solutions
							</p>
						</div>
					</button>

					{/* Desktop nav */}
					<nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
						{/* Home */}
						<button
							type="button"
							className={`px-2 py-1 cursor-pointer ${
								location.pathname === '/' && activeSection === 'home'
									? 'text-primary '
									: ''
							}`}
							onClick={() => scrollToSection('home')}
						>
							Home
						</button>

						{/* About */}
						<button
							type="button"
							className={`px-2 py-1 cursor-pointer ${
								location.pathname === '/' && activeSection === 'about'
									? 'text-primary '
									: ''
							}`}
							onClick={() => scrollToSection('about')}
						>
							About
						</button>

						<div>
							<DropDown
								label="Pages"
								items={pagesMenu}
								activePath={location.pathname}
								className="relative"
								onItemClick={() => setIsMenuOpen(false)}
							/>
						</div>

						<div>
							<DropDown
								label="Blog"
								items={blogMenu}
								activePath={location.pathname}
								className="relative"
								onItemClick={() => setIsMenuOpen(false)}
							/>
						</div>
					</nav>

					{/* Right controls */}
					<div className="flex items-center gap-3">
						<ThemeToggle />
						<Link
							to="/contact"
							className="hidden lg:inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-primary  border-0 hover:scale-105 text-white shadow-lg hover:shadow-xl font-semibold h-11 rounded-md px-8"
						>
							Contact
						</Link>

						{/* Mobile menu toggle */}
						<button
							className="lg:hidden p-2 rounded hover:bg-primary/10"
							onClick={() => setIsMenuOpen((s) => !s)}
							aria-label="Toggle menu"
						>
							{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</div>

				{/* Mobile panel */}
				{isMenuOpen && (
					<div className="lg:hidden mt-4 pb-4 border-t pt-4 bg-card/50 backdrop-blur-xl rounded-md">
						<nav className="flex flex-col gap-2 px-2">
							<button
								className="text-left px-3 py-2 rounded"
								onClick={() => scrollToSection('home')}
							>
								Home
							</button>
							<button
								className="text-left px-3 py-2 rounded"
								onClick={() => scrollToSection('about')}
							>
								About
							</button>

							<div className="mt-2">
								<button
									type="button"
									className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-accent/5"
									onClick={() => setIsPagesOpen((s) => !s)}
								>
									<span className="font-medium">Pages</span>
									<ChevronDown
										className={`w-4 h-4 transition-transform ${
											isPagesOpen ? 'rotate-180' : 'rotate-0'
										}`}
									/>
								</button>
								{isPagesOpen && (
									<div className="mt-2 space-y-1 px-2">
										{pagesMenu.map((p) => {
											const resolveDefault = (to: string) => {
												if (!to.includes(':id')) return to;
												if (to.startsWith('/services'))
													return `/services/${services?.[0]?.id ?? 1}`;
												if (to.startsWith('/projects'))
													return `/projects/${projects?.[0]?.id ?? 1}`;
												return to.replace(':id', '1');
											};
											return (
												<Link
													key={p.to}
													to={resolveDefault(p.to)}
													className="block px-3 py-2 rounded hover:bg-primary/10"
													onClick={() => {
														setIsMenuOpen(false);
														setIsPagesOpen(false);
													}}
												>
													{p.name}
												</Link>
											);
										})}
									</div>
								)}
							</div>

							<div className="mt-2">
								<button
									type="button"
									className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-accent/5"
									onClick={() => setIsBlogOpen((s) => !s)}
								>
									<span className="font-medium">Blog</span>
									<ChevronDown
										className={`w-4 h-4 transition-transform ${
											isBlogOpen ? 'rotate-180' : 'rotate-0'
										}`}
									/>
								</button>
								{isBlogOpen && (
									<div className="mt-2 space-y-1 px-2">
										{blogMenu.map((b) => (
											<Link
												key={b.to}
												to={b.to.includes(':id') ? `/blog/1` : b.to}
												className="block px-3 py-2 rounded hover:bg-accent/10"
												onClick={() => {
													setIsMenuOpen(false);
													setIsBlogOpen(false);
												}}
											>
												{b.name}
											</Link>
										))}
									</div>
								)}
							</div>

							<Button
								variant="hero"
								size="lg"
								className="mt-4 mx-4"
								onClick={handleContactClick}
							>
								Contact Us
							</Button>
						</nav>
					</div>
				)}
			</div>

			<NeuralLine />
		</header>
	);
};

export default Header;
