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
    
    // All events data (13 events total, including the 3 from the homepage)
    const allEvents: Event[] = [
        { 
            id: "vr-concert-osve-studios",
            title: "🎧 VR Concert with OSVE STUDIOS", 
            date: "June 20, 2026", 
            location: "Metaverse Stage | Online", 
            price: "KES 2,000",
            description: "Experience a mind-blowing virtual concert with TheKenyanTroublers and OSVE STUDIOS in the Metaverse. Get exclusive performances, backstage interactions, and real-time fan engagement!", 
            image: "/events/vr-concert.jpg",
            category: "Virtual",
            featured: true,
            artists: ["TheKenyanTroublers", "OSVE STUDIOS", "DJ Afro"]
        },
        { 
            id: "fan-cypher-battle",
            title: "🔥 Fan Cypher Battle", 
            date: "May 5, 2026", 
            location: "Nairobi CBD | Troublers Street Talent Spot", 
            price: "KES 500",
            description: "Join the biggest rap showdown in Nairobi! Freestyle your way to glory, meet fellow artists, and get a chance to feature on our next mixtape.", 
            image: "/events/cypher-battle.jpg",
            category: "Live",
            featured: true,
            artists: ["Various Artists", "Hosted by MC Flow"]
        },
        { 
            id: "nft-music-drop",
            title: "🎶 Exclusive NFT Music Drop", 
            date: "June 1, 2026", 
            location: "Online | TheKenyanTroublers HQ", 
            price: "KES 1,500",
            description: "Be the first to own limited-edition NFT music from top artists. Gain lifetime access, unlock hidden tracks, and get early access to new releases!", 
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
            artists: ["TheKenyanTroublers", "OsuwoJr", "Dtato", "GECHOBOY"]
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
            description: "Join us for the virtual launch of our groundbreaking album 'Digital Revolution'. Experience music in a completely new dimension with interactive elements.", 
            image: "/events/album-launch.jpg",
            category: "Virtual",
            featured: false,
            artists: ["TheKenyanTroublers", "Special Guests"]
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
            location: "Troublers Academy, Nairobi", 
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
            artists: ["DJ Zimmsha", "TheKenyanTroublers", "Kenya All-Stars"]
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
    <title>All Events | TheKenyanTroublers</title>
    <meta name="description" content="Explore all upcoming events by TheKenyanTroublers - concerts, workshops, digital experiences and more.">
</svelte:head>

<main class="bg-black text-white min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-24 overflow-hidden">
        <div class="absolute inset-0 bg-black">
            <div class="absolute inset-0 bg-gradient-to-r from-black via-[#81C14B]/30 to-black opacity-80"></div>
            <!-- Cyber Grid -->
            <div class="absolute inset-0 cyber-grid"></div>
        </div>
        
        <div class="relative z-10 container mx-auto px-6">
            <h1 class="text-6xl font-extrabold tracking-wide neon-text text-center">
                All Events
            </h1>
            <p class="text-xl mt-4 text-center max-w-3xl mx-auto">
                Discover and book tickets for the hottest music events, workshops, and digital experiences by TheKenyanTroublers.
            </p>
            
            <!-- Search & Filter -->
            <div class="mt-10 max-w-4xl mx-auto">
                <div class="relative mb-6">
                    <input 
                        type="text" 
                        bind:value={searchQuery}
                        placeholder="Search for events, artists, or keywords..." 
                        class="w-full py-3 px-12 rounded-full bg-black/40 backdrop-blur-sm border border-[#81C14B]/50 shadow-[0_0_10px_#81C14B]/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#81C14B] focus:border-transparent"
                    />
                    <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#81C14B]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                
                <!-- Category Pills -->
                <div class="flex flex-wrap justify-center gap-2">
                    {#each categories as category}
                        <button 
                            class="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 {selectedCategory === category ? 'bg-[#81C14B] text-black' : 'bg-black/40 border border-[#81C14B]/50 text-white hover:bg-[#81C14B]/20'}"
                            on:click={() => selectedCategory = category}
                        >
                            {category}
                        </button>
                    {/each}
                </div>
            </div>
        </div>
    </section>
    
    <!-- Events Grid -->
    <section class="relative py-16 container mx-auto px-6">
        {#if filteredEvents.length === 0}
            <div class="text-center py-16">
                <h2 class="text-2xl font-bold">No events found</h2>
                <p class="mt-2 text-gray-400">Try a different search term or category</p>
                <button 
                    class="mt-4 px-6 py-2 bg-[#81C14B] rounded-lg hover:bg-[#6A9A52] transition-colors duration-300"
                    on:click={() => { searchQuery = ""; selectedCategory = "All"; }}
                >
                    Reset Filters
                </button>
            </div>
        {:else}
            <div class="text-right mb-6">
                <span class="text-gray-400">{filteredEvents.length} events found</span>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each filteredEvents as event, i}
                    <div 
                        class="relative event-card bg-black/80 border border-[#81C14B] rounded-xl shadow-lg overflow-hidden transition-all transform hover:scale-102 hover:shadow-xl"
                        style="animation-delay: {i * 0.1}s;"
                        class:opacity-0={!isLoaded}
                        class:animate-fade-in={isLoaded}
                    >
                        <!-- Event Image -->
                        <div class="h-48 relative overflow-hidden">
                            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                            <img src={event.image || "/events/placeholder.jpg"} alt={event.title} class="w-full h-full object-cover">
                            {#if event.featured}
                                <div class="absolute top-4 right-4 bg-[#FFD700] text-black px-3 py-1 rounded-full text-sm font-bold z-20">
                                    Featured
                                </div>
                            {/if}
                            <div class="absolute bottom-4 left-4 z-20">
                                <span class="inline-block bg-black/70 text-white text-xs px-2 py-1 rounded">
                                    {event.category}
                                </span>
                            </div>
                        </div>
                        
                        <!-- Event Details -->
                        <div class="p-6">
                            <h2 class="text-2xl font-bold">{event.title}</h2>
                            <div class="mt-2 flex items-center text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{event.date}</span>
                            </div>
                            <div class="mt-1 flex items-center text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{event.location}</span>
                            </div>
                            <div class="mt-1 flex items-center text-[#81C14B] font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{event.price}</span>
                            </div>
                            
                            <p class="mt-4 line-clamp-3 text-gray-300">{event.description}</p>
                            
                            {#if event.artists && event.artists.length > 0}
                                <div class="mt-4">
                                    <h3 class="text-sm text-gray-400">Artists:</h3>
                                    <div class="flex flex-wrap gap-2 mt-1">
                                        {#each event.artists as artist}
                                            <span class="inline-block bg-[#81C14B]/20 border border-[#81C14B]/50 text-white text-xs px-2 py-1 rounded-full">
                                                {artist}
                                            </span>
                                        {/each}
                                    </div>
                                </div>
                            {/if}
                            
                            <!-- Actions -->
                            <div class="mt-6 grid grid-cols-2 gap-3">
                                <a 
                                    href={`/events/${event.id}`}
                                    class="inline-block px-4 py-3 text-sm font-bold bg-[#FFD700] hover:bg-[#E6C200] text-black rounded-full shadow-lg transition-all transform hover:scale-105 text-center"
                                >
                                    View Details
                                </a>
                                <button 
                                    on:click={() => bookEventViaWhatsApp(event)}
                                    class="inline-block px-4 py-3 text-sm font-bold bg-[#81C14B] hover:bg-[#6A9A52] text-black rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    Book Now
                                </button>
                            </div>
                        </div>
                        
                        <!-- Futuristic Corner Accents -->
                        <div class="corner-accent top-left"></div>
                        <div class="corner-accent top-right"></div>
                        <div class="corner-accent bottom-left"></div>
                        <div class="corner-accent bottom-right"></div>
                    </div>
                {/each}
            </div>
        {/if}
    </section>
    
    <!-- Back to Home -->
    <div class="container mx-auto px-6 py-12 text-center">
        <a href="/" class="inline-block px-6 py-3 bg-black border border-[#81C14B] text-[#81C14B] rounded-lg hover:bg-[#81C14B]/10 transition-colors duration-300">
            ← Back to Home
        </a>
    </div>
</main>

<style>
    /* Neon text */
    .neon-text {
        text-shadow: 0 0 15px #81C14B, 0 0 30px #81C14B, 0 0 50px #81C14B;
    }
    
    /* Cyber grid background */
    .cyber-grid {
        background-size: 50px 50px;
        background-image: 
            linear-gradient(to right, rgba(129, 193, 75, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(129, 193, 75, 0.1) 1px, transparent 1px);
        z-index: 0;
        transform: perspective(500px) rotateX(60deg);
        transform-origin: center top;
        opacity: 0.3;
        animation: grid-move 20s linear infinite;
    }
    
    @keyframes grid-move {
        0% { background-position: 0 0; }
        100% { background-position: 50px 50px; }
    }
    
    /* Event card */
    .event-card {
        position: relative;
        transition: all 0.3s ease;
    }
    
    /* Corner accents */
    .corner-accent {
        position: absolute;
        width: 15px;
        height: 15px;
        border: 2px solid #81C14B;
        opacity: 0.8;
        z-index: 2;
    }
    
    .top-left {
        top: 0;
        left: 0;
        border-right: none;
        border-bottom: none;
    }
    
    .top-right {
        top: 0;
        right: 0;
        border-left: none;
        border-bottom: none;
    }
    
    .bottom-left {
        bottom: 0;
        left: 0;
        border-right: none;
        border-top: none;
    }
    
    .bottom-right {
        bottom: 0;
        right: 0;
        border-left: none;
        border-top: none;
    }
    
    /* Animation */
    .opacity-0 {
        opacity: 0;
    }
    
    .animate-fade-in {
        animation: fadeIn 0.5s ease-out forwards;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    /* Additional utility */
    .hover\:scale-102:hover {
        transform: scale(1.02);
    }
    
    .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style> 