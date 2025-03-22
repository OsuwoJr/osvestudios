<script lang="ts">
    let genre = "";
    let bpm = "";
</script>

<div class="filters">
    <!-- Genre Selection -->
    <div class="filter-group">
        <label for="genre">Genre:</label>
        <select id="genre" bind:value={genre} class="filter-input genre-dropdown">
            <option value="">All Genres</option>
            <option value="afro">Afrobeat</option>
            <option value="trap">Trap</option>
            <option value="lofi">LoFi</option>
        </select>
    </div>

    <!-- BPM Input -->
    <div class="filter-group">
        <label for="bpm">Min BPM:</label>
        <input id="bpm" type="number" placeholder="Enter BPM" bind:value={bpm} class="filter-input" />
    </div>

    <!-- Filter Button -->
    <button class="filter-btn">🎵 Filter</button>
</div>

<style>
/* Filter Container */
.filters {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.4);
    max-width: 500px;
    margin: auto;
    transition: 0.3s ease-in-out;
}

/* Filter Group */
.filter-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

/* Labels */
.filter-group label {
    font-size: 0.9rem;
    color: #81C14B;
    margin-bottom: 5px;
}

/* Input & Select */
.filter-input {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid transparent;
    color: white;
    font-size: 1rem;
    padding: 10px;
    border-radius: 6px;
    transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

/* Genre Dropdown: Turns Green When Focused */
.genre-dropdown:focus {
    background: #81C14B; /* Green Background */
    color: black;
    border-color: #FFD700;
    outline: none;
    box-shadow: 0 0 8px rgba(255, 215, 0, 0.8);
}

/* BPM Input Focus */
.filter-input:focus {
    border-color: #81C14B;
    outline: none;
    box-shadow: 0 0 8px rgba(129, 193, 75, 0.8);
}

/* Filter Button */
.filter-btn {
    background: #81C14B;
    color: black;
    font-size: 1rem;
    font-weight: bold;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
}

.filter-btn:hover {
    background: #6A9A52;
    transform: scale(1.05);
}

/* Mobile Responsive */
@media (max-width: 600px) {
    .filters {
        flex-direction: column;
        align-items: stretch;
        max-width: 90%;
    }
}
</style>
