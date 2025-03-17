<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import FloatingPlayer from "./MusicFloatingPlayer.svelte";
    
    let suggestedTrack = { title: "Loading...", artist: "AI Curator" };
    
    // Fetch AI Suggested Track (Simulated API Call)
    async function getSuggestedTrack() {
        suggestedTrack = await fetch("/api/music/suggestions")
            .then(res => res.json())
            .catch(() => ({ title: "Fallback Track", artist: "TheKenyanTroublers" }));
    }

    onMount(() => {
        getSuggestedTrack();
    });
</script>

<section class="relative h-screen flex flex-col justify-center items-center text-white text-center">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-black via-[#81C14B]/30 to-black opacity-80"></div>
    
    <h1 class="text-5xl md:text-7xl font-extrabold relative z-10">Welcome to <span class="text-[#81C14B]">The Future of Music</span></h1>
    <p class="text-lg md:text-2xl mt-4 relative z-10">AI-Powered Playlists | 3D Visualizations | Web3 NFT Music</p>

    <!-- AI Music Suggestion -->
    <div class="mt-8 relative z-10">
        <p class="text-xl">🎧 Suggested Track: <b>{suggestedTrack.title}</b> by {suggestedTrack.artist}</p>
        <button class="mt-4 px-6 py-2 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg transition-all duration-300">
            Listen Now
        </button>
    </div>

    <!-- Floating 3D Music Player -->
    <FloatingPlayer />
</section>
