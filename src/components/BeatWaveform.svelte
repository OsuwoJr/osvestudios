<script lang="ts">
    import { onMount } from "svelte";
    import WaveSurfer from "wavesurfer.js";

    export let beat;
    let wavesurfer;

    onMount(() => {
        wavesurfer = WaveSurfer.create({
            container: "#waveform-" + beat.id,
            waveColor: "white",
            progressColor: "#81C14B",
        });
        wavesurfer.load(beat.src);
    });
</script>

<div id={"waveform-" + beat.id} class="waveform"></div>
