<script lang="ts">
    import { browser } from '$app/environment';
    
    let plans = [
        { 
            name: "Fan Plan", 
            price: "KES 650/month", 
            benefits: ["Early Music Access", "Exclusive Content", "Private Forum"] 
        },
        { 
            name: "Artist Plan", 
            price: "KES 1,950/month", 
            benefits: ["Sell NFTs", "Feature on Blog", "Recording Priority"] 
        },
        { 
            name: "VIP Plan", 
            price: "KES 6,500/month", 
            benefits: ["Direct Artist Access", "Behind-the-Scenes", "Custom Beats"] 
        }
    ];

    // WhatsApp functionality
    const whatsappNumber = "254790932575"; // Correct WhatsApp number
    
    function openWhatsAppBooking(plan) {
        if (!browser) return;
        const message = `Hi, I'm interested in the ${plan.name} subscription (${plan.price}). Please provide more details!`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    }
</script>

<!-- Subscription Section -->
<section id="join" class="relative py-20 text-white text-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#81C14B] via-[#6A9A52] to-[#3F6B3E] opacity-95"></div>
    
    <!-- Floating Glow Effect -->
    <div class="absolute inset-0 flex justify-center items-center">
        <div class="w-[150%] h-[150%] bg-gradient-radial from-[#FFD700]/30 via-transparent to-transparent blur-3xl opacity-40 animate-pulse-slow"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 px-6">
        <h2 class="text-5xl font-extrabold neon-text">💳 Join The Troublers</h2>
        <p class="text-xl mt-4 opacity-90 max-w-2xl mx-auto">
            <span class="font-bold">Unlock exclusive access, music privileges, and premium artist benefits.</span>  
            <span class="font-bold">Choose your plan and be part of the revolution!</span> 🚀🔥
        </p>

        <!-- Subscription Cards -->
        <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {#each plans as plan}
                <div class="relative bg-black/80 border border-[#81C14B] rounded-xl shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-xl">
                    <div class="absolute -top-3 -right-3 bg-[#FFD700] text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                        🔥 Limited Offer
                    </div>
                    <h3 class="text-3xl font-bold">{plan.name}</h3>
                    <p class="text-xl text-[#FFD700] font-semibold mt-2">{plan.price}</p>
                    <ul class="mt-6 space-y-3">
                        {#each plan.benefits as benefit}
                            <li class="text-lg">✅ {benefit}</li>
                        {/each}
                    </ul>
                    <button 
                        on:click={() => openWhatsAppBooking(plan)}
                        class="mt-6 w-full px-6 py-3 text-lg font-bold bg-[#81C14B] hover:bg-[#6A9A52] text-black rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Book via WhatsApp
                    </button>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
@keyframes pulse-slow {
    0% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.1); opacity: 0.8; }
    100% { transform: scale(1); opacity: 0.6; }
}

.neon-text {
    text-shadow: 0 0 15px #FFD700, 0 0 30px #81C14B, 0 0 50px #FFD700;
}

@keyframes pulse {
    0% { opacity: 0.7; }
    50% { opacity: 1; }
    100% { opacity: 0.7; }
}
</style>
