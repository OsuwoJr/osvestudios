<script lang="ts">
    interface Project {
        title: string;
        artist: string;
        description: string;
        img: string;
        link: string;
    }
    
    export let projects: Project[] = [];
</script>

<section id="projects" class="py-16 md:py-24 px-4 bg-black/30">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Recent Projects</h2>
            <p class="text-gray-300 max-w-2xl mx-auto">Explore our latest work and the artists we've collaborated with.</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each projects as project}
                <a href={project.link} target="_blank" rel="noopener noreferrer" class="group block">
                    <div class="bg-black/40 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,191,255,0.3)] border border-transparent hover:border-[#00BFFF]/50">
                        <div class="relative aspect-square overflow-hidden">
                            <img src={project.img} alt={project.title} class="w-full h-full object-cover transform group-hover:scale-[1.05] transition-transform duration-500" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-4">
                                <div class="flex flex-col">
                                    <span class="text-[#00BFFF] font-bold mb-1">{project.artist}</span>
                                    <h3 class="text-xl font-bold">{project.title}</h3>
                                    <p class="text-sm text-gray-300 mt-1">{project.description}</p>
                                </div>
                            </div>
                            <div class="absolute inset-0 bg-[#00BFFF]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div class="bg-black/60 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                    <i class="fas fa-play text-white text-2xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
        
        <div class="text-center mt-12">
            <a href="/projects" class="inline-block px-8 py-3 bg-transparent border border-[#00BFFF] text-white font-semibold rounded-lg hover:bg-[#00BFFF]/20 transition-all">
                View All Projects
            </a>
        </div>
    </div>
</section> 