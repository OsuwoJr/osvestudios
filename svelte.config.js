import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// Node.js runtime - must use 'nodejs18.x' for Vercel
			runtime: 'nodejs18.x',
			
			// Split functions for better cold starts
			split: false,
			
			// Configure Vercel image optimization
			images: {
				sizes: [640, 828, 1200, 1920, 3840],
				formats: ['image/avif', 'image/webp'],
				minimumCacheTTL: 300
			}
		})
	}
};

export default config;
