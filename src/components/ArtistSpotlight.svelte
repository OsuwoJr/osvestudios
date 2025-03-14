<script lang="ts">
    export let spotlightArtist = { name: "Artist Spotlight", bio: "This is the featured artist.", image: "/spotlight.jpg" };
</script>

<section class="spotlight">
    <img src={spotlightArtist.image} alt={spotlightArtist.name} />
    <div>
        <h2>{spotlightArtist.name}</h2>
        <p>{spotlightArtist.bio}</p>
        <a href="/artists/{spotlightArtist.name}" class="button">Discover</a>
    </div>
</section>

<style>
.spotlight {
    display: flex;
    align-items: center;
    gap: 20px;
}
</style>
