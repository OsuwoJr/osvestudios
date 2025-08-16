<script lang="ts">
    import "@fortawesome/fontawesome-free/css/all.min.css";
    
    function handleImageError(event: Event) {
        const target = event.target as HTMLImageElement;
        if (target.alt === "James Osuwo") {
            target.src = 'https://images.unsplash.com/photo-1567596388756-f6d710c8fc07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80';
        } else if (target.alt === "Sarah Mwende") {
            target.src = 'https://images.unsplash.com/photo-1605722243979-fe0be8158232?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
        } else if (target.alt === "David Kimani") {
            target.src = 'https://images.unsplash.com/photo-1530538987395-032d1800fdd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
        }
    }
</script>

<div class="max-w-6xl mx-auto px-4 py-16 md:py-24">
    <!-- Page Title -->
    <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About OSVE Studios</h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">A premier recording studio dedicated to bringing your musical vision to life</p>
    </div>
    
    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        <!-- About Text -->
        <div>
            <h2 class="text-2xl md:text-3xl font-bold mb-6 text-[#00BFFF]">Our Story</h2>
            <div class="space-y-4 text-gray-300">
                <p>
                    Founded in 2020, OSVE Studios was born from a passion for music and sound. Our journey began with a simple mission: 
                    to create a space where artists could experience the perfect blend of technical excellence and creative inspiration.
                </p>
                <p>
                    What started as a small project studio has evolved into a full-service recording facility 
                    equipped with state-of-the-art technology and a team of experienced professionals.
                </p>
                <p>
                    Today, we take pride in being a creative hub for artists across all genres, from established professionals 
                    to emerging talents looking to make their mark on the industry.
                </p>
            </div>
            
            <h2 class="text-2xl md:text-3xl font-bold mt-12 mb-6 text-[#00BFFF]">Our Philosophy</h2>
            <div class="space-y-4 text-gray-300">
                <p>
                    At OSVE Studios, we believe that great sound begins with creating the right environment. 
                    We've meticulously designed our spaces to provide both technical precision and creative comfort.
                </p>
                <p>
                    We understand that each project is unique, and we approach every session with fresh ears and 
                    a commitment to realizing your artistic vision. Our goal is not just to record sound, but to 
                    capture the emotion and energy that makes music powerful.
                </p>
            </div>
        </div>
        
        <!-- Equipment & Facilities -->
        <div>
            <h2 class="text-2xl md:text-3xl font-bold mb-6 text-[#00BFFF]">Our Equipment</h2>
            <div class="mb-8">
                <h3 class="text-xl font-semibold mb-3">Studio A - Main Recording Room</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>SSL AWS 948 console</li>
                    <li>Pro Tools HDX system</li>
                    <li>Neumann U87 microphones</li>
                    <li>AKG C414 microphones</li>
                    <li>Shure SM7B microphones</li>
                    <li>Universal Audio Apollo interfaces</li>
                    <li>Yamaha NS10 monitors</li>
                    <li>Genelec 8050B monitors</li>
                </ul>
            </div>
            
            <div class="mb-8">
                <h3 class="text-xl font-semibold mb-3">Studio B - Production Suite</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Ableton Live workstation</li>
                    <li>Native Instruments Komplete</li>
                    <li>Focal Shape 65 monitors</li>
                    <li>MIDI controllers and synthesizers</li>
                    <li>Treated acoustic space for voiceovers and demos</li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-xl font-semibold mb-3">Facilities</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Lounge area with complimentary refreshments</li>
                    <li>Isolated recording booths</li>
                    <li>Client workstations</li>
                    <li>High-speed internet throughout</li>
                    <li>Secure equipment storage</li>
                </ul>
            </div>
        </div>
    </div>
    
    <!-- Team Section -->
    <div class="mt-20">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Team Member 1 -->
            <div class="bg-black/40 rounded-lg overflow-hidden backdrop-blur-sm border border-[#00BFFF]/20 hover:border-[#00BFFF]/50 transition-all group">
                <div class="aspect-square overflow-hidden">
                    <img 
                        src="/team1.jpg" 
                        alt="James Osuwo" 
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        on:error={handleImageError}
                    />
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-1">John Frederickoh</h3>
                    <p class="text-[#00BFFF] mb-4">Studio Director / Lead Engineer</p>
                    <p class="text-gray-300 text-sm">With over 10 years of experience in audio production, James leads our engineering team and oversees all technical aspects of OSVE Studios.</p>
                    
                  
                </div>
            </div>
            
            <!-- Team Member 2 -->
            <div class="bg-black/40 rounded-lg overflow-hidden backdrop-blur-sm border border-[#00BFFF]/20 hover:border-[#00BFFF]/50 transition-all group">
                <div class="aspect-square overflow-hidden">
                    <img 
                        src="/team2.jpg" 
                        alt="Sarah Mwende" 
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        on:error={handleImageError}
                    />
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-1">Odongo Makele</h3>
                    <p class="text-[#00BFFF] mb-4">Sound Designer / Producer</p>
                    <p class="text-gray-300 text-sm">Sarah specializes in sound design and music production, bringing creative direction and innovative production techniques to every project.</p>
                   
                </div>
            </div>
            
            <!-- Team Member 3 -->
            <div class="bg-black/40 rounded-lg overflow-hidden backdrop-blur-sm border border-[#00BFFF]/20 hover:border-[#00BFFF]/50 transition-all group">
                <div class="aspect-square overflow-hidden">
                    <img 
                        src="/team3.jpg" 
                        alt="David Kimani" 
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        on:error={handleImageError}
                    />
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-1">David Kimani</h3>
                    <p class="text-[#00BFFF] mb-4">Mixing & Mastering Engineer</p>
                    <p class="text-gray-300 text-sm">With a meticulous ear for detail, David handles mixing and mastering to ensure every track reaches its full sonic potential.</p>
                  
                    
                </div>
            </div>
        </div>
    </div>
    
    <!-- CTA Section -->
    <div class="mt-20 text-center py-16 bg-[#00BFFF]/10 rounded-xl backdrop-blur-sm">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Create?</h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let's bring your vision to life with our state-of-the-art facilities and experienced team.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="px-8 py-3 bg-[#00BFFF] hover:bg-[#0099CC] text-white font-bold rounded-lg transition-all inline-flex items-center justify-center">
                <i class="fas fa-calendar-alt mr-2"></i> Book a Session
            </a>
            <a href="/services" class="px-8 py-3 bg-black/60 border border-[#00BFFF] text-white font-bold rounded-lg hover:bg-[#00BFFF]/20 transition-all inline-flex items-center justify-center">
                <i class="fas fa-info-circle mr-2"></i> Explore Services
            </a>
        </div>
    </div>
</div> 