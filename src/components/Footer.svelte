<script lang="ts">
	import { onMount } from "svelte";
	import { browser } from '$app/environment';

	const year = new Date().getFullYear();

	let email = "";
	let subscribeStatus = "";
	let isSubscribing = false;
	const contactEmail = "infothekenyantroublers@gmail.com";

	const tabs = [
		{ name: "Home", link: "/", icon: "fa-home" },
		{ name: "Music", link: "/music", icon: "fa-music" },
		{ name: "Artists", link: "/artists", icon: "fa-users" },
		{ name: "TTST", link: "/street-talent", icon: "fa-street-view" },
		{ name: "Merch", link: "/merch", icon: "fa-tshirt" },
		{ name: "Blog", link: "/blog", icon: "fa-newspaper" },
		{ name: "The Troublers", link: "/troublers", icon: "fa-fan" }
	];

	const legal = [
		{ name: "Terms", link: "/terms", icon: "fa-file-contract" },
		{ name: "Privacy", link: "/privacy", icon: "fa-shield-alt" },
		{ name: "Contact", link: "/contact", icon: "fa-envelope" }
	];

	const socials = [
		{ name: "Instagram", icon: "fab fa-instagram", link: "https://www.instagram.com/thekenyantroublers/", color: "#E1306C" },
		{ name: "X", icon: "fab fa-x-twitter", link: "https://x.com/KenyanTroublers", color: "#1DA1F2" },
		{ name: "Facebook", icon: "fab fa-facebook", link: "https://www.facebook.com/thekenyantroublerskt", color: "#4267B2" },
		{ name: "TikTok", icon: "fab fa-tiktok", link: "https://www.tiktok.com/@thekenyantroublers", color: "#000000" },
		{ name: "YouTube", icon: "fab fa-youtube", link: "https://www.youtube.com/channel/UCs7hbuqCcYbPFUZKPiG0ufw", color: "#FF0000" },
		{ name: "Spotify", icon: "fab fa-spotify", link: "https://open.spotify.com/artist/6F05EgCahYw9U2th0SZVtP", color: "#1ED760" },
		{ name: "Boomplay", icon: "fa-music", link: "https://www.boomplay.com/artists/39520564?", color: "#FF6A00" },
		{ name: "Apple Music", icon: "fab fa-apple", link: "https://music.apple.com/us/artist/thekenyantroublers/1606960956", color: "#FB2D31" }
	];

	// Contact information for development services
	const devContacts = [
		{ name: "GitHub", icon: "fab fa-github", link: "https://github.com/osuwojr", color: "#333333" },
		{ name: "WhatsApp", icon: "fab fa-whatsapp", link: "https://wa.me/254790932575", color: "#25D366" }
	];

	const handleSubscribe = (e: SubmitEvent) => {
		e.preventDefault();
		if (!email || !email.includes('@')) {
			subscribeStatus = "Please enter a valid email";
			return;
		}
		
		if (!browser) return; // Skip on server
		
		isSubscribing = true;
		
		// Direct form submission approach for Formspree
		const formData = new FormData();
		formData.append("email", email);
		formData.append("message", "Newsletter subscription request");
		
		fetch("https://formspree.io/f/xyzweeav", {
			method: "POST",
			body: formData,
			headers: {
				"Accept": "application/json"
			}
		})
		.then(response => {
			if (response.ok) {
				subscribeStatus = "Thank you for subscribing!";
				email = "";
				
				// Clear success message after 3 seconds
				setTimeout(() => {
					subscribeStatus = "";
				}, 3000);
			} else {
				throw new Error("Subscription failed");
			}
		})
		.catch((error) => {
			console.error("Form submission error:", error);
			subscribeStatus = "Something went wrong. Please try again.";
		})
		.finally(() => {
			isSubscribing = false;
		});
	};

	// Current location detection for navigation highlight
	let currentPath = "";
	onMount(() => {
		if (!browser) return; // Skip on server
		currentPath = window.location.pathname;
	});
</script>

<footer class="relative bg-black text-white mt-20 border-t border-[#81C14B]/40 overflow-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 relative z-10">

		<!-- Logo + Tagline -->
		<div class="flex flex-col items-start">
			<a href="/" class="block mb-4 transition-transform hover:scale-105 duration-300">
				<img src="/logo.png" alt="KenyanTroublers Logo" class="h-14 w-14" />
			</a>
			<p class="text-sm text-gray-400 italic mb-4">"the global hitmakers."</p>
			<div class="flex space-x-4 mt-2">
				{#each socials.slice(0, 4) as soc}
					<a 
						href={soc.link} 
						target="_blank" 
						rel="noopener noreferrer" 
						class="text-white hover:text-[{soc.color}] transition-all duration-300 hover:scale-110"
						aria-label={soc.name}
					>
						<i class="{soc.icon} text-xl"></i>
					</a>
				{/each}
			</div>
		</div>

		<!-- Navigation -->
		<div>
			<h3 class="text-xl font-bold text-[#81C14B] mb-4 flex items-center">
				<i class="fas fa-compass mr-2"></i> Explore
			</h3>
			<ul class="space-y-2">
				{#each tabs as tab}
					<li>
						<a 
							href={tab.link} 
							class={"flex items-center hover:text-[#81C14B] hover:pl-2 transition-all duration-300 " + 
								(currentPath === tab.link ? "text-[#81C14B]" : "")}
						>
							<i class={"fas " + tab.icon + " w-5 mr-2 text-[#81C14B]/70"}></i>
							{tab.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Socials/Music Platforms -->
		<div>
			<h3 class="text-xl font-bold text-[#81C14B] mb-4 flex items-center">
				<i class="fas fa-headphones-alt mr-2"></i> Listen On
			</h3>
			<div class="grid grid-cols-2 gap-3">
				{#each socials.slice(4) as soc}
					<a 
						href={soc.link} 
						target="_blank" 
						rel="noopener noreferrer" 
						class="flex items-center gap-2 text-white hover:text-[{soc.color}] transition-all duration-300 hover:translate-x-1"
					>
						<i class="{soc.icon} text-lg"></i>
						<span class="text-sm">{soc.name}</span>
					</a>
				{/each}
			</div>

			<!-- Development Services -->
			<h3 class="text-xl font-bold text-[#81C14B] mt-8 mb-3 flex items-center">
				<i class="fas fa-code mr-2"></i> Need a Website?
			</h3>
			<p class="text-sm text-gray-400 mb-2">Contact the developer:</p>
			<div class="space-y-2">
				{#each devContacts as contact}
					<a 
						href={contact.link} 
						target="_blank" 
						rel="noopener noreferrer" 
						class="flex items-center text-white hover:text-[{contact.color}] transition-all duration-300 hover:translate-x-1 group"
					>
						<span class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 mr-2 group-hover:bg-[{contact.color}] transition-colors duration-300">
							<i class="{contact.icon} text-lg"></i>
						</span>
						<span class="text-sm">
							{contact.name === "GitHub" ? "osuwojr" : "+254 790 932 575"}
						</span>
					</a>
				{/each}
			</div>
		</div>

		<!-- Newsletter -->
		<div>
			<h3 class="text-xl font-bold text-[#81C14B] mb-4 flex items-center">
				<i class="fas fa-envelope-open-text mr-2"></i> News Letter
			</h3>
			<p class="text-gray-400 mb-4 text-sm">Subscribe for exclusive drops and updates.</p>
			
			<!-- Simplified Formspree Integration -->
			<form class="flex flex-col gap-3" on:submit={handleSubscribe}>
				<div class="relative">
					<i class="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
					<input 
						type="email" 
						bind:value={email}
						placeholder="Your email"
						class="w-full pl-10 pr-4 py-2 rounded-md bg-[#1a1a1a] border border-[#81C14B]/40 text-white focus:outline-none focus:ring-2 focus:ring-[#81C14B]" 
						required
					/>
				</div>
				
				{#if subscribeStatus}
					<p class={subscribeStatus.includes("Thank you") ? "text-[#81C14B] text-sm" : "text-red-400 text-sm"}>
						{subscribeStatus}
					</p>
				{/if}
				
				<button 
					type="submit" 
					class="px-4 py-2 bg-[#81C14B] hover:bg-[#6A9A52] text-black font-bold rounded-md transition-all duration-300 flex items-center justify-center"
					disabled={isSubscribing}
				>
					{#if isSubscribing}
						<i class="fas fa-circle-notch fa-spin mr-2"></i> Subscribing...
					{:else}
						<i class="fas fa-paper-plane mr-2"></i> Subscribe
					{/if}
				</button>
				
				<div class="text-xs text-gray-500 mt-1">
					<a href={"mailto:" + contactEmail} class="hover:text-[#81C14B] underline transition-colors">
						{contactEmail}
					</a>
				</div>
			</form>
		</div>
	</div>

	<!-- Footer Bottom Strip -->
	<div class="border-t border-[#81C14B]/30 px-4 sm:px-6 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 relative z-10">
		<p class="flex items-center flex-wrap justify-center sm:justify-start">
			<i class="far fa-copyright mr-1"></i> {year}
			<span class="text-[#81C14B] font-semibold mx-1">theKenyanTroublers</span>
			All rights reserved.
			<span class="hidden sm:inline mx-2">|</span>
			<span class="mt-1 sm:mt-0">Developed by <a href="https://github.com/osuwojr" target="_blank" rel="noopener noreferrer" class="text-[#81C14B] hover:underline">osuwojr</a></span>
		</p>
		<div class="flex gap-4 mt-4 sm:mt-0 items-center">
			{#each legal as item}
				<a href={item.link} class="hover:text-[#81C14B] transition flex items-center">
					<i class={"fas " + item.icon + " mr-1"}></i> {item.name}
				</a>
			{/each}
			<button 
				on:click={() => alert('🥑 The Global Hitmakers!')} 
				class="hover:text-[#81C14B] transition flex items-center"
				aria-label="About the Kenyan Troublers"
			>
				<i class="fas fa-info-circle mr-1"></i>
			</button>
		</div>
	</div>

	<!-- Scroll to Top -->
	<a 
		href="#top" 
		class="back-to-top" 
		on:click={(e) => { 
			if (browser) {
				e.preventDefault(); 
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}
		}}
		aria-label="Back to top"
	>
		<i class="fas fa-arrow-up"></i>
	</a>

	<!-- Background glow effect -->
	<div class="absolute inset-0 z-0 pointer-events-none">
		<div class="w-64 h-64 sm:w-96 sm:h-96 bg-[#81C14B]/10 rounded-full blur-3xl absolute -top-20 -left-20"></div>
		<div class="w-64 h-64 sm:w-96 sm:h-96 bg-[#81C14B]/10 rounded-full blur-3xl absolute bottom-0 right-0"></div>
	</div>
</footer>

<style>
	footer {
		background: linear-gradient(to top, #000000 80%, #81C14B10);
	}
	
	@media (max-width: 640px) {
		footer {
			background: linear-gradient(to top, #000000 90%, #81C14B10);
		}
	}

	.back-to-top {
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		background-color: #81C14B;
		color: black;
		padding: 0.75rem;
		border-radius: 9999px;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
	}

	.back-to-top:hover {
		background-color: #6A9A52;
		transform: rotate(12deg);
	}
</style>
