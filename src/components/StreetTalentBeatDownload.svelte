<script lang="ts">
    import { onDestroy } from "svelte";

    let beats = [
        { id: 1, name: "Drill", url: "/beats/nextsunday/30th Drill.wav" },
        { id: 2, name: "Laho", url: "/beats/nextsunday/Shallipopi - Laho Open Verse.mp3" }
    ];

    // Track audio and playing state
    let currentAudio: HTMLAudioElement | null = null;
    let playingBeatId: number | null = null;
    let isPlaying = false;
    let progress = 0;
    let duration = 0;
    let currentTime = 0;

    // Handle play/pause functionality
    function togglePlay(beat: typeof beats[0]) {
        if (currentAudio && playingBeatId === beat.id) {
            // Same track - toggle play/pause
            if (isPlaying) {
                currentAudio.pause();
                isPlaying = false;
            } else {
                currentAudio.play()
                    .catch(err => console.error("Error playing audio:", err));
                isPlaying = true;
            }
        } else {
            // New track or no track playing
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentAudio.removeEventListener('timeupdate', updateProgress);
                currentAudio.removeEventListener('ended', handleEnded);
            }
            
            // Create new audio for the selected beat
            currentAudio = new Audio(beat.url);
            
            // Add event listeners
            currentAudio.addEventListener('timeupdate', updateProgress);
            currentAudio.addEventListener('loadedmetadata', () => {
                duration = currentAudio ? currentAudio.duration : 0;
            });
            currentAudio.addEventListener('ended', handleEnded);
            
            // Play the audio
            currentAudio.play()
                .catch(err => console.error("Error playing audio:", err));
            
            // Update state
            playingBeatId = beat.id;
            isPlaying = true;
        }
    }

    // Stop playing the current preview
    function stopPreview() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio.removeEventListener('timeupdate', updateProgress);
            currentAudio.removeEventListener('ended', handleEnded);
            isPlaying = false;
            playingBeatId = null;
            progress = 0;
            currentTime = 0;
        }
    }

    // Update progress for UI
    function updateProgress() {
        if (currentAudio) {
            currentTime = currentAudio.currentTime;
            progress = (currentAudio.currentTime / currentAudio.duration) * 100;
        }
    }

    // Handle end of audio
    function handleEnded() {
        isPlaying = false;
        playingBeatId = null;
        progress = 0;
        currentTime = 0;
    }

    // Format time in MM:SS
    function formatTime(seconds: number): string {
        if (isNaN(seconds)) return "0:00";
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    // Clean up on component destruction
    onDestroy(() => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.removeEventListener('timeupdate', updateProgress);
            currentAudio.removeEventListener('ended', handleEnded);
        }
    });
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

                <!-- Audio Progress Bar (only visible when this beat is playing) -->
                {#if playingBeatId === beat.id}
                    <div class="mb-4 px-2">
                        <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div class="h-full bg-[#81C14B] rounded-full" style="width: {progress}%"></div>
                        </div>
                        <div class="flex justify-between text-xs mt-1 text-gray-400">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                    </div>
                {/if}

                <div class="flex justify-center space-x-4">
                    <!-- Play/Pause Preview Button -->
                    <button 
                        on:click={() => togglePlay(beat)}
                        class="px-5 py-2 bg-gray-800 text-white rounded-full shadow-md transition-all hover:scale-110 hover:bg-gray-700 flex items-center"
                    >
                        {#if playingBeatId === beat.id && isPlaying}
                            <i class="fas fa-pause mr-2"></i> Pause
                        {:else}
                            <i class="fas fa-play mr-2"></i> Preview
                        {/if}
                    </button>

                    <!-- Download Button -->
                    <a href={beat.url} download 
                        class="px-6 py-2 text-lg font-bold text-black bg-[#81C14B] rounded-full shadow-lg hover:scale-110 transition-all flex items-center"
                    >
                        <i class="fas fa-download mr-2"></i> Download
                    </a>
                </div>
            </div>
        {/each}
    </div>

    <!-- Stop All Button (only visible when something is playing) -->
    {#if isPlaying}
        <button 
            on:click={stopPreview}
            class="mt-8 px-4 py-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition-all inline-flex items-center"
        >
            <i class="fas fa-stop mr-2"></i> Stop All
        </button>
    {/if}
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
    0% { box-shadow: 0px 0px 10px rgba(129, 193, 75, 0.3); }
    50% { box-shadow: 0px 0px 20px rgba(129, 193, 75, 0.6); }
    100% { box-shadow: 0px 0px 10px rgba(129, 193, 75, 0.3); }
}

.shadow-neon {
    animation: neonGlow 2s infinite alternate;
}
</style>
