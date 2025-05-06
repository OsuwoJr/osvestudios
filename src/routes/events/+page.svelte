<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    
    interface Event {
        id: string;
        title: string;
        date: string;
        location: string;
        price: string;
        description: string;
        image: string;
        category: string;
        featured: boolean;
        artists?: string[];
    }
    
    // WhatsApp functionality
    const whatsappNumber = "254790932575"; // Correct WhatsApp number
    
    function bookEventViaWhatsApp(event: Event): void {
        if (!browser) return;
        const message = `Hi, I'm interested in booking tickets for the event "${event.title}" on ${event.date} (${event.price}). Please provide booking details.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    }
    
    // All events data (updated to focus on studio events)
    const allEvents: Event[] = [
        { 
            id: "vr-concert-osve-studios",
            title: "🎧 VR Concert Experience", 
            date: "June 20, 2026", 
            location: "Metaverse Stage | Online", 
            price: "KES 2,000",
            description: "Experience a mind-blowing virtual concert produced by OSVE STUDIOS in the Metaverse. Get exclusive performances, backstage interactions, and real-time fan engagement!", 
            image: "/events/vr-concert.jpg",
            category: "Virtual",
            featured: true,
            artists: ["OSVE STUDIOS Artists", "DJ Afro"]
        },
        { 
            id: "fan-cypher-battle",
            title: "🔥 Studio Cypher Battle", 
            date: "May 5, 2026", 
            location: "Nairobi CBD | OSVE STUDIOS", 
            price: "KES 500",
            description: "Join the biggest rap showdown in Nairobi! Freestyle your way to glory, meet fellow artists, and get a chance to record at our professional studio.", 
            image: "/events/cypher-battle.jpg",
            category: "Live",
            featured: true,
            artists: ["Various Artists", "Hosted by MC Flow"]
        },
        { 
            id: "nft-music-drop",
            title: "🎶 Exclusive NFT Music Drop", 
            date: "June 1, 2026", 
            location: "Online | OSVE STUDIOS HQ", 
            price: "KES 1,500",
            description: "Be the first to own limited-edition NFT music from OSVE STUDIOS artists. Gain lifetime access, unlock hidden tracks, and get early access to new releases!", 
            image: "/events/nft-drop.jpg",
            category: "Digital",
            featured: true
        },
        { 
            id: "kenya-music-festival",
            title: "🎵 Kenya Music Festival 2026", 
            date: "July 15, 2026", 
            location: "KICC Grounds, Nairobi", 
            price: "KES 13,000",
            description: "The largest music festival in East Africa featuring top Kenyan artists. Experience 3 days of non-stop music across 5 stages with food, art, and culture.", 
            image: "/events/music-festival.jpg",
            category: "Live",
            featured: false,
            artists: ["OsuwoJr", "Dtato", "GECHOBOY"]
        },
        { 
            id: "production-masterclass",
            title: "🎚️ Beat Production Masterclass", 
            date: "April 30, 2026", 
            location: "OSVE STUDIOS, Roysambu", 
            price: "KES 1,200",
            description: "Learn the secrets of professional beat production from industry experts. Get hands-on experience with the latest production software and equipment.", 
            image: "/events/production-class.jpg",
            category: "Workshop",
            featured: false,
            artists: ["Producer OsuwoJr", "Hilaboi"]
        },
        { 
            id: "virtual-album-launch",
            title: "🚀 'Digital Revolution' Album Launch", 
            date: "May 25, 2026", 
            location: "Virtual Reality Plaza", 
            price: "KES 800",
            description: "Join us for the virtual launch of a groundbreaking album 'Digital Revolution'. Experience music in a completely new dimension with interactive elements.", 
            image: "/events/album-launch.jpg",
            category: "Virtual",
            featured: false,
            artists: ["OSVE STUDIOS Artists", "Special Guests"]
        },
        { 
            id: "street-artist-showcase",
            title: "🏙️ Street Artist Showcase", 
            date: "August 12, 2026", 
            location: "Uhuru Park, Nairobi", 
            price: "KES 400",
            description: "Celebrating the raw talent of Kenya's street artists. Come witness incredible performances and help support rising stars from our community.", 
            image: "/events/street-showcase.jpg",
            category: "Live",
            featured: false,
            artists: ["Various Street Artists"]
        },
        { 
            id: "blockchain-music-conference",
            title: "⛓️ Blockchain & Music Conference", 
            date: "September 5, 2026", 
            location: "OSVE STUDIOS, Roysambu", 
            price: "KES 2,500",
            description: "Explore how blockchain technology is revolutionizing the music industry. Network with tech innovators and music industry professionals.", 
            image: "/events/blockchain-conf.jpg",
            category: "Conference",
            featured: false
        },
        { 
            id: "vr-music-studio-tour",
            title: "🎧 VR Music Studio Tour", 
            date: "October 10, 2026", 
            location: "Online | Virtual Reality", 
            price: "KES 700",
            description: "Take a virtual tour of our state-of-the-art recording studio. See how hit songs are made and even participate in a virtual recording session.", 
            image: "/events/studio-tour.jpg",
            category: "Virtual",
            featured: false
        },
        { 
            id: "afro-beat-night",
            title: "🥁 Afro Beat Night Extravaganza", 
            date: "July 30, 2026", 
            location: "Carnivore Grounds, Nairobi", 
            price: "KES 1,800",
            description: "A night dedicated to the powerful rhythms of Afro Beat. Dance the night away with live performances from top Afro Beat artists.", 
            image: "/events/afrobeat-night.jpg",
            category: "Live",
            featured: false,
            artists: ["OsuwoJr", "Hilaboi", "DJ Zimmsha"]
        },
        { 
            id: "digital-art-music-exhibition",
            title: "🎨 Digital Art & Music Exhibition", 
            date: "November 15, 2026", 
            location: "National Museum, Nairobi", 
            price: "KES 900",
            description: "Experience the fusion of digital art and music in this immersive exhibition. See how visuals and sound come together to create incredible artistic experiences.", 
            image: "/events/digital-art.jpg",
            category: "Exhibition",
            featured: false
        },
        { 
            id: "kids-music-camp",
            title: "👶 Kids Music Camp", 
            date: "December 5-12, 2026", 
            location: "OSVE STUDIOS Academy, Nairobi", 
            price: "KES 5,000",
            description: "A week-long music camp for kids aged 8-15. Learn instruments, songwriting, and perform in the grand finale concert. Early bird registration now open!", 
            image: "/events/kids-camp.jpg",
            category: "Workshop",
            featured: false
        },
        { 
            id: "new-years-music-bash",
            title: "🎆 New Year's Music Bash 2026", 
            date: "December 31, 2026", 
            location: "Uhuru Gardens, Nairobi", 
            price: "KES 3,500",
            description: "Ring in the new year with the biggest music party in Kenya! Featuring non-stop music from top DJs and live performances until dawn.", 
            image: "/events/nye-bash.jpg",
            category: "Live",
            featured: false,
            artists: ["DJ Zimmsha", "OSVE STUDIOS Artists", "Kenya All-Stars"]
        }
    ];
    
    // Filtering and display logic
    let filteredEvents = [...allEvents];
    let selectedCategory = "All";
    let searchQuery = "";
    
    $: categories = ["All", ...new Set(allEvents.map(event => event.category))];
    
    $: {
        if (selectedCategory === "All" && !searchQuery) {
            filteredEvents = [...allEvents];
        } else {
            filteredEvents = allEvents.filter(event => {
                const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
                const matchesSearch = !searchQuery || 
                    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (event.artists?.some(artist => artist.toLowerCase().includes(searchQuery.toLowerCase())) ?? false);
                return matchesCategory && matchesSearch;
            });
        }
    }
    
    // Animated entry
    let isLoaded = false;
    
    onMount(() => {
        if (browser) {
            setTimeout(() => {
                isLoaded = true;
            }, 100);
        }
    });
</script>

<svelte:head>
    <title>Studio Events | OSVE STUDIOS</title>
    <meta name="description" content="Explore all upcoming events by OSVE STUDIOS - concerts, workshops, digital experiences and more.">
</svelte:head>

<main class="bg-black text-white min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-24 overflow-hidden">
        <div class="absolute inset-0 bg-black">
            <div class="absolute inset-0 bg-gradient-to-r from-black via-[#00BFFF]/30 to-black opacity-80"></div>
            <!-- Cyber Grid -->
            <div class="absolute inset-0 cyber-grid"></div>
        </div>
        
        <div class="relative z-10 container mx-auto px-6">
            <h1 class="text-6xl font-extrabold tracking-wide neon-text text-center">
                Studio Events
            </h1>
            <p class="text-xl mt-4 text-center max-w-3xl mx-auto">
                Discover and book tickets for the hottest music events, workshops, and digital experiences by OSVE STUDIOS.
            </p>
            
            <!-- Search & Filter -->
            <div class="mt-10 max-w-4xl mx-auto">
                <div class="relative mb-6">
                    <input 
                        type="text" 
                        bind:value={searchQuery}
                        placeholder="Search for events, artists, or keywords..." 
                        class="w-full py-3 px-12 rounded-full bg-black/40 backdrop-blur-sm border border-[#00BFFF]/50 shadow-[0_0_10px_#00BFFF]/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent"
                    />
                    <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00BFFF]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                
                <div class="flex flex-wrap justify-center gap-2 mb-8">
                    {#each categories as category}
                        <button 
                            on:click={() => selectedCategory = category}
                            class="px-4 py-2 rounded-full transition-all duration-300 {selectedCategory === category ? 'bg-[#00BFFF] text-black' : 'bg-black/40 border border-[#00BFFF]/50 text-white hover:bg-[#00BFFF]/20'}"
                        >
                            {category}
                        </button>
                    {/each}
                </div>
            </div>
        </div>
    </section>
    
    <!-- Events Grid -->
    <section class="container mx-auto px-6 py-16">
        {#if filteredEvents.length === 0}
            <div class="text-center py-12">
                <h2 class="text-2xl mb-4">No events found</h2>
                <p class="text-gray-400 mb-6">Try adjusting your search or filters</p>
                <button 
                    on:click={() => { selectedCategory = "All"; searchQuery = ""; }}
                    class="mt-4 px-6 py-2 bg-[#00BFFF] rounded-lg hover:bg-[#0099CC] transition-colors duration-300"
                >
                    Clear Filters
                </button>
            </div>
        {:else}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each filteredEvents as event}
                    <a href={`/events/${event.id}`} class="block">
                        <div 
                            class="relative event-card bg-black/80 border border-[#00BFFF] rounded-xl shadow-lg overflow-hidden transition-all transform hover:scale-102 hover:shadow-xl"
                            class:animate-pulse={isLoaded}
                            style="animation-delay: {filteredEvents.indexOf(event) * 0.1}s"
                        >
                            <!-- Top Image -->
                            <div class="relative h-48 overflow-hidden">
                                <img 
                                    src={event.image || "/events/placeholder.jpg"} 
                                    alt={event.title} 
                                    class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                    on:error={() => { event.image = "/events/placeholder.jpg" }}
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                                
                                <!-- Price Badge -->
                                <div class="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                                    {event.price}
                                </div>
                                
                                <!-- Date -->
                                <div class="absolute bottom-4 left-4">
                                    <div class="mt-1 flex items-center text-[#00BFFF] font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {event.date}
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Content -->
                            <div class="p-4">
                                <h3 class="text-xl font-bold mb-1">{event.title}</h3>
                                <p class="text-gray-400 text-sm mb-3 line-clamp-2">{event.description}</p>
                                
                                {#if event.artists}
                                    <div class="mb-3">
                                        <h3 class="text-sm text-gray-400">Artists:</h3>
                                        <div class="flex flex-wrap gap-1 mt-1">
                                            {#each event.artists as artist}
                                                <span class="inline-block bg-[#00BFFF]/20 border border-[#00BFFF]/50 text-white text-xs px-2 py-1 rounded-full">
                                                    {artist}
                                                </span>
                                            {/each}
                                        </div>
                                    </div>
                                {/if}
                                
                                <div class="mt-auto pt-3 flex justify-between items-center">
                                    <div class="text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {event.location.split('|')[0]}
                                    </div>
                                    <button 
                                        on:click|preventDefault={() => bookEventViaWhatsApp(event)}
                                        class="inline-block px-4 py-3 text-sm font-bold bg-[#00BFFF] hover:bg-[#0099CC] text-black rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center justify-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                        </svg>
                                        Book
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        {/if}
        
        <!-- Return Home Link -->
        <div class="mt-16 text-center">
            <a href="/" class="inline-block px-6 py-3 bg-black border border-[#00BFFF] text-[#00BFFF] rounded-lg hover:bg-[#00BFFF]/10 transition-colors duration-300">
                <i class="fas fa-arrow-left mr-2"></i> Return Home
            </a>
        </div>
    </section>
</main>

<style>
    /* Neon text effect */
    .neon-text {
        color: #fff;
        text-shadow: 0 0 15px #00BFFF, 0 0 30px #00BFFF, 0 0 50px #00BFFF;
        animation: neon-pulse 2s infinite alternate;
    }
    
    @keyframes neon-pulse {
        from { text-shadow: 0 0 15px #00BFFF, 0 0 30px #00BFFF, 0 0 50px #00BFFF; }
        to { text-shadow: 0 0 5px #00BFFF, 0 0 10px #00BFFF, 0 0 20px #00BFFF; }
    }
    
    /* Cyber grid background */
    .cyber-grid {
        background-size: 50px 50px;
        background-image: 
            linear-gradient(to right, rgba(0, 191, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 191, 255, 0.1) 1px, transparent 1px);
        mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    }
    
    /* Glow border for event cards */
    .event-card {
        box-shadow: 0 0 20px rgba(0, 191, 255, 0.2);
        border: 2px solid #00BFFF;
    }
    
    /* Card Animation */
    @keyframes pulse {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    
    .animate-pulse {
        animation: pulse 0.6s ease-out forwards;
        opacity: 0;
    }
    
    /* Text truncation */
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style> 