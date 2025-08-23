<script lang="ts">
    import { onMount } from "svelte";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    
    interface Project {
        id: string;
        title: string;
        artist: string;
        type: string;
        description: string;
        image: string;
        date: string;
        featured: boolean;
        link: string;
    }
    
    let projects: Project[] = [
        {
            id: "boom-bap",
            title: "BOOM BAP",
            artist: "OSVE STUDIOS",
            type: "Beat",
            description: "Classic boom bap beat with hard-hitting drums and soulful samples. Perfect for conscious rap and lyrical content.",
            image: "/services/beatlicensing.jpg",
            date: "2024",
            featured: true,
            link: "/beats/1.BOOM BAP.mp3"
        },
        {
            id: "drill",
            title: "DRILL",
            artist: "OSVE STUDIOS",
            type: "Beat",
            description: "High-energy drill beat with aggressive 808s and trap-style hi-hats. Ideal for drill and trap artists.",
            image: "/services/beatlicensing.jpg",
            date: "2024",
            featured: true,
            link: "/beats/2.DRILL.mp3"
        },
        {
            id: "trap",
            title: "TRAP",
            artist: "OSVE STUDIOS",
            type: "Beat",
            description: "Modern trap beat featuring heavy bass, crisp snares, and atmospheric melodies. Perfect for contemporary trap music.",
            image: "/services/beatlicensing.jpg",
            date: "2024",
            featured: true,
            link: "/beats/3.TRAP.mp3"
        },
        {
            id: "dancehall",
            title: "DANCEHALL",
            artist: "OSVE STUDIOS",
            type: "Beat",
            description: "Vibrant dancehall beat with Caribbean rhythms and infectious grooves. Great for dancehall and reggae artists.",
            image: "/services/beatlicensing.jpg",
            date: "2024",
            featured: true,
            link: "/beats/4.DANCEHALL.mp3"
        }
    ];
    
    let activeFilter = "all";
    let searchQuery = "";
    let currentlyPlaying: string | null = null;
    
    $: filteredProjects = projects.filter(project => {
        // Apply category filter
        if (activeFilter !== "all" && project.type !== activeFilter) return false;
        
        // Apply search filter (case insensitive)
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            return (
                project.title.toLowerCase().includes(query) ||
                project.artist.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                project.type.toLowerCase().includes(query)
            );
        }
        
        return true;
    });
    
    // Get unique project types for filter
    $: projectTypes = [...new Set(projects.map(project => project.type))];
    
    function handleImageError(event: Event) {
        const target = event.target as HTMLImageElement;
        // Default fallback image from the existing events folder
        target.src = "/events/album-launch.jpg";
    }
    
    function togglePlay(projectId: string) {
        const audio = document.getElementById(`audio-${projectId}`) as HTMLAudioElement;
        
        if (currentlyPlaying === projectId) {
            // Pause current track
            audio.pause();
            currentlyPlaying = null;
        } else {
            // Stop any currently playing track
            if (currentlyPlaying) {
                const currentAudio = document.getElementById(`audio-${currentlyPlaying}`) as HTMLAudioElement;
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }
            }
            
            // Play new track
            audio.play();
            currentlyPlaying = projectId;
        }
    }
    
    function updateProgress(projectId: string, event: Event) {
        // This function can be used to update progress bars if needed
        // For now, it's just a placeholder
    }
    
    onMount(() => {
        // Animate the projects on load for a nice effect
        setTimeout(() => {
            const projectElements = document.querySelectorAll('.project-card');
            projectElements.forEach((element, index) => {
                setTimeout(() => {
                    if (element instanceof HTMLElement) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                }, index * 100);
            });
        }, 100);
    });
</script>

<svelte:head>
    <title>Projects | OSVE STUDIOS</title>
    <meta name="description" content="View our portfolio of recording studio projects, including albums, singles, and sound design work.">
</svelte:head>

<style>
    .project-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .filter-item {
        transition: color 0.3s, border-color 0.3s;
    }
    
    .filter-item.active {
        color: #00BFFF;
        border-color: #00BFFF;
    }
    
    .category-badge {
        background: linear-gradient(to right, rgba(0, 191, 255, 0.8), rgba(0, 191, 255, 0.4));
        box-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
    }
    
    /* Focus styles for accessibility */
    button:focus, input:focus, a:focus {
        outline: 2px solid #00BFFF;
        outline-offset: 2px;
    }
    
    /* Mobile responsive improvements */
    @media (max-width: 640px) {
        .filter-container {
            flex-wrap: wrap;
            justify-content: center;
        }
        
        .filter-item {
            margin-bottom: 0.5rem;
        }
        
        .project-card {
            height: auto;
        }
    }
</style>

<main class="bg-black text-white min-h-screen pt-24 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Hero Section -->
        <div class="text-center mb-14">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative inline-block">
                Our Projects
                <span class="absolute -bottom-2 left-0 w-full h-1 bg-[#00BFFF]"></span>
            </h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our latest work and collaborations. From album productions to commercial sound design, we bring creative visions to life.
            </p>
        </div>
        
        <!-- Search & Filter -->
        <div class="mt-10 max-w-4xl mx-auto">
            <div class="relative mb-6">
                <input 
                    type="text" 
                    bind:value={searchQuery}
                    placeholder="Search projects..." 
                    class="w-full py-3 px-12 rounded-full bg-black/40 backdrop-blur-sm border border-[#00BFFF]/50 shadow-[0_0_10px_#00BFFF]/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent"
                />
                <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00BFFF]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            
            <!-- Category Filters -->
            <div class="filter-container flex items-center justify-center flex-wrap space-x-2 mb-10">
                <button 
                    class="filter-item px-4 py-2 border border-gray-700 rounded-full text-sm font-medium hover:border-[#00BFFF] hover:text-[#00BFFF] transition-all {activeFilter === 'all' ? 'active' : ''}"
                    on:click={() => activeFilter = 'all'}
                >
                    All Projects
                </button>
                
                {#each projectTypes as type}
                    <button 
                        class="filter-item px-4 py-2 border border-gray-700 rounded-full text-sm font-medium hover:border-[#00BFFF] hover:text-[#00BFFF] transition-all {activeFilter === type ? 'active' : ''}"
                        on:click={() => activeFilter = type}
                    >
                        {type}
                    </button>
                {/each}
            </div>
        </div>
        
        <!-- Projects Display -->
        {#if activeFilter === "Beat" || activeFilter === "all"}
            <!-- Beat List (Spotify-style) -->
            <div class="w-full max-w-4xl mx-auto">
                <div class="bg-black/20 backdrop-blur-sm border border-[#00BFFF]/20 rounded-xl overflow-hidden">
                    <!-- Header -->
                    <div class="bg-[#00BFFF]/10 px-6 py-4 border-b border-[#00BFFF]/20">
                        <h3 class="text-xl font-bold text-white">Beats</h3>
                        <p class="text-gray-300 text-sm">Stream our latest beats</p>
                    </div>
                    
                    <!-- Beat List -->
                    <div class="divide-y divide-[#00BFFF]/10">
                        {#each filteredProjects.filter(p => p.type === "Beat") as project, index (project.id)}
                            <div class="flex items-center p-4 hover:bg-[#00BFFF]/5 transition-colors">
                                <!-- Track Number -->
                                <div class="w-8 h-8 flex items-center justify-center text-gray-400 font-mono text-sm mr-4">
                                    {index + 1}
                                </div>
                                
                                <!-- Album Art -->
                                <div class="w-12 h-12 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        class="w-full h-full object-cover"
                                    />
                                </div>
                                
                                <!-- Track Info -->
                                <div class="flex-grow min-w-0 mr-4">
                                    <h4 class="text-white font-semibold truncate">{project.title}</h4>
                                    <p class="text-[#00BFFF] text-sm truncate">{project.artist}</p>
                                </div>
                                
                                <!-- Duration (placeholder) -->
                                <div class="text-gray-400 text-sm mr-4 w-16 text-right">
                                    --:--
                                </div>
                                
                                <!-- Play Button -->
                                <button 
                                    class="w-10 h-10 rounded-full bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-black flex items-center justify-center transition-colors mr-4"
                                    on:click={() => togglePlay(project.id)}
                                >
                                    {#if currentlyPlaying === project.id}
                                        <i class="fas fa-pause"></i>
                                    {:else}
                                        <i class="fas fa-play"></i>
                                    {/if}
                                </button>
                                
                                <!-- Audio Player (Hidden) -->
                                <audio 
                                    id="audio-{project.id}"
                                    src={project.link} 
                                    preload="none"
                                    on:ended={() => currentlyPlaying = null}
                                    on:timeupdate={(e) => updateProgress(project.id, e)}
                                ></audio>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        {/if}
        
        <!-- Other Projects Grid -->
        {#if filteredProjects.filter(p => p.type !== "Beat").length > 0}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {#each filteredProjects.filter(p => p.type !== "Beat") as project (project.id)}
                    <article class="project-card group bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-xl overflow-hidden hover:border-[#00BFFF]/70 transition-all duration-300 flex flex-col h-full">
                        <!-- Project Image -->
                        <div class="relative w-full h-64 overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                on:error={(e) => handleImageError(e)}
                            />
                            <div class="absolute top-0 right-0 m-3">
                                <span class="category-badge text-xs font-bold py-1 px-2 rounded text-black">
                                    {project.type}
                                </span>
                            </div>
                            {#if project.featured}
                                <div class="absolute top-0 left-0 m-3">
                                    <span class="bg-[#00BFFF] text-black text-xs font-bold py-1 px-2 rounded">
                                        Featured
                                    </span>
                                </div>
                            {/if}
                        </div>
                        
                        <!-- Project Info -->
                        <div class="p-6 flex-grow flex flex-col">
                            <h3 class="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                            <p class="text-[#00BFFF] mb-3">{project.artist} • {project.date}</p>
                            <p class="text-gray-300 mb-4 flex-grow">{project.description}</p>
                            
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                class="inline-flex items-center justify-center bg-[#00BFFF]/10 hover:bg-[#00BFFF]/20 text-[#00BFFF] py-2 px-4 rounded-lg transition-all duration-300 border border-[#00BFFF]/30 hover:border-[#00BFFF]/70 mt-auto"
                            >
                                <span>Listen/View Project</span>
                                <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </article>
                {/each}
            </div>
        {/if}
            
            {#if filteredProjects.length === 0}
                <div class="col-span-full text-center py-16">
                    <svg class="w-16 h-16 mx-auto text-gray-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 0a12 12 0 100 24 12 12 0 000-24z" />
                    </svg>
                    <h3 class="text-xl font-medium text-gray-400">Project Not Added Yet</h3>
                    <p class="text-gray-500 mt-2">We're working on adding amazing projects to showcase our work</p>
                    <button 
                        class="mt-4 px-4 py-2 bg-[#00BFFF]/10 text-[#00BFFF] rounded-lg hover:bg-[#00BFFF]/20 transition-colors"
                        on:click={() => { searchQuery = ""; activeFilter = "all"; }}
                    >
                        Reset Filters
                    </button>
                </div>
            {/if}
        
        <!-- CTA Section -->
        <div class="mt-20 bg-gradient-to-r from-black to-[#00BFFF]/30 backdrop-blur-lg border border-[#00BFFF]/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Next Project?</h2>
            <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                From concept to final master, our team is ready to help bring your vision to life. Let's create something amazing together.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="/contact" class="px-8 py-3 bg-[#00BFFF] text-black font-bold rounded-full hover:bg-white hover:text-[#00BFFF] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(0,191,255,0.5)]">
                    Book a Session
                </a>
                <a href="/services" class="px-8 py-3 bg-transparent text-white border-2 border-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300">
                    View Services
                </a>
            </div>
        </div>
    </div>
</main> 