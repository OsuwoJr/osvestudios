<script lang="ts">
    import AudioPlayer from "./BeatAudioPlayer.svelte";
    export let beat;
</script>

<div class="beat-card">
    <h3>{beat.title}</h3>
    <p>BPM: {beat.bpm} | Key: {beat.key}</p>
    <p>Price: ${beat.price}</p>

    <AudioPlayer {beat} />
    <button class="purchase-btn">Buy Now</button>
</div>

<style>
.beat-card {
    background: #222;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 0px 10px #81C14B;
}

.purchase-btn {
    background: #81C14B;
    padding: 10px;
    border-radius: 5px;
    transition: 0.3s;
}

.purchase-btn:hover {
    background: #6A9A52;
}
</style>
