<script lang="ts">
    import '../app.css';
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import Header from "../components/Header.svelte";
    import BackgroundSVGs from "../components/BackgroundSVGs.svelte";
    import { onMount } from "svelte";

    let { children } = $props();

    // Font Awesome icons for the floating effect
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

    // Randomized floating elements
    // Reactive particles array with explicit typing
    import { derived } from "svelte/store";

    type Particle = {
        icon: string;
        x: number;
        y: number;
        size: number;
        delay: number;
        duration: number;
        rotationSpeed: number;
    };

    import { readable, type Readable } from "svelte/store";

    const particles: Readable<Particle[]> = readable(
        Array.from({ length: 20 }, () => ({
            icon: icons[Math.floor(Math.random() * icons.length)],
            x: Math.random() * 100, // X position (vw)
            y: Math.random() * 100, // Y position (vh)
            size: Math.random() * 30 + 20, // Size in px
            delay: Math.random() * 5, // Animation delay
            duration: Math.random() * 5 + 5, // Animation speed
            rotationSpeed: Math.random() * 4 + 2 // Rotation speed
        }))
    );
</script>

<main class="bg-[#000000] flex flex-col item-center text-white relative z-[1]" data-sveltekit-preload-data="hover">
    <!-- Background SVGs -->
    <BackgroundSVGs />

    <!-- Header (Floating Background Does NOT Apply Here) -->
    <Header y={0} />

    <!-- Floating Icons -->
    <div class="floating-icons">
        {#each $particles as particle (particle as Particle)}
            <i class="{particle.icon} floating"
                style="
                    left: {particle.x}vw;
                    top: {particle.y}vh;
                    font-size: {particle.size}px;
                    animation-duration: {particle.duration}s;
                    animation-delay: {particle.delay}s;
                    --rotation-speed: {particle.rotationSpeed}s;">
            </i>
        {/each}
    </div>

    <!-- Page Content (Children Pages Render Here) -->
    <div class="relative flex flex-col item-center justify-center max-w-[1400px] mx-auto px-4 w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl min-h-screen">
        {@render children()}
    </div>
</main>

<style>
/* Floating Icons */
.floating-icons {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1; /* Ensures it stays in the background */
    overflow: hidden;
}

/* Floating Animation */
.floating {
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
