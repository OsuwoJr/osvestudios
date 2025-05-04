<script lang="ts">
    interface Product {
        name: string;
        price: string;
        image: string;
        status: "available" | "sold-out" | "upcoming";
        whatsapp?: string;
    }

    let products: Product[] = [
        { 
            name: "Troublers Hoodie", 
            price: "Ksh.7,000", 
            image: "/nonexclusivehoodie.webp",
            status: "available",
            whatsapp: "254790932575" // Real WhatsApp number
        },
        { 
            name: "Snapback Cap", 
            price: "Ksh.2,000", 
            image: "/snapback.webp",
            status: "sold-out"
        },
        { 
            name: "Limited Edition Tee", 
            price: "Ksh.5,000", 
            image: "/limitedtee.webp",
            status: "available",
            whatsapp: "254790932575" // Real WhatsApp number
        },
        { 
            name: "Wristband", 
            price: "Ksh.1,000", 
            image: "/wristband.webp",
            status: "upcoming"
        },
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

    function openWhatsApp(whatsappNumber: string, productName: string) {
        const message = encodeURIComponent(`Hi! I'm interested in purchasing the ${productName} from your website.`);
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
    }
</script>

<section class="relative p-12 text-center">
    <!-- Glowing Title -->
    <h2 class="text-5xl font-extrabold neon-text">🛍️ Physical Merch</h2>
    <p class="text-lg text-gray-300 mt-2">Get the latest Troublers merch before it's gone!</p>

    <!-- Product Grid -->
    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {#each products as product}
            <div class="relative bg-black/60 p-6 rounded-lg text-center border border-[#81C14B]/50 hover:shadow-[0_0_20px_#81C14B] transition-all duration-300 transform hover:-translate-y-1">
                <div class="relative">
                    <img src={product.image} alt={product.name} class="w-full rounded-lg hover:scale-105 transition-transform duration-300">
                    
                    <!-- Status Badge -->
                    {#if product.status === "sold-out"}
                        <div class="absolute top-0 right-0 bg-red-600 text-white py-1 px-4 rounded-bl-lg font-bold transform rotate-0 shadow-lg">
                            SOLD OUT
                        </div>
                    {:else if product.status === "upcoming"}
                        <div class="absolute top-0 right-0 bg-blue-600 text-white py-1 px-4 rounded-bl-lg font-bold transform rotate-0 shadow-lg">
                            COMING SOON
                        </div>
                    {/if}
                </div>
                
                <p class="text-xl font-semibold mt-4">{product.name}</p>
                <p class="text-[#81C14B] text-lg font-bold">{product.price}</p>
                
                <!-- Different buttons based on product status -->
                {#if product.status === "available" && product.whatsapp}
                    <button 
                        on:click={() => openWhatsApp(product.whatsapp!, product.name)} 
                        class="mt-4 px-6 py-2 bg-[#25D366] hover:bg-[#128C7E] rounded-lg transition-all duration-300 text-lg font-bold shadow-lg flex items-center justify-center mx-auto">
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                        </svg>
                        Order on WhatsApp
                    </button>
                {:else if product.status === "sold-out"}
                    <button on:click={() => handleSoldOut(product.name)} class="mt-4 px-6 py-2 bg-gray-500 cursor-not-allowed rounded-lg transition-all duration-300 text-lg font-bold shadow-lg opacity-80">
                        Sold Out
                    </button>
                {:else if product.status === "upcoming"}
                    <button class="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 text-lg font-bold shadow-lg opacity-80">
                        Coming Soon
                    </button>
                {/if}
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
