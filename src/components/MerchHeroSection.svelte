<script>
    let featuredProduct = {
        name: "TheKenyanTroublers Exclusive Hoodie",
        price: "Ksh.10,000",
        image: "/exclusivehoodie.webp",
    };
</script>

<section class="relative text-white text-center py-20">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-r from-black via-[#81C14B]/30 to-black opacity-80"></div>

    <h1 class="text-5xl font-extrabold z-10">🔥 Exclusive Merch Drop!</h1>
    <p class="text-xl mt-4">Limited Stock Available - Get Yours Now</p>

    <!-- Featured Product -->
    <div class="mt-6">
        <img src={featuredProduct.image} alt={featuredProduct.name} class="mx-auto w-64">
        <p class="text-lg mt-2">{featuredProduct.name} - <b>{featuredProduct.price}</b></p>
        <button class="mt-4 px-6 py-2 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg transition-all duration-300">
            Buy Now
        </button>
    </div>
</section>
