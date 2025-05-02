<script lang="ts">
    export let latestReleases;

    import { writable } from 'svelte/store';
    
    const flippedCards = writable(new Set<number>());

    function toggleFlip(event: Event) {
        const cardIndex = Number((event.currentTarget as HTMLElement).dataset.index);
        flippedCards.update((set) => {
            if (set.has(cardIndex)) {
                set.delete(cardIndex);
            } else {
                set.add(cardIndex);
            }
            return new Set(set);
        });
    }
</script>

<section class="latest-releases">
    <h2 class="section-title">Latest <span class="highlight">Releases</span></h2>

    <!-- Floating Music Particles -->
    <div class="floating-icons">
        {#each Array(50) as _, i}
            <i class="fas fa-music floating" 
               style="
                    left: {Math.random() * 100}vw; 
                    top: {Math.random() * 100}vh; 
                    animation-duration: {Math.random() * 8 + 5}s;
                    font-size: {Math.random() * 25 + 15}px;">
            </i>
        {/each}
    </div>

    <div class="release-grid">
        {#each latestReleases as release, i}
            <button class="release-card" 
                    class:flipped={$flippedCards.has(i)} 
                    data-index={i} 
                    on:click={toggleFlip} 
                    on:keydown={(e) => e.key === 'Enter' && toggleFlip(e)} 
                    aria-label="Toggle album details">
                <div class="album">
                    <!-- Front: Album Art -->
                    <div class="front">
                        <img src={release.img} alt={release.title} class="album-art" />
                    </div>

                    <!-- Back: Streaming Links -->
                    <div class="back">
                        <p class="stream-title">{release.title}</p>
                        <ul class="stream-links">
                            {#if release.spotify}
                                <li><a href={release.spotify} target="_blank" class="stream-button spotify">Spotify</a></li>
                            {/if}
                            {#if release.boomplay}
                                <li><a href={release.boomplay} target="_blank" class="stream-button boomplay">Boomplay</a></li>
                            {/if}
                            {#if release.apple}
                                <li><a href={release.apple} target="_blank" class="stream-button apple">Apple Music</a></li>
                            {/if}
                        </ul>
                    </div>
                </div>
            </button>
        {/each}
    </div>
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
    margin-bottom: 2rem;
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
.section-title {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(90deg, #ffffff 0%, #81C14B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    width: 100%;
    text-align: center;
}

.section-title:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: #81C14B;
    border-radius: 2px;
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
    gap: 40px;
    margin-top: 30px;
    position: relative;
    z-index: 2;
}

/* Album Card with 3D Flip */
.release-card {
    width: 190px;
    height: 280px;
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

/* Hover-based flip for laptops */
.release-card:hover .album {
    transform: rotateY(180deg);
}

/* Tap-based flip for touchscreens */
.release-card.flipped .album {
    transform: rotateY(180deg);
}

/* Front & Back Faces */
.front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
}

/* Album Front (Image) */
.front {
    background: black;
}

.album-art {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(129, 193, 75, 0.7);
}

/* Album Back (Streaming Links) */
.back {
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transform: rotateY(180deg);
}

/* Streaming Links as List */
.stream-links {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
}

.stream-links li {
    margin-bottom: 5px;
}

/* Streaming Buttons */
.stream-button {
    text-decoration: none;
    color: white;
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 5px;
    transition: 0.3s;
    display: block;
    width: 100px;
}

.spotify { background: #1DB954; }
.boomplay { background: #008cff; }
.apple { background: #FA233B; }

.stream-button:hover {
    opacity: 0.8;
}

/* Release Title */
.stream-title {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
    color: #81C14B;
    text-shadow: 0 0 10px #81C14B;
}

/* Responsive */
@media (max-width: 768px) {
    .release-card {
        width: 170px;
        height: 250px;
    }

    .section-title {
        font-size: 2.5rem;
    }
}

@media (min-width: 768px) {
    .section-title {
        font-size: 3rem;
    }
    
    .release-card {
        width: 210px;
        height: 300px;
    }
}

@media (min-width: 1024px) {
    .release-card {
        width: 250px;
        height: 340px;
    }
}
</style>
