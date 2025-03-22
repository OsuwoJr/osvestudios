<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import FloatingPlayer from "./MusicFloatingPlayer.svelte";

    let suggestedTrack = { title: "Loading...", artist: "AI Curator" };
    let isLoading = true;

    // Fetch AI Suggested Track with error handling
    async function getSuggestedTrack() {
        try {
            const res = await fetch("/api/music/suggestions");
            if (!res.ok) throw new Error("Network response failed");
            suggestedTrack = await res.json();
        } catch (error) {
            suggestedTrack = { title: "Fallback Track", artist: "TheKenyanTroublers" };
        } finally {
            isLoading = false;
        }
    }

    onMount(() => {
        getSuggestedTrack();
    });
</script>

<section class="music-section">
    <!-- Glowing Animated Background -->
    <div class="animated-bg"></div>

    <h1 class="title">
        Welcome to <span class="highlight">The Future of Music</span>
    </h1>
    <p class="subtitle"> NFT Music Coming Soon!</p>

    <!-- AI Music Suggestion -->
    <div class="suggestion" transition:fade>
        <p class="track-info">
            🎧 Suggested Track: 
            {#if isLoading}
                <span class="loading">Loading...</span>
            {:else}
                <b>{suggestedTrack.title}</b> by {suggestedTrack.artist}
            {/if}
        </p>

        <button class="listen-btn">
            Listen Now
        </button>
    </div>

    <!-- Floating 3D Music Player -->
    <FloatingPlayer />
</section>

<style>
/* Futuristic Glowing Background */
.music-section {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    overflow: hidden;
}

.animated-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(129, 193, 75, 0.3), black 80%);
    animation: pulse 5s infinite alternate;
}

@keyframes pulse {
    from {
        opacity: 0.7;
        transform: scale(1);
    }
    to {
        opacity: 1;
        transform: scale(1.1);
    }
}

/* Text Styles */
.title {
    font-size: 3rem;
    font-weight: 800;
    text-shadow: 0 0 20px rgba(129, 193, 75, 0.7);
    z-index: 2;
}

.highlight {
    color: #81C14B;
    background: linear-gradient(90deg, #81C14B, #6A9A52);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(129, 193, 75, 0.9);
}

.subtitle {
    font-size: 1.5rem;
    margin-top: 10px;
    opacity: 0.9;
    z-index: 2;
}

/* AI Suggested Track */
.suggestion {
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.6);
    padding: 15px 30px;
    border-radius: 12px;
    box-shadow: 0px 0px 20px rgba(129, 193, 75, 0.7);
    z-index: 2;
}

.track-info {
    font-size: 1.2rem;
}

.loading {
    color: #81C14B;
    animation: blink 1s infinite alternate;
}

@keyframes blink {
    from { opacity: 1; }
    to { opacity: 0.5; }
}

/* Futuristic Button */
.listen-btn {
    margin-top: 10px;
    background: linear-gradient(135deg, #81C14B, #6A9A52);
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 10px rgba(129, 193, 75, 0.7);
}

.listen-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(129, 193, 75, 1);
}
</style>
