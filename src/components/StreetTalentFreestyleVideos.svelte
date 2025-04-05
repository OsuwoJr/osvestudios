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
		const match = url.match(/(?:youtube\.com\/shorts\/|youtu\.be\/|youtube\.com\/watch\?v=)([\w-]{11})/);
		return match ? match[1] : null;
	}

	onMount(() => {
		new Swiper('.swiper', {
			slidesPerView: 1,
			spaceBetween: 24,
			loop: true,
			centeredSlides: true,
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
	<h2 class="text-4xl font-bold text-center mb-10 tracking-wide">🥑 Freestyle <span class="text-avocadoGreen">Shorts</span> 🥑</h2>

	<div class="swiper">
		<div class="swiper-wrapper">
			{#each freestyleShorts as short}
				{#if extractYouTubeID(short.url)}
					<div class="swiper-slide bg-[#000000cc] backdrop-blur-lg p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,255,100,0.2)] hover:shadow-[0_8px_30px_rgba(0,255,150,0.3)] transition-all duration-300">
						<h3 class="text-xl font-semibold mb-3 text-center uppercase tracking-wider">{short.name}</h3>
						<div class="aspect-w-9 aspect-h-16 overflow-hidden rounded-xl shadow-inner">
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
							class="mt-4 block w-full text-center bg-avocadoGreen text-black font-bold py-2 rounded-full hover:scale-105 hover:bg-[#a1d475] transition-all"
						>
							▶️ Watch on YouTube
						</a>
					</div>
				{/if}
			{/each}
		</div>

		<!-- Swiper Controls -->
		<div class="swiper-pagination mt-6"></div>
		<div class="swiper-button-next text-avocadoGreen hover:text-white"></div>
		<div class="swiper-button-prev text-avocadoGreen hover:text-white"></div>
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
		border: none;
	}

	:global(.text-avocadoGreen) {
		color: #81C14B;
	}

	:global(.bg-avocadoGreen) {
		background-color: #81C14B;
	}
</style>
