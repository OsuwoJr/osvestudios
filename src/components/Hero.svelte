<script lang="ts">
    import { onMount } from "svelte";

    // Font Awesome icons (with "fa-solid" prefix)
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

    // Reactive floating particles
    let particles = [];

    $: particles = Array.from({ length: 15 }, () => ({
        icon: icons[Math.floor(Math.random() * icons.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 20,
        delay: Math.random() * 5,
        duration: Math.random() * 5 + 5
    }));
</script>

<section class="hero">
    <!-- Floating Font Awesome Music Icons -->
    <div class="floating-icons">
        {#each particles as particle}
            <i class="{particle.icon} floating" 
                style="
                    left: {particle.x}vw; 
                    top: {particle.y}vh; 
                    font-size: {particle.size}px; 
                    animation-duration: {particle.duration}s;
                    animation-delay: {particle.delay}s;">
            </i>
        {/each}
    </div>

    <!-- Hero Content -->
    <div class="content">
        <h1>Welcome to <span class="highlight">theKenyanTroublers</span></h1>
        <p>The Global Hitmakers.</p>
        <a href="https://open.spotify.com/artist/6F05EgCahYw9U2th0SZVtP?si=OB0niz1DSfCSOdflfSQT1Q" class="cta-button">Explore Music</a>
    </div>
</section>

<style>
/* HERO SECTION */
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    background: linear-gradient(45deg, #0a0a0a, #1c1c1c, #000000);
    color: white;
}

/* Floating Icons */
.floating-icons {
    position: absolute;
    width: 100%;
    height: 100%;
}

.floating {
    position: absolute;
    color: rgba(129, 193, 75, 0.7); /* Green glow */
    animation: float 8s infinite ease-in-out alternate;
    opacity: 0.5;
    text-shadow: 0 0 10px rgba(129, 193, 75, 0.8);
}

/* Floating Animation */
@keyframes float {
    0% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
    50% { transform: translateY(-20px) rotate(10deg); opacity: 1; }
    100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
}

/* Main Content */
.content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 20px;
    backdrop-filter: blur(5px);
    border-radius: 10px;
}

/* Title & Button */
h1 {
    font-size: 3rem;
    font-weight: bold;
}

.highlight {
    color: #81C14B;
    text-shadow: 0 0 10px #81C14B;
}

p {
    font-size: 1.5rem;
    margin-top: 10px;
}

.cta-button {
    display: inline-block;
    background: #81C14B;
    padding: 15px 30px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 1.2rem;
    transition: 0.3s;
    margin-top: 20px;
    box-shadow: 0 0 10px #81C14B;
}

.cta-button:hover {
    background: #6A9A52;
    box-shadow: 0 0 20px #6A9A52;
}
</style>
