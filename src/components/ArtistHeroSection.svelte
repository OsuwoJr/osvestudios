<script lang="ts">
    export let title = "Meet the Future of Music – TheKenyanTroublers Artists";
    export let subtitle = "Discover the most talented artists signed under TheKenyanTroublers.";
</script>

<section class="hero">
    <video autoplay muted loop class="background-video">
        <source src="/hero-bg.mp4" type="video/mp4" />
    </video>
    <div class="overlay">
        <h1 class="title">{title}</h1>
        <p class="subtitle">{subtitle}</p>
        <a href="#featured-artists" class="cta-button">Explore Artists</a>
        <a href="#apply" class="cta-button secondary">Join Us</a>
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
}

.background-video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
}

.overlay {
    position: relative;
    z-index: 2;
}

.title {
    font-size: 3rem;
    font-weight: bold;
}

.cta-button {
    background: #81C14B;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 10px;
    text-decoration: none;
    transition: 0.3s;
}

.cta-button:hover {
    background: #6A9A52;
}
</style>
