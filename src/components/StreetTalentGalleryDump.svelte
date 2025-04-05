<script lang="ts">
	import { onMount } from 'svelte';

	let instagramPosts = [
		'https://www.instagram.com/p/DHkmadqi1q8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
		'https://www.instagram.com/p/C9mQh1AtmUj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
		'https://www.instagram.com/p/DHTcs2gIkgX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
	];

	onMount(() => {
		if (typeof window !== 'undefined') {
			const script = document.createElement('script');
			script.src = 'https://www.instagram.com/embed.js';
			script.async = true;
			document.body.appendChild(script);

			script.onload = () => {
				if (window.instgrm) window.instgrm.Embeds.process();
			};
		}
	});
</script>

<section class="p-10 text-white">
	<h2 class="text-4xl font-bold text-center mb-10 tracking-wide">📸 Gallery Dump <span class="text-avocadoGreen">/ Instagram</span></h2>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each instagramPosts as postUrl}
			<div
				class="bg-[#000000cc] backdrop-blur-md rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,255,100,0.2)] transition-transform hover:scale-105 hover:shadow-[0_6px_30px_rgba(0,255,150,0.4)]"
			>
				<blockquote
					class="instagram-media"
					data-instgrm-captioned
					data-instgrm-permalink={postUrl}
					data-instgrm-version="14"
					style="
						background:#FFF;
						border:0;
						border-radius:12px;
						box-shadow:0 0 3px rgba(0,0,0,0.5), 0 6px 20px rgba(0,0,0,0.15);
						margin:1px auto;
						max-width:540px;
						min-width:326px;
						width:100%;
					"
				></blockquote>
			</div>
		{/each}
	</div>
</section>

<style>
	:global(.instagram-media) {
		margin: 0 auto;
		width: 100%;
	}
	:global(.text-avocadoGreen) {
		color: #7fc25e;
	}
</style>
