<script lang="ts">
    import '../app.css';
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import BackgroundSVGs from "../components/BackgroundSVGs.svelte";
    import { readable, type Readable } from "svelte/store";
    import { onMount } from "svelte";
    import { browser } from '$app/environment';

    let { children } = $props();
    let mainElement: HTMLElement;

    let icons = [
        "fa-solid fa-microphone-alt", "fa-solid fa-music", "fa-solid fa-guitar", "fa-solid fa-drum",
        "fa-solid fa-headphones", "fa-solid fa-compact-disc", "fa-solid fa-play", "fa-solid fa-record-vinyl",
        "fa-solid fa-wave-square", "fa-solid fa-volume-up", "fa-solid fa-treble-clef", "fa-solid fa-violin", "fa-solid fa-trumpet"
    ];

    let rhythmSVGs = [
        '<ellipse cx="20" cy="40" rx="12" ry="8" stroke="white" stroke-width="3" fill="white"/>',
        '<ellipse cx="20" cy="40" rx="12" ry="8" stroke="white" stroke-width="3" fill="white"/><line x1="30" y1="10" x2="30" y2="40" stroke="white" stroke-width="3"/>',
        '<ellipse cx="20" cy="40" rx="12" ry="8" stroke="white" stroke-width="3" fill="white"/><line x1="30" y1="10" x2="30" y2="40" stroke="white" stroke-width="3"/>',
        '<ellipse cx="20" cy="40" rx="12" ry="8" stroke="white" stroke-width="3" fill="white"/><line x1="30" y1="10" x2="30" y2="40" stroke="white" stroke-width="3"/><path d="M30 10 C40 5, 50 15, 30 20" stroke="white" stroke-width="3" fill="none"/>',
        '<polygon points="10,30 50,10 50,50" fill="white"/>',
        '<polygon points="30,10 10,40 50,40" fill="white"/>',
        '<circle cx="30" cy="30" r="5" fill="white"/>',
        '<line x1="10" y1="30" x2="50" y2="30" stroke="white" stroke-width="5"/>',
        '<text x="10" y="40" font-size="30" font-family="Arial" fill="white">sfz</text>'
    ];

    type Particle = {
        icon?: string;
        svg?: string;
        x: number;
        y: number;
        size: number;
        delay: number;
        duration: number;
        rotationSpeed: number;
    };

    // Create particles with better distribution across the page
    const particles: Readable<Particle[]> = readable(
        Array.from({ length: 60 }, (_, i) => {
            // Distribute particles throughout the page height (0-300vh)
            const yPosition = Math.random() * 300;
            
            return {
                icon: i % 2 === 0 ? icons[Math.floor(Math.random() * icons.length)] : undefined,
                svg: i % 2 !== 0 ? rhythmSVGs[Math.floor(Math.random() * rhythmSVGs.length)] : undefined,
                x: Math.random() * 100,
                y: yPosition,
                size: Math.random() * 35 + 15,
                delay: Math.random() * 3,
                duration: Math.random() * 4 + 3,
                rotationSpeed: Math.random() * 6 + 1
            };
        })
    );
    
    // Track scroll position for Header
    let scrollY = $state(0);
    
    onMount(() => {
        if (!browser) return; // Skip on server
        
        const handleScroll = () => {
            scrollY = window.scrollY;
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<main bind:this={mainElement} class="bg-[#000000] flex flex-col item-center min-h-screen text-white relative" data-sveltekit-preload-data="hover">
    <BackgroundSVGs />
    <Header y={scrollY} />

    <!-- Floating Particles Container (fixed position to cover entire viewport) -->
    <div class="floating-icons-container">
        {#each $particles as particle (particle)}
            {#if particle.icon}
                <i class="{particle.icon} floating"
                   style="left: {particle.x}vw; top: {particle.y}vh; font-size: {particle.size}px;
                          animation-duration: {particle.duration}s; animation-delay: {particle.delay}s;
                          --rotation-speed: {particle.rotationSpeed}s;"></i>
            {:else if particle.svg}
                <svg class="floating-svg"
                     style="left: {particle.x}vw; top: {particle.y}vh; width: {particle.size}px; height: {particle.size}px;
                            animation-duration: {particle.duration}s; animation-delay: {particle.delay}s;
                            --rotation-speed: {particle.rotationSpeed}s;"
                     viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                    {@html particle.svg}
                </svg>
            {/if}
        {/each}
    </div>

    <!-- Page Content -->
    <div class="relative flex flex-col item-center justify-center max-w-[1400px] mx-auto px-4 w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl min-h-screen z-[1]">
        {@render children()}
    </div>

    <!-- Footer Here -->
    <Footer />
</main>

<style>
/* Fixed background container that spans the entire page */
.floating-icons-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none; /* Allow clicks to pass through to content */
    overflow: visible; /* Allow elements to be visible outside container */
}

.floating, .floating-svg {
    position: fixed;
    color: rgba(0, 191, 255, 0.7);
    text-shadow: 0 0 15px rgba(0, 191, 255, 0.8);
    opacity: 0.6;
    z-index: 0; /* Below content */
    pointer-events: none; /* Allow clicks to pass through */
    animation: float 8s infinite ease-in-out alternate, rotate var(--rotation-speed) infinite linear;
}

@keyframes float {
    0% { transform: translateY(0px) scale(1); opacity: 0.6; }
    50% { transform: translateY(-25px) scale(1.05); opacity: 1; }
    100% { transform: translateY(0px) scale(1); opacity: 0.6; }
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Ensure Footer appears above background animations */
:global(footer) {
    position: relative;
    z-index: 1;
}
</style>
