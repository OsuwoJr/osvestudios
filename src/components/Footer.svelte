<script lang="ts">
	import { onMount } from "svelte";
	import { browser } from '$app/environment';

	const year = new Date().getFullYear();

	let email = "";
	let subscribeStatus = "";
	let isSubscribing = false;
	const contactEmail = "info@osvestudios.com";

	const tabs = [
		{ name: "Home", link: "/", icon: "fa-home" },
		{ name: "About", link: "/about", icon: "fa-info-circle" },
		{ name: "Services", link: "/services", icon: "fa-concierge-bell" },
		{ name: "Projects", link: "/projects", icon: "fa-project-diagram" },
		{ name: "Contact", link: "/contact", icon: "fa-envelope" }
	];

	const legal = [
		{ name: "Terms", link: "/terms", icon: "fa-file-contract" },
		{ name: "Privacy", link: "/privacy", icon: "fa-shield-alt" },
		{ name: "Booking", link: "/contact", icon: "fa-calendar-alt" }
	];

	const socials = [
		{ name: "Instagram", icon: "fab fa-instagram", link: "https://www.instagram.com/osvestudios/", color: "#E1306C" },
		{ name: "X", icon: "fab fa-x-twitter", link: "https://x.com/osvestudios", color: "#1DA1F2" },
		{ name: "Facebook", icon: "fab fa-facebook", link: "https://www.facebook.com/osvestudios", color: "#4267B2" },
		{ name: "TikTok", icon: "fab fa-tiktok", link: "https://www.tiktok.com/@osvestudios", color: "#000000" },
		{ name: "YouTube", icon: "fab fa-youtube", link: "https://www.youtube.com/channel/osvestudios", color: "#FF0000" },
		{ name: "Spotify", icon: "fab fa-spotify", link: "https://open.spotify.com/user/osvestudios", color: "#1ED760" }
	];

	// Contact information for development services
	const studioContacts = [
		{ name: "Email", icon: "fas fa-envelope", link: "mailto:info@osvestudios.com", color: "#00BFFF" },
		{ name: "WhatsApp", icon: "fab fa-whatsapp", link: "https://wa.me/254790932575", color: "#25D366" },
		{ name: "Phone", icon: "fas fa-phone", link: "tel:+254790932575", color: "#00BFFF" }
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

<footer class="relative bg-black text-white mt-20 border-t border-[#00BFFF]/40 overflow-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 relative z-10">

		<!-- Logo + Tagline -->
		<div class="flex flex-col items-start">
			<a href="/" class="block mb-4 transition-transform hover:scale-105 duration-300">
				<img src="/logo.png" alt="OSVE STUDIOS Logo" class="h-14 w-14" />
			</a>
			<p class="text-sm text-gray-400 italic mb-4">"Electrifying Sound. Limitless Creativity."</p>
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
			<h3 class="text-xl font-bold text-[#00BFFF] mb-4 flex items-center">
				<i class="fas fa-compass mr-2"></i> Explore
			</h3>
			<ul class="space-y-2">
				{#each tabs as tab}
					<li>
						<a 
							href={tab.link} 
							class={"flex items-center hover:text-[#00BFFF] hover:pl-2 transition-all duration-300 " + 
								(currentPath === tab.link ? "text-[#00BFFF]" : "")}
						>
							<i class={"fas " + tab.icon + " w-5 mr-2 text-[#00BFFF]/70"}></i>
							{tab.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Subscribe / Contact -->
		<div>
			<h3 class="text-xl font-bold text-[#00BFFF] mb-4 flex items-center">
				<i class="fas fa-envelope mr-2"></i> Stay Updated
			</h3>
			<p class="text-sm text-gray-400 mb-3">Get updates on our latest studio sessions, projects and special offers.</p>
			
			<form on:submit={handleSubscribe} class="mb-4">
				<div class="relative mb-3">
					<input 
						type="email" 
						bind:value={email}
						placeholder="Your email"
						class="w-full py-2 px-4 bg-black border border-[#00BFFF]/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF]"
						required
					/>
				</div>
				<button 
					type="submit"
					disabled={isSubscribing}
					class="w-full py-2 bg-[#00BFFF] hover:bg-[#0099CC] text-white rounded-lg transition-all flex items-center justify-center"
				>
					{#if isSubscribing}
						<i class="fas fa-circle-notch fa-spin mr-2"></i> Subscribing...
					{:else}
						<i class="fas fa-paper-plane mr-2"></i> Subscribe
					{/if}
				</button>
				{#if subscribeStatus}
					<p class="mt-2 text-sm {subscribeStatus.includes('Thank you') ? 'text-green-500' : 'text-red-500'}">
						{subscribeStatus}
					</p>
				{/if}
			</form>
			
			<h4 class="text-lg font-semibold text-[#00BFFF] mt-6 mb-2">Contact Us</h4>
			<div class="grid grid-cols-1 gap-2">
				{#each studioContacts as contact}
					<a 
						href={contact.link} 
						target="_blank" 
						rel="noopener noreferrer" 
						class="flex items-center gap-2 text-white hover:text-[{contact.color}] transition-all duration-300 hover:translate-x-1"
					>
						<i class="{contact.icon} text-lg"></i>
						<span class="text-sm">{contact.name}</span>
					</a>
				{/each}
			</div>
		</div>

		<!-- Hours & Legal -->
		<div>
			<h3 class="text-xl font-bold text-[#00BFFF] mb-4 flex items-center">
				<i class="fas fa-clock mr-2"></i> Studio Hours
			</h3>
			<ul class="text-sm text-gray-300 space-y-2 mb-6">
				<li class="flex justify-between">
					<span>Monday - Friday</span>
					<span>10 AM - 10 PM</span>
				</li>
				<li class="flex justify-between">
					<span>Saturday</span>
					<span>12 PM - 8 PM</span>
				</li>
				<li class="flex justify-between">
					<span>Sunday</span>
					<span>By Appointment</span>
				</li>
			</ul>
			
			<h4 class="text-lg font-semibold text-[#00BFFF] mt-6 mb-2">Legal</h4>
			<ul class="space-y-2">
				{#each legal as item}
					<li>
						<a 
							href={item.link} 
							class="flex items-center hover:text-[#00BFFF] transition-all duration-300"
						>
							<i class={"fas " + item.icon + " w-5 mr-2 text-[#00BFFF]/70"}></i>
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	
	<!-- Copyright -->
	<div class="py-4 border-t border-[#00BFFF]/20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
			<p>© {year} OSVE STUDIOS. All rights reserved.</p>
			<div class="mt-2 sm:mt-0">
				<p>Designed with <i class="fas fa-heart text-[#00BFFF]"></i> in Kenya</p>
			</div>
		</div>
	</div>
</footer>

<style>
	/* Social icons hover effects */
	a:hover i.fab.fa-instagram {
		background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	
	a:hover i.fab.fa-youtube {
		color: #FF0000;
	}
	
	a:hover i.fab.fa-spotify {
		color: #1ED760;
	}
	
	/* Smooth transitions */
	.transition-all {
		transition: all 0.3s ease-in-out;
	}
</style>
