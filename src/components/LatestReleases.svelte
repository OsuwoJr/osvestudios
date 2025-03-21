<script lang="ts">
    export let latestReleases;

    let currentTrack: { title: string; img: string; preview?: string; spotify?: string } | null = null;
    let isSpotify = false;

    function playPreview(release: { title: string; img: string; preview?: string; spotify?: string }) {
        if (currentTrack === release) {
            currentTrack = null; // Pause if clicking the same track
        } else {
            currentTrack = release;
            isSpotify = release.spotify ? true : false;
        }
    }
</script>

<section class="latest-releases">
    <h2 class="title">Latest <span class="highlight">Releases</span></h2>

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

    <div class="release-grid">
        {#each latestReleases as release}
            <button class="release-card" on:click={() => playPreview(release)} aria-label={`Play preview of ${release.title}`}>
                <div class="album">
                    <img src={release.img} alt={release.title} class="album-art" />
                    <div class="overlay">
                        <p class="play-icon">▶</p>
                    </div>
                </div>
                <p class="release-title">{release.title}</p>
            </button>
        {/each}
    </div>

    <!-- Audio Preview Player (MP3 & Spotify) -->
    {#if currentTrack}
        <div class="audio-player">
            {#if isSpotify}
                <iframe
                    style="border-radius: 12px"
                    src={currentTrack.spotify}
                    width="100%"
                    height="80"
                    frameborder="0"
                    allow="encrypted-media"
                    title="Spotify audio player"
                ></iframe>
            {:else}
                <audio controls autoplay>
                    <source src={currentTrack.preview} type="audio/mpeg" />
                </audio>
            {/if}
        </div>
    {/if}
</section>

<style>
/* Latest Releases Section */
.latest-releases {
    position: relative;
    padding: 60px 20px;
    text-align: center;
    color: white;
    overflow: hidden;
    background: transparent;
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

/* Title */
.title {
    font-size: 3rem;
    font-weight: bold;
    position: relative;
    z-index: 2;
}

/* Highlight Text */
.highlight {
    color: #81C14B;
}

/* Releases Grid */
.release-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    position: relative;
    z-index: 2;
}

/* Album Card with 3D Flip */
.release-card {
    width: 160px;
    height: 160px;
    perspective: 1000px;
    cursor: pointer;
}

.album {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
}

.release-card:hover .album {
    transform: rotateY(180deg);
}

/* Album Front (Image) */
.album-art {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(129, 193, 75, 0.7);
    backface-visibility: hidden;
}

/* Album Back (Play Button) */
.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotateY(180deg);
    backface-visibility: hidden;
}

.play-icon {
    font-size: 2rem;
    color: #81C14B;
    text-shadow: 0 0 10px #81C14B;
    text-align: center;
}

/* Release Title */
.release-title {
    margin-top: 10px;
    font-size: 1.2rem;
    text-shadow: 0 0 10px #81C14B;
}

/* Audio Player */
.audio-player {
    margin-top: 20px;
    position: relative;
    z-index: 2;
}

audio {
    width: 80%;
    max-width: 400px;
    filter: drop-shadow(0 0 10px #81C14B);
}

/* Spotify Embed */
iframe {
    width: 100%;
    max-width: 400px;
    box-shadow: 0 0 10px #81C14B;
    border-radius: 10px;
}

/* Responsive */
@media (max-width: 768px) {
    .release-card {
        width: 140px;
        height: 140px;
    }

    .title {
        font-size: 2.5rem;
    }
}
</style>
