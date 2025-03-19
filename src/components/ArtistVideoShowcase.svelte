<script lang="ts">
    export let videoUrl = "https://www.youtube.com/embed/lYSyUbsXnbs?si=hT4mP0muf2MBVLtO";
</script>

<section class="video-container">
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6));
    border-top: 2px solid #81C14B;
    border-bottom: 2px solid #81C14B;
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
