<script>
    export let blogPosts = [
        { title: "How to Market Your Music in 2025", image: "/blog1.jpg", link: "/blog/music-marketing-2025" },
        { title: "Best Free DAWs for Music Production", image: "/blog2.jpg", link: "/blog/free-daws" },
        { title: "Why NFTs are the Future of Music", image: "/blog3.jpg", link: "/blog/music-nfts" },
    ];
</script>

<section class="p-10 text-center">
    <h2 class="text-5xl font-extrabold neon-text">📝 Latest Industry Insights</h2>
    <p class="text-lg text-gray-300 mt-2">Stay ahead with expert tips & trends! 🚀</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {#each blogPosts as post}
            <a href={post.link} class="relative overflow-hidden rounded-xl shadow-lg group transition-all duration-300">
                <!-- Background Image with Overlay -->
                <div class="relative w-full h-64 rounded-xl">
                    <img src={post.image} alt={post.title} class="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all"></div>
                </div>

                <!-- Text Content -->
                <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-[#81C14B]/10 to-transparent">
                    <p class="text-white text-lg font-semibold">{post.title}</p>
                </div>

                <!-- Hover Effects -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span class="px-4 py-2 text-sm font-bold text-black bg-[#81C14B] rounded-lg">🔗 Read More</span>
                </div>
            </a>
        {/each}
    </div>
</section>

<style>
    .neon-text {
        text-shadow: 0 0 10px #81C14B, 0 0 20px #81C14B, 0 0 40px #81C14B;
    }
</style>
