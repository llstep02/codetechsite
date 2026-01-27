/* ================== START: Imports ================== */
import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
/* ================== END: Imports ================== */

/* ================== START: Mouse & Touch Handlers ================== */
export function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
	const card = e.currentTarget;
	const rect = card.getBoundingClientRect();
	const mouseX = e.clientX - rect.left - rect.width / 2;
	const mouseY = e.clientY - rect.top - rect.height / 2;

	let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

	angle = (angle + 360) % 360;

	card.style.setProperty('--start', `${angle + 60}`);
}

export function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
	const card = e.currentTarget;
	const rect = card.getBoundingClientRect();
	const touch = e.touches[0];

	const touchX = touch.clientX - rect.left - rect.width / 2;
	const touchY = touch.clientY - rect.top - rect.height / 2;

	let angle = Math.atan2(touchY, touchX) * (180 / Math.PI);
	angle = (angle + 360) % 360;

	card.style.setProperty('--start', `${angle + 60}`);
}
/* ================== END: Mouse & Touch Handlers ================== */

/* ================== START: Navigation Scroll Hook ================== */
export const useNavScroll = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const waitForElement = (id: string, timeout = 2500, interval = 50) =>
		new Promise<HTMLElement | null>((resolve) => {
			const stopAt = Date.now() + timeout;
			const tryFind = () => {
				const el = document.getElementById(id);
				if (el) return resolve(el);
				if (Date.now() > stopAt) return resolve(null);
				setTimeout(tryFind, interval);
			};
			tryFind();
		});

	const scrollToElement = (el: HTMLElement) => {
		const headerHeight = 80; // adjust if header size changes
		const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
		window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' });
	};

	const handleNavClick = useCallback(
		async (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, to?: string) => {
			e.preventDefault();

			// If the element exists on the current page — just scroll to it
			const el = document.getElementById(targetId);
			if (el) {
				scrollToElement(el);
				return;
			}

			// If a `to` route is provided and we're already on that route, try to wait for element then scroll
			if (to && location.pathname === to) {
				const elAfter = await waitForElement(targetId);
				if (elAfter) scrollToElement(elAfter);
				return;
			}

			// If a `to` route is provided and it's different, navigate there. If the targetId exists on that page
			// we attempt to wait for the element and scroll after navigation.
			if (to) {
				navigate(to);
				const elAfter = await waitForElement(targetId);
				if (elAfter) scrollToElement(elAfter);
				return;
			}

			// No `to` provided and element not found. If we're not on home, navigate to home and wait for the element.
			if (location.pathname !== '/') {
				navigate('/');
				const elAfter = await waitForElement(targetId);
				if (elAfter) scrollToElement(elAfter);
			}
		},
		[navigate, location.pathname]
	);

	return { handleNavClick };
};
/* ================== END: Navigation Scroll Hook ================== */

/* ================== START: AOS Initialization ================== */
export function initAOS() {
	AOS.init({
		duration: 1000,
		easing: 'ease-out-quart',
		once: true,
		offset: 100,
		delay: 100
	});
}
/* ================== END: AOS Initialization ================== */
