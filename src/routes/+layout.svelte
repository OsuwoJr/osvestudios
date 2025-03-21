<script lang="ts">
    import '../app.css';
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import Header from "../components/Header.svelte";
    import BackgroundSVGs from "../components/BackgroundSVGs.svelte";
    import { readable, type Readable } from "svelte/store";

    let { children } = $props();

    // Font Awesome music icons
    let icons = [
        "fa-solid fa-microphone-alt",
        "fa-solid fa-music",
        "fa-solid fa-guitar",
        "fa-solid fa-drum",
        "fa-solid fa-headphones",
        "fa-solid fa-compact-disc",
        "fa-solid fa-play",
        "fa-solid fa-record-vinyl",
        "fa-solid fa-wave-square",
        "fa-solid fa-volume-up",
        "fa-solid fa-treble-clef",
        "fa-solid fa-violin",
        "fa-solid fa-trumpet"
    ];

    // SVG Rhythm Notes & Accents (SVG Paths)
    let rhythmSVGs = [
        '<ellipse cx="20" cy="40" rx="12" ry="8" stroke="white" stroke-width="3" fill="white"/>', // Whole note
        '<ellipse cx="20" cy="40" rx="12" ry="8" stroke="white" stroke-width="3" fill="white"/><line x1="30" y1="10" x2="30" y2="40" stroke="white" stroke-width="3"/>', // Half note
        '<ellipse cx="20" cy="40" rx="12" ry="8" stroke="white" stroke-width="3" fill="white"/><line x1="30" y1="10" x2="30" y2="40" stroke="white" stroke-width="3"/>', // Quarter note
        '<ellipse cx="20" cy="40" rx="12" ry="8" stroke="white" stroke-width="3" fill="white"/><line x1="30" y1="10" x2="30" y2="40" stroke="white" stroke-width="3"/><path d="M30 10 C40 5, 50 15, 30 20" stroke="white" stroke-width="3" fill="none"/>', // Eighth note
        '<polygon points="10,30 50,10 50,50" fill="white"/>', // Standard Accent
        '<polygon points="30,10 10,40 50,40" fill="white"/>', // Marcato
        '<circle cx="30" cy="30" r="5" fill="white"/>', // Staccato
        '<line x1="10" y1="30" x2="50" y2="30" stroke="white" stroke-width="5"/>', // Tenuto
        '<text x="10" y="40" font-size="30" font-family="Arial" fill="white">sfz</text>' // Sforzando
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

    const particles: Readable<Particle[]> = readable(
    Array.from({ length: 40 }, (_, i) => ({
        icon: i % 2 === 0 ? icons[Math.floor(Math.random() * icons.length)] : undefined,
        svg: i % 2 !== 0 ? rhythmSVGs[Math.floor(Math.random() * rhythmSVGs.length)] : undefined,
        x: Math.random() * 100, // X position (vw) - scattered
        y: Math.random() * 100, // Y position (vh) - scattered
        size: Math.random() * 35 + 15, // More variation in size (15px - 50px)
        delay: Math.random() * 3, // Animation delay (faster effect)
        duration: Math.random() * 4 + 3, // Faster floating
        rotationSpeed: Math.random() * 6 + 1 // Randomized rotation
    }))
);

</script>

<main class="bg-[#000000] flex flex-col item-center text-white relative z-[1]" data-sveltekit-preload-data="hover">
    <!-- Background SVGs -->
    <BackgroundSVGs />

    <!-- Header (Floating Background Does NOT Apply Here) -->
    <Header y={0} />

    <!-- Floating Icons & SVGs -->
    <div class="floating-icons">
        {#each $particles as particle (particle as Particle)}
            {#if particle.icon}
                <i class="{particle.icon} floating"
                    style="
                        left: {particle.x}vw;
                        top: {particle.y}vh;
                        font-size: {particle.size}px;
                        animation-duration: {particle.duration}s;
                        animation-delay: {particle.delay}s;
                        --rotation-speed: {particle.rotationSpeed}s;">
                </i>
            {:else if particle.svg}
                <svg class="floating-svg"
                    style="
                        left: {particle.x}vw;
                        top: {particle.y}vh;
                        width: {particle.size}px;
                        height: {particle.size}px;
                        animation-duration: {particle.duration}s;
                        animation-delay: {particle.delay}s;
                        --rotation-speed: {particle.rotationSpeed}s;"
                    viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                    {@html particle.svg}
                </svg>
            {/if}
        {/each}
    </div>

    <!-- Page Content (Children Pages Render Here) -->
    <div class="relative flex flex-col item-center justify-center max-w-[1400px] mx-auto px-4 w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl min-h-screen">
        {@render children()}
    </div>
</main>

<style>
/* Floating Icons & SVGs */
.floating-icons {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1; /* Ensures it stays in the background */
    overflow: hidden;
}

/* Floating Animation */
.floating, .floating-svg {
    position: absolute;
    color: rgba(129, 193, 75, 0.7); /* Green glow */
    text-shadow: 0 0 15px rgba(129, 193, 75, 0.8);
    opacity: 0.6;
    animation: float 8s infinite ease-in-out alternate, rotate var(--rotation-speed) infinite linear;
}

/* Floating Effect */
@keyframes float {
    0% { transform: translateY(0px) scale(1); opacity: 0.6; }
    50% { transform: translateY(-25px) scale(1.05); opacity: 1; }
    100% { transform: translateY(0px) scale(1); opacity: 0.6; }
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
