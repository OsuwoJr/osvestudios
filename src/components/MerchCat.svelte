<script lang="ts">
    export let cartItems: { name: string; price: number }[] = [];
    export let removeItem: (index: number) => void;
    export let checkout: () => void;
</script>

<section class="p-6 relative">
    <h2 class="text-4xl text-white text-center font-extrabold neon-text">🛒 Your Cart</h2>

    <div class="mt-6 p-6 rounded-lg bg-gradient-to-b from-black via-[#81C14B]/10 to-black border-2 border-[#81C14B] shadow-[0_0_20px_#81C14B]">
        {#if cartItems.length === 0}
            <p class="text-center text-lg text-[#81C14B] animate-pulse">🚀 Your cart is empty. Add some fire! 🔥</p>
        {:else}
            {#each cartItems as item, index}
                <div class="flex items-center justify-between bg-black/50 p-4 rounded-lg mt-2 shadow-[0_0_10px_#81C14B] animate-fade-in">
                    <p class="text-white font-semibold">{item.name} - <span class="text-[#81C14B]">{item.price} ETH</span></p>
                    <button on:click={() => removeItem(index)} class="text-red-500 hover:text-red-700 transition-all">✖</button>
                </div>
            {/each}

            <!-- Checkout Button -->
            <button on:click={checkout} class="mt-6 w-full px-6 py-3 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg shadow-lg text-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={cartItems.length === 0}>
                ✅ Proceed to Checkout
            </button>
        {/if}
    </div>
</section>
