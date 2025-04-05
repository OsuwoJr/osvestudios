<section class="relative text-white text-center py-32 overflow-hidden">
    <!-- Background Animation -->
    <div class="absolute inset-0 bg-black">
        <div class="absolute inset-0 bg-gradient-to-r from-black via-[#81C14B]/30 to-black opacity-80"></div>
        <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-[200%] h-[200%] bg-gradient-radial from-[#81C14B]/40 via-transparent to-transparent animate-pulse-slow"></div>
        </div>
    </div>

    <!-- Animated Floating Elements -->
    <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-72 h-72 rounded-full bg-[#81C14B]/20 blur-3xl animate-pulse"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 px-6">
        <h1 class="text-6xl font-extrabold tracking-wide neon-text">
            🚀 Welcome to <span class="text-[#81C14B]">The Troublers</span>
        </h1>
        <p class="text-2xl mt-6 max-w-3xl mx-auto opacity-90">
            The <span class="font-bold">ultimate</span> movement where <span class="font-bold">artists, visionaries, and game-changers</span> unite.  
            <span class="font-bold">We’re not just a community—we’re a revolution.</span>
        </p>

        <!-- Call to Action -->
        <div class="mt-8">
            <a href="#join" 
               class="inline-block px-8 py-4 text-lg font-bold text-black bg-[#81C14B] rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                🚀 Join the Future Now
            </a>
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
    text-shadow: 0 0 15px #81C14B, 0 0 30px #81C14B, 0 0 50px #81C14B;
}
</style>
