<script lang="ts">
    let gallery = [
        { name: "Street Talent Photo 1", url: "/gallery/1.jpg" },
        { name: "Street Talent Video Clip", url: "/gallery/Borne Realler.mp4" }
    ];
</script>

<section class="p-10 text-white">
    <h2 class="text-4xl font-bold text-center mb-6">📸 Gallery Dump</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each gallery as media}
            <div class="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
                {#if media.url.endsWith('.jpg') || media.url.endsWith('.png')}
                    <img src={media.url} alt={media.name} class="w-full h-40 object-cover rounded-lg">
                {:else if media.url.endsWith('.mp4')}
                    <video controls class="w-full h-40 rounded-lg">
                        <source src={media.url} type="video/mp4">
                        <track kind="captions" src="/path-to-captions.vtt" srclang="en" label="English">
                        Your browser does not support video playback.
                    </video>
                {/if}
                <p class="text-lg font-semibold mt-4">{media.name}</p>
                <a href={media.url} download class="mt-4 inline-block px-6 py-3 text-lg font-bold text-black bg-[#81C14B] rounded-full shadow-lg hover:scale-105 transition-transform">
                    ⬇️ Download
                </a>
            </div>
        {/each}
    </div>
</section>
