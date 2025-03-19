<script lang="ts">
    import { onMount } from "svelte";

    let milestones = [
        { year: "2020", event: "Founded with a vision to revolutionize the music industry." },
        { year: "2022", event: "First viral hit, reaching millions globally." },
        { year: "2023", event: "Expanded into NFT music & Web3 technology." },
        { year: "2024", event: "Building the future of music with AI & blockchain." },
    ];

    let artists = [
        { name: "OsuwoJr", image: "/OsuwoJr.png" },
        { name: "theKenyanTroublers", image: "/10.jpeg" },
    ];

    let currentArtistIndex = 0;

    // Rotate artists every few seconds
    onMount(() => {
        setInterval(() => {
            currentArtistIndex = (currentArtistIndex + 1) % artists.length;
        }, 5000);
    });
</script>

<section class="about-section">
    <!-- Animated Background -->
    <div class="background-overlay"></div>

    <!-- Who We Are -->
    <div class="text-center fade-in">
        <h2 class="glow-text">Who We Are</h2>
        <p class="description">
            We are <span class="highlight">TheKenyanTroublers</span>, a cutting-edge music label revolutionizing the industry with **powerful sounds, unmatched artistry, and futuristic innovation**.  
        </p>
    </div>

    <!-- Rotating Featured Artist -->
    <div class="artist-highlight fade-in">
        <h3 class="glow-text">Featured Artist</h3>
        <div class="artist-card">
            <img src={artists[currentArtistIndex].image} alt={artists[currentArtistIndex].name} class="artist-image" />
            <h4>{artists[currentArtistIndex].name}</h4>
        </div>
    </div>

    <!-- Timeline -->
    <div class="timeline fade-in">
        <h3 class="glow-text">Our Journey</h3>
        <div class="timeline-container">
            {#each milestones as milestone}
                <div class="timeline-item">
                    <span class="timeline-year">{milestone.year}</span>
                    <p>{milestone.event}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
/* About Page Styling */
.about-section {
    position: relative;
    padding: 80px 20px;
    text-align: center;
    color: white;
    overflow: hidden;
}

/* Animated Background */
.background-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, rgba(0,0,0,0.8) 0%, black 100%);
    z-index: -1;
}

/* Text Styling */
.glow-text {
    font-size: 3rem;
    font-weight: bold;
    color: #81C14B;
    text-shadow: 0 0 15px #81C14B;
}

.description {
    font-size: 1.5rem;
    max-width: 800px;
    margin: 20px auto;
    opacity: 0.9;
}

.highlight {
    color: #81C14B;
    font-weight: bold;
}

/* Featured Artist */
.artist-highlight {
    margin-top: 50px;
}

.artist-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 15px;
    display: inline-block;
    text-align: center;
    backdrop-filter: blur(5px);
    transition: 0.5s;
}

.artist-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px #81C14B;
}

.artist-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

/* Timeline */
.timeline {
    margin-top: 60px;
}

.timeline-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.timeline-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 15px;
    width: 80%;
    max-width: 600px;
    border-radius: 10px;
    text-align: center;
    backdrop-filter: blur(5px);
    transition: 0.3s;
}

.timeline-item:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 15px #81C14B;
}

.timeline-year {
    font-size: 1.8rem;
    font-weight: bold;
    color: #81C14B;
}

/* Fade-in Animation */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1.5s forwards;
}

@keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0px); }
}
</style>
