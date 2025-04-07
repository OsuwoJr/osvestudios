<script>
    let featuredProduct = {
        name: "TheKenyanTroublers Exclusive Hoodie",
        price: "Ksh.100,000",
        image: "/exclusivehoodie.webp",
    };

    // Reactive modal logic
    let showSoldOut = false;
    let selectedProduct = "";
    let showFeatures = false;

    // Show modal on Buy Now
    function showSoldOutAlert() {
        selectedProduct = featuredProduct.name;
        showSoldOut = true;
    }

    // Close modal
    function closeSoldOutModal() {
        showSoldOut = false;
    }

    // Toggle feature details
    function toggleFeatures() {
        showFeatures = !showFeatures;
    }
</script>

<!-- MAIN SECTION -->
<section class="relative text-white text-center py-20 z-10">
    <!-- Background Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-black via-[#81C14B]/30 to-black opacity-80 z-0"></div>

    <h1 class="text-6xl font-extrabold tracking-wider neon-text relative z-10">🔥 Exclusive Merch Drop!</h1>
    <p class="text-xl mt-4 font-light relative z-10">Limited Stock Available - Get Yours Now</p>

    <!-- Product Display -->
    <div class="mt-8 relative inline-block p-4 rounded-lg border-4 border-[#81C14B] bg-black/40 shadow-[0_0_25px_#81C14B] z-10">
        <img src={featuredProduct.image} alt={featuredProduct.name} class="mx-auto w-64 rounded-md">
    </div>

    <p class="text-lg mt-4 font-semibold relative z-10">
        {featuredProduct.name} - <b class="text-[#81C14B]">{featuredProduct.price}</b>
    </p>

    <!-- Buy Button -->
    <button
        on:click={showSoldOutAlert}
        class="mt-6 px-6 py-3 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg shadow-lg transition-all duration-300 text-lg font-bold active:scale-95 relative z-10">
        Buy Now
    </button>

    <!-- Toggle Features -->
    <div class="mt-6 relative z-10">
        <button on:click={toggleFeatures} class="text-[#81C14B] text-lg underline hover:text-white transition-all">
            {showFeatures ? "🔼 Hide Features" : "🔽 Why This Hoodie is Special?"}
        </button>

        {#if showFeatures}
            <div class="mt-4 p-6 bg-black/60 text-left text-sm md:text-base rounded-lg border border-[#81C14B] shadow-lg animate-slide-down">
                <h3 class="text-xl font-bold text-[#81C14B]">🖌️ Hoodie Design Concept</h3>
                <ul class="mt-2 space-y-2">
                    <li><b>🎵 Sound Wave Visualizer:</b> Glow-in-the-dark print on chest.</li>
                    <li><b>📡 QR Code Feature:</b> Scan to unlock exclusive NFT music.</li>
                    <li><b>🎧 Futuristic DJ Mask:</b> Representing the digital music revolution.</li>
                    <li><b>🔗 Chains Breaking into Pixels:</b> Symbolizing breaking limits through Web3.</li>
                    <li><b>🕶️ Cyberpunk Typography:</b> “We Are The Future of Music” on back.</li>
                    <li><b>💡 Blockchain & Waveform Sleeves:</b> One sleeve has blockchain patterns, the other has a music waveform.</li>
                    <li><b>🔥 Wearable NFT:</b> Comes with an exclusive hidden beat inside pocket QR.</li>
                    <li><b>💎 Avocado-Green Accents:</b> Representing theKenyanTroublers' futuristic brand identity.</li>
                </ul>
            </div>
        {/if}
    </div>
</section>

<!-- MODAL -->
{#if showSoldOut}
    <div class="fixed inset-0 bg-black/80 flex justify-center items-center z-50 animate-fade-in">
        <div class="bg-[#222] text-white p-6 rounded-lg text-center shadow-[0_0_20px_#81C14B] w-96">
            <h2 class="text-3xl font-bold">🚨 Sold Out!</h2>
            <p class="mt-2">{selectedProduct} is no longer available. Stay tuned for the next release!</p>
            <button
                on:click={closeSoldOutModal}
                class="mt-4 px-6 py-2 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg transition-all duration-300 active:scale-95">
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

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-slide-down {
        animation: slideDown 0.3s ease-out;
    }
</style>
