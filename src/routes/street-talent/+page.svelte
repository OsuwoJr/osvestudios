<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly, slide } from "svelte/transition";
    import HeroSection from "../../components/StreetTalentHeroSection.svelte";
    import BeatDownload from "../../components/StreetTalentBeatDownload.svelte";
    import FreestyleVideos from "../../components/StreetTalentFreestyleVideos.svelte";
    import GalleryDump from "../../components/StreetTalentGalleryDump.svelte";
    
    let isLoaded = false;
    let activeSection = "about";
    
    // StreetTalent content
    const aboutContent = {
        title: "About TTST",
        description: `The Troublers Street Talent (TTST) is a vibrant collective of raw, undiscovered talent from Nairobi's streets. We provide a platform for emerging artists to showcase their freestyle skills, access professional beats, and gain exposure in the music industry.`,
        features: [
            {
                title: "Weekly Freestyle Sessions",
                description: "Join us every Sunday for live freestyle battles and performances.",
                icon: "fa-microphone-alt"
            },
            {
                title: "Beat Production",
                description: "Access exclusive beats produced by OSVE Studios for your freestyles.",
                icon: "fa-music"
            },
            {
                title: "Exposure & Networking",
                description: "Get your talent noticed and connect with established artists.",
                icon: "fa-users"
            },
            {
                title: "Professional Recording",
                description: "Take your street talent to the studio with professional guidance.",
                icon: "fa-compact-disc"
            }
        ]
    };
    
    // Upcoming events
    const upcomingEvents = [
        {
            title: "Next Sunday Freestyle Cypher",
            date: "Every Sunday, 2 PM",
            location: "Uhuru Park, Nairobi",
            description: "Weekly freestyle sessions with the hottest beats. Bring your A-game!"
        },
        {
            title: "TTST Showcase 2024",
            date: "August 15, 2024",
            location: "KICC, Nairobi",
            description: "Annual showcase featuring the best talent discovered through TTST."
        },
        {
            title: "Beat Production Workshop",
            date: "July 10, 2024",
            location: "OSVE Studios, Nairobi",
            description: "Learn beat-making basics from professional producers."
        }
    ];
    
    // Testimonials
    const testimonials = [
        {
            name: "Adypasco",
            quote: "TTST gave me a platform when no one else would. Now I'm dropping my first EP!",
            image: "/OsuwoJr.png" // Placeholder
        },
        {
            name: "Don Dochie",
            quote: "The freestyle sessions pushed my skills to the next level. The community is fire!",
            image: "/10.jpeg" // Placeholder
        },
        {
            name: "Megastar",
            quote: "From freestyle cyphers to studio sessions. TTST is the real deal for street artists.",
            image: "/saka.png" // Placeholder
        }
    ];
    
    // Change active section with smooth scroll
    function setActiveSection(section: string) {
        activeSection = section;
        
        setTimeout(() => {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
    
    // Initialize with animations after load
    onMount(() => {
        setTimeout(() => {
            isLoaded = true;
        }, 500);
    });
</script>

<svelte:head>
    <title>The Troublers Street Talent (TTST) - theKenyanTroublers</title>
    <meta name="description" content="Join The Troublers Street Talent (TTST) - Nairobi's premier freestyle movement. Download beats, watch top freestyles, and join our community.">
</svelte:head>

<main class="relative min-h-screen bg-black" in:fade={{ duration: 500, delay: 200 }}>
    <!-- Fixed Navigation Bar -->
    <nav class="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 shadow-lg border-b border-[#81C14B]/30 transition-all duration-300">
        <div class="container mx-auto px-4 py-4">
            <div class="flex flex-wrap items-center justify-center md:justify-start space-x-2 md:space-x-6">
                <div class="text-xl font-bold text-[#81C14B] hidden md:block">TTST</div>
                
                <button 
                    class={`px-3 py-2 rounded-full text-sm font-semibold transition-all ${activeSection === 'about' ? 'bg-[#81C14B] text-black' : 'bg-black/50 text-white hover:bg-[#81C14B]/20'}`}
                    on:click={() => setActiveSection('about')}
                >
                    About
                </button>
                
                <button 
                    class={`px-3 py-2 rounded-full text-sm font-semibold transition-all ${activeSection === 'beats' ? 'bg-[#81C14B] text-black' : 'bg-black/50 text-white hover:bg-[#81C14B]/20'}`}
                    on:click={() => setActiveSection('beats')}
                >
                    Beats
                </button>
                
                <button 
                    class={`px-3 py-2 rounded-full text-sm font-semibold transition-all ${activeSection === 'videos' ? 'bg-[#81C14B] text-black' : 'bg-black/50 text-white hover:bg-[#81C14B]/20'}`}
                    on:click={() => setActiveSection('videos')}
                >
                    Videos
                </button>
                
                <button 
                    class={`px-3 py-2 rounded-full text-sm font-semibold transition-all ${activeSection === 'gallery' ? 'bg-[#81C14B] text-black' : 'bg-black/50 text-white hover:bg-[#81C14B]/20'}`}
                    on:click={() => setActiveSection('gallery')}
                >
                    Gallery
                </button>
                
                <button 
                    class={`px-3 py-2 rounded-full text-sm font-semibold transition-all ${activeSection === 'events' ? 'bg-[#81C14B] text-black' : 'bg-black/50 text-white hover:bg-[#81C14B]/20'}`}
                    on:click={() => setActiveSection('events')}
                >
                    Events
                </button>
                
                <a 
                    href="/contact#contact-form" 
                    class="px-4 py-2 bg-[#81C14B] text-black rounded-full text-sm font-bold hover:bg-[#6A9A52] transition-all ml-2"
                >
                    Join TTST
                </a>
            </div>
        </div>
    </nav>
    
    <!-- Main Content with Sections -->
    <div class="pt-16"> <!-- Add padding to account for fixed nav -->
        <!-- Hero Section -->
        <HeroSection />
        
        <!-- About Section -->
        <section id="about" class="py-16 px-4">
            <div class="max-w-6xl mx-auto">
                {#if isLoaded}
                    <div class="text-center mb-12" in:fly={{ y: 30, duration: 800 }}>
                        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">
                            About <span class="text-[#81C14B]">The Troublers Street Talent</span>
                        </h2>
                        <p class="text-gray-300 max-w-3xl mx-auto text-lg">
                            {aboutContent.description}
                        </p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        {#each aboutContent.features as feature, i}
                            <div 
                                class="bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-[#81C14B]/20 shadow-xl transform transition-all hover:scale-105 hover:border-[#81C14B]/50"
                                in:fly={{ y: 20, duration: 800, delay: 200 + (i * 100) }}
                            >
                                <div class="w-12 h-12 rounded-full bg-[#81C14B]/20 flex items-center justify-center mb-4 mx-auto">
                                    <i class={`fas ${feature.icon} text-[#81C14B] text-xl`}></i>
                                </div>
                                <h3 class="text-xl font-bold mb-2 text-white text-center">{feature.title}</h3>
                                <p class="text-gray-400 text-center">{feature.description}</p>
                            </div>
                        {/each}
                    </div>
                    
                    <!-- Testimonials -->
                    <div class="mt-16">
                        <h3 class="text-2xl font-bold text-center mb-8 text-white">
                            <i class="fas fa-quote-left text-[#81C14B] mr-2"></i> 
                            From the Streets
                        </h3>
                        
                        <div class="grid md:grid-cols-3 gap-6">
                            {#each testimonials as testimonial, i}
                                <div 
                                    class="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 relative"
                                    in:fly={{ y: 20, duration: 800, delay: 400 + (i * 150) }}
                                >
                                    <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.name} 
                                            class="w-12 h-12 rounded-full border-2 border-[#81C14B] object-cover"
                                        />
                                    </div>
                                    <div class="pt-6">
                                        <p class="text-gray-300 text-center italic mb-4">"{testimonial.quote}"</p>
                                        <p class="text-[#81C14B] font-semibold text-center">- {testimonial.name}</p>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                {/if}
            </div>
        </section>
        
        <!-- Beats Section -->
        <section id="beats" class="py-10">
            <BeatDownload />
            
            {#if isLoaded}
                <div class="max-w-4xl mx-auto px-4 mt-8 text-center" in:fade={{ duration: 500, delay: 300 }}>
                    <p class="text-gray-300 mb-6">
                        Need custom beats for your project? We offer professional beat production services through OSVE Studios.
                    </p>
                    <a 
                        href="/contact#contact-form" 
                        class="px-6 py-3 bg-[#81C14B] text-black rounded-lg text-lg font-bold hover:bg-[#6A9A52] transition-all inline-flex items-center"
                    >
                        <i class="fas fa-headphones mr-2"></i>
                        Request Custom Beats
                    </a>
                </div>
            {/if}
        </section>
        
        <!-- Videos Section -->
        <section id="videos" class="py-10">
            <FreestyleVideos />
            
            {#if isLoaded}
                <div class="max-w-4xl mx-auto px-4 mt-8 text-center" in:fade={{ duration: 500, delay: 300 }}>
                    <a 
                        href="https://www.youtube.com/channel/UCs7hbuqCcYbPFUZKPiG0ufw" 
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-6 py-3 bg-[#FF0000] text-white rounded-lg text-lg font-bold hover:bg-[#CC0000] transition-all inline-flex items-center"
                    >
                        <i class="fab fa-youtube mr-2"></i>
                        Subscribe to Our Channel
                    </a>
                </div>
            {/if}
        </section>
        
        <!-- Gallery Section -->
        <section id="gallery" class="py-10">
            <GalleryDump />
            
            {#if isLoaded}
                <div class="max-w-4xl mx-auto px-4 mt-8 text-center" in:fade={{ duration: 500, delay: 300 }}>
                    <a 
                        href="https://www.instagram.com/thekenyantroublers/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white rounded-lg text-lg font-bold hover:opacity-90 transition-all inline-flex items-center"
                    >
                        <i class="fab fa-instagram mr-2"></i>
                        Follow Us on Instagram
                    </a>
                </div>
            {/if}
        </section>
        
        <!-- Events Section -->
        <section id="events" class="py-16 px-4 bg-gradient-to-b from-black to-[#0a0a0a]">
            <div class="max-w-6xl mx-auto">
                {#if isLoaded}
                    <div class="text-center mb-12" in:fly={{ y: 30, duration: 800 }}>
                        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Upcoming <span class="text-[#81C14B]">Events</span>
                        </h2>
                        <p class="text-gray-300 max-w-3xl mx-auto">
                            Join us at these upcoming events to showcase your talent, connect with other artists, and be part of the movement.
                        </p>
                    </div>
                    
                    <div class="grid md:grid-cols-3 gap-6 mt-8">
                        {#each upcomingEvents as event, i}
                            <div 
                                class="bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl transform transition-all hover:scale-105 hover:border-[#81C14B]/50"
                                in:fly={{ y: 20, duration: 800, delay: 200 + (i * 150) }}
                            >
                                <div class="flex justify-between items-start mb-4">
                                    <h3 class="text-xl font-bold text-white">{event.title}</h3>
                                    <span class="bg-[#81C14B] text-black text-xs font-bold px-2 py-1 rounded-full">
                                        <i class="fas fa-calendar-alt mr-1"></i> {event.date}
                                    </span>
                                </div>
                                <p class="text-gray-400 mb-2">
                                    <i class="fas fa-map-marker-alt text-[#81C14B] mr-2"></i> {event.location}
                                </p>
                                <p class="text-gray-300">{event.description}</p>
                                <a 
                                    href="/contact#contact-form" 
                                    class="mt-4 block w-full text-center bg-[#81C14B]/20 hover:bg-[#81C14B]/40 text-[#81C14B] py-2 rounded-lg transition-all border border-[#81C14B]/50"
                                >
                                    RSVP / Learn More
                                </a>
                            </div>
                        {/each}
                    </div>
                {/if}
            </div>
        </section>
        
        <!-- CTA Section -->
        <section class="py-16 px-4 bg-[#081008]">
            <div class="max-w-4xl mx-auto text-center">
                {#if isLoaded}
                    <div in:fly={{ y: 30, duration: 800 }}>
                        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
                            Ready to Show Your <span class="text-[#81C14B]">Talent?</span>
                        </h2>
                        <p class="text-gray-300 mb-8 text-lg">
                            Join The Troublers Street Talent and take your freestyle skills to the next level. 
                            Get access to professional beats, performance opportunities, and industry connections.
                        </p>
                        
                        <div class="flex flex-col md:flex-row gap-4 justify-center">
                            <a 
                                href="/contact#contact-form" 
                                class="px-8 py-4 bg-[#81C14B] text-black rounded-lg text-lg font-bold hover:bg-[#6A9A52] transition-all flex items-center justify-center"
                            >
                                <i class="fas fa-user-plus mr-2"></i>
                                Apply to Join TTST
                            </a>
                            
                            <a 
                                href="https://wa.me/254790932575" 
                                target="_blank"
                                rel="noopener noreferrer"
                                class="px-8 py-4 bg-black/60 border border-[#81C14B] text-white rounded-lg text-lg font-bold hover:bg-[#81C14B]/20 transition-all flex items-center justify-center"
                            >
                                <i class="fab fa-whatsapp mr-2"></i>
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                {/if}
            </div>
        </section>
    </div>
</main>

<style>
    /* Smooth scrolling for the page */
    :global(html) {
        scroll-behavior: smooth;
    }
    
    /* Make sure sections have enough height for scrolling */
    section {
        min-height: 50vh;
    }
    
    /* Add hover effects to buttons */
    button, a {
        transition: all 0.3s ease;
    }
</style>
