<script lang="ts">
    import { onMount } from "svelte";

    let nftTracks = [
        { name: "Cyberwave Symphony", price: 0.8, image: "/images/nft1.jpg" },
        { name: "Neon Pulse", price: 1.2, image: "/images/nft2.jpg" },
        { name: "Bassline Galaxy", price: 0.5, image: "/images/nft3.jpg" },
        { name: "Digital Echo", price: 1.0, image: "/images/nft4.jpg" },
    ];

    async function fetchNFTTracks() {
        // Simulated API Call (Replace with real fetch if needed)
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    onMount(fetchNFTTracks);
</script>

<section class="nft-marketplace">
    <h2 class="section-title">🎼 **Exclusive NFT Music Collection**</h2>
    
    <div class="nft-grid">
        {#each nftTracks as track}
            <div class="nft-card">
                <img src={track.image} alt={track.name} class="nft-image" />
                <div class="nft-info">
                    <h3 class="track-name">{track.name}</h3>
                    <p class="track-price">{track.price} ETH</p>
                    <button class="buy-btn">🔗 Buy on OpenSea</button>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
/* 🎵 Futuristic NFT Marketplace Styling */
.nft-marketplace {
    padding: 60px 20px;
    text-align: center;
    color: white;
    background: linear-gradient(135deg, #111, #222);
}

/* Section Title */
.section-title {
    font-size: 2.8rem;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(129, 193, 75, 0.7);
    margin-bottom: 40px;
}

/* Grid Layout */
.nft-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-items: center;
}

/* NFT Card Styling */
.nft-card {
    background: #1a1a1a;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    box-shadow: 0px 0px 20px rgba(129, 193, 75, 0.3);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.nft-card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 30px rgba(129, 193, 75, 0.5);
}

/* NFT Image */
.nft-image {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;
}

/* NFT Info */
.track-name {
    font-size: 1.5rem;
    font-weight: bold;
}

.track-price {
    font-size: 1.2rem;
    color: #81C14B;
    margin: 5px 0;
}

/* Buy Button */
.buy-btn {
    background: #81C14B;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;
    border: none;
}

.buy-btn:hover {
    background: #6A9A52;
}
</style>
