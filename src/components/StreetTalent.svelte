<script lang="ts">
    import Button from "./Button.svelte";
    import { onMount } from "svelte";

    // Sample freestyle video clips
    let freestyles = [
        { title: "Freestyle 1", video: "https://www.youtube.com/embed/-7ZwxFQ-M68?si=5Dm6SMbBPicdqZk5" },
        { title: "Freestyle 2", video: "https://www.youtube.com/embed/8uEI-JGkpF0?si=nVkncu654BfeFGxg" },
        { title: "Freestyle 3", video: "https://www.youtube.com/embed/DigqSR06W3c?si=1PP7ikHWfjGwLWkH" },
    ];

    // Sample beat previews
    let beats = [
        { title: "BoomBap", src: "/beats/1.BOOM BAP.mp3" },
        { title: "Drill", src: "/beats/2.DRILL.mp3" },
        { title: "Trap", src: "/beats/3.TRAP.mp3" },
        { title: "Dancehall", src: "/beats/4.DANCEHALL.mp3" },
    ];

    // Google Maps Embed URL (Replace with your real location)
    let mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.44385662015!2d36.8188!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4ff7463fd%3A0x94a3f2c41b6a8238!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1619876543210";

    // Play preview beat
    let currentTrack: HTMLAudioElement | null = null;
   
    function playPreview(src: string) {
        if (currentTrack) {
            currentTrack.pause();
        }
        currentTrack = new Audio(src);
        currentTrack.play();
    }
</script>

<section class="street-talent">
    <h2 class="section-title">🔥 The Troublers Street Talent</h2>
    <p class="mt-4 text-lg">Discover and support the raw talents of Nairobi’s streets.</p>
    <Button text="Join Us" link="https://wa.me/254790932575" />


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
    <div class="video-grid mt-10">
        {#each freestyles as freestyle}
            <div class="video-container">
                <iframe src={freestyle.video} frameborder="0" allowfullscreen title={freestyle.title}></iframe>
                <p class="video-title">{freestyle.title}</p>
            </div>
        {/each}
    </div>

    <!-- 🎵 Interactive Beat Selection -->
    <div class="beat-section mt-10">
        <h3 class="text-2xl font-semibold text-white">🎧 Listen to the Beats</h3>
        <div class="beat-list">
            {#each beats as beat}
                <button class="beat-button" on:click={() => playPreview(beat.src)}>{beat.title}</button>
            {/each}
        </div>
    </div>

    <!-- 📍 Live Location Map -->
    <div class="map-container mt-10">
        <h3 class="text-2xl font-semibold text-white">📍 Next Meetup Spot</h3>
        
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

/* 🎥 Video Showcase */
.video-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    position: relative;
    z-index: 2;
}

.video-container {
    width: 320px;
    height: 180px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(129, 193, 75, 0.5);
    transition: transform 0.3s;
}

.video-container:hover {
    transform: scale(1.05);
}

.video-container iframe {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.video-title {
    margin-top: 10px;
    font-size: 1rem;
}

/* 🎵 Beat Selection */
.beat-section {
    text-align: center;
    position: relative;
    z-index: 2;
}

.beat-list {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 10px;
}

.beat-button {
    background: #81C14B;
    color: black;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 1rem;
    transition: 0.3s;
    border: none;
    cursor: pointer;
}

.beat-button:hover {
    background: #6A9A52;
    box-shadow: 0 0 10px #6A9A52;
}

/* 📍 Live Location Map */
.map-container {
    text-align: center;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
}

.map {
    width: 100%;
    max-width: 600px;
    height: 400px;
    border-radius: 10px;
    margin-top: 10px;
    box-shadow: 0 0 10px rgba(129, 193, 75, 0.5);
}
</style>
