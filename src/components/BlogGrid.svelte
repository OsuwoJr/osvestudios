<script>
    export let blogPosts = [
        { title: "How to Market Your Music in 2025", image: "/blog1.jpg", link: "/blog/music-marketing-2025" },
        { title: "Best Free DAWs for Music Production", image: "/blog2.jpg", link: "/blog/free-daws" },
        { title: "Why NFTs are the Future of Music", image: "/blog3.jpg", link: "/blog/music-nfts" },
    ];
</script>

<section class="p-6">
    <h2 class="text-4xl font-bold text-white text-center mb-6">📝 Latest Articles</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {#each blogPosts as post}
            <a href={post.link} class="bg-gray-800 p-4 rounded-lg text-center hover:shadow-xl transition-all duration-300">
                <img src={post.image} alt={post.title} class="w-full h-48 object-cover rounded-lg">
                <p class="text-lg font-semibold mt-2">{post.title}</p>
            </a>
        {/each}
    </div>
</section>
