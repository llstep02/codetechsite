// ================== START: Imports ==================
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
// ================== END: Imports ==================

// ================== START: cn Utility ==================
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
// ================== END: cn Utility ==================
