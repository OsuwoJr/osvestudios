<script lang="ts">
    import AudioPlayer from "./BeatAudioPlayer.svelte";
    export let beat;
</script>

<div class="beat-card">
    <!-- Beat Details -->
    <div class="beat-info">
        <h3>{beat.title}</h3>
        <p class="beat-meta">🔥 BPM: {beat.bpm} | 🎵 Key: {beat.key}</p>
        <p class="beat-price">💰 ${beat.price}</p>
    </div>

    <!-- Audio Player -->
    <AudioPlayer {beat} />

    <!-- Buy Button -->
    <button class="purchase-btn">🛒 Buy Now</button>
</div>

<style>
/* Beat Card Styling */
.beat-card {
    background: linear-gradient(145deg, #1a1a1a, #292929);
    padding: 25px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.6);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
}

/* Hover Effect - Slight 3D Lift */
.beat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 0px 20px rgba(129, 193, 75, 0.9);
}

/* Beat Title */
h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #81C14B;
    margin-bottom: 10px;
}

/* Beat Details */
.beat-meta {
    font-size: 1rem;
    opacity: 0.8;
    color: #ddd;
    margin-bottom: 5px;
}

/* Price Styling */
.beat-price {
    font-size: 1.1rem;
    font-weight: bold;
    color: #FFD700;
    margin-bottom: 15px;
}

/* Purchase Button */
.purchase-btn {
    background: #81C14B;
    color: black;
    font-size: 1rem;
    font-weight: bold;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
}

/* Button Hover Effect */
.purchase-btn:hover {
    background: #6A9A52;
    transform: scale(1.05);
    box-shadow: 0px 0px 10px rgba(129, 193, 75, 0.8);
}

/* Mobile Optimization */
@media (max-width: 600px) {
    .beat-card {
        padding: 20px;
    }

    h3 {
        font-size: 1.3rem;
    }

    .beat-meta {
        font-size: 0.9rem;
    }

    .beat-price {
        font-size: 1rem;
    }

    .purchase-btn {
        font-size: 0.9rem;
        padding: 10px 16px;
    }
}
</style>
