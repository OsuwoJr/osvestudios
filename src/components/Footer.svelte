<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="bg-black text-white border-t border-[#81C14B]/40 mt-20">
	<div class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
		<!-- Navigation Links -->
		<div>
			<h3 class="text-xl font-bold text-[#81C14B] mb-4">Navigation</h3>
			<ul class="space-y-2 text-gray-300">
				<li><a href="/" class="hover:text-[#81C14B] transition">Home</a></li>
				<li><a href="/music" class="hover:text-[#81C14B] transition">Music</a></li>
				<li><a href="/artists" class="hover:text-[#81C14B] transition">Artists</a></li>
				<li><a href="/street-talent" class="hover:text-[#81C14B] transition">TTST</a></li>
				<li><a href="/merch" class="hover:text-[#81C14B] transition">Merch</a></li>
				<li><a href="/blog" class="hover:text-[#81C14B] transition">Blog</a></li>
				<li><a href="/troublers" class="hover:text-[#81C14B] transition">The Troublers</a></li>
			</ul>
		</div>

		<!-- Contact & Socials -->
		<div>
			<h3 class="text-xl font-bold text-[#81C14B] mb-4">Connect</h3>
			<p class="text-gray-300 mb-2">Email: <a href="mailto:contact@kenyantroublers.com" class="text-[#81C14B]">contact@kenyantroublers.com</a></p>
			<p class="text-gray-300 mb-4">Phone: <a href="tel:+254790932575" class="text-[#81C14B]">+254 790 932 575</a></p>
			<div class="flex space-x-4 text-2xl mt-2">
				<a href="#" class="hover:text-[#81C14B] transition">📸</a>
				<a href="#" class="hover:text-[#81C14B] transition">🎥</a>
				<a href="#" class="hover:text-[#81C14B] transition">🐦</a>
				<a href="#" class="hover:text-[#81C14B] transition">🎶</a>
				<a href="#" class="hover:text-[#81C14B] transition">🎧</a>
			</div>
		</div>

		<!-- Newsletter & Tagline -->
		<div>
			<h3 class="text-xl font-bold text-[#81C14B] mb-4">Join the Movement</h3>
			<p class="text-gray-300 mb-4">Subscribe for exclusive drops, updates, and behind-the-scenes vibes.</p>
			<form class="flex flex-col sm:flex-row gap-3 items-center">
				<input type="email" placeholder="Your email" class="w-full px-4 py-2 rounded-md bg-[#222] text-white border border-[#81C14B]/40 focus:outline-none focus:ring-2 focus:ring-[#81C14B]" />
				<button type="submit" class="px-4 py-2 bg-[#81C14B] hover:bg-[#6A9A52] text-black font-bold rounded-md transition">Subscribe</button>
			</form>
			<p class="text-sm text-[#81C14B] mt-6 font-light italic">"Future of sound – the global hitmakers."</p>
		</div>
	</div>

	<!-- Bottom Strip -->
	<div class="border-t border-[#81C14B]/30 px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
		<p>&copy; {year} theKenyanTroublers. All rights reserved.</p>
		<div class="flex gap-4 mt-4 sm:mt-0">
			<a href="/terms" class="hover:text-[#81C14B] transition">Terms</a>
			<a href="/privacy" class="hover:text-[#81C14B] transition">Privacy</a>
			<button on:click={() => alert('🥑 Hidden Beat Unlocked!')} class="hover:text-[#81C14B] transition animate-pulse">🥑</button>
		</div>
	</div>

	<!-- Scroll to Top -->
	<button
		on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		class="fixed bottom-6 right-6 bg-[#81C14B] hover:bg-[#6A9A52] text-black text-xl p-3 rounded-full shadow-lg z-[100] transition hover:rotate-12"
		aria-label="Scroll to top"
	>
		⬆️
	</button>
</footer>

<style>
	footer {
		background: linear-gradient(to top, #000000 80%, #81C14B10);
	}
</style>
