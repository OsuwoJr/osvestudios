<script lang="ts">
    export let title = "TheKenyanTroublers Artists";
    export let subtitle = "Discover the most talented artists signed under TheKenyanTroublers.";
</script>

<section class="hero">   
    <!-- Floating Music Particles -->
    <div class="floating-icons">
        {#each Array(50) as _, i}
            <i class="fas fa-music floating" style="
                left: {Math.random() * 100}vw; 
                top: {Math.random() * 100}vh; 
                animation-duration: {Math.random() * 8 + 5}s;
                font-size: {Math.random() * 25 + 15}px;">
            </i>
        {/each}
    </div>

    <!-- Hero Content -->
    <div class="content">
        <h1 class="title">{title}</h1>
        <p class="subtitle">{subtitle}</p>
        <div class="buttons">
            <a href="#featured-artists" class="cta-button">🚀 Explore Artists</a>
            <a href="#ArtistApplication" class="cta-button secondary">🌟 Join Us</a>
        </div>
    </div>
</section>

<style>
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    color: white;
}

/* Floating Music Particles */
.floating-icons {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.floating {
    position: absolute;
    color: rgba(129, 193, 75, 0.5);
    animation: float 8s infinite ease-in-out alternate;
    text-shadow: 0 0 10px rgba(129, 193, 75, 0.8);
}

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
    backdrop-filter: blur(2px); /* Adds slight blur for readability */
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.027); /* Transparent black for better contrast */
}

/* Title Styling */
.title {
    font-size: 3.5rem;
    font-weight: 900;
    text-transform: uppercase;
    background: linear-gradient(90deg, #81C14B, #FFD700);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Subtitle Styling */
.subtitle {
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.8;
    margin-bottom: 20px;
}

/* Button Container */
.buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

/* Button Styling */
.cta-button {
    background: #81C14B;
    padding: 12px 24px;
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
}

/* Button Hover Effect */
.cta-button:hover {
    background: #6A9A52;
    box-shadow: 0px 0px 15px #81C14B;
}

/* Secondary Button Styling */
.cta-button.secondary {
    background: transparent;
    border: 2px solid #81C14B;
    color: #81C14B;
}

.cta-button.secondary:hover {
    background: #81C14B;
    color: black;
    box-shadow: 0px 0px 15px #81C14B;
}

/* Responsive Design */
@media (max-width: 768px) {
    .title {
        font-size: 1.5rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .cta-button {
        font-size: 1rem;
        padding: 10px 20px;
    }
}
</style>
