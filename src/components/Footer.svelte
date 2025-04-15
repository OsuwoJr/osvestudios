<script lang="ts">
	const year = new Date().getFullYear();

	const tabs = [
		{ name: "Home", link: "/" },
		{ name: "Music", link: "/music" },
		{ name: "Artists", link: "/artists" },
		{ name: "TTST", link: "/street-talent" },
		{ name: "Merch", link: "/merch" },
		{ name: "Blog", link: "/blog" },
		{ name: "The Troublers", link: "/troublers" }
	];

	const legal = [
		{ name: "Terms", link: "/terms" },
		{ name: "Privacy", link: "/privacy" }
	];

	const socials = [
		{ name: "Instagram", icon: "📸", link: "https://www.instagram.com/thekenyantroublers/" },
		{ name: "X", icon: "🐦", link: "https://x.com/KenyanTroublers" },
		{ name: "Facebook", icon: "🎶", link: "https://www.facebook.com/thekenyantroublerskt" },
		{ name: "TikTok", icon: "🎧", link: "https://www.tiktok.com/@thekenyantroublers" },
		{ name: "YouTube", icon: "🎥", link: "https://www.youtube.com/channel/UCs7hbuqCcYbPFUZKPiG0ufw" },
		{ name: "Spotify", icon: "🎵", link: "https://open.spotify.com/artist/6F05EgCahYw9U2th0SZVtP" },
		{ name: "Boomplay", icon: "🎼", link: "https://www.boomplay.com/artists/39520564?" },
		{ name: "Apple Music", icon: "🍎", link: "https://music.apple.com/us/artist/thekenyantroublers/1606960956" }
	];
</script>

<footer class="relative bg-black text-white mt-20 border-t border-[#81C14B]/40 overflow-hidden">
	<div class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

		<!-- Logo + Tagline -->
		<div>
			<img src="/logo.png" alt="KenyanTroublers Logo" class="h-12 w-12 mb-4" />
			<p class="text-sm text-gray-400 italic">"The future of sound – the global hitmakers."</p>
		</div>

		<!-- Navigation -->
		<div>
			<h3 class="text-xl font-bold text-[#81C14B] mb-4">Explore</h3>
			<ul class="space-y-2">
				{#each tabs as tab}
					<li>
						<a href={tab.link} class="hover:text-[#81C14B] hover:pl-2 transition-all duration-300 block">
							{tab.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Socials -->
		<div>
			<h3 class="text-xl font-bold text-[#81C14B] mb-4">Socials</h3>
			<div class="grid grid-cols-4 gap-3 text-2xl text-white">
				{#each socials as soc}
					<a href={soc.link} target="_blank" rel="noopener" class="hover:text-[#81C14B] transition transform hover:scale-125">
						<span class="sr-only">{soc.name}</span>{soc.icon}
					</a>
				{/each}
			</div>
		</div>

		<!-- Newsletter -->
		<div>
			<h3 class="text-xl font-bold text-[#81C14B] mb-4">Join Us</h3>
			<p class="text-gray-400 mb-4 text-sm">Subscribe for exclusive drops and updates.</p>
			<form class="flex flex-col sm:flex-row gap-3">
				<input type="email" placeholder="Your email"
					class="w-full px-4 py-2 rounded-md bg-[#1a1a1a] border border-[#81C14B]/40 text-white focus:outline-none focus:ring-2 focus:ring-[#81C14B]" />
				<button type="submit" class="px-4 py-2 bg-[#81C14B] hover:bg-[#6A9A52] text-black font-bold rounded-md transition-all duration-300">Subscribe</button>
			</form>
		</div>
	</div>

	<!-- Footer Bottom Strip -->
	<div class="border-t border-[#81C14B]/30 px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 relative z-10">
		<p>&copy; {year} <span class="text-[#81C14B] font-semibold">theKenyanTroublers</span>. All rights reserved.</p>
		<div class="flex gap-4 mt-4 sm:mt-0">
			{#each legal as item}
				<a href={item.link} class="hover:text-[#81C14B] transition">{item.name}</a>
			{/each}
			<button on:click={() => alert('🥑 Avocado Anyday Everyday')} class="hover:text-[#81C14B] transition animate-pulse">🥑</button>
		</div>
	</div>

	<!-- Scroll to Top -->
	<button
		on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		class="fixed bottom-6 right-6 bg-[#81C14B] hover:bg-[#6A9A52] text-black text-xl p-3 rounded-full shadow-xl z-[100] transition-all duration-300 hover:rotate-12"
		aria-label="Scroll to top"
	>
		⬆️
	</button>

	<!-- Background glow effect -->
	<div class="absolute inset-0 z-0 pointer-events-none">
		<div class="w-96 h-96 bg-[#81C14B]/10 rounded-full blur-3xl absolute -top-20 -left-20"></div>
		<div class="w-96 h-96 bg-[#81C14B]/10 rounded-full blur-3xl absolute bottom-0 right-0"></div>
	</div>
</footer>

<style>
	footer {
		background: linear-gradient(to top, #000000 80%, #81C14B10);
	}
</style>
