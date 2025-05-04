<script lang="ts">
    import { fade } from "svelte/transition";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import HeroSection from "../../components/MusicHeroSection.svelte";
    import MusicCatalog from "../../components/MusicCatalogue.svelte";
    import FloatingPlayer from "../../components/MusicFloatingPlayer.svelte";    
    import NFTMusicStore from "../../components/MusicNFTMusicStore.svelte";
</script>

<svelte:head>
    <title>Music - theKenyanTroublers</title>
    <meta name="description" content="Explore the music of theKenyanTroublers - The Global Hitmakers.">
</svelte:head>

<main class="bg-black text-white min-h-screen" in:fade={{ duration: 300, delay: 300 }}>
    <!-- Hero Section (AI Suggestions, Floating 3D Player) -->
    <HeroSection />

    <!-- Music Catalog (Albums, Tracks, 3D Covers) -->
    <div id="catalog" class="py-10">
        <MusicCatalog />
    </div>

    <!-- NFT Music Marketplace -->
    <div id="nft-store" class="py-10">
        <NFTMusicStore />
    </div>

    <!-- Navigation Links -->
    <div class="w-full py-8 text-center">
        <a href="/artists" class="inline-block bg-black/60 border border-[#81C14B] backdrop-blur-md px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all hover:bg-[#81C14B]/20 hover:scale-105 mx-2 my-2">
            <i class="fas fa-users mr-2"></i> Our Artists
        </a>
        <a href="/contact" class="inline-block bg-[#81C14B] px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all hover:bg-[#6A9A52] hover:scale-105 mx-2 my-2">
            <i class="fas fa-envelope mr-2"></i> Contact Us
        </a>
    </div>

    <!-- Floating Smart Music Player -->
    <FloatingPlayer />
</main>
