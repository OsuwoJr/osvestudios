<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    
    // Post metadata
    export let title = "Why NFTs Are the Future of Music in 2025";
    export let image = "/blog3.jpg";
    export let author = "Sarah Wambui";
    export let authorImage = "/team/member3.jpg";
    export let authorTitle = "Blockchain Specialist";
    export let date = "March 15, 2025";
    export let readTime = "7 min read";
    export let category = "Blockchain";
    export let tags = ["nft", "blockchain", "crypto", "royalties"];
    
    // Table of contents
    const tableOfContents = [
        { id: "intro", title: "Introduction" },
        { id: "nft-albums", title: "NFT Albums & Exclusive Content" },
        { id: "blockchain-royalties", title: "Blockchain Royalties" },
        { id: "fan-engagement", title: "NFTs and Fan Engagement" },
        { id: "conclusion", title: "Final Thoughts" }
    ];
    
    // Related posts
    const relatedPosts = [
        { 
            title: "How to Market Your Music in 2025", 
            image: "/blog1.jpg", 
            link: "/blog/music-marketing-2025",
            excerpt: "Discover cutting-edge marketing strategies for the future.",
        },
        { 
            title: "Best Free DAWs for Music Production", 
            image: "/blog2.jpg", 
            link: "/blog/free-daws",
            excerpt: "Powerful production tools that won't break the bank.",
        }
    ];
    
    // Social sharing
    function shareOnTwitter() {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(`${title} - via @KenyanTroublers`);
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    }
    
    function shareOnFacebook() {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    }
    
    function shareOnLinkedIn() {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, '_blank');
    }
    
    function copyLink() {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert("Link copied to clipboard!");
        });
    }
    
    // Dynamic progress tracking
    let progress = 0;
    let activeSection = "intro";
    
    onMount(() => {
        const updateProgress = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.body.offsetHeight;
            
            // Calculate reading progress
            progress = (scrollPosition / (docHeight - windowHeight)) * 100;
            
            // Update active TOC section
            tableOfContents.forEach(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 0) {
                        activeSection = section.id;
                    }
                }
            });
        };
        
        window.addEventListener("scroll", updateProgress);
        
        return () => {
            window.removeEventListener("scroll", updateProgress);
        };
    });
</script>

<svelte:head>
    <title>{title} | theKenyanTroublers Blog</title>
    <meta name="description" content="Learn how blockchain technology and NFTs are revolutionizing the music industry for both artists and fans." />
    <meta property="og:title" content={title} />
    <meta property="og:description" content="Learn how blockchain technology and NFTs are revolutionizing the music industry for both artists and fans." />
    <meta property="og:image" content={image} />
    <meta property="og:url" content="https://thekenyantroublers.com/blog/music-nfts" />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<section class="bg-black text-white min-h-screen">
    <!-- Reading Progress Bar -->
    <div class="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div class="h-1 bg-[#81C14B]" style="width: {progress}%"></div>
    </div>
    
    <div class="container mx-auto p-4 md:p-8">
        <div class="mb-8">
            <a href="/blog" class="inline-flex items-center text-[#81C14B] hover:underline">
                <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
            </a>
        </div>
        
        <!-- Article Layout with Sidebar -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <!-- Main Content (3/4 width) -->
            <div class="lg:col-span-3">
                <!-- Article Header -->
                <header class="mb-10">
                    <div class="flex flex-wrap items-center gap-3 mb-6">
                        <span class="px-3 py-1 bg-[#81C14B] text-black text-sm font-semibold rounded-full">{category}</span>
                        {#each tags as tag}
                            <span class="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full hover:bg-gray-700 transition-colors">#{tag}</span>
                        {/each}
                    </div>
                    
                    <h1 class="text-4xl md:text-5xl font-extrabold neon-text mb-6">{title}</h1>
                    
                    <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-800">
                        <!-- Author Info -->
                        <div class="flex items-center gap-4">
                            <img src={authorImage} alt={author} class="w-12 h-12 rounded-full border-2 border-[#81C14B]">
                            <div>
                                <h3 class="font-semibold text-white">{author}</h3>
                                <p class="text-sm text-gray-400">{authorTitle}</p>
                            </div>
                        </div>
                        
                        <!-- Meta Info -->
                        <div class="flex items-center gap-4 text-sm text-gray-400">
                            <div class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {date}
                            </div>
                            <div class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {readTime}
                            </div>
                        </div>
                    </div>
                </header>
                
                <!-- Featured Image -->
                <img src={image} alt={title} class="w-full rounded-lg shadow-xl mb-10 border border-gray-800">
                
                <!-- Article Content -->
                <article class="prose prose-lg prose-invert max-w-none">
                    <!-- Introduction -->
                    <div id="intro" class="mb-8">
                        <p class="mb-6 text-lg leading-relaxed">
                            The music industry is going through a massive transformation,  
                            and <span class="font-bold">NFTs (Non-Fungible Tokens) are leading the revolution.</span>  
                            With blockchain technology, artists can <span class="font-bold">sell music, merchandise, and experiences</span>  
                            in a way that was never possible before.
                        </p>
                    </div>

                    <!-- NFT Albums & Exclusive Content -->
                    <div id="nft-albums" class="mb-10">
                        <h2 class="text-3xl font-bold neon-heading">💡 1. NFT Albums & Exclusive Content</h2>
                        <p class="mt-4">
                            Imagine owning a <span class="font-bold">limited-edition digital album</span>  
                            that no one else can access—except the people who bought it as an NFT.
                        </p>
                        <div class="bg-gray-900 p-6 mt-4 rounded-lg shadow-md border-l-4 border-green-500">
                            <h3 class="font-bold text-xl text-green-400">🎧 How It Works:</h3>
                            <ul class="list-disc pl-6 mt-3 space-y-2">
                                <li>🔥 Artists create a <span class="font-bold">unique digital album</span> as an NFT.</li>
                                <li>💰 Fans buy the NFT and gain <span class="font-bold">exclusive access</span> to the music.</li>
                                <li>🎟 Some NFTs include <span class="font-bold">VIP experiences</span>, concert tickets, or behind-the-scenes content.</li>
                            </ul>
                        </div>
                        <p class="mt-4">
                            Major artists like <span class="font-bold">Snoop Dogg, The Weeknd, and Kings of Leon</span>  
                            have already sold NFT albums for millions of dollars!
                        </p>
                    </div>

                    <!-- Blockchain Royalties -->
                    <div id="blockchain-royalties" class="mb-10">
                        <h2 class="text-3xl font-bold neon-heading">🚀 2. Blockchain Royalties: Artists Get Paid Fairly</h2>
                        <p class="mt-4">
                            With traditional streaming platforms like Spotify,  
                            artists <span class="font-bold">earn as little as $0.003 per stream</span>.  
                            But NFTs are changing the game!
                        </p>
                        <div class="bg-gray-900 p-6 mt-4 rounded-lg shadow-md border-l-4 border-blue-500">
                            <h3 class="font-bold text-xl text-blue-400">💰 Why Blockchain Royalties Are Better:</h3>
                            <ul class="list-disc pl-6 mt-3 space-y-2">
                                <li>📜 <span class="font-bold">Smart Contracts</span> – These automatically send money to artists with every resale.</li>
                                <li>🎵 <span class="font-bold">No Middlemen</span> – Artists keep a bigger share of the profits.</li>
                                <li>🔗 <span class="font-bold">Global Payments</span> – Fans can support artists directly, no matter where they are in the world.</li>
                            </ul>
                        </div>
                        <p class="mt-4">
                            Instead of waiting for a label or streaming service to pay them,  
                            <span class="font-bold">musicians now receive instant payments</span>  
                            through blockchain technology.
                        </p>
                    </div>

                    <!-- NFTs and Fan Engagement -->
                    <div id="fan-engagement" class="mb-10">
                        <h2 class="text-3xl font-bold neon-heading">🎟 3. NFTs Create Stronger Fan Engagement</h2>
                        <p class="mt-4">
                            Fans no longer just <span class="font-bold">listen</span> to music—they can <span class="font-bold">own a piece of it</span>.  
                            This makes them feel <span class="font-bold">closer to the artist</span> and more invested in their success.
                        </p>
                        <div class="bg-gray-900 p-6 mt-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                            <h3 class="font-bold text-xl text-yellow-400">🌟 Ways NFTs Enhance Fan Experiences:</h3>
                            <ul class="list-disc pl-6 mt-3 space-y-2">
                                <li>🎟 <span class="font-bold">Exclusive Concert Tickets</span> – NFT holders get early or VIP access.</li>
                                <li>🎨 <span class="font-bold">Limited-Edition Merch</span> – Digital or physical items only available as NFTs.</li>
                                <li>💬 <span class="font-bold">Private Communities</span> – Access to artist-only chats and events.</li>
                            </ul>
                        </div>
                        <p class="mt-4">
                            Instead of just being a listener,  
                            <span class="font-bold">NFTs turn fans into real stakeholders</span> in an artist's journey.
                        </p>
                    </div>

                    <!-- Final Thoughts -->
                    <div id="conclusion" class="mb-10">
                        <h2 class="text-3xl font-bold neon-heading">🔥 Final Thoughts: The Future of Music Is NFT-Based</h2>
                        <p class="mt-4">
                            The music industry has always evolved—from CDs to streaming,  
                            and now to <span class="font-bold">blockchain-powered NFTs</span>.  
                            Artists who embrace this technology will have <span class="font-bold">more control, better royalties,  
                            and a stronger connection with their fans</span>.
                        </p>
                        <div class="bg-gray-900 p-6 mt-4 rounded-lg shadow-md border-l-4 border-red-500">
                            <h3 class="font-bold text-xl text-red-400">🚀 Why NFTs Are the Future:</h3>
                            <ul class="list-disc pl-6 mt-3 space-y-2">
                                <li>🎶 <span class="font-bold">Artists Earn More</span> – No middlemen taking big cuts.</li>
                                <li>🌍 <span class="font-bold">Fans Get Exclusive Access</span> – Unique music, experiences, and rewards.</li>
                                <li>🔗 <span class="font-bold">Blockchain Makes It Secure</span> – No fake copies, no piracy.</li>
                            </ul>
                        </div>
                        <p class="mt-6 font-bold text-green-400">
                            The future of music is <span class="font-bold">decentralized, artist-controlled, and NFT-powered</span>.  
                            Are you ready to join the revolution? 🎶🔥
                        </p>
                    </div>
                    
                    <!-- Author Bio -->
                    <div class="mt-16 p-6 bg-gray-900 rounded-lg border border-gray-800">
                        <div class="flex flex-col sm:flex-row items-center gap-6">
                            <img src={authorImage} alt={author} class="w-24 h-24 rounded-full border-2 border-[#81C14B]">
                            <div>
                                <h3 class="text-xl font-bold">About {author}</h3>
                                <p class="text-gray-400 text-sm mb-2">{authorTitle} at theKenyanTroublers</p>
                                <p class="text-gray-300">
                                    Sarah is a blockchain specialist with extensive experience in NFT implementation for music artists.
                                    She has helped numerous artists across Africa establish their digital presence through blockchain technology.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Share Buttons -->
                    <div class="mt-10 border-t border-gray-800 pt-6">
                        <h3 class="text-xl font-bold mb-4">Share this article</h3>
                        <div class="flex flex-wrap gap-2">
                            <button 
                                on:click={shareOnTwitter}
                                class="px-4 py-2 bg-[#1DA1F2] hover:bg-[#1a91da] text-white rounded-lg flex items-center gap-2"
                            >
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                                Twitter
                            </button>
                            <button 
                                on:click={shareOnFacebook}
                                class="px-4 py-2 bg-[#3b5998] hover:bg-[#344e86] text-white rounded-lg flex items-center gap-2"
                            >
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                Facebook
                            </button>
                            <button 
                                on:click={shareOnLinkedIn}
                                class="px-4 py-2 bg-[#0077b5] hover:bg-[#00669c] text-white rounded-lg flex items-center gap-2"
                            >
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                LinkedIn
                            </button>
                            <button 
                                on:click={copyLink}
                                class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center gap-2"
                            >
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Copy Link
                            </button>
                        </div>
                    </div>
                    
                    <!-- Related Posts -->
                    <div class="mt-16">
                        <h3 class="text-2xl font-bold mb-4 neon-text">Related Articles</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {#each relatedPosts as post}
                                <a href={post.link} class="block group">
                                    <div class="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transition-all hover:border-[#81C14B]/50 hover:shadow-[0_0_15px_#81C14B]/20">
                                        <div class="relative aspect-[16/9] overflow-hidden">
                                            <img src={post.image} alt={post.title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                                        </div>
                                        <div class="p-4">
                                            <h4 class="text-lg font-semibold group-hover:text-[#81C14B] transition-colors">{post.title}</h4>
                                            <p class="text-sm text-gray-400 mt-2">{post.excerpt}</p>
                                        </div>
                                    </div>
                                </a>
                            {/each}
                        </div>
                    </div>
                </article>
            </div>
            
            <!-- Sidebar (1/4 width) -->
            <aside class="lg:col-span-1">
                <div class="sticky top-20 space-y-8">
                    <!-- Table of Contents -->
                    <div class="bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
                        <h3 class="text-xl font-bold mb-4">Table of Contents</h3>
                        <nav>
                            <ul class="space-y-2">
                                {#each tableOfContents as section}
                                    <li>
                                        <a 
                                            href={`#${section.id}`} 
                                            class={`block p-2 rounded-lg transition-colors ${activeSection === section.id ? 'bg-[#81C14B]/20 text-[#81C14B] font-semibold' : 'hover:bg-gray-800'}`}
                                        >
                                            {section.title}
                                        </a>
                                    </li>
                                {/each}
                            </ul>
                        </nav>
                    </div>
                    
                    <!-- Subscribe Widget -->
                    <div class="bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
                        <h3 class="text-xl font-bold mb-4">Stay Updated</h3>
                        <p class="text-sm text-gray-400 mb-4">Get the latest articles on music, NFTs, and tech directly to your inbox.</p>
                        <form class="space-y-3">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                class="w-full px-4 py-2 bg-black/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#81C14B]"
                            >
                            <button 
                                type="submit" 
                                class="w-full bg-[#81C14B] hover:bg-[#6A9A52] text-black font-bold py-2 px-4 rounded-lg transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                    
                    <!-- Tags Cloud -->
                    <div class="bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
                        <h3 class="text-xl font-bold mb-4">Explore Tags</h3>
                        <div class="flex flex-wrap gap-2">
                            {#each ["nft", "blockchain", "crypto", "royalties", "music", "streaming", "digital", "artist", "fan", "ownership"] as tag}
                                <a 
                                    href={`/blog?tag=${tag}`} 
                                    class="px-3 py-1 text-sm bg-black/60 text-gray-300 rounded-lg hover:bg-[#81C14B]/20 hover:text-white transition-colors"
                                >
                                    #{tag}
                                </a>
                            {/each}
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</section>

<style>
    /* Styling */
    .neon-text {
        text-shadow: 0 0 10px #81C14B, 0 0 20px #81C14B, 0 0 40px #81C14B;
    }

    .neon-heading {
        text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
    }
    
    /* Style for prose content */
    :global(.prose) {
        --tw-prose-body: #e2e8f0;
        --tw-prose-headings: #ffffff;
        --tw-prose-lead: #a0aec0;
        --tw-prose-links: #81C14B;
        --tw-prose-bold: #ffffff;
        --tw-prose-counters: #a0aec0;
        --tw-prose-bullets: #a0aec0;
        --tw-prose-hr: #718096;
        --tw-prose-quotes: #ffffff;
        --tw-prose-quote-borders: #81C14B;
        --tw-prose-captions: #a0aec0;
        --tw-prose-code: #81C14B;
        --tw-prose-pre-code: #e2e8f0;
        --tw-prose-pre-bg: #2d3748;
        --tw-prose-th-borders: #718096;
        --tw-prose-td-borders: #718096;
    }
</style>
