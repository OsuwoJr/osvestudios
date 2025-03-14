<script lang="ts">
    export let artists = [
        { name: "OsuwoJr", genre: "Alternative-Indie", image: "/OsuwoJr.png", link: "/artists/OsuwoJr.png" },
        { name: "theKenyanTroublers", genre: "Versatile", image: "/10.jpeg", link: "/artists/10.jpeg" }
    ];
</script>

<section id="featured-artists" class="grid ">
    {#each artists as artist}
        <a href={artist.link} class="artist-card">
            <img src={artist.image} alt={artist.name} />
            <h3>{artist.name}</h3>
            <p>{artist.genre}</p>
        </a>
    {/each}
</section>

<style>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.artist-card {
    background: #111;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.artist-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px #81C14B;
}
</style>
