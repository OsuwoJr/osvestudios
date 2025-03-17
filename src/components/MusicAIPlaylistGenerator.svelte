<script>
    let mood = "Happy";

    function getPlaylist() {
        fetch(`/api/music/mood?mood=${mood}`)
            .then(res => res.json())
            .then(data => console.log(data));
    }
</script>

<section class="text-center py-6">
    <h2 class="text-white text-3xl">🎧 Find Your Mood-Based Playlist</h2>
    <select bind:value={mood} class="mt-4 p-2 rounded-lg">
        <option>Happy</option>
        <option>Sad</option>
        <option>Relaxed</option>
        <option>Energetic</option>
    </select>
    <button class="ml-4 px-4 py-2 bg-[#81C14B] rounded-lg" on:click={getPlaylist}>
        Generate Playlist
    </button>
</section>
