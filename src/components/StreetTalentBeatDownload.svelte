<script lang="ts">
    let beats = [
        { name: "Drill", url: "/beats/nextsunday/30th Drill.wav" },
        { name: "Laho", url: "/beats/nextsunday/Shallipopi - Laho Open Verse.mp3" }
    ];
</script>

<section class="p-10 text-white text-center">
    <h2 class="text-4xl font-bold mb-6">🎼 Download Next Sunday's Beats</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each beats as beat}
            <div class="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
                <h3 class="text-2xl font-semibold">{beat.name}</h3>
                <a href={beat.url} download class="mt-4 inline-block px-6 py-3 text-lg font-bold text-black bg-[#81C14B] rounded-full shadow-lg hover:scale-105 transition-transform">
                    ⬇️ Download
                </a>
            </div>
        {/each}
    </div>
</section>
