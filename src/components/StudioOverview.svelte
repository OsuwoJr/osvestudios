<script lang="ts">
    // Component for displaying studio overview
    

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
                    <img src="/services/recording.jpg" alt="Studio Control Room" class="h-full w-full object-cover" />
                    <div class="absolute inset-0 border-2 border-[#00BFFF]/50 rounded-lg pointer-events-none"></div>
                </div>
                <div class="relative h-full w-full overflow-hidden rounded-lg shadow-lg">
                    <img src="/services/musicequipment.jpg" alt="Recording Booth" class="h-full w-full object-cover" />
                    <div class="absolute inset-0 border-2 border-[#00BFFF]/50 rounded-lg pointer-events-none"></div>
                </div>
                <div class="relative h-full w-full overflow-hidden rounded-lg shadow-lg">
                    <img src="/services/mixingmastering.jpg" alt="Mixing Console" class="h-full w-full object-cover" />
                    <div class="absolute inset-0 border-2 border-[#00BFFF]/50 rounded-lg pointer-events-none"></div>
                </div>
                <div class="relative h-full w-full overflow-hidden rounded-lg shadow-lg transform translate-y-4">
                    <img src="/services/livesound.jpg" alt="Recording Session" class="h-full w-full object-cover" />
                    <div class="absolute inset-0 border-2 border-[#00BFFF]/50 rounded-lg pointer-events-none"></div>
                </div>
            </div>
        </div>
    </div>
</section> 