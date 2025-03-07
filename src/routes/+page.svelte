<script lang="ts">
    import Button from "../components/Button.svelte";
    let featuredArtists = [
        { name: "Artist 1", img: "/artist1.jpg" },
        { name: "Artist 2", img: "/artist2.jpg" },
        { name: "Artist 3", img: "/artist3.jpg" }
    ];
    let latestReleases = [
        { title: "Track 1", img: "/track1.jpg" },
        { title: "Track 2", img: "/track2.jpg" }
    ];
</script>

<main class="bg-black text-white min-h-screen">
    <!-- Hero Section -->
    <section class="h-screen flex flex-col items-center justify-center text-center relative">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
        <h1 class="text-2xl md:text-5xl font-extrabold z-10">Welcome to <span class="text-[#81C14B]">theKenyanTroublers</span></h1>
        <p class="text-lg md:text-2xl mt-4 z-10">The Global Hitmakers.</p>
        <Button text="Explore Music" />
    </section>

    <!-- About Section -->
    <section class="py-20 px-6 text-center">
        <h2 class="text-4xl font-bold text-[#81C14B]">Who We Are</h2>
        <p class="mt-4 text-lg">A cutting-edge music label revolutionizing the industry with powerful sounds and unmatched artistry.</p>
    </section>

    <!-- Featured Artists -->
    <section class="py-20 px-6">
        <h2 class="text-3xl font-bold text-center text-[#81C14B]">Featured Artists</h2>
        <div class="flex flex-wrap justify-center mt-8 gap-6">
            {#each featuredArtists as artist}
                <div class="w-40 h-40 bg-gray-800 rounded-lg p-2 text-center">
                    <img src={artist.img} alt={artist.name} class="w-full h-32 object-cover rounded-md" />
                    <p class="mt-2">{artist.name}</p>
                </div>
            {/each}
        </div>
    </section>

    <!-- Latest Releases -->
    <section class="py-20 px-6 bg-[#111]">
        <h2 class="text-3xl font-bold text-center text-[#81C14B]">Latest Releases</h2>
        <div class="flex flex-wrap justify-center mt-8 gap-6">
            {#each latestReleases as release}
                <div class="w-40 h-40 bg-gray-800 rounded-lg p-2 text-center">
                    <img src={release.img} alt={release.title} class="w-full h-32 object-cover rounded-md" />
                    <p class="mt-2">{release.title}</p>
                </div>
            {/each}
        </div>
    </section>

    <!-- The Troublers Street Talent -->
    <section class="py-20 px-6 text-center">
        <h2 class="text-3xl font-bold text-[#81C14B]">The Troublers Street Talent</h2>
        <p class="mt-4 text-lg">Discover and support the raw talents of Nairobi’s streets.</p>
        <Button text="Join Us" />
    </section>
</main>