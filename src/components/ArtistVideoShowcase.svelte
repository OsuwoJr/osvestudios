<script lang="ts">
    export let videoUrl = "https://www.youtube.com/embed/lYSyUbsXnbs?si=hT4mP0muf2MBVLtO";
</script>

<section class="video-container">
    <!-- Floating Glow Particles -->
    <div class="floating-glows">
        {#each Array(30) as _, i}
            <span class="glow-dot" style="
                left: {Math.random() * 100}vw; 
                top: {Math.random() * 100}vh; 
                animation-duration: {Math.random() * 8 + 5}s;
                opacity: {Math.random() * 0.6 + 0.2};">
            </span>
        {/each}
    </div>

    <div class="video-wrapper">
        <iframe 
            src={videoUrl} 
            frameborder="0" 
            allowfullscreen 
            title="Artist Video"
            class="video-frame">
        </iframe>
    </div>
</section>

<style>
/* Video Section */
.video-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6));
    border-top: 2px solid #81C14B;
    border-bottom: 2px solid #81C14B;
    overflow: hidden;
}

/* Floating Glow Particles */
.floating-glows {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
}

.glow-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgba(129, 193, 75, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(129, 193, 75, 0.8);
    animation: float 8s infinite ease-in-out alternate;
}

@keyframes float {
    0% { transform: translateY(0px) scale(1); opacity: 0.5; }
    50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
    100% { transform: translateY(0px) scale(1); opacity: 0.5; }
}

/* Wrapper with Hover Effect */
.video-wrapper {
    position: relative;
    width: 80%;
    max-width: 800px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.6);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    z-index: 2;
}

.video-wrapper:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 25px rgba(129, 193, 75, 0.8);
}

/* Responsive Iframe */
.video-frame {
    width: 100%;
    height: 450px;
    border-radius: 15px;
}

/* Responsive */
@media (max-width: 768px) {
    .video-frame {
        height: 300px;
    }
}
</style>
