<script lang="ts">
    let freestyleVideos = [
        { date: "March 16, 2025", videos: [
            { name: "Borne Realler", url: "/videos/2025-03-16/Borne Realler.mp4" },
            { name: "Dtato", url: "/videos/2025-03-16/Dtato.mp4" }
        ] },
        { date: "March 23, 2025", videos: [
            { name: "Mr Mavad", url: "/videos/2025-03-23/Mr Mavad.mp4" }
        ] }
    ];
</script>

<section class="p-10 text-white">
    <h2 class="text-4xl font-bold text-center mb-6">🎬 Freestyle Videos</h2>
    {#each freestyleVideos as session}
        <div class="mb-8">
            <h3 class="text-3xl font-semibold text-center mb-4">{session.date}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {#each session.videos as video}
                    <div class="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
                        <h4 class="text-xl font-semibold">{video.name}</h4>
                        <video controls class="w-full mt-4 rounded-lg">
                            <source src={video.url} type="video/mp4">
                            <track kind="captions" src="/captions/default.vtt" srclang="en" label="English">
                            Your browser does not support video playback.
                        </video>
                        <a href={video.url} download class="mt-4 inline-block px-6 py-3 text-lg font-bold text-black bg-[#81C14B] rounded-full shadow-lg hover:scale-105 transition-transform">
                            ⬇️ Download
                        </a>
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</section>
