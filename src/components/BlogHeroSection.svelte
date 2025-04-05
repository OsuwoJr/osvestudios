<script lang="ts">
    export let featuredPost = {
        title: "Music, AI & Blockchain Integration",
        image: "/blog-hero.jpg",
        link: "/blog/afrobeat-future",
    };

    // Smooth scrolling function
    function scrollToArticles() {
        const target = document.getElementById("articles-section");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
</script>

<section class="relative text-white text-center py-32 overflow-hidden">
    <!-- Animated Background with Glitch Effect -->
    <div class="absolute inset-0 bg-black">
        <div class="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#81C14B]/30 to-[#000000] opacity-90 animate-bg-glow"></div>
        <div class="absolute top-0 left-0 w-full h-full bg-grid opacity-10"></div>
    </div>

    <!-- Floating Neon Particles -->
    <div class="absolute inset-0 pointer-events-none">
        <div class="floating-light top-10 left-10"></div>
        <div class="floating-light bottom-20 right-20"></div>
    </div>

    <!-- Hero Content -->
    <div class="relative z-10">
        <h1 class="text-2xl md:text-5xl font-extrabold neon-text tracking-wide drop-shadow-xl">
            <span class="glitch" data-text="🎵 TheKenyanTroublers">🎵 TheKenyanTroublers</span>
        </h1>
        <p class="text-xl md:text-3xl mt-4 font-light opacity-80 max-w-3xl mx-auto">
            Pioneering <span class="neon-text font-bold">Music, AI, & Blockchain</span> for a new era of artists.
        </p>

        <!-- Mission & Vision -->
        <div class="mt-10 max-w-4xl mx-auto p-6 bg-black/70 rounded-xl shadow-xl backdrop-blur-md transform hover:scale-105 transition-transform duration-500">
            <h2 class="text-3xl font-semibold text-[#81C14B] glitch" data-text="🌍 Our Mission">🌍 Our Mission</h2>
            <p class="text-lg opacity-90 mt-3">
                Revolutionizing the <span class="neon-text font-bold">music industry</span>  by merging <span class="neon-text font-bold">AI, blockchain, and authentic talent,</span> giving artists <span class="neon-text font-bold">full creative & financial control.</span>
            </p>

            <h2 class="text-3xl font-semibold text-[#81C14B] glitch mt-8" data-text="🚀 Our Vision">🚀 Our Vision</h2>
            <p class="text-lg opacity-90 mt-3">
                Building the <span class="neon-text font-bold">most influential independent music platform, </span>where <span class="neon-text font-bold">innovation meets pure artistic expression</span>.
            </p>
        </div>
    <!-- CTA Buttons -->
    <div class="mt-6 flex flex-wrap justify-center gap-6">
            <a href={featuredPost.link} class="px-8 py-3 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg text-lg font-bold shadow-lg transition-all duration-300 tracking-wide
                transform group-hover:scale-105 active:scale-95">
                🚀 Read More
            </a>

            <!-- Scroll Down Button -->
            <button on:click={scrollToArticles} class="px-8 py-3 bg-transparent border-2 border-[#81C14B] hover:bg-[#81C14B]/20 text-[#81C14B] rounded-lg text-lg font-bold shadow-lg transition-all duration-300 tracking-wide
                transform hover:scale-105 active:scale-95 flex items-center gap-2">
                ⬇ Scroll to Articles
            </button>
        </div>
    </div>
</section>

<!-- Targeted Scroll Section -->


<style>
    /* Glowing Neon Effect */
    .neon-text {
        text-shadow: 0 0 15px #81C14B, 0 0 30px #81C14B, 0 0 45px #81C14B;
    }

    /* Glitch Effect */
    .glitch {
        position: relative;
        display: inline-block;
        font-weight: bold;
        text-transform: uppercase;
        animation: glitch 1s infinite;
    }

    .glitch::before, .glitch::after {
        content: attr(data-text);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.8;
    }

    .glitch::before {
        left: 2px;
        text-shadow: -2px 0 red;
        animation: glitch1 0.6s infinite linear alternate-reverse;
    }

    .glitch::after {
        left: -2px;
        text-shadow: -2px 0 blue;
        animation: glitch2 0.6s infinite linear alternate-reverse;
    }

    @keyframes glitch1 {
        0% { clip-path: polygon(0% 45%, 100% 45%, 100% 50%, 0% 50%); }
        100% { clip-path: polygon(0% 48%, 100% 48%, 100% 53%, 0% 53%); }
    }

    @keyframes glitch2 {
        0% { clip-path: polygon(0% 55%, 100% 55%, 100% 60%, 0% 60%); }
        100% { clip-path: polygon(0% 58%, 100% 58%, 100% 63%, 0% 63%); }
    }

    /* Background Glow Animation */
    @keyframes bgGlow {
        0% { opacity: 0.8; }
        50% { opacity: 0.95; }
        100% { opacity: 0.8; }
    }

    .animate-bg-glow {
        animation: bgGlow 3s infinite alternate ease-in-out;
    }

    /* Floating Neon Particles */
    .floating-light {
        width: 30px;
        height: 30px;
        background: radial-gradient(circle, #81C14B 0%, transparent 80%);
        position: absolute;
        border-radius: 50%;
        animation: floaty 6s infinite ease-in-out;
    }

    @keyframes floaty {
        0% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
        50% { transform: translateY(-20px) translateX(20px); opacity: 1; }
        100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
    }

    /* Subtle Grid Background */
    .bg-grid {
        background-image: linear-gradient(rgba(129, 193, 75, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(129, 193, 75, 0.1) 1px, transparent 1px);
        background-size: 50px 50px;
    }
</style>
