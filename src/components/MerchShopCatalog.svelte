<script lang="ts">
    let products = [
        { name: "Troublers Hoodie", price: "Ksh.7,000", image: "/nonexclusivehoodie.webp" },
        { name: "Snapback Cap", price: "Ksh.2,000", image: "/snapback.webp" },
        { name: "Limited Edition Tee", price: "Ksh.5,000", image: "/limitedtee.webp" },
        { name: "Wristband", price: "Ksh.1,000", image: "/wristband.webp" },
    ];

    let showSoldOut = false;
    let selectedProduct = "";

    function handleSoldOut(productName: string) {
        selectedProduct = productName;
        showSoldOut = true;
    }

    function closeSoldOutModal() {
        showSoldOut = false;
    }
</script>

<section class="relative p-12 text-center">
    <!-- Glowing Title -->
    <h2 class="text-5xl font-extrabold neon-text">🛍️ Shop Our Collection</h2>
    <p class="text-lg text-gray-300 mt-2">Get the latest Troublers merch before it’s gone!</p>

    <!-- Product Grid -->
    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {#each products as product}
            <div class="relative bg-black/60 p-6 rounded-lg text-center border border-[#81C14B]/50 hover:shadow-[0_0_20px_#81C14B] transition-all duration-300 transform hover:-translate-y-1">
                <img src={product.image} alt={product.name} class="w-full rounded-lg hover:scale-105 transition-transform duration-300">
                <p class="text-xl font-semibold mt-4">{product.name}</p>
                <p class="text-[#81C14B] text-lg font-bold">{product.price}</p>
                <button on:click={() => handleSoldOut(product.name)} class="mt-4 px-6 py-2 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg transition-all duration-300 text-lg font-bold shadow-lg">
                    Add to Cart
                </button>
            </div>
        {/each}
    </div>
</section>

<!-- SOLD OUT MODAL -->
{#if showSoldOut}
    <div class="fixed inset-0 bg-black/80 flex justify-center items-center z-50 animate-fade-in">
        <div class="bg-[#222] text-white p-6 rounded-lg text-center shadow-[0_0_20px_#81C14B] w-96">
            <h2 class="text-3xl font-bold">🚨 Sold Out!</h2>
            <p class="mt-2">{selectedProduct} is no longer available. Stay tuned for restocks!</p>
            <button on:click={closeSoldOutModal} class="mt-4 px-6 py-2 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg transition-all duration-300">
                Close
            </button>
        </div>
    </div>
{/if}

<style>
    .neon-text {
        text-shadow: 0 0 10px #81C14B, 0 0 20px #81C14B, 0 0 40px #81C14B;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .animate-fade-in {
        animation: fadeIn 0.3s ease-out;
    }
</style>
