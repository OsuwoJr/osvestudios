<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    
    let isPlaying = false;
    let volume = 0.7;
    let isMuted = false;
    let previousVolume = 0.7;
    let progress = 0;
    let currentTime = '0:00';
    let duration = '0:00';
    let isMinimized = false;
    let trackInfo = {
        title: "Kisiwa Cha Upendo",
        artist: "theKenyanTroublers",
        cover: "/10.jpeg"
    };
    
    let audio: HTMLAudioElement;
    
    function togglePlay() {
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play().catch(err => console.error("Error playing audio:", err));
            }
            isPlaying = !isPlaying;
        }
    }
    
    function toggleMute() {
        if (audio) {
            if (isMuted) {
                audio.volume = previousVolume;
                volume = previousVolume;
            } else {
                previousVolume = audio.volume;
                audio.volume = 0;
                volume = 0;
            }
            isMuted = !isMuted;
        }
    }
    
    function updateVolume() {
        if (audio) {
            audio.volume = volume;
            if (volume === 0) {
                isMuted = true;
            } else {
                isMuted = false;
                previousVolume = volume;
            }
        }
    }
    
    function formatTime(seconds: number) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' + secs : secs}`;
    }
    
    function toggleMinimize() {
        isMinimized = !isMinimized;
    }
    
    onMount(() => {
        if (typeof window !== 'undefined') {
            audio = new Audio("/music/20.Kisiwa Cha Upendo.wav");
            audio.volume = volume;
            
            audio.addEventListener('timeupdate', () => {
                if (audio.duration) {
                    progress = (audio.currentTime / audio.duration) * 100;
                    currentTime = formatTime(audio.currentTime);
                    duration = formatTime(audio.duration);
                }
            });
            
            audio.addEventListener('ended', () => {
                isPlaying = false;
                progress = 0;
                currentTime = '0:00';
            });
        }
        
        return () => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        };
    });
</script>

<div class="player-container {isMinimized ? 'minimized' : ''}" 
     in:fly={{y: 50, duration: 500, delay: 800}} 
     style="z-index: 50;">
    
    <!-- Minimize/Expand Button -->
    <button class="minimize-btn" on:click={toggleMinimize} aria-label={isMinimized ? 'Expand player' : 'Minimize player'}>
        <i class="fas {isMinimized ? 'fa-chevron-up' : 'fa-chevron-down'}"></i>
    </button>
    
    <!-- Album Art and Track Info -->
    <div class="track-container">
        <img src={trackInfo.cover} alt={trackInfo.title} class="album-art" />
        <div class="track-details">
            <p class="track-title">{trackInfo.title}</p>
            <p class="track-artist">{trackInfo.artist}</p>
        </div>
    </div>
    
    <!-- Player Controls - Only visible when not minimized -->
    {#if !isMinimized}
        <div class="controls-container" transition:fade={{ duration: 200 }}>
            <!-- Progress Bar -->
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: {progress}%"></div>
                </div>
                <div class="time-display">
                    <span>{currentTime}</span>
                    <span>{duration}</span>
                </div>
            </div>
            
            <!-- Player Controls -->
            <div class="player-controls">
                <button class="control-btn" aria-label="Previous track">
                    <i class="fas fa-step-backward"></i>
                </button>
                
                <button class="play-btn" on:click={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
                    <i class="fas {isPlaying ? 'fa-pause' : 'fa-play'}"></i>
                </button>
                
                <button class="control-btn" aria-label="Next track">
                    <i class="fas fa-step-forward"></i>
                </button>
                
                <button class="volume-btn" on:click={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
                    <i class="fas {isMuted ? 'fa-volume-mute' : volume < 0.5 ? 'fa-volume-down' : 'fa-volume-up'}"></i>
                </button>
                
                <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01" 
                    bind:value={volume} 
                    on:input={updateVolume} 
                    class="volume-slider"
                    aria-label="Volume" 
                />
            </div>
        </div>
    {:else}
        <!-- Minimized Controls -->
        <div class="minimized-controls">
            <button class="play-btn-mini" on:click={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
                <i class="fas {isPlaying ? 'fa-pause' : 'fa-play'}"></i>
            </button>
        </div>
    {/if}
</div>

<style>
    .player-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(26, 26, 26, 0.9);
        backdrop-filter: blur(10px);
        border-radius: 12px;
        padding: 15px;
        width: 320px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(129, 193, 75, 0.3);
        border: 1px solid rgba(129, 193, 75, 0.2);
        transition: all 0.3s ease;
        color: white;
    }
    
    .player-container.minimized {
        width: auto;
        padding-right: 60px;
    }
    
    .minimize-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.3);
        border: none;
        color: white;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.2s ease;
    }
    
    .minimize-btn:hover {
        background: rgba(129, 193, 75, 0.5);
    }
    
    .track-container {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .album-art {
        width: 50px;
        height: 50px;
        border-radius: 6px;
        object-fit: cover;
    }
    
    .track-details {
        flex: 1;
        overflow: hidden;
    }
    
    .track-title {
        font-weight: bold;
        font-size: 14px;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .track-artist {
        font-size: 12px;
        color: #ccc;
        margin: 2px 0 0 0;
    }
    
    .controls-container {
        margin-top: 15px;
    }
    
    .progress-container {
        margin-bottom: 12px;
    }
    
    .progress-bar {
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        overflow: hidden;
        cursor: pointer;
    }
    
    .progress-fill {
        height: 100%;
        background: #81C14B;
        border-radius: 4px;
        transition: width 0.2s ease;
    }
    
    .time-display {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: #aaa;
        margin-top: 4px;
    }
    
    .player-controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .control-btn, .play-btn, .volume-btn {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        transition: transform 0.2s ease, color 0.2s ease;
        padding: 5px;
    }
    
    .play-btn {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: #81C14B;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
        font-size: 14px;
    }
    
    .play-btn:hover {
        background: #6A9A52;
        transform: scale(1.05);
    }
    
    .control-btn:hover, .volume-btn:hover {
        color: #81C14B;
        transform: scale(1.1);
    }
    
    .volume-slider {
        width: 60px;
        height: 4px;
        -webkit-appearance: none;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        outline: none;
    }
    
    .volume-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #81C14B;
        cursor: pointer;
    }
    
    .minimized-controls {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .play-btn-mini {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        transition: color 0.2s ease;
        padding: 5px;
        margin-left: 10px;
    }
    
    .play-btn-mini:hover {
        color: #81C14B;
    }
    
    @media (max-width: 480px) {
        .player-container {
            width: calc(100% - 40px);
            left: 20px;
            right: 20px;
        }
    }
</style>
