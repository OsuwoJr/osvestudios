<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";

    let suggestedTrack = { title: "Kisiwa Cha Upendo", artist: "theKenyanTroublers" };
    let isLoading = false;
    let audio: HTMLAudioElement;
    let isPlaying = false;

    // Initialize audio player
    onMount(() => {
        if (typeof window !== 'undefined') {
            audio = new Audio("/music/20.Kisiwa Cha Upendo.wav");
            audio.volume = 0.8; // Set default volume
        }
    });

    // Play Music Function
    function playMusic() {
        if (audio) {
            if (!isPlaying) {
                audio.play().catch(err => console.error("Error playing audio:", err));
                isPlaying = true;
            } else {
                audio.pause();
                isPlaying = false;
            }
        }
    }

    // Scroll down function
    function scrollToContent() {
        const contentElement = document.getElementById('catalog');
        if (contentElement) {
            contentElement.scrollIntoView({behavior: 'smooth'});
        }
    }
</script>

<section class="music-section relative flex items-center justify-center min-h-[80vh] sm:h-screen text-white px-4 overflow-hidden">
    <!-- Glowing Animated Background -->
    <div class="animated-bg absolute inset-0"></div>
    
    <!-- Transparent overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10 pointer-events-none"></div>
    
    <!-- Main Content -->
    <div class="relative z-20 text-center bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg max-w-[95%] sm:max-w-2xl mx-auto" in:fly={{ y: 20, duration: 800 }}>
        <h1 class="title text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Our <span class="highlight">Music</span> Collection
        </h1>
        <p class="subtitle text-lg md:text-2xl mt-4 text-gray-200">Experience our unique sound and vibrant energy.</p>

        <!-- AI Music Suggestion -->
        <div class="suggestion mt-8 p-4 bg-black/60 rounded-xl" transition:fade>
            <p class="track-info text-xl">
                🎧 Suggested Track: 
                <b class="text-[#81C14B]">{suggestedTrack.title}</b> by {suggestedTrack.artist}
            </p>

            <!-- Listen Now Button -->
            <button class="listen-btn mt-4 bg-[#81C14B] px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all hover:bg-[#6A9A52] hover:scale-105 flex items-center justify-center mx-auto" on:click={playMusic}>
                <i class="fas {isPlaying ? 'fa-pause' : 'fa-play'} mr-2"></i> {isPlaying ? 'Pause' : 'Listen Now'}
            </button>
        </div>
        
        <!-- Social Media Quick Links -->
        <div class="mt-8 flex justify-center space-x-4">
            <a href="https://www.instagram.com/thekenyantroublers/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-2xl hover:text-[#E1306C] transition-all hover:scale-110">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://open.spotify.com/artist/6F05EgCahYw9U2th0SZVtP" target="_blank" rel="noopener noreferrer" aria-label="Spotify" class="text-2xl hover:text-[#1ED760] transition-all hover:scale-110">
                <i class="fab fa-spotify"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCs7hbuqCcYbPFUZKPiG0ufw" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="text-2xl hover:text-[#FF0000] transition-all hover:scale-110">
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

<style>
/* Futuristic Glowing Background */
.music-section {
    position: relative;
    overflow: hidden;
}

.animated-bg {
    background: radial-gradient(circle at center, rgba(129, 193, 75, 0.3), black 80%);
    animation: pulse 5s infinite alternate;
}

@keyframes pulse {
    from {
        opacity: 0.7;
        transform: scale(1);
    }
    to {
        opacity: 1;
        transform: scale(1.1);
    }
}

/* Text Styles */
.highlight {
    color: #81C14B;
    background: linear-gradient(90deg, #81C14B, #6A9A52);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(129, 193, 75, 0.9);
}

.title {
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

/* Animation for scroll indicator */
@keyframes bounce {
    0%, 100% { transform: translateY(0) translateX(-50%); }
    50% { transform: translateY(-10px) translateX(-50%); }
}

.animate-bounce {
    animation: bounce 2s infinite;
}
</style>
