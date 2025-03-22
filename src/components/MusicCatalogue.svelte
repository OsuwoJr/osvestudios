<script lang="ts">
    let spotifyAlbum = "https://open.spotify.com/embed/album/3s7ra6pxhU6qF8fYw8sr5l?utm_source=generator&theme=0";
    let youtubePlaylist = "https://www.youtube.com/embed/videoseries?si=wHocVJh39SI4Hp4I&amp;list=PLNgxlQUYG2x_zd7LqxWMfCRUcLWHrQKJi";
</script>

<section class="music-explorer">
    <h2 class="section-title">🎧  <span class="highlight">Discover</span> Our Music</h2>

    <div class="iframe-container">
        <!-- Spotify Embed -->
        <iframe 
            class="spotify-player"
            src={spotifyAlbum} 
            frameborder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Album Player">
        </iframe>

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
</section>

<style>
    .highlight {
    color: #81C14B;
    background: linear-gradient(90deg, #81C14B, #6A9A52);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(129, 193, 75, 0.9);
}
/* General Section Styling */
.music-explorer {
    padding: 50px 20px;
    text-align: center;
    color: white;
}

.section-title {
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(129, 193, 75, 0.7);
}

/* Responsive Embed Containers */
.iframe-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
}

.spotify-player, .youtube-player {
    width: 100%;
    max-width: 800px;
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(129, 193, 75, 0.5);
}

.spotify-player {
    height: 352px;
}

.youtube-player {
    height: 315px;
}

/* Responsive for Mobile */
@media (max-width: 768px) {
    .spotify-player, .youtube-player {
        max-width: 100%;
    }
}
</style>
