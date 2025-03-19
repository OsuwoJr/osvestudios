<script lang="ts">
    import { onMount } from "svelte";
</script>

<section class="hero">
    <!-- Hero Content -->
    <div class="content">
        <h1>Welcome to <span class="highlight">theKenyanTroublers</span></h1>
        <p>The Global Hitmakers.</p>
        <a href="https://open.spotify.com/artist/6F05EgCahYw9U2th0SZVtP?si=OB0niz1DSfCSOdflfSQT1Q" 
          class="cta-button"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Listen to TheKenyanTroublers on Spotify">
   🎵 Explore Music
</a>

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
    color: white;
    background: transparent; /* Makes it fully transparent */
}

/* Main Content */
.content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 20px;
    backdrop-filter: blur(10px); /* Adds slight blur for readability */
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.3); /* Transparent black for better contrast */
}

/* Title & Button */
h1 {
    font-size: 3rem;
    font-weight: bold;
}

.highlight {
    color: #81C14B;
    
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
