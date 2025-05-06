<script lang="ts">
    interface Service {
        name: string;
        icon: string;
        description: string;
    }
    
    export let services: Service[] = [];
</script>

<section id="services" class="py-16 md:py-24 px-4">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
            <p class="text-gray-300 max-w-2xl mx-auto">State-of-the-art equipment and experienced professionals to bring your musical vision to life.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {#each services as service}
                <div class="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-[#00BFFF]/20 hover:border-[#00BFFF] transition-all hover:shadow-[0_0_15px_rgba(0,191,255,0.3)] group">
                    <div class="flex flex-col items-center text-center space-y-4">
                        <div class="w-16 h-16 rounded-full bg-[#00BFFF]/10 flex items-center justify-center group-hover:bg-[#00BFFF]/20 transition-all">
                            <i class="{service.icon} text-2xl text-[#00BFFF]"></i>
                        </div>
                        <h3 class="text-xl font-bold">{service.name}</h3>
                        <p class="text-gray-300">{service.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        
        <div class="text-center mt-12">
            <a href="/services" class="inline-block px-8 py-3 bg-[#00BFFF] text-white font-semibold rounded-lg hover:bg-[#0099CC] transition-all">
                View All Services
            </a>
        </div>
    </div>
</section> 