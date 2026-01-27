/// <reference types="vite/client" />

interface ImportMetaEnv {
	// Env variables used across the app
	readonly VITE_UNSPLASH_BASE_URL: string;
	readonly VITE_EMAILJS_SERVICE_ID: string;
	readonly VITE_EMAILJS_TEMPLATE_ID: string;
	readonly VITE_EMAILJS_PUBLIC_KEY: string;
	readonly VITE_FROM_NAME: string;
	
	// Project images
	readonly VITE_PROJECT1_IMAGE: string;
	readonly VITE_PROJECT2_IMAGE: string;
	readonly VITE_PROJECT3_IMAGE: string;
	readonly VITE_PROJECT4_IMAGE: string;
	readonly VITE_PROJECT5_IMAGE: string;
	readonly VITE_PROJECT6_IMAGE: string;
	
	// Team images
	readonly VITE_TEAM1_IMAGE: string;
	readonly VITE_TEAM2_IMAGE: string;
	readonly VITE_TEAM3_IMAGE: string;
	readonly VITE_TEAM4_IMAGE: string;
	
	// Blog images
	readonly VITE_BLOG1_IMAGE: string;
	readonly VITE_BLOG2_IMAGE: string;
	readonly VITE_BLOG3_IMAGE: string;
	readonly VITE_BLOG4_IMAGE: string;
	readonly VITE_BLOG5_IMAGE: string;
	readonly VITE_BLOG6_IMAGE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
