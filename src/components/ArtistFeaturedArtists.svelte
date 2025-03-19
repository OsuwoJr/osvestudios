<script lang="ts">
    export let artists = [
        { name: "OsuwoJr", genre: "Alternative-Indie", image: "/OsuwoJr.png", link: "/artists/OsuwoJr" },
        { name: "theKenyanTroublers", genre: "Versatile", image: "/10.jpeg", link: "/artists/10" }
    ];
</script>

<section id="featured-artists" class="artist-section">
    <h2 class="section-title">🎤 Meet Our Artists</h2>
    <p class="section-subtitle">The rising stars redefining music under <b>theKenyanTroublers</b>.</p>

    <div class="grid">
        {#each artists as artist}
            <a href={artist.link} class="artist-card">
                <div class="artist-image-container">
                    <img src={artist.image} alt={artist.name} class="artist-image"/>
                </div>
                <div class="artist-info">
                    <h3>{artist.name}</h3>
                    <p>{artist.genre}</p>
                </div>
            </a>
        {/each}
    </div>
</section>

<style>
/* Section Styling */
.artist-section {
    text-align: center;
    padding: 60px 20px;
    color: white;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6));
    border-top: 2px solid #81C14B;
    border-bottom: 2px solid #81C14B;
}

/* Title & Subtitle */
.section-title {
    font-size: 2.8rem;
    font-weight: 900;
    text-transform: uppercase;
    background: linear-gradient(90deg, #81C14B, #FFD700);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
}

.section-subtitle {
    font-size: 1.2rem;
    opacity: 0.8;
    margin-bottom: 30px;
}

/* Grid Styling */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    padding: 0 20px;
    max-width: 1200px;
    margin: auto;
}

/* Artist Card */
.artist-card {
    background: rgba(17, 17, 17, 0.9);
    border-radius: 12px;
    overflow: hidden;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
    border: 2px solid transparent;
    cursor: pointer;
}

.artist-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 0px 15px #81C14B;
    border-color: #81C14B;
}

/* Artist Image */
.artist-image-container {
    width: 100%;
    height: 250px;
    overflow: hidden;
}

.artist-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
}

.artist-card:hover .artist-image {
    transform: scale(1.1);
}

/* Artist Info */
.artist-info {
    padding: 20px;
}

.artist-info h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #81C14B;
}

.artist-info p {
    font-size: 1.2rem;
    opacity: 0.8;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .section-title {
        font-size: 2.2rem;
    }
    
    .artist-info h3 {
        font-size: 1.5rem;
    }

    .artist-info p {
        font-size: 1rem;
    }
}
</style>
