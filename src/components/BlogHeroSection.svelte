<script>
    export let featuredPost = {
        title: "The Future of Afrobeat: AI & Blockchain Integration",
        image: "/blog-hero.jpg",
        link: "/blog/afrobeat-future",
    };
</script>

<section class="relative text-white text-center py-20">
    <div class="absolute inset-0 bg-gradient-to-r from-black via-[#81C14B]/30 to-black opacity-80"></div>
    <h1 class="text-5xl font-extrabold z-10">🎵 The Future of Music Blogging</h1>
    <p class="text-xl mt-4">Industry Insights, Trends, & Pro Tips</p>

    <div class="mt-6">
        <a href={featuredPost.link} class="block">
            <img src={featuredPost.image} alt={featuredPost.title} class="mx-auto w-full max-w-3xl rounded-lg shadow-lg">
        </a>
        <p class="text-lg mt-2 font-semibold">{featuredPost.title}</p>
        <a href={featuredPost.link} class="mt-4 px-6 py-2 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg transition-all duration-300">
            Read More
        </a>
    </div>
</section>
