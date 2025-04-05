<script lang="ts">
    let plans = [
        { 
            name: "Fan Plan", 
            price: "$5/month", 
            benefits: ["Early Music Access", "Exclusive Content", "Private Forum"] 
        },
        { 
            name: "Artist Plan", 
            price: "$15/month", 
            benefits: ["Sell NFTs", "Feature on Blog", "Recording Priority"] 
        },
        { 
            name: "VIP Plan", 
            price: "$50/month", 
            benefits: ["Direct Artist Access", "Behind-the-Scenes", "Custom Beats"] 
        }
    ];
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
                    <h3 class="text-3xl font-bold">{plan.name}</h3>
                    <p class="text-xl text-[#FFD700] font-semibold mt-2">{plan.price}</p>
                    <ul class="mt-6 space-y-3">
                        {#each plan.benefits as benefit}
                            <li class="text-lg">✅ {benefit}</li>
                        {/each}
                    </ul>
                    <button class="mt-6 w-full px-6 py-3 text-lg font-bold bg-[#81C14B] hover:bg-[#6A9A52] text-black rounded-full shadow-lg transition-all transform hover:scale-105">
                        Subscribe Now
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
</style>
