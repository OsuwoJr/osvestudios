<script>
    let cartItems = [];

    function checkout() {
        console.log("Redirecting to payment gateway...");
    }
</script>

<section class="p-6">
    <h2 class="text-4xl text-white text-center">🛒 Your Cart</h2>
    {#each cartItems as item}
        <div class="bg-gray-900 p-4 mt-2 rounded-lg">
            <p>{item.name} - {item.price}</p>
        </div>
    {/each}

    <button on:click={checkout} class="mt-6 px-6 py-2 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg">
        Proceed to Checkout
    </button>
</section>
