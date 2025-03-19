<script lang="ts">
    export let track = { 
        title: "One Day", 
        artist: "OsuwoJr", 
        src: "/1. ONE DAY.wav" 
    };

    let audio: HTMLAudioElement;

    function playPause() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
</script>

<section class="music-player">
    <div class="track-info">
        <h3>{track.title}</h3>
        <p>{track.artist}</p>
    </div>

    <button class="play-button" on:click={playPause}>▶️</button>

    <audio bind:this={audio}>
        <source src={track.src} type="audio/mpeg" />
    </audio>
</section>

<style>
/* Music Player */
.music-player {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.8);
    padding: 15px 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.6);
    transition: 0.3s ease-in-out;
    max-width: 400px;
    margin: auto;
}

.music-player:hover {
    box-shadow: 0px 0px 25px rgba(129, 193, 75, 0.8);
}

/* Track Info */
.track-info {
    flex: 1;
    color: white;
}

.track-info h3 {
    font-size: 1.2rem;
    margin: 0;
    color: #81C14B;
}

.track-info p {
    font-size: 0.9rem;
    margin: 5px 0 0;
    opacity: 0.8;
}

/* Play Button */
.play-button {
    background: #81C14B;
    color: black;
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.3s;
}

.play-button:hover {
    background: #6A9A52;
    transform: scale(1.1);
}
</style>
