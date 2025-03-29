<script lang="ts">
    import { onMount } from "svelte";
</script>

<section class="hero flex items-center justify-center h-screen text-white px-4">
    <!-- Hero Content -->
    <div class="text-center bg-black/30 backdrop-blur-lg p-6 rounded-lg">
        <h1 class="text-[calc(100vw/10)] md:text-[4rem] font-bold whitespace-nowrap">
            the<span class="text-[#81C14B]">Kenyan</span>Troublers
        </h1>
        <p class="text-lg md:text-2xl mt-4">The Global Hitmakers.</p>
        <a href="/music" 
          class="mt-6 inline-block bg-[#81C14B] px-6 py-3 text-lg md:text-xl font-semibold rounded-lg shadow-lg transition-all hover:bg-[#6A9A52] hover:scale-105"          
          rel="noopener noreferrer"
          aria-label="Listen to TheKenyanTroublers on Spotify">
         🎵 Explore Music
       </a>
    </div>
</section>
