<script>
    let isPlaying = false;
    let speed = 1.0;

    function togglePlay() {
        isPlaying = !isPlaying;
    }
</script>

<div class="fixed bottom-6 right-6 bg-[#81C14B] p-4 rounded-lg shadow-lg">
    <p class="text-white">🎶 Now Playing</p>
    <div class="flex items-center gap-4">
        <button class="bg-black p-2 rounded-full" on:click={togglePlay}>
            {isPlaying ? "⏸" : "▶"}
        </button>
        <input type="range" min="0.5" max="2" step="0.1" bind:value={speed} class="w-24">
    </div>
</div>
