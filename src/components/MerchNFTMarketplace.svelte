<script>
    let nftItems = [
        { name: "Exclusive Digital Hoodie", price: "0.03 ETH", image: "/nft-hoodie.png" },
        { name: "Gold Edition Tee", price: "0.05 ETH", image: "/nft-tee.png" },
    ];
</script>

<section class="p-6">
    <h2 class="text-4xl text-white text-center">🎨 Limited Edition NFT Merch</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {#each nftItems as item}
            <div class="bg-gray-900 p-4 rounded-lg text-center">
                <img src={item.image} alt={item.name} class="w-full">
                <p class="text-lg font-semibold mt-2">{item.name}</p>
                <p class="text-[#81C14B] font-bold">{item.price}</p>
                <button class="mt-2 px-4 py-2 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg">
                    Buy NFT
                </button>
            </div>
        {/each}
    </div>
</section>
