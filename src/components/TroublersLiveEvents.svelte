<script lang="ts">
    import { browser } from '$app/environment';
    
    interface Event {
        title: string;
        date: string;
        location: string;
        price: string;
        description: string;
        link: string;
    }
    
    let events: Event[] = [
        { 
            title: "🎧 VR Concert with OSVE STUDIOS", 
            date: "June 20, 2026", 
            location: "Metaverse Stage | Online", 
            price: "KES 2,000",
            description: "Experience a mind-blowing virtual concert with TheKenyanTroublers and OSVE STUDIOS in the Metaverse. Get exclusive performances, backstage interactions, and real-time fan engagement!", 
            link: "/events/vr-concert-osve-studios" 
        },
        { 
            title: "🔥 Fan Cypher Battle", 
            date: "May 5, 2026", 
            location: "Nairobi CBD | Troublers Street Talent Spot", 
            price: "KES 500",
            description: "Join the biggest rap showdown in Nairobi! Freestyle your way to glory, meet fellow artists, and get a chance to feature on our next mixtape.", 
            link: "/events/fan-cypher-battle" 
        },
        { 
            title: "🎶 Exclusive NFT Music Drop", 
            date: "June 1, 2026", 
            location: "Online | TheKenyanTroublers HQ", 
            price: "KES 1,500",
            description: "Be the first to own limited-edition NFT music from top artists. Gain lifetime access, unlock hidden tracks, and get early access to new releases!", 
            link: "/events/nft-music-drop" 
        }
    ];
    
    // WhatsApp functionality
    const whatsappNumber = "254790932575"; // Correct WhatsApp number
    
    function bookEventViaWhatsApp(event: Event): void {
        if (!browser) return;
        const message = `Hi, I'm interested in booking tickets for the event "${event.title}" on ${event.date} (${event.price}). Please provide booking details.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    }
</script>

<!-- Upcoming Events Section -->
<section class="relative py-20 text-white text-center bg-gradient-to-b from-[#3F6B3E] via-[#81C14B]/80 to-[#6A9A52]">
    <!-- Futuristic Elements -->
    <div class="absolute inset-0 overflow-hidden">
        <div class="cyber-grid"></div>
    </div>
    
    <!-- Animated Sound Waves -->
    <div class="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div class="sound-waves">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
    </div>

    <div class="relative z-10 px-6">
        <h2 class="text-5xl font-extrabold neon-text">🎤 Upcoming Events</h2>
        <p class="text-xl mt-4 opacity-90 max-w-3xl mx-auto">
            <span class="font-bold">Be part of the most electrifying music experiences!</span> Whether online or in-person, our events bring the heat 🔥 and connect fans & artists like never before.  
        </p>

        <!-- Event List -->
        <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {#each events as event}
                <div class="relative bg-black/80 border border-[#81C14B] rounded-xl shadow-lg p-8 transition-all transform hover:scale-105 hover:shadow-2xl event-card">
                    <!-- Holographic Effect -->
                    <div class="holo-overlay"></div>
                    
                    <h3 class="text-3xl font-bold">{event.title}</h3>
                    <p class="text-lg text-[#FFD700] font-semibold mt-2">{event.date}</p>
                    <p class="text-md text-gray-300 mt-2">{event.location}</p>
                    <p class="text-lg font-bold text-[#81C14B] mt-2">{event.price}</p>
                    <p class="mt-4 opacity-90">{event.description}</p>
                    
                    <div class="mt-6 grid grid-cols-2 gap-3">
                        <a href={event.link} class="inline-block px-4 py-3 text-md font-bold bg-[#FFD700] hover:bg-[#E6C200] text-black rounded-full shadow-lg transition-all transform hover:scale-105">
                            View Details
                        </a>
                        <button 
                            on:click={() => bookEventViaWhatsApp(event)}
                            class="inline-block px-4 py-3 text-md font-bold bg-[#81C14B] hover:bg-[#6A9A52] text-black rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Book Now
                        </button>
                    </div>
                    
                    <!-- Futuristic Corner Accents -->
                    <div class="corner-accent top-left"></div>
                    <div class="corner-accent top-right"></div>
                    <div class="corner-accent bottom-left"></div>
                    <div class="corner-accent bottom-right"></div>
                </div>
            {/each}
        </div>
        
        <!-- All Events Button -->
        <div class="mt-12">
            <a href="/events" class="inline-block px-8 py-4 text-lg font-bold text-black bg-[#FFD700] hover:bg-[#E6C200] rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-[#FFD700]/50 cyber-button">
                View All Events
            </a>
        </div>
    </div>
</section>

<style>
.neon-text {
    text-shadow: 0 0 15px #FFD700, 0 0 30px #81C14B, 0 0 50px #FFD700;
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

/* Event card styling */
.event-card {
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.event-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(129, 193, 75, 0.1) 0%, transparent 50%, rgba(255, 215, 0, 0.1) 100%);
    z-index: -1;
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

/* Holographic overlay */
.holo-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        135deg,
        transparent 0%,
        rgba(129, 193, 75, 0.05) 25%, 
        rgba(255, 215, 0, 0.05) 50%,
        rgba(129, 193, 75, 0.05) 75%,
        transparent 100%
    );
    background-size: 400% 400%;
    animation: holo-animation 8s ease infinite;
    pointer-events: none;
    z-index: -1;
}

@keyframes holo-animation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Sound wave animation */
.sound-waves {
    position: relative;
    width: 300px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.wave {
    position: absolute;
    width: 5px;
    height: 80px;
    background: rgba(129, 193, 75, 0.2);
    margin: 0 5px;
    border-radius: 10px;
    animation: wave 1.5s linear infinite;
}

.wave:nth-child(1) { animation-delay: 0s; left: 30%; }
.wave:nth-child(2) { animation-delay: 0.3s; left: 40%; }
.wave:nth-child(3) { animation-delay: 0.6s; left: 50%; }
.wave:nth-child(4) { animation-delay: 0.9s; left: 60%; }
.wave:nth-child(5) { animation-delay: 1.2s; left: 70%; }

@keyframes wave {
    0% { transform: scale(1, 0.3); }
    50% { transform: scale(1, 1); }
    100% { transform: scale(1, 0.3); }
}

/* Cyber button */
.cyber-button {
    position: relative;
    overflow: hidden;
}

.cyber-button::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: rotate(45deg);
    animation: shine 3s infinite;
}

@keyframes shine {
    0% { left: -50%; }
    100% { left: 150%; }
}
</style>
