<script lang="ts">
    import Waveform from "./BeatWaveform.svelte";
    export let beat;

    function playAudio(src: string) {
        const audio = new Audio(src);
        audio.play();
    }
</script>

<div class="audio-player">
    <!-- Play Button -->
    <button class="play-btn" on:click={() => playAudio(beat.src)}>▶️</button>

    <!-- Waveform Visualization -->
    <Waveform {beat} />
</div>

<style>
/* Audio Player Container */
.audio-player {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 15px;
    background: linear-gradient(145deg, #1a1a1a, #292929);
    border-radius: 10px;
    box-shadow: 0px 0px 12px rgba(129, 193, 75, 0.6);
    transition: 0.3s ease-in-out;
}

/* Play Button */
.play-btn {
    background: #81C14B;
    color: black;
    font-size: 1.4rem;
    font-weight: bold;
    padding: 12px 16px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    box-shadow: 0px 0px 10px rgba(129, 193, 75, 0.8);
}

/* Hover & Active Effects */
.play-btn:hover {
    background: #6A9A52;
    transform: scale(1.1);
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.9);
}

.play-btn:active {
    transform: scale(0.95);
}

/* Mobile Optimization */
@media (max-width: 600px) {
    .audio-player {
        flex-direction: column;
        gap: 10px;
    }

    .play-btn {
        font-size: 1.2rem;
        padding: 10px 14px;
    }
}
</style>
