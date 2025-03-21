<script lang="ts">
    import { onMount } from "svelte";

    export let featuredArtists;

    let currentIndex = 0;
    let interval;

    // Start Auto Slider
    onMount(() => {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % featuredArtists.length;
        }, 3000);
    });
</script>

<section class="featured-artists">
    <h2 class="section-title">Featured <span class="highlight" >Artists </span> </h2>

    <!-- Floating Music Particles -->
    <div class="floating-icons">
        {#each Array(50) as _, i}  <!-- ✅ Increased from 10 to 13 -->
            <i class="fas fa-music floating" style="
                left: {Math.random() * 100}vw; 
                top: {Math.random() * 100}vh; 
                animation-duration: {Math.random() * 8 + 5}s;
                font-size: {Math.random() * 25 + 15}px;">
            </i>
        {/each}
    </div>

    <!-- Artist Slider -->
    <div class="slider">
        <div class="slider-track" style="transform: translateX(-{currentIndex * 220}px);">
            {#each featuredArtists as artist}
                <div class="artist-card">
                    <img src={artist.img} alt={artist.name} class="artist-image" />
                    <div class="artist-overlay">
                        <p class="artist-name">{artist.name}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- Manual Slider Controls -->
    <button class="prev-btn" on:click={() => currentIndex = Math.max(currentIndex - 1, 0)}>❮</button>
    <button class="next-btn" on:click={() => currentIndex = Math.min(currentIndex + 1, featuredArtists.length - 1)}>❯</button>
</section>

<style>
/* Featured Artists Section */
.highlight {
    color: #f3f3f3;
    
}

.featured-artists {
    padding: 80px 20px;
    text-align: center;
    overflow:hidden;
    position: relative;
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

/* Title Styling */
.section-title {
    font-size: 2.8rem;
    font-weight: bold;
    color: #81C14B;    
    margin-bottom: 40px;
    position: relative;
    z-index: 2;
}

/* Artist Slider */
.slider {
    width: 100%;
    max-width: 1000px;
    overflow: hidden;
    position: relative;
    margin: auto;
}

.slider-track {
    display: flex;
    transition: transform 0.8s ease-in-out;
    position: relative;
    z-index: 2;
}

/* Artist Cards */
.artist-card {
    width: 200px;
    height: 250px;
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    cursor: pointer;
    margin: 0 10px;
}

.artist-card:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px #81C14B;
}

/* Artist Images */
.artist-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.4s ease;
}

/* Overlay Effect */
.artist-overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: height 0.3s ease;
}

.artist-card:hover .artist-overlay {
    height: 100%;
    background: rgba(129, 193, 75, 0.8);
}

.artist-name {
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.artist-card:hover .artist-name {
    opacity: 1;
}

/* Navigation Buttons */
.prev-btn, .next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 2rem;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    z-index: 3;
}

.prev-btn:hover, .next-btn:hover {
    background: #81C14B;
}

.prev-btn {
    left: 20px;
}

.next-btn {
    right: 20px;
}

/* Responsive */
@media (max-width: 768px) {
    .artist-card {
        width: 140px;
        height: 180px;
    }

    .section-title {
        font-size: 2.2rem;
    }
}
</style>
