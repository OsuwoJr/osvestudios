<script lang="ts">
    import { onMount } from "svelte";
    import { fade, slide } from "svelte/transition";

    let nftTracks = [
        { 
            name: "Kisiwa Cha Upendo", 
            artist: "theKenyanTroublers",
            price: 0.8, 
            image: "/10.jpeg", 
            description: "A melodic journey expressing love for the beautiful Kenyan islands."
        },
        { 
            name: "Digital Echo", 
            artist: "OsuwoJr",
            price: 1.0, 
            image: "/OsuwoJr.png", 
            description: "Futuristic beats with classic Kenyan rhythms blended perfectly."
        },
        { 
            name: "Troublers Arise", 
            artist: "theKenyanTroublers",
            price: 1.2, 
            image: "/forbidden2.png", 
            description: "The title track from our groundbreaking album."
        },
        { 
            name: "Neon Pulse", 
            artist: "theKenyanTroublers",
            price: 0.5, 
            image: "/saka.png", 
            description: "Electronic vibes with traditional Kenyan instruments."
        },
    ];

    let isLoaded = false;
    let waitlistEmail = "";
    let isSubmitting = false;
    let submitSuccess = false;
    let submitError = false;

    // Formspree endpoint - same as other forms
    const formspreeEndpoint = "https://formspree.io/f/xyzweeav";

    async function handleWaitlistSubmit(event: Event) {
        event.preventDefault();
        if (!waitlistEmail || isSubmitting) return;

        isSubmitting = true;
        submitSuccess = false;
        submitError = false;

        try {
            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: waitlistEmail,
                    subject: "NFT Waitlist Signup",
                    message: "Please add me to the NFT music launch waitlist."
                }),
            });

            if (response.ok) {
                waitlistEmail = "";
                submitSuccess = true;
            } else {
                submitError = true;
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            submitError = true;
        } finally {
            isSubmitting = false;
        }
    }

    onMount(() => {
        // Simulating loading data
        setTimeout(() => {
            isLoaded = true;
        }, 500);
    });
</script>

<section class="nft-marketplace py-16 px-4">
    <div class="max-w-6xl mx-auto" in:fade={{ duration: 500, delay: 300 }}>
        <h2 class="section-title text-center mb-4">
            <i class="fas fa-music mr-2"></i> Exclusive <span class="highlight">NFT</span> Music Collection
        </h2>
        
        <p class="text-center max-w-2xl mx-auto mb-12 text-gray-300">Own a piece of our musical journey. Coming soon - limited edition NFTs with exclusive content and perks for true fans.</p>
        
        {#if isLoaded}
            <div class="nft-grid">
                {#each nftTracks as track, i}
                    <div 
                        class="nft-card" 
                        in:slide|local={{ delay: 100 * i, duration: 400 }}
                    >
                        <div class="relative overflow-hidden rounded-lg group">
                            <img src={track.image} alt={track.name} class="nft-image" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        </div>
                        
                        <div class="nft-info">
                            <h3 class="track-name">{track.name}</h3>
                            <p class="artist-name text-gray-300">by {track.artist}</p>
                            <p class="description text-sm text-gray-400 mt-2 mb-3">{track.description}</p>
                            <div class="flex justify-between items-center">
                                <p class="track-price">{track.price} ETH</p>
                                <button class="buy-btn">
                                    <i class="fas fa-wallet mr-1"></i> Coming Soon
                                </button>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {:else}
            <div class="flex justify-center items-center h-40">
                <div class="loader"></div>
            </div>
        {/if}
        
        <div class="waitlist-container mt-16 text-center p-6 bg-black/50 backdrop-blur-sm rounded-xl max-w-xl mx-auto">
            <h3 class="text-2xl font-bold mb-4">
                <i class="fas fa-envelope-open text-[#81C14B] mr-2"></i> Join Our NFT Waitlist
            </h3>
            <p class="text-gray-300 mb-6">Be the first to know when our exclusive NFTs launch. Get early access and special offers.</p>
            
            <form 
                on:submit={handleWaitlistSubmit} 
                action={formspreeEndpoint} 
                method="POST" 
                class="flex flex-col md:flex-row gap-3 items-center justify-center"
            >
                <input 
                    type="email" 
                    name="email" 
                    bind:value={waitlistEmail} 
                    placeholder="Your email address" 
                    required 
                    class="bg-black/80 border border-gray-600 focus:border-[#81C14B] text-white px-4 py-3 rounded-lg w-full md:w-auto md:flex-1"
                />
                <input type="hidden" name="_subject" value="NFT Waitlist Signup" />
                <button 
                    type="submit" 
                    class="bg-[#81C14B] px-6 py-3 rounded-lg font-semibold text-black w-full md:w-auto transition-all hover:bg-[#6A9A52] disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                >
                    {#if isSubmitting}
                        <i class="fas fa-spinner fa-spin mr-2"></i> Joining...
                    {:else}
                        <i class="fas fa-envelope-open mr-2"></i> Join Waitlist
                    {/if}
                </button>
            </form>
            
            {#if submitSuccess}
                <p class="text-[#81C14B] mt-4" transition:fade>
                    <i class="fas fa-check-circle mr-1"></i> Thanks for joining our waitlist! We'll keep you updated.
                </p>
            {/if}
            
            {#if submitError}
                <p class="text-red-500 mt-4" transition:fade>
                    <i class="fas fa-exclamation-circle mr-1"></i> There was an error. Please try again.
                </p>
            {/if}
        </div>
    </div>
</section>

<style>
/* Futuristic NFT Marketplace Styling */
.nft-marketplace {
    background: linear-gradient(135deg, rgba(20, 20, 20, 0.95), rgba(10, 10, 10, 0.98));
    color: white;
}

/* Section Title */
.section-title {
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(129, 193, 75, 0.7);
}

.highlight {
    color: #81C14B;
    background: linear-gradient(90deg, #81C14B, #6A9A52);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(129, 193, 75, 0.9);
}

/* Grid Layout */
.nft-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
    justify-items: center;
}

/* NFT Card Styling */
.nft-card {
    width: 100%;
    max-width: 320px;
    background: rgba(26, 26, 26, 0.7);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 0px 20px rgba(129, 193, 75, 0.2);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(129, 193, 75, 0.1);
}

.nft-card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 30px rgba(129, 193, 75, 0.4);
}

/* NFT Image */
.nft-image {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.nft-card:hover .nft-image {
    transform: scale(1.05);
}

/* NFT Info */
.nft-info {
    padding: 20px;
}

.track-name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
}

.track-price {
    font-size: 1.2rem;
    color: #81C14B;
    font-weight: bold;
}

/* Buy Button */
.buy-btn {
    background: #81C14B;
    padding: 8px 15px;
    border-radius: 8px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: 0.3s;
    border: none;
    color: black;
    font-weight: 600;
}

.buy-btn:hover {
    background: #6A9A52;
}

/* Waitlist Container */
.waitlist-container {
    box-shadow: 0 4px 30px rgba(129, 193, 75, 0.2);
    border: 1px solid rgba(129, 193, 75, 0.1);
}

/* Loading animation */
.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #333;
    border-bottom-color: #81C14B;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/* Responsive for Mobile */
@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }
    
    .nft-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
}
</style>
