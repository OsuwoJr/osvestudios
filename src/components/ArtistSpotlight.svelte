<script lang="ts">
    export let spotlightArtist = { 
        name: "OsuwoJr", 
        bio: "OsuwoJr is a multigenre, multilingual artist, musician, and producer.", 
        image: "/OsuwoJr.png" 
    };
</script>

<section class="spotlight">
    <div class="spotlight-content">
        <div class="image-container">
            <img src={spotlightArtist.image} alt={spotlightArtist.name} class="artist-image"/>
            <div class="glow-overlay"></div>
        </div>
        <div class="info">
            <h2>{spotlightArtist.name}</h2>
            <p>{spotlightArtist.bio}</p>
            <a href={`/artists/${spotlightArtist.name}`} class="button">🎧 Discover</a>
        </div>
    </div>
</section>

<style>
/* Spotlight Section */
.spotlight {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    padding: 60px 20px;
    color: white;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6));
    border-top: 2px solid #81C14B;
    border-bottom: 2px solid #81C14B;
}

/* Content Wrapper */
.spotlight-content {
    display: flex;
    align-items: center;
    gap: 40px;
    max-width: 1200px;
    width: 100%;
}

/* Image Container */
.image-container {
    position: relative;
    width: 350px;
    height: 350px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.6);
}

.artist-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: transform 0.3s ease-in-out;
}

.image-container:hover .artist-image {
    transform: scale(1.05);
}

/* Glow Effect */
.glow-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(129, 193, 75, 0.5) 10%, transparent 70%);
    transform: translate(-50%, -50%);
    border-radius: 20px;
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
}

.image-container:hover .glow-overlay {
    opacity: 1;
}

/* Artist Info */
.info {
    max-width: 500px;
}

.info h2 {
    font-size: 3rem;
    font-weight: bold;
    background: linear-gradient(90deg, #81C14B, #FFD700);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
}

.info p {
    font-size: 1.2rem;
    opacity: 0.8;
    margin-bottom: 20px;
}

/* Button */
.button {
    background: #81C14B;
    padding: 12px 25px;
    border-radius: 10px;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    transition: 0.3s;
    display: inline-block;
    color: black;
}

.button:hover {
    background: #6A9A52;
    box-shadow: 0px 0px 10px #81C14B;
    transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
    .spotlight-content {
        flex-direction: column;
        text-align: center;
    }

    .image-container {
        width: 280px;
        height: 280px;
    }

    .info h2 {
        font-size: 2.5rem;
    }

    .info p {
        font-size: 1rem;
    }
}
</style>
