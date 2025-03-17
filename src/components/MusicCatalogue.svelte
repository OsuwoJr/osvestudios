<script lang="ts">
    import { onMount } from "svelte";
    let albums: { cover: string; title: string }[] = [];

    async function fetchAlbums() {
        albums = await fetch("/api/music/albums").then(res => res.json());
    }

    onMount(fetchAlbums);
</script>

<section class="p-6">
    <h2 class="text-4xl font-bold text-white text-center mb-6">🎵 Explore Our Music</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {#each albums as album}
            <div class="relative group overflow-hidden rounded-lg">
                <img src={album.cover} alt={album.title} class="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105">
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                    <p class="text-lg font-semibold text-white">{album.title}</p>
                    <button class="mt-2 px-4 py-2 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg transition-all duration-300">
                        Play Preview
                    </button>
                </div>
            </div>
        {/each}
    </div>
</section>
