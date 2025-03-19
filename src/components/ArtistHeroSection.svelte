<script lang="ts">
    export let title = "TheKenyanTroublers Artists";
    export let subtitle = "Discover the most talented artists signed under TheKenyanTroublers.";
</script>

<section class="hero">
    <video autoplay muted loop class="background-video">
        <source src="/hero-bg.mp4" type="video/mp4" />
    </video>
    <div class="overlay">
        <h1 class="title">{title}</h1>
        <p class="subtitle">{subtitle}</p>
        <div class="buttons">
            <a href="#featured-artists" class="cta-button">🚀 Explore Artists</a>
            <a href="#apply" class="cta-button secondary">🌟 Join Us</a>
        </div>
    </div>
</section>

<style>
.hero {
    position: relative;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    overflow: hidden;
}

/* Background Video Styling */
.background-video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(50%);
}

/* Overlay Styling */
.overlay {
    position: relative;
    z-index: 2;
    background: rgba(0, 0, 0, 0.6); /* Dark overlay */
    padding: 2rem;
    border-radius: 12px;
    backdrop-filter: blur(5px);
    max-width: 80%;
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
        font-size: 2.5rem;
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
