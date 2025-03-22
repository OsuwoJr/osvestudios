<script lang="ts">
    import HeroSection from "../../components/MusicHeroSection.svelte";
    import MusicCatalog from "../../components/MusicCatalogue.svelte";
    import FloatingPlayer from "../../components/MusicFloatingPlayer.svelte";    
    import NFTMusicStore from "../../components/MusicNFTMusicStore.svelte";
</script>

<main class="bg-black text-white min-h-screen">
    <!-- Hero Section (AI Suggestions, Floating 3D Player) -->
    <HeroSection />

    <!-- Music Catalog (Albums, Tracks, 3D Covers) -->
    <MusicCatalog />

    

    <!-- NFT Music Marketplace -->
    <NFTMusicStore />

    <!-- Floating Smart Music Player -->
    <FloatingPlayer />
</main>
