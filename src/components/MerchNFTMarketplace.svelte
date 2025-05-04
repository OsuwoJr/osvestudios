<script lang="ts">
	import MerchCat from './MerchCat.svelte';
	import { browser } from '$app/environment';

	interface NFTItem {
		name: string;
		price: number;
		image: string;
		status: "coming-soon";
	}

	let nftItems: NFTItem[] = [
		{ 
			name: "Exclusive Digital Hoodie", 
			price: 0.03, 
			image: "/exclusivedigitalhoodie.webp",
			status: "coming-soon"
		},
		{ 
			name: "Gold Edition Tee", 
			price: 0.05, 
			image: "/goldeditiontee.webp",
			status: "coming-soon"
		},
	];

	let cartItems: { name: string; price: number }[] = [];

	let showComingSoon = false;
	let selectedNFT = "";
	
	// Form submission state
	let isSubmittingForm = false;
	let formSubmitSuccess = false;
	let formSubmitError = false;
	let waitlistEmail = "";

	function addToCart(item: NFTItem) {
		selectedNFT = item.name;
		showComingSoon = true;
		// Reset form state on open
		waitlistEmail = "";
		formSubmitSuccess = false;
		formSubmitError = false;
	}

	function removeItem(index: number) {
		cartItems.splice(index, 1);
		cartItems = [...cartItems];
	}

	function checkout() {
		if (cartItems.length === 0) return;
		console.log("Redirecting to payment gateway...");
	}

	function closeComingSoonModal() {
		showComingSoon = false;
	}
	
	// Handle waitlist form submission
	async function handleWaitlistSubmit(event: Event) {
		event.preventDefault();
		
		if (!browser) return;
		if (!waitlistEmail || !waitlistEmail.includes('@')) return;
		
		isSubmittingForm = true;
		formSubmitSuccess = false;
		formSubmitError = false;
		
		try {
			const formData = new FormData();
			formData.append("email", waitlistEmail);
			formData.append("nft_interest", selectedNFT);
			formData.append("formType", "NFT Waitlist");
			
			const response = await fetch("https://formspree.io/f/xyzweeav", {
				method: "POST",
				body: formData,
				headers: {
					"Accept": "application/json"
				}
			});
			
			if (response.ok) {
				formSubmitSuccess = true;
				waitlistEmail = "";
			} else {
				formSubmitError = true;
				console.error("Form submission failed:", await response.json());
			}
		} catch (error) {
			formSubmitError = true;
			console.error("Form submission error:", error);
		} finally {
			isSubmittingForm = false;
		}
	}
</script>

<section class="p-10 text-center">
	<h2 class="text-5xl font-extrabold neon-text">🎨 Limited Edition NFT Merch</h2>
	<p class="text-lg text-gray-300 mt-2">Own a piece of digital fashion linked to exclusive perks! 🔗</p>

	<div class="mt-5 mb-10">
		<div class="inline-block px-6 py-3 bg-gradient-to-r from-[#81C14B] via-purple-600 to-[#B89B5E] rounded-lg text-xl font-bold animate-pulse">
			🚀 NFT Collection Coming Soon! 🚀
		</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
		{#each nftItems as item}
			<div class="relative nft-card">
				<div class="nft-border">
					<div class="p-6 rounded-xl text-center nft-inner">
						<div class="relative">
							<img src={item.image} alt={item.name} class="w-full rounded-lg shadow-lg">
							
							<!-- Coming Soon Badge -->
							<div class="absolute top-0 right-0 bg-purple-600 text-white py-1 px-4 rounded-bl-lg font-bold transform rotate-0 shadow-lg">
								COMING SOON
							</div>
						</div>
						
						<p class="text-xl font-semibold mt-3">{item.name}</p>
						<p class="text-[#81C14B] font-bold flex items-center justify-center gap-2">
							<img src="/eth-logo.webp" alt="ETH" class="w-5 h-5"> {item.price}
						</p>

						<!-- Coming Soon Button -->
						<button on:click={() => addToCart(item)} class="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-transform duration-300 active:scale-95">
							⏳ Notify Me
						</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- 🛒 Link to MerchCat (Still connected for future use) -->
<MerchCat {cartItems} {removeItem} {checkout} />

<!-- 🔥 COMING SOON MODAL -->
{#if showComingSoon}
	<div class="fixed inset-0 bg-black/80 flex justify-center items-center z-50 animate-fade-in">
		<div class="bg-[#222] text-white p-6 rounded-lg text-center shadow-[0_0_20px_#81C14B] w-96 max-w-[90%]">
			<h2 class="text-3xl font-bold">⏳ Coming Soon!</h2>
			<p class="mt-2">{selectedNFT} will be available in the next exclusive drop. Stay tuned!</p>
			
			<!-- Waitlist Sign-up Form -->
			<div class="mt-4 bg-black/40 p-4 rounded-lg">
				<h3 class="text-xl font-bold text-[#81C14B]">Want Early Access?</h3>
				<p class="text-sm mt-1">Join our NFT waitlist to get notified first:</p>
				
				{#if formSubmitSuccess}
					<div class="mt-3 p-3 bg-[#81C14B]/20 border border-[#81C14B] rounded-lg text-[#81C14B] animate-fade-in">
						<i class="fas fa-check-circle mr-2"></i> Thank you! You're on the waitlist.
					</div>
				{:else}
					<form on:submit={handleWaitlistSubmit} class="mt-3">
						<input 
							type="email" 
							bind:value={waitlistEmail}
							name="email" 
							placeholder="Your Email" 
							required
							class="w-full px-4 py-2 rounded bg-black/70 border border-[#81C14B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#81C14B]"
						/>
						
						{#if formSubmitError}
							<p class="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>
						{/if}
						
						<button 
							type="submit" 
							disabled={isSubmittingForm}
							class="mt-3 w-full px-4 py-2 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg transition-all duration-300 flex items-center justify-center"
						>
							{#if isSubmittingForm}
								<span class="flex items-center">
									<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
										<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
										<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>
									Joining...
								</span>
							{:else}
								Join Waitlist
							{/if}
						</button>
					</form>
				{/if}
			</div>
			
			<button on:click={closeComingSoonModal} class="mt-4 px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300">
				Close
			</button>
		</div>
	</div>
{/if}

<style>
	.neon-text {
		text-shadow: 0 0 10px #81C14B, 0 0 20px #81C14B, 0 0 40px #81C14B;
	}

	.nft-card {
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.nft-card:hover {
		transform: scale(1.05) rotateX(5deg) rotateY(-5deg);
	}

	.nft-border {
		background: linear-gradient(135deg, #81C14B, #B89B5E);
		padding: 4px;
		border-radius: 15px;
	}

	.nft-inner {
		background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
		border-radius: 12px;
		padding: 1.5rem;
		box-shadow: 0 0 15px rgba(255, 223, 130, 0.3);
	}

	.nft-card:hover .nft-border {
		box-shadow: 0 0 25px #81C14B;
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	.animate-fade-in {
		animation: fadeIn 0.3s ease-out;
	}
	
	@keyframes pulse {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0.7;
		}
	}
	
	.animate-pulse {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}
</style>
