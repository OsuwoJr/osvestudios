<script lang="ts">
    // Component for displaying studio overview
    
    function handleImageError(event: Event) {
        const target = event.target as HTMLImageElement;
        if (target.alt === "Studio Control Room") {
            target.src = 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';
        } else if (target.alt === "Recording Booth") {
            target.src = 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';
        } else if (target.alt === "Mixing Console") {
            target.src = 'https://images.unsplash.com/photo-1519552928909-67ca7aef9265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80';
        } else if (target.alt === "Recording Session") {
            target.src = 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
        }
    }
</script>

<section id="about" class="py-16 md:py-24 px-4">
    <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Studio Information -->
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Welcome to OSVE Studios</h2>
                <p class="text-gray-300 mb-6">
                    We're a full-service recording studio dedicated to bringing your musical vision to life. 
                    With state-of-the-art equipment and a team of experienced professionals, we provide 
                    a creative environment where artists can thrive.
                </p>
                <div class="space-y-4 mb-8">
                    <div class="flex items-start">
                        <div class="text-[#00BFFF] mr-3 mt-1">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <p>Professional acoustic treatment for pristine sound</p>
                    </div>
                    <div class="flex items-start">
                        <div class="text-[#00BFFF] mr-3 mt-1">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <p>Industry-standard recording equipment and software</p>
                    </div>
                    <div class="flex items-start">
                        <div class="text-[#00BFFF] mr-3 mt-1">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <p>Comfortable recording spaces for solo artists and bands</p>
                    </div>
                    <div class="flex items-start">
                        <div class="text-[#00BFFF] mr-3 mt-1">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <p>Experienced engineers and producers to guide your project</p>
                    </div>
                </div>
                <a href="/about" class="inline-block px-6 py-3 bg-[#00BFFF] text-white font-semibold rounded-lg hover:bg-[#0099CC] transition-all">
                    Learn More About Us
                </a>
            </div>
            
            <!-- Studio Images -->
            <div class="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <div class="relative h-full w-full overflow-hidden rounded-lg shadow-lg transform translate-y-4">
                    <img src="/studio1.jpg" alt="Studio Control Room" class="h-full w-full object-cover" 
                         on:error={handleImageError} />
                    <div class="absolute inset-0 border-2 border-[#00BFFF]/50 rounded-lg pointer-events-none"></div>
                </div>
                <div class="relative h-full w-full overflow-hidden rounded-lg shadow-lg">
                    <img src="/studio2.jpg" alt="Recording Booth" class="h-full w-full object-cover" 
                         on:error={handleImageError} />
                    <div class="absolute inset-0 border-2 border-[#00BFFF]/50 rounded-lg pointer-events-none"></div>
                </div>
                <div class="relative h-full w-full overflow-hidden rounded-lg shadow-lg">
                    <img src="/studio3.jpg" alt="Mixing Console" class="h-full w-full object-cover" 
                         on:error={handleImageError} />
                    <div class="absolute inset-0 border-2 border-[#00BFFF]/50 rounded-lg pointer-events-none"></div>
                </div>
                <div class="relative h-full w-full overflow-hidden rounded-lg shadow-lg transform translate-y-4">
                    <img src="/studio4.jpg" alt="Recording Session" class="h-full w-full object-cover" 
                         on:error={handleImageError} />
                    <div class="absolute inset-0 border-2 border-[#00BFFF]/50 rounded-lg pointer-events-none"></div>
                </div>
            </div>
        </div>
    </div>
</section> 