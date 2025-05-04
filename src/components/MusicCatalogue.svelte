<script lang="ts">
    import { fade, fly } from "svelte/transition";
    let spotifyAlbum = "https://open.spotify.com/embed/album/3s7ra6pxhU6qF8fYw8sr5l?utm_source=generator&theme=0";
    let youtubePlaylist = "https://www.youtube.com/embed/videoseries?si=wHocVJh39SI4Hp4I&amp;list=PLNgxlQUYG2x_zd7LqxWMfCRUcLWHrQKJi";
</script>

<section class="music-explorer py-16 px-4">
    <div class="max-w-6xl mx-auto" in:fade={{ duration: 500, delay: 200 }}>
        <h2 class="section-title text-center mb-12">
            <i class="fas fa-headphones-alt mr-2"></i> 
            <span class="highlight">Discover</span> Our Music
        </h2>

        <div class="iframe-container">
            <!-- Spotify Embed -->
            <div class="player-wrapper" in:fly={{ y: 20, duration: 600, delay: 200 }}>
                <h3 class="text-xl mb-4 text-center">
                    <i class="fab fa-spotify text-[#1ED760] mr-2"></i> Listen on Spotify
                </h3>
                <iframe 
                    class="spotify-player"
                    src={spotifyAlbum} 
                    frameborder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Spotify Album Player">
                </iframe>
            </div>

            <div class="player-wrapper" in:fly={{ y: 20, duration: 600, delay: 400 }}>
                <h3 class="text-xl mb-4 text-center">
                    <i class="fab fa-youtube text-[#FF0000] mr-2"></i> Watch on YouTube
                </h3>
                <iframe 
                    class="youtube-player"
                    src={youtubePlaylist} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    title="YouTube Playlist Player">
                </iframe>
            </div>
        </div>

        <div class="mt-12 text-center">
            <a href="https://linktr.ee/thekenyantroublers" target="_blank" rel="noopener noreferrer" class="inline-block bg-[#81C14B] px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all hover:bg-[#6A9A52] hover:scale-105">
                <i class="fas fa-external-link-alt mr-2"></i> More Platforms
            </a>
        </div>
    </div>
</section>

<style>
/* Section Styling */
.music-explorer {
    background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,1));
    color: white;
}

.highlight {
    color: #81C14B;
    background: linear-gradient(90deg, #81C14B, #6A9A52);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(129, 193, 75, 0.9);
}

.section-title {
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(129, 193, 75, 0.7);
}

/* Player Containers */
.iframe-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 20px;
}

.player-wrapper {
    width: 100%;
    max-width: 800px;
    background: rgba(20, 20, 20, 0.7);
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(129, 193, 75, 0.3);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(129, 193, 75, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.player-wrapper:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 40px rgba(129, 193, 75, 0.4);
}

.spotify-player, .youtube-player {
    width: 100%;
    border-radius: 12px;
}

.spotify-player {
    height: 352px;
}

.youtube-player {
    height: 315px;
}

/* Responsive for Mobile */
@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }
    
    .spotify-player, .youtube-player {
        max-width: 100%;
    }
}
</style>
