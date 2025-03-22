<script lang="ts">
    import { onMount } from "svelte";
    import WaveSurfer from "wavesurfer.js";

    export let beat;
    let wavesurfer;

    onMount(() => {
        wavesurfer = WaveSurfer.create({
            container: `#waveform-${beat.id}`,
            waveColor: "rgba(255, 255, 255, 0.7)",
            progressColor: "#81C14B",
            cursorColor: "#FFD700",
            barWidth: 3,
            barGap: 2,
            barRadius: 2,
            height: 60,
            normalize: true,
        });
        wavesurfer.load(beat.src);
    });
</script>

<!-- Waveform Container -->
<div id={"waveform-" + beat.id} class="waveform"></div>

<style>
/* Waveform Styling */
.waveform {
    width: 100%;
    height: 60px;
    background: linear-gradient(145deg, #1a1a1a, #292929);
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0px 0px 12px rgba(129, 193, 75, 0.6);
    transition: 0.3s ease-in-out;
}

/* Glow Effect */
.waveform:hover {
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.9);
}
</style>
