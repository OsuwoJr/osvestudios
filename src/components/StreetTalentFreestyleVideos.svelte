<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';

	let freestyleShorts = [
		{
			name: 'Adypasco',
			url: 'https://youtube.com/shorts/8uEI-JGkpF0?si=0A08d2BV7t82ZYhX' 
		},
		{
			name: 'Don Dochie',
			url: 'https://youtube.com/shorts/3RsyVz1fByc?si=KTrNAitf68TWALU1' 
		},
		{
			name: 'Megastar',
			url: 'https://youtube.com/shorts/tLTefg4kNIc?si=YkaXNW8NbrKBrnfv' 
		}
	];

	function extractYouTubeID(url: string) {
		const match = url.match(
			/(?:youtube\.com\/shorts\/|youtu\.be\/|youtube\.com\/watch\?v=)([\w-]{11})/
		);
		return match ? match[1] : null;
	}

	onMount(() => {
		new Swiper('.swiper', {
			slidesPerView: 1,
			spaceBetween: 20,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				640: { slidesPerView: 1 },
				768: { slidesPerView: 2 },
				1024: { slidesPerView: 3 }
			}
		});
	});
</script>

<section class="p-10 text-white">
	<h2 class="text-4xl font-bold text-center mb-6">🔥 Freestyle Shorts</h2>

	<div class="swiper">
		<div class="swiper-wrapper">
			{#each freestyleShorts as short}
				{#if extractYouTubeID(short.url)}
					<div class="swiper-slide bg-black bg-opacity-60 p-4 rounded-lg shadow-lg">
						<h3 class="text-lg font-semibold mb-2">{short.name}</h3>
						<div class="aspect-w-9 aspect-h-16 rounded overflow-hidden">
							<iframe
								src={`https://www.youtube.com/embed/${extractYouTubeID(short.url)}?autoplay=0&mute=1`}
								title={short.name}
								allowfullscreen
								class="w-full h-full border-none rounded-md">
							</iframe>
						</div>
						<a
							href={short.url}
							target="_blank"
							rel="noopener noreferrer"
							class="block mt-3 text-center text-black bg-[#81C14B] font-bold py-2 px-4 rounded-full hover:scale-105 transition-transform">
							▶️ Watch on YouTube
						</a>
					</div>
				{/if}
			{/each}
		</div>

		<!-- Swiper Controls -->
		<div class="swiper-pagination mt-4"></div>
		<div class="swiper-button-next"></div>
		<div class="swiper-button-prev"></div>
	</div>
</section>

<style>
	.aspect-w-9.aspect-h-16 {
		position: relative;
		width: 100%;
		padding-bottom: 177.78%;
	}
	.aspect-w-9.aspect-h-16 iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
