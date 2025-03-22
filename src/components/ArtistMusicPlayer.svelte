<script lang="ts">
    export let track = { 
        title: "One Day", 
        artist: "OsuwoJr", 
        src: "/1. ONE DAY.wav" 
    };

    let audio: HTMLAudioElement;
    let isPlaying = false;
    let progress = 0;

    function playPause() {
        if (audio.paused) {
            audio.play();
            isPlaying = true;
        } else {
            audio.pause();
            isPlaying = false;
        }
    }

    function updateProgress() {
        if (audio) {
            progress = (audio.currentTime / audio.duration) * 100 || 0;
        }
    }

    function seek(event: MouseEvent | KeyboardEvent) {
        const bar = event.currentTarget as HTMLDivElement;
        if (event instanceof MouseEvent) {
            const clickPosition = event.offsetX / bar.offsetWidth;
            audio.currentTime = clickPosition * audio.duration;
        }
    }
</script>

<section class="music-player">
    <!-- Animated Waveform Background -->
    <div class="waveform"></div>

    <div class="track-info">
        <h3>{track.title}</h3>
        <p>{track.artist}</p>
    </div>

    <!-- Play/Pause Button -->
    <button class="play-button" on:click={playPause}>
        {#if isPlaying} ⏸️ {:else} ▶️ {/if}
    </button>

    <!-- Progress Bar -->
    <button 
        class="progress-container" 
        on:click={seek} 
        on:keydown={(event) => event.key === 'Enter' && seek(event)} 
        role="slider" 
        aria-valuenow={progress} 
        aria-valuemin="0" 
        aria-valuemax="100" 
        aria-label="Seek through the track">
        <div class="progress-bar" style="width: {progress}%"></div>
    </button>

    <!-- Audio Element -->
    <audio bind:this={audio} on:timeupdate={updateProgress}>
        <source src={track.src} type="audio/mpeg" />
    </audio>
</section>

<style>
/* Music Player */
.music-player {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.6);
    transition: 0.3s ease-in-out;
    max-width: 400px;
    margin: auto;
    overflow: hidden;
}

/* Waveform Animation */
.waveform {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    background: radial-gradient(circle, rgba(129, 193, 75, 0.3) 20%, transparent 70%);
    opacity: 0.6;
    animation: pulse 2.5s infinite ease-in-out alternate;
}

@keyframes pulse {
    0% { transform: scale(1); opacity: 0.5; }
    100% { transform: scale(1.1); opacity: 1; }
}

/* Track Info */
.track-info {
    flex: 1;
    color: white;
    z-index: 2;
}

.track-info h3 {
    font-size: 1.2rem;
    margin: 0;
    color: #81C14B;
}

.track-info p {
    font-size: 0.9rem;
    margin: 5px 0 0;
    opacity: 0.8;
}

/* Play Button */
.play-button {
    background: #81C14B;
    color: black;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.3s;
    z-index: 2;
}

.play-button:hover {
    background: #6A9A52;
    transform: scale(1.1);
}

/* Progress Bar */
.progress-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    z-index: 2;
}

.progress-bar {
    height: 100%;
    background: #81C14B;
    transition: width 0.2s ease-in-out;
}

/* Hover Effect */
.music-player:hover {
    box-shadow: 0px 0px 25px rgba(129, 193, 75, 0.8);
}
</style>
