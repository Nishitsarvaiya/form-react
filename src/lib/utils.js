import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function generateUID() {
	return "uid" + Math.random().toString(16).slice(2);
}
