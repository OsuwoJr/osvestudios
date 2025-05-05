<script>
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';

    let countdown = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    // Set launch date to 2 months from now
    const launchDate = new Date();
    launchDate.setMonth(launchDate.getMonth() + 2);

    function updateCountdown() {
        if (!browser) return;
        
        const now = new Date().getTime();
        const distance = launchDate.getTime() - now;
        
        countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }

    onMount(() => {
        if (browser) {
            updateCountdown();
            const timer = setInterval(updateCountdown, 1000);
            return () => clearInterval(timer);
        }
    });

    // Form handling
    let email = "";
    let subscribeStatus = "";
    let isSubmitting = false;
    let showSuccessMessage = false;

    async function subscribeToUpdates() {
        if (!browser) return;
        if (!email || !email.includes('@')) {
            subscribeStatus = "Please enter a valid email address";
            return;
        }

        isSubmitting = true;
        subscribeStatus = "";
        
        // Use Formspree endpoint
        const formData = new FormData();
        formData.append("email", email);
        formData.append("formType", "NFT Launch Notification");
        
        try {
            const response = await fetch("https://formspree.io/f/xyzweeav", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });
            
            if (response.ok) {
                showSuccessMessage = true;
                email = "";
                setTimeout(() => {
                    showSuccessMessage = false;
                }, 5000);
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            subscribeStatus = "Something went wrong. Please try again.";
        } finally {
            isSubmitting = false;
        }
    }
</script>

<section id="nft-membership" class="relative p-10 text-white text-center">
    <!-- Glowing Background Effect -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#81C14B]/20 via-[#6A9A52]/30 to-black opacity-90"></div>
    
    <!-- Animated Particles -->
    <div class="absolute inset-0 overflow-hidden">
        <div class="stars"></div>
        <div class="twinkling"></div>
    </div>

    <!-- Section Content -->
    <div class="relative z-10 max-w-5xl mx-auto">
        <div class="coming-soon-badge">COMING SOON</div>
        
        <h2 class="text-5xl font-extrabold neon-text mb-4">💎 NFT Memberships</h2>
        <p class="text-lg leading-relaxed opacity-90">
            Become an <span class="font-bold">Elite Troubler</span> by owning a <span class="font-bold text-[#81C14B]">Troubler NFT</span>!  
            Get <span class="font-bold">VIP access</span>, <span class="font-bold">exclusive music</span>, and <span class="font-bold">early drops</span>.  
            Your NFT is your <span class="font-bold">key to the future of music</span>! 🚀
        </p>

        <!-- Countdown Timer -->
        <div class="mt-8 mb-10">
            <h3 class="text-2xl font-bold mb-4">Launching In:</h3>
            <div class="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div class="bg-black/60 border border-[#81C14B] rounded-lg p-4">
                    <div class="text-4xl font-bold text-[#FFD700]">{countdown.days}</div>
                    <div class="text-sm uppercase opacity-80">Days</div>
                </div>
                <div class="bg-black/60 border border-[#81C14B] rounded-lg p-4">
                    <div class="text-4xl font-bold text-[#FFD700]">{countdown.hours}</div>
                    <div class="text-sm uppercase opacity-80">Hours</div>
                </div>
                <div class="bg-black/60 border border-[#81C14B] rounded-lg p-4">
                    <div class="text-4xl font-bold text-[#FFD700]">{countdown.minutes}</div>
                    <div class="text-sm uppercase opacity-80">Minutes</div>
                </div>
                <div class="bg-black/60 border border-[#81C14B] rounded-lg p-4">
                    <div class="text-4xl font-bold text-[#FFD700]">{countdown.seconds}</div>
                    <div class="text-sm uppercase opacity-80">Seconds</div>
                </div>
            </div>
        </div>

        <!-- Membership Benefits -->
        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-lg">
            <div class="flex items-center space-x-3">
                <span class="text-[#81C14B] text-2xl">✔</span>
                <p class="opacity-90">Access to unreleased music & NFT-only drops</p>
            </div>
            <div class="flex items-center space-x-3">
                <span class="text-[#81C14B] text-2xl">✔</span>
                <p class="opacity-90">Private events & VR concerts</p>
            </div>
            <div class="flex items-center space-x-3">
                <span class="text-[#81C14B] text-2xl">✔</span>
                <p class="opacity-90">Exclusive behind-the-scenes content</p>
            </div>
            <div class="flex items-center space-x-3">
                <span class="text-[#81C14B] text-2xl">✔</span>
                <p class="opacity-90">Early access to new music & merch</p>
            </div>
        </div>

        <!-- Get Notified -->
        <div class="mt-12 bg-black/60 border border-[#81C14B] rounded-xl p-8 max-w-3xl mx-auto">
            <h3 class="text-2xl font-bold mb-4">Get Notified When We Launch</h3>
            <p class="mb-6">Be the first to know when our NFTs drop. Don't miss your chance to own exclusive digital assets from TheKenyanTroublers.</p>
            
            {#if showSuccessMessage}
                <div class="success-notification">
                    <div class="success-icon">✓</div>
                    <p>Thank you for your interest! You'll be the first to know when our NFTs launch.</p>
                </div>
            {:else}
                <form on:submit|preventDefault={subscribeToUpdates} class="flex flex-col sm:flex-row gap-4 justify-center">
                    <input 
                        type="email" 
                        bind:value={email}
                        placeholder="Your Email Address" 
                        class="px-4 py-3 rounded-lg bg-white/10 border border-[#81C14B] text-white w-full sm:w-2/3"
                    />
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        class="px-6 py-3 bg-[#81C14B] hover:bg-[#6A9A52] text-black font-bold rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {#if isSubmitting}
                            <div class="loading-spinner"></div>
                        {:else}
                            Notify Me
                        {/if}
                    </button>
                </form>

                {#if subscribeStatus}
                    <p class="text-red-400 mt-2">{subscribeStatus}</p>
                {/if}
            {/if}
        </div>
    </div>
</section>

<style>
    .neon-text {
        text-shadow: 0 0 15px #81C14B, 0 0 25px #81C14B, 0 0 40px #81C14B;
    }

    .coming-soon-badge {
        display: inline-block;
        background: linear-gradient(90deg, #FFD700, #81C14B);
        color: black;
        font-weight: bold;
        padding: 0.5rem 2rem;
        border-radius: 2rem;
        position: relative;
        margin-bottom: 1.5rem;
        transform: rotate(-2deg);
        animation: glow 3s infinite alternate;
        font-size: 1.2rem;
        letter-spacing: 2px;
    }

    @keyframes glow {
        0% { box-shadow: 0 0 5px #FFD700, 0 0 10px #81C14B; }
        100% { box-shadow: 0 0 20px #FFD700, 0 0 30px #81C14B; }
    }

    /* Star background effect */
    .stars, .twinkling {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        display: block;
    }

    .stars {
        background: #000 url(https://i.imgur.com/YKY28eT.png) repeat top center;
        z-index: 0;
    }

    .twinkling {
        background: transparent url(https://i.imgur.com/XYMF4ca.png) repeat top center;
        z-index: 1;
        animation: move-twink-back 200s linear infinite;
    }

    @keyframes move-twink-back {
        from {background-position: 0 0;}
        to {background-position: -10000px 5000px;}
    }

    /* Success notification */
    .success-notification {
        background: rgba(129, 193, 75, 0.2);
        border: 1px solid #81C14B;
        border-radius: 8px;
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        animation: fadeInUp 0.5s ease-out;
    }

    .success-icon {
        background: #81C14B;
        color: black;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 18px;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Loading spinner */
    .loading-spinner {
        width: 20px;
        height: 20px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s linear infinite;
        margin: 0 auto;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
