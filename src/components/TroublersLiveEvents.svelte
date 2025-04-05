<script>
    let events = [
        { 
            title: "🎧 VR Concert with OSVE STUDIOS", 
            date: "June 20, 2025", 
            location: "Metaverse Stage | Online", 
            description: "Experience a mind-blowing virtual concert with TheKenyanTroublers and OSVE STUDIOS in the Metaverse. Get exclusive performances, backstage interactions, and real-time fan engagement!", 
            link: "#" 
        },
        { 
            title: "🔥 Fan Cypher Battle", 
            date: "May 5, 2025", 
            location: "Nairobi CBD | Troublers Street Talent Spot", 
            description: "Join the biggest rap showdown in Nairobi! Freestyle your way to glory, meet fellow artists, and get a chance to feature on our next mixtape.", 
            link: "/#street-talent" 
        },
        { 
            title: "🎶 Exclusive NFT Music Drop", 
            date: "June 1, 2025", 
            location: "Online | TheKenyanTroublers HQ", 
            description: "Be the first to own limited-edition NFT music from top artists. Gain lifetime access, unlock hidden tracks, and get early access to new releases!", 
            link: "#" 
        }
    ];
</script>

<!-- Upcoming Events Section -->
<section class="relative py-20 text-white text-center bg-gradient-to-b from-[#3F6B3E] via-[#81C14B]/80 to-[#6A9A52]">
    <div class="relative z-10 px-6">
        <h2 class="text-5xl font-extrabold neon-text">🎤 Upcoming Events</h2>
        <p class="text-xl mt-4 opacity-90 max-w-3xl mx-auto">
            <span class="font-bold">Be part of the most electrifying music experiences!</span> Whether online or in-person, our events bring the heat 🔥 and connect fans & artists like never before.  
        </p>

        <!-- Event List -->
        <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {#each events as event}
                <div class="relative bg-black/80 border border-[#81C14B] rounded-xl shadow-lg p-8 transition-all transform hover:scale-105 hover:shadow-2xl">
                    <h3 class="text-3xl font-bold">{event.title}</h3>
                    <p class="text-lg text-[#FFD700] font-semibold mt-2">{event.date}</p>
                    <p class="text-md text-gray-300 mt-2">{event.location}</p>
                    <p class="mt-4 opacity-90">{event.description}</p>
                    <a href={event.link} class="mt-6 inline-block px-6 py-3 text-lg font-bold bg-[#81C14B] hover:bg-[#6A9A52] text-black rounded-full shadow-lg transition-all transform hover:scale-105">
                        Join Now
                    </a>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
.neon-text {
    text-shadow: 0 0 15px #FFD700, 0 0 30px #81C14B, 0 0 50px #FFD700;
}
</style>
