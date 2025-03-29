<script lang="ts">
    let beats = [
        { name: "Drill", url: "/beats/nextsunday/30th Drill.wav" },
        { name: "Laho", url: "/beats/nextsunday/Shallipopi - Laho Open Verse.mp3" }
    ];

    let currentAudio: HTMLAudioElement | null = null;

    function playPreview(url: string) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(url);
        currentAudio.play();
    }

    function stopPreview() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }
</script>

<section class="relative py-20 text-white text-center overflow-hidden">
    <h2 class="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-wide">
        🎼 Download Next Sunday's Beats
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-4xl mx-auto">
        {#each beats as beat}
            <div class="beat-card group relative p-6 rounded-lg shadow-2xl bg-black bg-opacity-60 backdrop-blur-lg transition-all transform hover:scale-105 hover:shadow-neon">
                <h3 class="text-2xl font-semibold mb-4 transition-all group-hover:text-[#81C14B]">
                    {beat.name}
                </h3>

                <div class="flex justify-center space-x-4 shadow-neon">
                    <!-- 🎧 Play Preview Button -->
                    <button 
                        on:click={() => playPreview(beat.url)}
                        class="px-5 py-2 bg-gray-800 text-white rounded-full shadow-md transition-transform transform hover:scale-110">
                        🎧 Play Preview
                    </button>

                    <!-- ⬇️ Download Button -->
                    <a href={beat.url} download 
                        class="px-6 py-3 text-lg font-bold text-black bg-[#81C14B] rounded-full shadow-lg hover:scale-110 transition-transform">
                        ⬇️ Download
                    </a>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
/* Beat Card Hover Effect */
.beat-card {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.4s ease;
}

.beat-card:hover {
    box-shadow: 0px 0px 20px rgba(129, 193, 75, 0.6);
}

/* Glowing Shadow Effect */
@keyframes neonGlow {
    0% { box-shadow: 0px 0px 10px #81C14B; }
    50% { box-shadow: 0px 0px 20px #81C14B; }
    100% { box-shadow: 0px 0px 10px #81C14B; }
}

.shadow-neon {
    animation: neonGlow 2s infinite alternate;
}
</style>
