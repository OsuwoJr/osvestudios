<script lang="ts">
    import { page } from '$app/stores';
    import { browser } from '$app/environment';
    
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
        schedule?: { time: string; activity: string }[];
        venue?: {
            name: string;
            address: string;
            mapUrl?: string;
        };
    }
    
    // WhatsApp functionality
    const whatsappNumber = "254790932575"; // Correct WhatsApp number
    
    function bookEventViaWhatsApp(event: Event): void {
        if (!browser) return;
        const message = `Hi, I'm interested in booking tickets for the event "${event.title}" on ${event.date} (${event.price}). Please provide booking details.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    }
    
    // All events data (same as in the events page)
    const allEvents: Event[] = [
        { 
            id: "vr-concert-osve-studios",
            title: "🎧 VR Concert with OSVE STUDIOS", 
            date: "June 20, 2026", 
            location: "Metaverse Stage | Online", 
            price: "KES 2,000",
            description: "Experience a mind-blowing virtual concert with OSVE STUDIOS in the Metaverse. Get exclusive performances, backstage interactions, and real-time fan engagement! This immersive show blends cutting-edge virtual reality technology with live music performances, creating a truly unique experience.\n\nAttendees will receive a special link to join the virtual venue, where they can customize their avatar, interact with other fans, and enjoy the show from multiple virtual vantage points. Special VIP packages include virtual backstage passes and exclusive digital merchandise.",
            image: "/events/vr-concert.jpg",
            category: "Virtual",
            featured: true,
            artists: ["OSVE STUDIOS Artists", "DJ Afro"],
            schedule: [
                { time: "7:00 PM", activity: "Virtual Venue Opens" },
                { time: "7:30 PM", activity: "Opening Act: DJ Afro" },
                { time: "8:15 PM", activity: "Main Show: OSVE STUDIOS" },
                { time: "9:30 PM", activity: "Interactive Fan Session" },
                { time: "10:00 PM", activity: "Virtual After Party" }
            ],
            venue: {
                name: "Metaverse Concert Hall",
                address: "Access via special link sent to ticket holders",
                mapUrl: "https://maps.google.com"
            }
        },
        { 
            id: "fan-cypher-battle",
            title: "🔥 Fan Cypher Battle", 
            date: "May 5, 2026", 
            location: "Nairobi CBD | Troublers Street Talent Spot", 
            price: "KES 500",
            description: "Join the biggest rap showdown in Nairobi! Freestyle your way to glory, meet fellow artists, and get a chance to feature on our next mixtape. This event brings together emerging talent from across Kenya for an evening of lyrical prowess and community building.\n\nParticipants will be judged by a panel of established Kenyan hip-hop artists, with the winner receiving studio time and a featured spot on OSVE STUDIOS' upcoming mixtape. Even if you're not performing, come support the local scene and enjoy the vibrant atmosphere!", 
            image: "/events/cypher-battle.jpg",
            category: "Live",
            featured: true,
            artists: ["Various Artists", "Hosted by MC Flow"],
            schedule: [
                { time: "4:00 PM", activity: "Doors Open & Registration" },
                { time: "5:00 PM", activity: "Warm-up Session" },
                { time: "5:30 PM", activity: "Preliminary Rounds" },
                { time: "7:00 PM", activity: "Special Performance" },
                { time: "8:00 PM", activity: "Final Battles" },
                { time: "9:30 PM", activity: "Awards & Afterparty" }
            ],
            venue: {
                name: "Troublers Street Talent Spot",
                address: "Kenyatta Avenue, Nairobi CBD",
                mapUrl: "https://maps.google.com"
            }
        },
        { 
            id: "nft-music-drop",
            title: "🎶 Exclusive NFT Music Drop", 
            date: "June 1, 2026", 
            location: "Online | OSVE STUDIOS HQ", 
            price: "KES 1,500",
            description: "Be the first to own limited-edition NFT music from top artists. Gain lifetime access, unlock hidden tracks, and get early access to new releases! This digital event represents the future of music ownership and artist support in Kenya.\n\nOur exclusive NFT collection includes original music, digital artwork, and special perks for collectors. Each NFT is minted on an eco-friendly blockchain, ensuring minimal environmental impact while maximizing benefits to artists and collectors alike.", 
            image: "/events/nft-drop.jpg",
            category: "Digital",
            featured: true,
            schedule: [
                { time: "10:00 AM", activity: "Pre-sale Access Opens" },
                { time: "12:00 PM", activity: "Public Sale Begins" },
                { time: "1:00 PM", activity: "Live Stream Q&A with Artists" },
                { time: "2:00 PM", activity: "Collector's Showcase" },
                { time: "3:00 PM", activity: "Digital Listening Party" }
            ],
            venue: {
                name: "OSVE STUDIOS Digital Platform",
                address: "Access via link sent to ticket holders"
            }
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
            artists: ["OSVE STUDIOS Artists", "OsuwoJr", "Dtato", "GECHOBOY"],
            schedule: [
                { time: "11:00 AM", activity: "Gates Open" },
                { time: "12:30 PM", activity: "Opening Ceremony" },
                { time: "2:00 PM", activity: "Performance: Dtato" },
                { time: "4:30 PM", activity: "Performance: GECHOBOY" },
                { time: "6:00 PM", activity: "Performance: OsuwoJr" },
                { time: "8:30 PM", activity: "Headliner: OSVE STUDIOS Artists" },
                { time: "10:30 PM", activity: "Closing DJ Set" }
            ],
            venue: {
                name: "KICC Grounds",
                address: "Harambee Avenue, Nairobi",
                mapUrl: "https://maps.google.com"
            }
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
            artists: ["Producer OsuwoJr", "Hilaboi"],
            schedule: [
                { time: "9:00 AM", activity: "Registration & Welcome" },
                { time: "9:30 AM", activity: "Introduction to Music Production" },
                { time: "11:00 AM", activity: "Hands-on Session with Producer OsuwoJr" },
                { time: "1:00 PM", activity: "Lunch Break" },
                { time: "2:00 PM", activity: "Advanced Techniques with Hilaboi" },
                { time: "4:00 PM", activity: "Collaborative Production Session" },
                { time: "5:30 PM", activity: "Showcase & Feedback" }
            ],
            venue: {
                name: "OSVE STUDIOS",
                address: "TRM Drive, Roysambu, Nairobi",
                mapUrl: "https://maps.google.com"
            }
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
            artists: ["OSVE STUDIOS Artists", "Special Guests"],
            schedule: [
                { time: "6:00 PM", activity: "Virtual Doors Open" },
                { time: "6:30 PM", activity: "Album Introduction" },
                { time: "7:00 PM", activity: "Track-by-Track Playthrough" },
                { time: "8:15 PM", activity: "Exclusive Behind-the-Scenes" },
                { time: "9:00 PM", activity: "Q&A with OSVE STUDIOS Artists" },
                { time: "9:30 PM", activity: "Special Guest Performance" }
            ],
            venue: {
                name: "Virtual Reality Plaza",
                address: "Access via special link sent to ticket holders",
                mapUrl: "https://maps.google.com"
            }
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
            artists: ["Various Street Artists"],
            schedule: [
                { time: "2:00 PM", activity: "Street Art Exhibition Opens" },
                { time: "3:00 PM", activity: "Open Mic Session" },
                { time: "4:30 PM", activity: "Dance Performances" },
                { time: "5:30 PM", activity: "Spoken Word Poetry" },
                { time: "6:30 PM", activity: "Street Music Showcase" },
                { time: "8:00 PM", activity: "Community Cypher" }
            ],
            venue: {
                name: "Uhuru Park",
                address: "Uhuru Highway, Nairobi",
                mapUrl: "https://maps.google.com"
            }
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
            featured: false,
            schedule: [
                { time: "8:30 AM", activity: "Registration & Networking Breakfast" },
                { time: "9:30 AM", activity: "Keynote: The Future of Music Distribution" },
                { time: "11:00 AM", activity: "Panel: NFTs in the African Music Scene" },
                { time: "12:30 PM", activity: "Lunch & Networking" },
                { time: "1:30 PM", activity: "Workshop: Creating Your First Music NFT" },
                { time: "3:00 PM", activity: "Case Studies: Successful Blockchain Music Projects" },
                { time: "4:30 PM", activity: "Closing Panel & Future Predictions" }
            ],
            venue: {
                name: "OSVE STUDIOS Conference Center",
                address: "TRM Drive, Roysambu, Nairobi",
                mapUrl: "https://maps.google.com"
            }
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
            featured: false,
            schedule: [
                { time: "3:00 PM", activity: "Virtual Check-in" },
                { time: "3:15 PM", activity: "Introduction to Studio Equipment" },
                { time: "4:00 PM", activity: "Recording Process Demonstration" },
                { time: "4:45 PM", activity: "Interactive Mixing Session" },
                { time: "5:30 PM", activity: "Q&A with Studio Engineers" },
                { time: "6:00 PM", activity: "Virtual Recording Experience" }
            ],
            venue: {
                name: "OSVE STUDIOS Virtual Studio",
                address: "Access via special link sent to ticket holders"
            }
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
            artists: ["OsuwoJr", "Hilaboi", "DJ Zimmsha"],
            schedule: [
                { time: "7:00 PM", activity: "Doors Open" },
                { time: "8:00 PM", activity: "Opening Set: DJ Zimmsha" },
                { time: "9:00 PM", activity: "Performance: Hilaboi" },
                { time: "10:30 PM", activity: "Headliner: OsuwoJr" },
                { time: "12:00 AM", activity: "Late Night DJ Set" },
                { time: "2:00 AM", activity: "Event Close" }
            ],
            venue: {
                name: "Carnivore Grounds",
                address: "Langata Road, Nairobi",
                mapUrl: "https://maps.google.com"
            }
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
            featured: false,
            schedule: [
                { time: "10:00 AM", activity: "Exhibition Opens" },
                { time: "11:00 AM", activity: "Guided Tour: The Evolution of Digital Art" },
                { time: "1:00 PM", activity: "Interactive Sound Installation Demonstration" },
                { time: "3:00 PM", activity: "Artist Talk: Merging Sound and Visuals" },
                { time: "4:30 PM", activity: "Live Digital Art Creation with Music" },
                { time: "6:00 PM", activity: "Evening Reception & Networking" }
            ],
            venue: {
                name: "National Museum",
                address: "Museum Hill, Nairobi",
                mapUrl: "https://maps.google.com"
            }
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
            featured: false,
            schedule: [
                { time: "Day 1", activity: "Welcome & Instrument Selection" },
                { time: "Day 2", activity: "Basic Music Theory & Practice" },
                { time: "Day 3", activity: "Group Ensemble Work" },
                { time: "Day 4", activity: "Songwriting Workshop" },
                { time: "Day 5", activity: "Recording Studio Experience" },
                { time: "Day 6", activity: "Performance Rehearsals" },
                { time: "Day 7", activity: "Final Concert Preparations" },
                { time: "Day 8", activity: "Grand Finale Concert & Graduation" }
            ],
            venue: {
                name: "Troublers Academy",
                address: "Kileleshwa, Nairobi",
                mapUrl: "https://maps.google.com"
            }
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
            artists: ["DJ Zimmsha", "OSVE STUDIOS Artists", "Kenya All-Stars"],
            schedule: [
                { time: "8:00 PM", activity: "Gates Open" },
                { time: "9:00 PM", activity: "Opening DJ Set" },
                { time: "10:30 PM", activity: "Performance: Kenya All-Stars" },
                { time: "11:30 PM", activity: "Countdown Preparations" },
                { time: "12:00 AM", activity: "New Year Countdown & Fireworks" },
                { time: "12:15 AM", activity: "Headliner: OSVE STUDIOS Artists" },
                { time: "2:00 AM", activity: "Late Night Set: DJ Zimmsha" },
                { time: "4:00 AM", activity: "Event Close" }
            ],
            venue: {
                name: "Uhuru Gardens",
                address: "Langata Road, Nairobi",
                mapUrl: "https://maps.google.com"
            }
        }
    ];
    
    $: eventId = $page.params.id;
    $: event = allEvents.find(e => e.id === eventId) || allEvents[0];
    $: relatedEvents = allEvents
        .filter(e => e.id !== eventId && (e.category === event.category || (e.artists && event.artists && e.artists.some(a => event.artists?.includes(a)))))
        .slice(0, 3);
</script>

<svelte:head>
    <title>{event.title} | OSVE STUDIOS Events</title>
    <meta name="description" content={event.description.substring(0, 160)}>
</svelte:head>

<main class="bg-black text-white min-h-screen">
    <!-- Hero Section -->
    <section class="relative">
        <!-- Hero Image with Gradient Overlay -->
        <div class="h-[50vh] relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
            <img src={event.image || "/events/placeholder.jpg"} alt={event.title} class="w-full h-full object-cover">
        </div>
        
        <!-- Event Details -->
        <div class="container mx-auto px-6 relative z-20 -mt-32">
            <div class="bg-black/80 border border-[#00BFFF] rounded-xl p-8 backdrop-blur-sm shadow-lg">
                <div class="flex flex-col md:flex-row gap-6">
                    <div class="md:w-2/3">
                        <span class="inline-block bg-[#00BFFF] text-black px-3 py-1 rounded-full text-sm font-medium mb-4">
                            {event.category}
                        </span>
                        <h1 class="text-4xl md:text-5xl font-bold">{event.title}</h1>
                        
                        <div class="mt-4 flex flex-wrap gap-4">
                            <div class="flex items-center text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#00BFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{event.date}</span>
                            </div>
                            <div class="flex items-center text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#00BFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{event.location}</span>
                            </div>
                            <div class="flex items-center text-[#FFD700] font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{event.price}</span>
                            </div>
                        </div>
                        
                        {#if event.artists && event.artists.length > 0}
                            <div class="mt-6">
                                <h3 class="text-lg font-semibold mb-2">Featuring:</h3>
                                <div class="flex flex-wrap gap-2">
                                    {#each event.artists as artist}
                                        <span class="inline-block bg-[#00BFFF]/20 border border-[#00BFFF]/50 text-white px-3 py-1 rounded-full text-sm">
                                            {artist}
                                        </span>
                                    {/each}
                                </div>
                            </div>
                        {/if}
                    </div>
                    
                    <div class="md:w-1/3 mt-6 md:mt-0">
                        <div class="bg-black/50 border border-[#00BFFF]/30 rounded-lg p-6">
                            <h2 class="text-xl font-bold mb-4 text-center">Book Your Spot</h2>
                            <p class="text-gray-300 mb-6 text-center">Secure your tickets now for this exclusive event!</p>
                            
                            <button 
                                on:click={() => bookEventViaWhatsApp(event)}
                                class="w-full px-4 py-3 text-lg font-bold bg-[#00BFFF] hover:bg-[#0099CC] text-black rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center justify-center mb-4"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                Book via WhatsApp
                            </button>
                            
                            <p class="text-xs text-center text-gray-400">Limited spots available. Early booking recommended.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Event Description -->
    <section class="container mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="md:col-span-2">
                <h2 class="text-3xl font-bold mb-6 neon-text">About This Event</h2>
                <div class="space-y-4 text-gray-300">
                    {#each event.description.split('\n') as paragraph}
                        <p>{paragraph}</p>
                    {/each}
                </div>
                
                {#if event.schedule && event.schedule.length > 0}
                    <div class="mt-10">
                        <h2 class="text-2xl font-bold mb-6 neon-text">Event Schedule</h2>
                        <div class="bg-black/50 border border-[#00BFFF]/30 rounded-lg p-4">
                            <ul class="space-y-4">
                                {#each event.schedule as item}
                                    <li class="flex items-start">
                                        <div class="flex-shrink-0 bg-[#00BFFF] text-black font-bold p-2 rounded w-24 text-center">
                                            {item.time}
                                        </div>
                                        <div class="ml-4 pt-1">
                                            {item.activity}
                                        </div>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                {/if}
            </div>
            
            <div>
                <h2 class="text-2xl font-bold mb-6 neon-text">Venue Details</h2>
                {#if event.venue}
                    <div class="bg-black/50 border border-[#00BFFF]/30 rounded-lg p-6">
                        <h3 class="text-xl font-bold">{event.venue.name}</h3>
                        <p class="text-gray-300 mt-2">{event.venue.address}</p>
                        
                        {#if event.venue.mapUrl}
                            <div class="mt-4">
                                <a href={event.venue.mapUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-[#00BFFF] hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                    View on Map
                                </a>
                            </div>
                        {/if}
                    </div>
                {/if}
                
                <div class="mt-8">
                    <h3 class="text-xl font-bold mb-4">Share This Event</h3>
                    <div class="flex space-x-4">
                        <a href={`https://twitter.com/intent/tweet?text=Join me at ${event.title}&url=${encodeURIComponent(`https://osvestudios.com/events/${event.id}`)}`} target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Share on Twitter">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                        </a>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://osvestudios.com/events/${event.id}`)}`} target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Share on Facebook">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                            </svg>
                        </a>
                        <a href={`https://wa.me/?text=Check out this event: ${event.title} ${encodeURIComponent(`https://osvestudios.com/events/${event.id}`)}`} target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Share on WhatsApp">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Related Events -->
    {#if relatedEvents.length > 0}
        <section class="container mx-auto px-6 py-12">
            <h2 class="text-3xl font-bold mb-8 neon-text">Related Events</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                {#each relatedEvents as relatedEvent}
                    <a href={`/events/${relatedEvent.id}`} class="bg-black/80 border border-[#00BFFF]/50 rounded-lg overflow-hidden hover:border-[#00BFFF] transition-all">
                        <div class="h-40 relative">
                            <img src={relatedEvent.image || "/events/placeholder.jpg"} alt={relatedEvent.title} class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                            <div class="absolute bottom-2 left-2">
                                <span class="inline-block bg-black/70 text-white text-xs px-2 py-1 rounded">
                                    {relatedEvent.category}
                                </span>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-bold">{relatedEvent.title}</h3>
                            <p class="text-sm text-gray-300 mt-1">{relatedEvent.date}</p>
                            <p class="text-sm font-semibold text-[#00BFFF] mt-1">{relatedEvent.price}</p>
                        </div>
                    </a>
                {/each}
            </div>
        </section>
    {/if}
    
    <!-- Back Links -->
    <div class="container mx-auto px-6 py-8 flex justify-between items-center border-t border-gray-800">
        <a href="/events" class="text-[#00BFFF] hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Events
        </a>
        <a href="/" class="text-[#00BFFF] hover:underline flex items-center">
            Back to Home
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h2a1 1 0 001-1v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1v4a1 1 0 01-1 1H7a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h2"/>
            </svg>
        </a>
    </div>
</main>

<style>
    /* Neon text */
    .neon-text {
        text-shadow: 0 0 15px #00BFFF, 0 0 30px #00BFFF, 0 0 50px #00BFFF;
    }
    
    /* Social icons */
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
        background-color: #00BFFF;
        color: black;
        transform: translateY(-2px);
    }
</style> 