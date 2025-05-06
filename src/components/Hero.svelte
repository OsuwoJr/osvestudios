<script lang="ts">
    import { onMount } from "svelte";
    
    // Clean and simple scroll handling function
    function scrollToContent() {
        const contentElement = document.getElementById('content-start');
        if (contentElement) {
            contentElement.scrollIntoView({behavior: 'smooth'});
        }
    }
</script>

<section class="hero relative flex items-center justify-center min-h-[80vh] sm:h-screen text-white px-4 overflow-hidden">
    <!-- Transparent overlay to improve text readability without hiding background animations -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10 pointer-events-none"></div>
    
    <!-- Hero Content -->
    <div class="relative z-20 text-center bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg max-w-[95%] sm:max-w-2xl mx-auto">
        <h1 class="font-bold leading-tight tracking-tight break-words">
            <span class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#00BFFF] block">OSVE</span>
            <span class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block">STUDIOS</span>
        </h1>
        <p class="text-lg md:text-2xl mt-4 text-gray-200">Electrifying Sound. Limitless Creativity.</p>
        
        <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" 
               class="inline-block bg-[#00BFFF] px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all hover:bg-[#0099CC] hover:scale-105 flex items-center justify-center"          
               rel="noopener noreferrer"
               aria-label="Book a session at OSVE Studios">
                <i class="fas fa-calendar-alt mr-2"></i> Book a Session
            </a>
            <a href="/projects" 
               class="inline-block bg-black/60 border border-[#00BFFF] backdrop-blur-md px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all hover:bg-[#00BFFF]/20 hover:scale-105 flex items-center justify-center"          
               rel="noopener noreferrer"
               aria-label="Explore our portfolio">
                <i class="fas fa-music mr-2"></i> Our Work
            </a>
        </div>
        
        <!-- Social Media Quick Links -->
        <div class="mt-8 flex justify-center space-x-4">
            <a href="https://www.instagram.com/osvestudios/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-2xl hover:text-[#E1306C] transition-all hover:scale-110">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://open.spotify.com/user/osvestudios" target="_blank" rel="noopener noreferrer" aria-label="Spotify" class="text-2xl hover:text-[#1ED760] transition-all hover:scale-110">
                <i class="fab fa-spotify"></i>
            </a>
            <a href="https://www.youtube.com/channel/osvestudios" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="text-2xl hover:text-[#FF0000] transition-all hover:scale-110">
                <i class="fab fa-youtube"></i>
            </a>
        </div>
    </div>
    
    <!-- Scroll down indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden sm:block">
        <button 
            on:click={scrollToContent}
            class="text-white opacity-80 hover:opacity-100 transition-opacity"
            aria-label="Scroll down to content"
        >
            <i class="fas fa-chevron-down text-2xl"></i>
        </button>
    </div>
</section>

<!-- This empty div serves as a scroll target -->
<div id="content-start" class="h-0 w-full"></div>

<style>
    /* Allow background to be completely transparent */
    .hero {
        background-color: transparent;
    }
    
    /* Ensure text is readable */
    h1 {
        text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    }
    
    @keyframes bounce {
        0%, 100% { transform: translateY(0) translateX(-50%); }
        50% { transform: translateY(-10px) translateX(-50%); }
    }
    
    .animate-bounce {
        animation: bounce 2s infinite;
    }
</style>
