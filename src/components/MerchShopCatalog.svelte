<script>
    let products = [
        { name: "Troublers Hoodie", price: "$49.99", image: "/hoodie.png" },
        { name: "Snapback Cap", price: "$29.99", image: "/cap.png" },
        { name: "Limited Edition Tee", price: "$34.99", image: "/tshirt.png" },
        { name: "Wristband", price: "$9.99", image: "/wristband.png" },
    ];
</script>

<section class="p-6">
    <h2 class="text-4xl font-bold text-white text-center mb-6">🛍️ Shop Our Collection</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {#each products as product}
            <div class="bg-gray-800 p-4 rounded-lg text-center">
                <img src={product.image} alt={product.name} class="w-full">
                <p class="text-lg font-semibold mt-2">{product.name}</p>
                <p class="text-[#81C14B] font-bold">{product.price}</p>
                <button class="mt-2 px-4 py-2 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg">
                    Add to Cart
                </button>
            </div>
        {/each}
    </div>
</section>
