<script lang="ts">
    import "@fortawesome/fontawesome-free/css/all.min.css";
    
    // Service data
    const services = [
        {
            id: "recording",
            title: "Recording",
            icon: "fa-microphone-alt",
            description: "Professional audio recording for vocals, instruments, and full bands in acoustically treated spaces.",
            features: [
                "Vocal recording with premium microphones",
                "Multi-track instrument recording",
                "Live band recording sessions",
                "Voice-over and podcast recording",
                "Multiple isolated recording booths"
            ],
            priceRange: "$80-150/hour depending on studio and requirements"
        },
        {
            id: "production",
            title: "Music Production",
            icon: "fa-sliders-h",
            description: "Full-service music production from concept to completion with experienced producers.",
            features: [
                "Beat production across all genres",
                "Arrangement and composition",
                "Instrumental production",
                "Song development and structuring",
                "Creative direction and consultation"
            ],
            priceRange: "Starting at $300 per track, packages available"
        },
        {
            id: "mixing",
            title: "Mixing & Mastering",
            icon: "fa-wave-square",
            description: "Professional audio mixing and mastering to give your tracks that polished, industry-standard sound.",
            features: [
                "Detailed multi-track mixing",
                "Stereo balancing and enhancement",
                "Stem mixing services",
                "Loudness optimization for streaming",
                "Analog and digital mastering options"
            ],
            priceRange: "Mixing from $150/track, Mastering from $75/track"
        },
        {
            id: "sounddesign",
            title: "Sound Design",
            icon: "fa-waveform",
            description: "Custom sound design for film, games, and media projects with unique sonic elements.",
            features: [
                "Custom sound effects creation",
                "Ambient soundscape design",
                "Film and video scoring",
                "Game audio design",
                "Foley and sound replacement"
            ],
            priceRange: "Custom quote based on project scope"
        },
        {
            id: "rental",
            title: "Studio Rental",
            icon: "fa-building",
            description: "Rent our professional studio spaces for your own production needs with or without an engineer.",
            features: [
                "Hourly, half-day and full-day rates",
                "Engineer available upon request",
                "Access to all studio equipment",
                "Comfortable lounge and amenities",
                "24-hour access for block bookings"
            ],
            priceRange: "Starting at $50/hour without engineer"
        },
        {
            id: "distribution",
            title: "Music Distribution",
            icon: "fa-cloud-upload-alt",
            description: "Get your music on all major streaming platforms with our distribution services.",
            features: [
                "Distribution to 150+ streaming platforms",
                "Royalty collection and accounting",
                "Release strategy consultation",
                "Metadata optimization",
                "Streaming analytics dashboard"
            ],
            priceRange: "Annual subscription from $20 or 15% commission"
        }
    ];
</script>

<div class="max-w-6xl mx-auto px-4 py-16 md:py-24">
    <!-- Page Title -->
    <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Services</h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">Professional audio solutions for artists, producers, and content creators</p>
    </div>
    
    <!-- Service Overview Section -->
    <div class="mb-24">
        <div class="bg-black/30 backdrop-blur-sm border border-[#00BFFF]/20 rounded-xl p-8 md:p-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-2xl md:text-3xl font-bold mb-6 text-[#00BFFF]">Complete Studio Solutions</h2>
                    <p class="text-gray-300 mb-6">
                        At OSVE Studios, we offer a comprehensive range of recording services to meet all your audio needs. 
                        From initial concept to final master, our experienced team and state-of-the-art facilities 
                        ensure your project reaches its full potential.
                    </p>
                    <p class="text-gray-300 mb-6">
                        Whether you're an established artist, an up-and-coming producer, or a business needing audio content, 
                        our services can be tailored to match your specific requirements and budget.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="/contact" class="inline-block px-6 py-3 bg-[#00BFFF] text-white font-semibold rounded-lg hover:bg-[#0099CC] transition-all text-center">
                            <i class="fas fa-calendar-alt mr-2"></i> Book Now
                        </a>
                        <a href="#service-list" class="inline-block px-6 py-3 bg-transparent border border-[#00BFFF] text-white font-semibold rounded-lg hover:bg-[#00BFFF]/20 transition-all text-center">
                            <i class="fas fa-arrow-down mr-2"></i> View All Services
                        </a>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Recording studio equipment" class="w-full h-full object-cover" />
                    </div>
                    <div class="rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Recording console" class="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Detailed Services Section -->
    <div id="service-list" class="scroll-mt-20">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Our Service Offerings</h2>
        
        <div class="space-y-12 md:space-y-20">
            {#each services as service, index}
                <div id={service.id} class="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center {index % 2 === 1 ? 'lg:flex-row-reverse' : ''}">
                    <div class="order-2 {index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}">
                        <div class="bg-black/30 backdrop-blur-sm border border-[#00BFFF]/20 rounded-xl p-6 md:p-8">
                            <div class="w-16 h-16 rounded-full bg-[#00BFFF]/10 flex items-center justify-center mb-6">
                                <i class="fas {service.icon} text-2xl text-[#00BFFF]"></i>
                            </div>
                            <h3 class="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                            <p class="text-gray-300 mb-6">{service.description}</p>
                            
                            <h4 class="text-[#00BFFF] font-semibold mb-3">What's included:</h4>
                            <ul class="space-y-2 mb-6">
                                {#each service.features as feature}
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle text-[#00BFFF] mr-3 mt-1"></i>
                                        <span class="text-gray-300">{feature}</span>
                                    </li>
                                {/each}
                            </ul>
                            
                            <div class="border-t border-[#00BFFF]/20 pt-4 mt-6">
                                <div class="flex flex-wrap justify-between items-center">
                                    <div>
                                        <span class="text-gray-400 text-sm">Price Range:</span>
                                        <p class="text-white font-semibold">{service.priceRange}</p>
                                    </div>
                                    <a href="/contact?service={service.id}" class="inline-block px-4 py-2 mt-2 sm:mt-0 bg-[#00BFFF] text-white font-semibold rounded-lg hover:bg-[#0099CC] transition-all text-center">
                                        <i class="fas fa-envelope mr-2"></i> Inquire
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="order-1 {index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} h-64 md:h-80">
                        {#if index === 0}
                            <img src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="{service.title}" class="w-full h-full object-cover rounded-xl" />
                        {:else if index === 1}
                            <img src="https://images.unsplash.com/photo-1631013921619-34c4ab13fcde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="{service.title}" class="w-full h-full object-cover rounded-xl" />
                        {:else if index === 2}
                            <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="{service.title}" class="w-full h-full object-cover rounded-xl" />
                        {:else if index === 3}
                            <img src="https://images.unsplash.com/photo-1563330232-57114bb0823c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="{service.title}" class="w-full h-full object-cover rounded-xl" />
                        {:else if index === 4}
                            <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="{service.title}" class="w-full h-full object-cover rounded-xl" />
                        {:else}
                            <img src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="{service.title}" class="w-full h-full object-cover rounded-xl" />
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
    
    <!-- FAQ Section -->
    <div class="mt-24">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-black/30 backdrop-blur-sm border border-[#00BFFF]/20 rounded-xl p-6">
                <h3 class="text-xl font-bold mb-3">How do I book studio time?</h3>
                <p class="text-gray-300">You can book studio time by contacting us through our website, calling us directly, or sending an email. We'll discuss your needs and find a suitable time slot for your session.</p>
            </div>
            
            <div class="bg-black/30 backdrop-blur-sm border border-[#00BFFF]/20 rounded-xl p-6">
                <h3 class="text-xl font-bold mb-3">What should I bring to my session?</h3>
                <p class="text-gray-300">For recording sessions, bring your instruments, any specific gear you prefer to use, reference tracks, and any files or project documents. For production or mixing, bring your project files on a USB drive or external hard disk.</p>
            </div>
            
            <div class="bg-black/30 backdrop-blur-sm border border-[#00BFFF]/20 rounded-xl p-6">
                <h3 class="text-xl font-bold mb-3">How long does a typical project take?</h3>
                <p class="text-gray-300">Project timelines vary greatly depending on scope. A single track can be recorded in 3-4 hours, while mixing might take 1-2 days. Full album production can span several weeks. We'll provide a detailed timeline during consultation.</p>
            </div>
            
            <div class="bg-black/30 backdrop-blur-sm border border-[#00BFFF]/20 rounded-xl p-6">
                <h3 class="text-xl font-bold mb-3">Do you offer payment plans?</h3>
                <p class="text-gray-300">Yes, we offer flexible payment plans for larger projects. Typically, we require a 50% deposit to secure your booking, with the remainder due upon project completion. Custom arrangements are available for long-term clients.</p>
            </div>
        </div>
    </div>
    
    <!-- CTA Section -->
    <div class="mt-24 text-center py-16 bg-[#00BFFF]/10 rounded-xl backdrop-blur-sm">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your needs and schedule your first session.
        </p>
        <a href="/contact" class="px-8 py-4 bg-[#00BFFF] hover:bg-[#0099CC] text-white text-lg font-bold rounded-lg transition-all inline-flex items-center justify-center">
            <i class="fas fa-calendar-alt mr-2"></i> Book Your Session
        </a>
    </div>
</div> 