<script lang="ts">
    import MerchCat from './MerchCat.svelte'; // Import the cart component

    let nftItems = [
        { name: "Exclusive Digital Hoodie", price: 0.03, image: "/exclusivedigitalhoodie.webp" },
        { name: "Gold Edition Tee", price: 0.05, image: "/goldeditiontee.webp" },
    ];

    let cartItems: { name: string; price: number }[] = [];
    
    function addToCart(item: { name: string; price: number }) {
        cartItems = [...cartItems, item];
    }

    function removeItem(index: number) {
        cartItems.splice(index, 1);
        cartItems = [...cartItems]; // Ensure reactivity
    }

    function checkout() {
        if (cartItems.length === 0) return;
        console.log("Redirecting to payment gateway...");
    }
</script>

<section class="p-10 text-center">
    <h2 class="text-5xl font-extrabold neon-text">🎨 Limited Edition NFT Merch</h2>
    <p class="text-lg text-gray-300 mt-2">Own a piece of digital fashion linked to exclusive perks! 🔗</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
        {#each nftItems as item}
            <div class="relative nft-card">
                <div class="nft-border">
                    <div class="p-6 rounded-xl text-center nft-inner">
                        <img src={item.image} alt={item.name} class="w-full rounded-lg shadow-lg">
                        <p class="text-xl font-semibold mt-3">{item.name}</p>
                        <p class="text-[#81C14B] font-bold flex items-center justify-center gap-2">
                            <img src="/eth-logo.webp" alt="ETH" class="w-5 h-5"> {item.price}
                        </p>
                        
                        <!-- Add to Cart Button -->
                        <button on:click={() => addToCart(item)} class="mt-4 px-6 py-3 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg transition-transform duration-300 active:scale-95">
                            🛒 Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>

<!-- 🛒 Link to MerchCat (Cart) -->
<MerchCat {cartItems} {removeItem} {checkout} />

<style>
    .neon-text {
        text-shadow: 0 0 10px #81C14B, 0 0 20px #81C14B, 0 0 40px #81C14B;
    }

    .nft-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .nft-card:hover {
        transform: scale(1.05) rotateX(5deg) rotateY(-5deg);
    }

    .nft-border {
        background: linear-gradient(135deg, #81C14B, #B89B5E);
        padding: 4px;
        border-radius: 15px;
    }

    .nft-inner {
        background: linear-gradient(135deg, #B89B5E, #E5C07B);
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 0 15px rgba(255, 223, 130, 0.3);
    }

    .nft-card:hover .nft-border {
        box-shadow: 0 0 25px #81C14B;
    }
</style>
