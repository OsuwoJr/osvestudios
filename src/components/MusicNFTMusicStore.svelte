<script lang="ts">
    let nftTracks: { name: string; price: number }[] = [];

    async function fetchNFTTracks() {
        nftTracks = await fetch("/api/nfts").then(res => res.json());
    }
</script>

<section class="p-6">
    <h2 class="text-4xl text-white text-center">🎼 Exclusive NFT Music</h2>
    {#each nftTracks as track}
        <div>
            <p>{track.name} - {track.price} ETH</p>
            <button class="bg-[#81C14B] p-2 rounded-lg">Buy</button>
        </div>
    {/each}
</section>
