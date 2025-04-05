<script lang="ts">
    import HeroSection from "../../components/ArtistHeroSection.svelte";
    import FeaturedArtists from "../../components/ArtistFeaturedArtists.svelte";
    import VideoShowcase from "../../components/ArtistVideoShowcase.svelte";
    import ArtistApplication from "../../components/ArtistApplication.svelte";
    import FanComments from "../../components/ArtistFanComments.svelte";
   
</script>

<div class="artists-page">
    <HeroSection />
    <FeaturedArtists />
    <VideoShowcase />
    <ArtistApplication />
    <FanComments />
    
</div>

<style>
.artists-page {
    background: black;
    color: white;
    font-family: 'Poppins', sans-serif;
}
</style>
