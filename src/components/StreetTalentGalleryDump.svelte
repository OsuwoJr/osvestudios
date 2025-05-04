<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// Define Instagram interface
	interface Instagram {
		Embeds: {
			process: () => void;
		};
	}

	let instagramPosts = [
		'https://www.instagram.com/p/DHkmadqi1q8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
		'https://www.instagram.com/p/C9mQh1AtmUj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
		'https://www.instagram.com/p/DHTcs2gIkgX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
	];

	onMount(() => {
		if (!browser) return; // Skip on server
		
		const script = document.createElement('script');
		script.src = 'https://www.instagram.com/embed.js';
		script.async = true;
		document.body.appendChild(script);

		script.onload = () => {
			// Use type assertion to safely access the Instagram API
			const instgrmObj = (window as any).instgrm as Instagram | undefined;
			if (instgrmObj) instgrmObj.Embeds.process();
		};
	});
</script>

<section class="px-4 py-10 sm:px-6 md:px-10 text-white">
	<h2 class="text-3xl sm:text-4xl font-bold text-center mb-10 tracking-wide">
		📸 Gallery Dump <span class="text-avocadoGreen">/ Instagram</span>
	</h2>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each instagramPosts as postUrl}
			<div
				class="bg-[#000000cc] backdrop-blur-xl rounded-2xl p-4 shadow-lg transition-all transform hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(127,194,94,0.3)] hover:ring-2 hover:ring-avocadoGreen"
			>
				<blockquote
					class="instagram-media w-full"
					data-instgrm-captioned
					data-instgrm-permalink={postUrl}
					data-instgrm-version="14"
					style="
						background: #fff;
						border: 0;
						border-radius: 12px;
						box-shadow: 0 0 3px rgba(0, 0, 0, 0.5), 0 6px 20px rgba(0, 0, 0, 0.15);
						margin: 0 auto;
						max-width: 540px;
						min-width: 100%;
						width: 100%;
					"
				></blockquote>
			</div>
		{/each}
	</div>
</section>

<style>
	:global(.instagram-media) {
		width: 100%;
		margin: 0 auto;
		transition: all 0.3s ease;
	}

	:global(.text-avocadoGreen) {
		color: #7fc25e;
	}
</style>
