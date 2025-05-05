<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import { fade, fly } from "svelte/transition";
    
    // Component imports
    import BlogPostCard from "../../components/BlogPostCard.svelte";
    import DarkModeToggle from "../../components/DarkModeToggle.svelte";
    
    // Blog data
    const allPosts = [
        { 
            id: "music-marketing-2025",
            title: "How to Market Your Music in 2025", 
            image: "/blog1.jpg", 
            link: "/blog/music-marketing-2025",
            excerpt: "Discover cutting-edge marketing strategies that will separate rising stars from forgotten names in 2025.",
            date: "May 18, 2025",
            author: "James Wafula",
            authorImage: "/team/member1.jpg",
            readTime: "5 min read",
            category: "Marketing",
            tags: ["marketing", "social media", "promotion", "ai"],
            featured: true,
            popular: true
        },
        { 
            id: "free-daws",
            title: "Best Free DAWs for Music Production", 
            image: "/blog2.jpg", 
            link: "/blog/free-daws",
            excerpt: "Explore powerful, free Digital Audio Workstations that offer pro-level features without the price tag.",
            date: "April 27, 2025",
            author: "Daniel Muthama",
            authorImage: "/team/member2.jpg",
            readTime: "6 min read",
            category: "Production",
            tags: ["production", "daw", "free", "tools"],
            featured: false,
            popular: true
        },
        { 
            id: "music-nfts",
            title: "Why NFTs are the Future of Music", 
            image: "/blog3.jpg", 
            link: "/blog/music-nfts",
            excerpt: "Learn how blockchain technology and NFTs are revolutionizing the music industry for both artists and fans.",
            date: "March 15, 2025",
            author: "Sarah Wambui",
            authorImage: "/team/member3.jpg",
            readTime: "7 min read",
            category: "Blockchain",
            tags: ["nft", "blockchain", "crypto", "royalties"],
            featured: true,
            popular: false
        },
    ];
    
    // State management
    const searchQuery = writable("");
    const selectedCategory = writable("All");
    const categories = ["All", "Marketing", "Production", "Blockchain"];
    
    // Reactive derived stores
    $: filteredPosts = filterPosts($searchQuery, $selectedCategory);
    $: featuredPosts = allPosts.filter(post => post.featured);
    $: popularPosts = allPosts.filter(post => post.popular).slice(0, 3);
    $: recentPosts = [...allPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
    
    // Email subscription
    let email = "";
    let subscribeStatus = "";
    let isSubscribing = false;
    
    // Methods
    function filterPosts(query: string, category: string) {
        return allPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(query.toLowerCase()) || 
                                post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
                                post.tags.some(tag => tag.includes(query.toLowerCase()));
            
            const matchesCategory = category === "All" || post.category === category;
            
            return matchesSearch && matchesCategory;
        });
    }
    
    function handleEmailSubscribe() {
        if (!email || !email.includes('@')) {
            subscribeStatus = "Please enter a valid email";
            return;
        }
        
        isSubscribing = true;
        
        // Use the same Formspree endpoint as other forms
        const formData = new FormData();
        formData.append("email", email);
        formData.append("formType", "Blog Subscription");
        
        fetch("https://formspree.io/f/xyzweeav", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                subscribeStatus = "Thanks for subscribing! We'll keep you updated.";
                email = "";
                setTimeout(() => {
                    subscribeStatus = "";
                }, 5000);
            } else {
                throw new Error("Subscription failed");
            }
        })
        .catch((error) => {
            console.error("Form submission error:", error);
            subscribeStatus = "Something went wrong. Please try again.";
        })
        .finally(() => {
            isSubscribing = false;
        });
    }
</script>

<main class="bg-black text-white min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20">
        <!-- Animated Background with Glitch Effect -->
        <div class="absolute inset-0">
            <div class="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#81C14B]/30 to-[#000000] opacity-90 animate-bg-glow"></div>
            <div class="absolute top-0 left-0 w-full h-full bg-grid opacity-10"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10">
            <div class="text-center mb-12">
                <h1 class="text-5xl md:text-7xl font-extrabold neon-text glitch" data-text="The Troublers Blog">
                    The Troublers Blog
                </h1>
                <p class="mt-4 text-xl opacity-80 max-w-3xl mx-auto">
                    Insights, tips, and trends about <span class="text-[#81C14B] font-bold">music production</span>, 
                    <span class="text-[#81C14B] font-bold">marketing</span>, and 
                    <span class="text-[#81C14B] font-bold">blockchain technology</span> in the music industry.
                </p>
            </div>
            
            <!-- Search & Filter -->
            <div class="mb-12 max-w-2xl mx-auto">
                <div class="relative">
                    <input 
                        type="text" 
                        bind:value={$searchQuery} 
                        placeholder="Search for articles..." 
                        class="w-full py-3 px-12 rounded-full bg-black/40 backdrop-blur-sm border border-[#81C14B]/50 shadow-[0_0_10px_#81C14B]/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#81C14B] focus:border-transparent"
                    />
                    <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#81C14B]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                
                <!-- Category Pills -->
                <div class="flex flex-wrap justify-center mt-4 gap-2">
                    {#each categories as category}
                        <button 
                            class="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 {$selectedCategory === category ? 'bg-[#81C14B] text-black' : 'bg-black/40 border border-[#81C14B]/50 text-white hover:bg-[#81C14B]/20'}"
                            on:click={() => selectedCategory.set(category)}
                        >
                            {category}
                        </button>
                    {/each}
                </div>
            </div>
        </div>
    </section>
    
    <!-- Featured Posts Section -->
    {#if featuredPosts.length > 0}
        <section class="container mx-auto px-4 py-10">
            <h2 class="text-4xl font-bold mb-6 neon-text">Featured Articles</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                {#each featuredPosts as post}
                    <div in:fade={{duration: 300, delay: 200}} class="relative">
                        <BlogPostCard {post} featured={true} />
                    </div>
                {/each}
            </div>
        </section>
    {/if}
    
    <!-- All Posts Grid -->
    <section class="container mx-auto px-4 py-10" id="articles-section">
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-4xl font-bold neon-text">
                {$selectedCategory === "All" ? "All Articles" : $selectedCategory + " Articles"}
            </h2>
            {#if filteredPosts.length > 0}
                <span class="text-gray-400">{filteredPosts.length} articles found</span>
            {/if}
        </div>
        
        {#if filteredPosts.length === 0}
            <div class="text-center py-20">
                <h3 class="text-2xl font-bold">No articles found</h3>
                <p class="mt-2 text-gray-400">Try a different search term or category</p>
                <button 
                    class="mt-4 px-6 py-2 bg-[#81C14B] rounded-lg hover:bg-[#6A9A52] transition-colors duration-300"
                    on:click={() => { searchQuery.set(""); selectedCategory.set("All"); }}
                >
                    Reset Filters
                </button>
            </div>
        {:else}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each filteredPosts as post}
                    <div in:fade={{duration: 300}} class="relative">
                        <BlogPostCard {post} />
                    </div>
                {/each}
            </div>
        {/if}
    </section>
    
    <!-- Sidebar Section (Recent + Popular) -->
    <section class="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Recent Posts -->
        <div class="lg:col-span-1">
            <h2 class="text-2xl font-bold mb-6 neon-text">Recent Posts</h2>
            <div class="space-y-6">
                {#each recentPosts as post}
                    <a href={post.link} class="flex items-start gap-4 p-4 bg-black/40 rounded-lg border border-gray-800 hover:border-[#81C14B]/50 transition-all hover:shadow-[0_0_15px_#81C14B]/20">
                        <img src={post.image} alt={post.title} class="w-20 h-20 object-cover rounded-lg">
                        <div>
                            <h3 class="font-semibold text-white">{post.title}</h3>
                            <p class="text-sm text-gray-400 mt-1">{post.date} · {post.readTime}</p>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
        
        <!-- Popular Posts -->
        <div class="lg:col-span-1">
            <h2 class="text-2xl font-bold mb-6 neon-text">Popular Posts</h2>
            <div class="space-y-6">
                {#each popularPosts as post, index}
                    <a href={post.link} class="flex items-start gap-4 p-4 bg-black/40 rounded-lg border border-gray-800 hover:border-[#81C14B]/50 transition-all hover:shadow-[0_0_15px_#81C14B]/20">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#81C14B] flex items-center justify-center text-black font-bold">
                            {index + 1}
                        </div>
                        <div>
                            <h3 class="font-semibold text-white">{post.title}</h3>
                            <p class="text-sm text-gray-400 mt-1">{post.readTime}</p>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
        
        <!-- Newsletter Subscription -->
        <div class="lg:col-span-1 p-6 bg-black/60 backdrop-blur-sm rounded-xl border border-[#81C14B]/30 shadow-[0_0_20px_#81C14B]/10">
            <h2 class="text-2xl font-bold mb-4 neon-text">Subscribe to Our Newsletter</h2>
            <p class="text-gray-400 mb-6">Get the latest music industry insights, tips, and trends directly in your inbox.</p>
            
            <form on:submit|preventDefault={handleEmailSubscribe} class="space-y-4">
                <div class="relative">
                    <input 
                        type="email" 
                        bind:value={email}
                        placeholder="Your email address" 
                        class="w-full py-3 px-4 rounded-lg bg-black/70 border border-gray-700 focus:border-[#81C14B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#81C14B]"
                    />
                </div>
                
                {#if subscribeStatus}
                    <p class={subscribeStatus.includes("Thanks") ? "text-[#81C14B] text-sm" : "text-red-400 text-sm"}>
                        {subscribeStatus}
                    </p>
                {/if}
                
                <button 
                    type="submit" 
                    class="w-full py-3 px-6 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg transition-all duration-300 text-black font-bold flex items-center justify-center"
                    disabled={isSubscribing}
                >
                    {#if isSubscribing}
                        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Subscribing...
                    {:else}
                        Subscribe
                    {/if}
                </button>
            </form>
            
            <div class="mt-8 space-y-4">
                <h3 class="font-semibold">Follow Us</h3>
                <div class="flex justify-center gap-4">
                    <a href="https://twitter.com/KenyanTroublers" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Twitter">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                    </a>
                    <a href="https://instagram.com/KenyanTroublers" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                    <a href="https://youtube.com/KenyanTroublers" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="YouTube">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                    </a>
                    <a href="https://open.spotify.com/artist/KenyanTroublers" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Spotify">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
    
    <DarkModeToggle />
</main>

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

    /* Subtle Grid Background */
    .bg-grid {
        background-image: linear-gradient(rgba(129, 193, 75, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(129, 193, 75, 0.1) 1px, transparent 1px);
        background-size: 50px 50px;
    }
    
    /* Social Icons */
    .social-icon {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 9999px;
        background-color: rgb(31, 41, 55);
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(209, 213, 219);
        transition-property: all;
        transition-duration: 300ms;
    }
    
    .social-icon:hover {
        background-color: #81C14B;
        color: black;
    }
</style>
