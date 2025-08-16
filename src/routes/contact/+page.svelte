<script lang="ts">
    import { onMount } from "svelte";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import { submitToFormspree } from '$lib/formspree.js';
    
    let name: string = "";
    let email: string = "";
    let phone: string = "";
    let service: string = "";
    let message: string = "";
    let submitting: boolean = false;
    let submitStatus: string = "";
    
    // Get the service from URL params if available
    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const serviceParam = urlParams.get('service');
        if (serviceParam) {
            service = serviceParam;
        }
    });
    
    async function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        
        // Basic validation
        if (!name || !email || !message) {
            submitStatus = "Please fill in all required fields.";
            return;
        }
        
        submitting = true;
        submitStatus = "";
        
        try {
            // Create FormData object for proper Formspree submission
            const formDataToSend = new FormData();
            formDataToSend.append('name', name);
            formDataToSend.append('email', email);
            formDataToSend.append('phone', phone);
            formDataToSend.append('service', service);
            formDataToSend.append('message', message);
            
            console.log('Submitting contact form to Formspree...');
            
            // Try direct submission first (simpler approach)
            try {
                console.log('Attempting direct Formspree submission...');
                const response = await fetch('https://formspree.io/f/myzpagaa', {
                    method: 'POST',
                    body: formDataToSend,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                console.log('Direct response status:', response.status);
                console.log('Direct response ok:', response.ok);
                
                if (response.ok || response.status === 302) {
                    console.log('Direct submission successful!');
                    submitStatus = "Thanks for your message! We'll get back to you soon.";
                    // Clear form data
                    name = "";
                    email = "";
                    phone = "";
                    message = "";
                    service = "";
                    return;
                }
            } catch (directError) {
                console.error('Direct submission failed:', directError);
            }
            
            // Fallback to robust method
            console.log('Trying robust submission method...');
            const result = await submitToFormspree('myzpagaa', formDataToSend);
            
            if (result.success) {
                console.log('Contact form submitted successfully using method:', result.method);
                submitStatus = "Thanks for your message! We'll get back to you soon.";
                // Clear form data
                name = "";
                email = "";
                phone = "";
                message = "";
                service = "";
            } else {
                console.error('Form submission failed with method:', result.method);
                submitStatus = "Something went wrong. Please check the browser console for details and try again.";
            }
        } catch (error) {
            console.error('Form submission error:', error);
            submitStatus = "Something went wrong. Please check the browser console for details and try again.";
        } finally {
            submitting = false;
        }
    }
    
    // Scroll to form when "contact us" anchor is used
    onMount(() => {
        if (typeof window !== 'undefined') {
            if (window.location.hash === '#contact-form') {
                setTimeout(() => {
                    const formElement = document.getElementById('contact-form');
                    if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 500);
            }
        }
    });
</script>

<svelte:head>
    <title>Contact Us - OSVE STUDIOS</title>
    <meta name="description" content="Get in touch with OSVE STUDIOS. Book a recording session, music production, or any audio services you need.">
</svelte:head>

<div class="max-w-6xl mx-auto px-4 py-16 md:py-24">
    <!-- Page Title -->
    <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">Book a session or get in touch with our team</p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <!-- Contact Form Section -->
        <div class="lg:col-span-3">
            <div class="bg-black/30 backdrop-blur-sm border border-[#00BFFF]/20 rounded-xl p-6 md:p-8">
                <h2 class="text-2xl md:text-3xl font-bold mb-6">Book a Session</h2>
                
                <form id="contact-form" on:submit={handleSubmit} class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Name *</label>
                            <input 
                                type="text" 
                                id="name" 
                                bind:value={name} 
                                class="w-full px-4 py-2 bg-black/60 border border-[#00BFFF]/40 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF]"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                            <input 
                                type="email" 
                                id="email" 
                                bind:value={email} 
                                class="w-full px-4 py-2 bg-black/60 border border-[#00BFFF]/40 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF]"
                                placeholder="Your email"
                                required
                            />
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-300 mb-1">Phone</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                bind:value={phone} 
                                class="w-full px-4 py-2 bg-black/60 border border-[#00BFFF]/40 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF]"
                                placeholder="Your phone number"
                            />
                        </div>
                        
                        <div>
                            <label for="service" class="block text-sm font-medium text-gray-300 mb-1">Service</label>
                            <select 
                                id="service" 
                                bind:value={service} 
                                class="w-full px-4 py-2 bg-black/60 border border-[#00BFFF]/40 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF]"
                            >
                                <option value="">Select a service</option>
                                <option value="recording">Recording</option>
                                <option value="production">Music Production</option>
                                <option value="mixing">Mixing & Mastering</option>
                                <option value="sounddesign">Sound Design</option>
                                <option value="rental">Studio Rental</option>
                                <option value="distribution">Music Distribution</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message *</label>
                        <textarea 
                            id="message" 
                            bind:value={message} 
                            rows="5" 
                            class="w-full px-4 py-2 bg-black/60 border border-[#00BFFF]/40 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF]"
                            placeholder="Tell us about your project and what you're looking for..."
                            required
                        ></textarea>
                    </div>
                    
                    <div>
                        <button 
                            type="submit"
                            disabled={submitting}
                            class="w-full px-6 py-3 bg-[#00BFFF] hover:bg-[#0099CC] text-white font-semibold rounded-lg transition-all flex items-center justify-center"
                        >
                            {#if submitting}
                                <i class="fas fa-circle-notch fa-spin mr-2"></i> Sending...
                            {:else}
                                <i class="fas fa-paper-plane mr-2"></i> Send Message
                            {/if}
                        </button>
                        
                        {#if submitStatus}
                            <div class="mt-4 p-4 rounded-md {submitStatus.includes('Thanks') ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}">
                                <i class="fas {submitStatus.includes('Thanks') ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-2"></i>
                                {submitStatus}
                                {#if submitStatus && !submitStatus.includes('Thanks')}
                                    <br><small class="text-red-600">If the issue persists, please contact us directly at info@osvestudios.com</small>
                                {/if}
                            </div>
                        {/if}
                    </div>
                </form>
            </div>
        </div>
        
        <!-- Contact Info Section -->
        <div class="lg:col-span-2">
            <div class="bg-black/30 backdrop-blur-sm border border-[#00BFFF]/20 rounded-xl p-6 md:p-8 mb-8">
                <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div class="space-y-6">
                    <div class="flex items-start">
                        <div class="mt-1 mr-4 w-10 h-10 rounded-full bg-[#00BFFF]/10 flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-map-marker-alt text-[#00BFFF]"></i>
                        </div>
                        <div>
                            <h3 class="font-semibold mb-1">Address</h3>
                            <p class="text-gray-300">Zebra,Roysambu<br>Nairobi, Kenya</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                        <div class="mt-1 mr-4 w-10 h-10 rounded-full bg-[#00BFFF]/10 flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-phone-alt text-[#00BFFF]"></i>
                        </div>
                        <div>
                            <h3 class="font-semibold mb-1">Phone</h3>
                            <p class="text-gray-300">
                                <a href="tel:+254790932575" class="hover:text-[#00BFFF] transition-colors">+254 790 932 575</a>
                            </p>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                        <div class="mt-1 mr-4 w-10 h-10 rounded-full bg-[#00BFFF]/10 flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-envelope text-[#00BFFF]"></i>
                        </div>
                        <div>
                            <h3 class="font-semibold mb-1">Email</h3>
                            <p class="text-gray-300">
                                <a href="mailto:osvemusic@gmail.com" class="hover:text-[#00BFFF] transition-colors">osvemusic@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                        <div class="mt-1 mr-4 w-10 h-10 rounded-full bg-[#00BFFF]/10 flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-clock text-[#00BFFF]"></i>
                        </div>
                        <div>
                            <h3 class="font-semibold mb-1">Studio Hours</h3>
                            <p class="text-gray-300">
                                Monday - Friday: 10 AM - 10 PM<br>
                                Saturday: 12 PM - 8 PM<br>
                                Sunday: By Appointment
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="mt-8">
                    <h3 class="font-semibold mb-3">Connect With Us</h3>
                    <div class="flex space-x-3">
                        <a href="https://www.instagram.com/osvestudios/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-gray-300 hover:text-[#E1306C] hover:bg-black/70 transition-all" aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/osvestudios" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-gray-300 hover:text-[#4267B2] hover:bg-black/70 transition-all" aria-label="Facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/osvestudios" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-gray-300 hover:text-[#1DA1F2] hover:bg-black/70 transition-all" aria-label="X (Twitter)">
                            <i class="fab fa-x-twitter"></i>
                        </a>
                        <a href="https://www.tiktok.com/@osvestudios" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-gray-300 hover:text-[#000000] hover:bg-black/70 transition-all" aria-label="TikTok">
                            <i class="fab fa-tiktok"></i>
                        </a>
                        <a href="https://wa.me/254790932575" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-gray-300 hover:text-[#25D366] hover:bg-black/70 transition-all" aria-label="WhatsApp">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Quick Booking -->
            <div class="bg-black/30 backdrop-blur-sm border border-[#00BFFF]/20 rounded-xl p-6 md:p-8">
                <h2 class="text-2xl font-bold mb-6">Quick Booking</h2>
                <p class="text-gray-300 mb-4">Need a session ASAP? Call us directly for immediate booking:</p>
                <a href="tel:+254790932575" class="inline-flex items-center justify-center w-full px-6 py-3 bg-[#00BFFF] hover:bg-[#0099CC] text-white font-semibold rounded-lg transition-all">
                    <i class="fas fa-phone-alt mr-2"></i> +254 790 932 575
                </a>
            </div>
        </div>
    </div>
    
    <!-- Map Section -->
    <div class="mt-16">
        <div class="bg-black/30 backdrop-blur-sm border border-[#00BFFF]/20 rounded-xl p-6 md:p-8">
            <h2 class="text-2xl font-bold mb-6">Find Us</h2>
            <div class="w-full h-80 rounded-lg overflow-hidden">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853716954!2d36.68258727326107!3d-1.3028617615113068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1653915234821!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    allowfullscreen={true}
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="OSVE Studios location map"
                ></iframe>
            </div>
            <p class="mt-4 text-gray-300 text-center">
                Located in the heart of Nairobi, just minutes from the city center.
            </p>
        </div>
    </div>
</div>

<style>
    /* Form focus effects */
    input:focus, textarea:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 191, 255, 0.5);
    }
    
    /* Smooth scrolling for the entire page */
    :global(html) {
        scroll-behavior: smooth;
    }
</style> 