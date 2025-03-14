<script lang="ts">
    import BeatCard from "../../components/BeatCard.svelte";
    import BeatFilters from "../../components/BeatFilters.svelte";
    import CustomOrderForm from "../../components/BeatCustomOrderForm.svelte";
    import LiveComments from "../../components/BeatLiveComments.svelte";
    import NewsletterSignup from "../../components/ArtistNewsletter.svelte";

    let beats = [
        { id: 1, title: "Afro Fusion", bpm: 95, key: "A Minor", price: 20, src: "/beats/afro.mp3" },
        { id: 2, title: "Trap Anthem", bpm: 140, key: "C Major", price: 30, src: "/beats/trap.mp3" },
        { id: 3, title: "Chill LoFi", bpm: 75, key: "E Minor", price: 15, src: "/beats/lofi.mp3" },
    ];
</script>

<section class="beats-page">
    <h1 class="title">🎼 Discover & Own the Sound of the Future</h1>
    <BeatFilters />

    <div class="beats-grid">
        {#each beats as beat}
            <BeatCard {beat} />
        {/each}
    </div>

    <CustomOrderForm />
    <LiveComments />
    <NewsletterSignup />
</section>

<style>
.beats-page {
    background: black;
    color: white;
    padding: 40px;
    text-align: center;
}

.title {
    font-size: 2rem;
    font-weight: bold;
    color: #81C14B;
}

.beats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}
</style>
