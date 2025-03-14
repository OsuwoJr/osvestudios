<script lang="ts">
    import Waveform from "./BeatWaveform.svelte";
    export let beat;

    function playAudio(src: string) {
        const audio = new Audio(src);
        audio.play();
    }
</script>

<div class="audio-player">
    <button on:click={() => playAudio(beat.src)}>▶️</button>
    <Waveform {beat} />
</div>
