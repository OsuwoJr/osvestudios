<script lang="ts">
    let genre = "";
    let bpm = "";
</script>

<div class="filters">
    <select bind:value={genre}>
        <option value="">All Genres</option>
        <option value="afro">Afrobeat</option>
        <option value="trap">Trap</option>
        <option value="lofi">LoFi</option>
    </select>

    <input type="number" placeholder="Min BPM" bind:value={bpm} />

    <button class="filter-btn">Filter</button>
</div>

<style>
.filters {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 20px;
}
</style>
