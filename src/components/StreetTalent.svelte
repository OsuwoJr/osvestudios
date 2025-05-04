<script lang="ts">
    import Button from "./Button.svelte";
    import { onMount, onDestroy } from "svelte";
    import { browser } from '$app/environment';

    interface Beat {
        title: string;
        src: string;
        isPlaying: boolean;
        duration: number;
        currentTime: number;
        audio: HTMLAudioElement | null;
    }

    // Sample freestyle video clips
    let freestyles = [
        { title: "Freestyle 1", video: "https://www.youtube.com/embed/-7ZwxFQ-M68?si=5Dm6SMbBPicdqZk5" },
        { title: "Freestyle 2", video: "https://www.youtube.com/embed/8uEI-JGkpF0?si=nVkncu654BfeFGxg" },
        { title: "Freestyle 3", video: "https://www.youtube.com/embed/DigqSR06W3c?si=1PP7ikHWfjGwLWkH" },
    ];

    // Sample beat previews with improved metadata
    let beats: Beat[] = [
        { title: "BoomBap", src: "/beats/1.BOOM BAP.mp3", isPlaying: false, duration: 0, currentTime: 0, audio: null },
        { title: "Drill", src: "/beats/2.DRILL.mp3", isPlaying: false, duration: 0, currentTime: 0, audio: null },
        { title: "Trap", src: "/beats/3.TRAP.mp3", isPlaying: false, duration: 0, currentTime: 0, audio: null },
        { title: "Dancehall", src: "/beats/4.DANCEHALL.mp3", isPlaying: false, duration: 0, currentTime: 0, audio: null },
    ];

    // Google Maps Embed URL
    let mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.44385662015!2d36.8188!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4ff7463fd%3A0x94a3f2c41b6a8238!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1619876543210";
    
    // Current active beat
    let currentBeatIndex = -1;

    function toggleBeat(index: number): void {
        if (!browser) return; // Skip on server
        
        // First, stop any currently playing beat
        beats.forEach((beat, i) => {
            if (i !== index && beat.isPlaying && beat.audio) {
                beat.audio.pause();
                beat.isPlaying = false;
            }
        });
        
        const beat = beats[index];
        
        // Initialize audio if not already done
        if (!beat.audio) {
            beat.audio = new Audio(beat.src);
            
            // Set up event listeners for this audio
            beat.audio.addEventListener('loadedmetadata', () => {
                if (beat.audio) {
                    beat.duration = beat.audio.duration;
                    beats = [...beats]; // Trigger reactivity
                }
            });
            
            beat.audio.addEventListener('timeupdate', () => {
                if (beat.audio) {
                    beat.currentTime = beat.audio.currentTime;
                    beats = [...beats]; // Trigger reactivity
                }
            });
            
            beat.audio.addEventListener('ended', () => {
                beat.isPlaying = false;
                beat.currentTime = 0;
                beats = [...beats]; // Trigger reactivity
            });
        }
        
        // Toggle play/pause
        if (beat.isPlaying && beat.audio) {
            beat.audio.pause();
            beat.isPlaying = false;
        } else if (beat.audio) {
            beat.audio.play();
            beat.isPlaying = true;
            currentBeatIndex = index;
        }
        
        beats = [...beats]; // Trigger reactivity
    }
    
    // Format time for display (MM:SS)
    function formatTime(seconds: number): string {
        if (!seconds) return '00:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Update progress bar
    function updateProgress(index: number, e: MouseEvent | KeyboardEvent): void {
        if (!browser || !beats[index].audio) return;
        
        const beat = beats[index];
        const progressBar = e.currentTarget as HTMLElement;
        const rect = progressBar.getBoundingClientRect();
        
        // Calculate position differently based on event type
        let pos = 0;
        if (e instanceof MouseEvent) {
            pos = (e.clientX - rect.left) / progressBar.offsetWidth;
        } else if (e instanceof KeyboardEvent) {
            // For keyboard events, we'll use arrow keys to adjust by 5% increments
            // This is not needed for the slider role functionality but added for completeness
            if (e.key === 'ArrowRight') {
                pos = Math.min((beat.currentTime / beat.duration) + 0.05, 1);
            } else if (e.key === 'ArrowLeft') {
                pos = Math.max((beat.currentTime / beat.duration) - 0.05, 0);
            } else {
                // For Enter/Space, position at 50% if not already playing
                pos = beat.currentTime > 0 ? (beat.currentTime / beat.duration) : 0.5;
            }
        }
        
        if (beat.audio) {
            beat.audio.currentTime = pos * beat.duration;
            beat.currentTime = beat.audio.currentTime;
            beats = [...beats]; // Trigger reactivity
        }
    }
    
    // Clean up audio on component destruction
    onDestroy(() => {
        if (!browser) return;
        
        beats.forEach(beat => {
            if (beat.audio) {
                beat.audio.pause();
                beat.audio.src = '';
                beat.audio = null;
            }
        });
    });
</script>

<section id="street-talent" class="street-talent">
    <h2 class="section-title">The Troublers Street Talent</h2>
    <p class="mt-4 text-lg">Discover and support the raw talents of Nairobi's streets.</p>
    <a href="/street-talent" class="primary-button">
        <span class="button-content">
            <i class="fas fa-street-view mr-2"></i>
            Join Us
        </span>
    </a>

    <!-- Floating Music Notes -->
    <div class="floating-icons">
        {#each Array(50) as _, i}
            <i class="fas fa-music floating" style="
                left: {Math.random() * 100}vw; 
                top: {Math.random() * 100}vh; 
                animation-duration: {Math.random() * 8 + 5}s;
                font-size: {Math.random() * 25 + 15}px;">
            </i>
        {/each}
    </div>

    <!-- 🎥 Dynamic Video Showcase -->
    <div class="video-section">
        <h3 class="section-subtitle">
            <i class="fas fa-video"></i> Latest Freestyles
        </h3>
        <div class="video-grid">
            {#each freestyles as freestyle}
                <div class="video-container">
                    <iframe src={freestyle.video} frameborder="0" allowfullscreen title={freestyle.title}></iframe>
                    <p class="video-title">{freestyle.title}</p>
                </div>
            {/each}
        </div>
    </div>

    <!-- 🎵 Interactive Beat Player -->
    <div class="beat-section">
        <h3 class="section-subtitle">
            <i class="fas fa-headphones-alt"></i> Sample Our Beats
        </h3>
        <div class="beat-list">
            {#each beats as beat, index}
                <div class="beat-player {beat.isPlaying ? 'playing' : ''}">
                    <div class="beat-info">
                        <button class="play-button" on:click={() => toggleBeat(index)} aria-label="{beat.isPlaying ? 'Pause' : 'Play'} {beat.title}">
                            <i class="fas {beat.isPlaying ? 'fa-pause' : 'fa-play'}"></i>
                        </button>
                        <div class="beat-details">
                            <span class="beat-title">{beat.title}</span>
                            <div 
                                class="progress-container" 
                                on:click={(e) => updateProgress(index, e)}
                                on:keydown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ' || 
                                        e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                                        e.preventDefault();
                                        updateProgress(index, e);
                                    }
                                }}
                                role="slider"
                                aria-label="Audio progress"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                aria-valuenow={beat.duration ? Math.round((beat.currentTime / beat.duration) * 100) : 0}
                                tabindex="0"
                            >
                                <div class="progress-bar" style="width: {beat.duration ? (beat.currentTime / beat.duration) * 100 : 0}%"></div>
                            </div>
                            <div class="time-display">
                                <span class="current-time">{formatTime(beat.currentTime)}</span>
                                <span class="duration">{formatTime(beat.duration)}</span>
                            </div>
                        </div>
                    </div>
                    <a href={beat.src} download class="download-button" aria-label="Download {beat.title}">
                        <i class="fas fa-download"></i>
                    </a>
                </div>
            {/each}
        </div>
    </div>

    <!-- 📍 Live Location Map -->
    <div class="map-container">
        <h3 class="section-subtitle">
            <i class="fas fa-map-marker-alt"></i> Find Us Here
        </h3>
        
        <iframe class="map" src={mapUrl} width="600" height="450" style="border:0;" allowfullscreen={true} loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Maps - Nairobi CBD"></iframe>
    </div>
</section>

<style>
/* Floating Music Notes */
.floating-icons {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
}

.floating {
    position: absolute;
    color: rgba(129, 193, 75, 0.5);
    animation: float 8s infinite ease-in-out alternate;
    text-shadow: 0 0 10px rgba(129, 193, 75, 0.8);
}

@keyframes float {
    0% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
    50% { transform: translateY(-20px) rotate(10deg); opacity: 1; }
    100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
}

/* Section Styling */
.street-talent {
    position: relative;
    padding: 60px 20px;
    text-align: center;
    color: white;
    overflow: hidden;
    background: transparent;
}

/* Title Styling */
.section-title {
    font-size: 2.8rem;
    font-weight: bold;
    color: #81C14B;    
    margin-bottom: 40px;
    position: relative;
    z-index: 2;
}

.section-subtitle {
    font-size: 1.8rem;
    font-weight: bold;
    color: #81C14B;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

/* Join Us Button */
.primary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    background: #81C14B;
    color: black;
    font-weight: bold;
    border-radius: 8px;
    transition: all 0.3s ease;
    margin: 20px auto;
    position: relative;
    z-index: 2;
    text-decoration: none;
    border: 2px solid transparent;
}

.primary-button:hover {
    background: #6A9A52;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.primary-button:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.button-content {
    display: flex;
    align-items: center;
}

/* Section spacing */
.video-section, .beat-section, .map-container {
    margin-top: 60px;
    position: relative;
    z-index: 2;
}

/* 🎥 Video Showcase */
.video-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.video-container {
    width: 320px;
    height: 180px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(129, 193, 75, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video-container:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(129, 193, 75, 0.4);
}

.video-container iframe {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.video-title {
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 500;
}

/* 🎵 Beat Player */
.beat-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 700px;
    margin: 0 auto;
}

.beat-player {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(129, 193, 75, 0.3);
    border-radius: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
}

.beat-player.playing {
    background: rgba(129, 193, 75, 0.1);
    border-color: rgba(129, 193, 75, 0.6);
    box-shadow: 0 0 15px rgba(129, 193, 75, 0.3);
}

.beat-info {
    display: flex;
    align-items: center;
    gap: 15px;
    flex: 1;
}

.play-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #81C14B;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;
}

.play-button:hover {
    background: #6A9A52;
    transform: scale(1.1);
}

.beat-details {
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 1;
    text-align: left;
}

.beat-title {
    font-weight: bold;
    font-size: 1.1rem;
}

.progress-container {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background: #81C14B;
    width: 0;
    border-radius: 4px;
    transition: width 0.1s linear;
}

.time-display {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
}

.download-button {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    text-decoration: none;
}

.download-button:hover {
    background: rgba(129, 193, 75, 0.3);
    color: #81C14B;
    transform: scale(1.1);
}

/* 📍 Map Styling */
.map-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.map {
    width: 100%;
    max-width: 700px;
    height: 400px;
    border-radius: 10px;
    border: 3px solid rgba(129, 193, 75, 0.3);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

.map:hover {
    box-shadow: 0 0 30px rgba(129, 193, 75, 0.2);
    border-color: rgba(129, 193, 75, 0.5);
}

/* Responsive Styles */
@media (max-width: 768px) {
    .section-title {
        font-size: 2.2rem;
    }
    
    .section-subtitle {
        font-size: 1.5rem;
    }
    
    .video-container {
        width: 100%;
        max-width: 320px;
    }
    
    .beat-player {
        padding: 10px;
    }
    
    .play-button, .download-button {
        width: 36px;
        height: 36px;
    }
    
    .beat-title {
        font-size: 1rem;
    }
    
    .map {
        height: 300px;
    }
}
</style>
