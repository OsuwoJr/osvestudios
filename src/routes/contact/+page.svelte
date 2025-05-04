<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    
    // Form state
    let formData = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };
    let isSubmitting = false;
    let submitSuccess = false;
    let submitError = false;
    
    // Formspree endpoint - same as other forms
    const formspreeEndpoint = "https://formspree.io/f/xyzweeav";
    
    // Handle form submission
    async function handleSubmit(event: Event) {
        event.preventDefault();
        if (isSubmitting) return;
        
        isSubmitting = true;
        submitSuccess = false;
        submitError = false;
        
        try {
            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                }),
            });
            
            if (response.ok) {
                // Reset form on success
                formData = {
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                };
                submitSuccess = true;
            } else {
                submitError = true;
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            submitError = true;
        } finally {
            isSubmitting = false;
            
            // Scroll to top of page on completion
            window.scrollTo({ top: 0, behavior: "smooth" });
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
    <title>Contact Us - theKenyanTroublers</title>
    <meta name="description" content="Get in touch with theKenyanTroublers. Contact us for bookings, collaborations, or any inquiries.">
</svelte:head>

<div class="py-16 px-4" in:fade={{ duration: 300, delay: 200 }}>
    <div class="max-w-6xl mx-auto">
        <!-- Hero Section -->
        <section class="text-center mb-16" in:fly={{ y: 20, duration: 800 }}>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Get in <span class="highlight">Touch</span>
            </h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                Have questions, want to collaborate, or book us for an event? We'd love to hear from you!
            </p>
            
            <!-- Success Message -->
            {#if submitSuccess}
                <div class="mt-8 p-4 bg-[#81C14B]/20 border border-[#81C14B] rounded-lg max-w-lg mx-auto" transition:fade>
                    <p class="text-[#81C14B] font-semibold text-lg flex items-center justify-center">
                        <i class="fas fa-check-circle mr-2"></i> 
                        Thanks for reaching out! We'll get back to you soon.
                    </p>
                </div>
            {/if}
            
            <!-- Error Message -->
            {#if submitError}
                <div class="mt-8 p-4 bg-red-900/20 border border-red-700 rounded-lg max-w-lg mx-auto" transition:fade>
                    <p class="text-red-500 font-semibold text-lg flex items-center justify-center">
                        <i class="fas fa-exclamation-circle mr-2"></i>
                        Sorry, there was an error sending your message. Please try again.
                    </p>
                </div>
            {/if}
        </section>
        
        <!-- Main Content Area -->
        <div class="flex flex-col lg:flex-row gap-12 items-stretch">
            <!-- Contact Info Section -->
            <section class="lg:w-1/3" in:fly={{ x: -20, duration: 600, delay: 300 }}>
                <div class="bg-black/50 backdrop-blur-sm rounded-xl p-8 h-full border border-gray-800 shadow-xl">
                    <h2 class="text-2xl font-bold mb-6 text-[#81C14B]">Contact Information</h2>
                    
                    <div class="space-y-6">
                        <div class="flex items-start space-x-4">
                            <div class="bg-[#81C14B] rounded-full p-3 mt-1">
                                <i class="fas fa-map-marker-alt text-black"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold">Location</h3>
                                <p class="text-gray-300">Nairobi, Kenya</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4">
                            <div class="bg-[#81C14B] rounded-full p-3 mt-1">
                                <i class="fas fa-envelope text-black"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold">Email</h3>
                                <a href="mailto:info@thekenyantroublers.com" class="text-gray-300 hover:text-[#81C14B] transition-colors">
                                    info@thekenyantroublers.com
                                </a>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4">
                            <div class="bg-[#81C14B] rounded-full p-3 mt-1">
                                <i class="fas fa-phone text-black"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold">Phone</h3>
                                <a href="tel:+254790932575" class="text-gray-300 hover:text-[#81C14B] transition-colors">
                                    +254 790 932 575
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Social Media Links -->
                    <div class="mt-10">
                        <h3 class="font-semibold mb-4">Connect With Us</h3>
                        <div class="flex space-x-4">
                            <a href="https://www.instagram.com/thekenyantroublers/" target="_blank" rel="noopener noreferrer" class="bg-black/40 p-3 rounded-full hover:bg-[#E1306C]/20 hover:text-[#E1306C] transition-all" aria-label="Instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCs7hbuqCcYbPFUZKPiG0ufw" target="_blank" rel="noopener noreferrer" class="bg-black/40 p-3 rounded-full hover:bg-[#FF0000]/20 hover:text-[#FF0000] transition-all" aria-label="YouTube">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="https://open.spotify.com/artist/6F05EgCahYw9U2th0SZVtP" target="_blank" rel="noopener noreferrer" class="bg-black/40 p-3 rounded-full hover:bg-[#1DB954]/20 hover:text-[#1DB954] transition-all" aria-label="Spotify">
                                <i class="fab fa-spotify"></i>
                            </a>
                            <a href="https://twitter.com/KenyanTroublers" target="_blank" rel="noopener noreferrer" class="bg-black/40 p-3 rounded-full hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] transition-all" aria-label="Twitter">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Contact Form Section -->
            <section id="contact-form" class="lg:w-2/3" in:fly={{ x: 20, duration: 600, delay: 400 }}>
                <div class="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-xl">
                    <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>
                    
                    <form on:submit={handleSubmit} action={formspreeEndpoint} method="POST" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="form-group">
                                <label for="name" class="block mb-2 font-medium">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    bind:value={formData.name} 
                                    required 
                                    class="w-full bg-black/70 border border-gray-700 focus:border-[#81C14B] rounded-lg px-4 py-3 text-white"
                                    placeholder="John Doe"
                                />
                            </div>
                            
                            <div class="form-group">
                                <label for="email" class="block mb-2 font-medium">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    bind:value={formData.email} 
                                    required 
                                    class="w-full bg-black/70 border border-gray-700 focus:border-[#81C14B] rounded-lg px-4 py-3 text-white"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="subject" class="block mb-2 font-medium">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                bind:value={formData.subject} 
                                required 
                                class="w-full bg-black/70 border border-gray-700 focus:border-[#81C14B] rounded-lg px-4 py-3 text-white"
                                placeholder="How can we help you?"
                            />
                        </div>
                        
                        <div class="form-group">
                            <label for="message" class="block mb-2 font-medium">Your Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                bind:value={formData.message} 
                                required 
                                rows="6" 
                                class="w-full bg-black/70 border border-gray-700 focus:border-[#81C14B] rounded-lg px-4 py-3 text-white resize-none"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>
                        
                        <div class="form-group">
                            <button 
                                type="submit"
                                class="w-full md:w-auto bg-[#81C14B] hover:bg-[#6A9A52] text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                                disabled={isSubmitting}
                            >
                                {#if isSubmitting}
                                    <i class="fas fa-spinner fa-spin mr-2"></i> Sending...
                                {:else}
                                    <i class="fas fa-paper-plane mr-2"></i> Send Message
                                {/if}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
        
        <!-- FAQ Section -->
        <section class="mt-20" in:fly={{ y: 20, duration: 600, delay: 600 }}>
            <h2 class="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-black/30 rounded-lg p-6 backdrop-blur-sm border border-gray-800">
                    <h3 class="text-xl font-semibold mb-3 text-[#81C14B]">How can I book theKenyanTroublers?</h3>
                    <p class="text-gray-300">To book us for performances or events, please use the contact form above or email us directly with details about your event including date, location, and requirements.</p>
                </div>
                
                <div class="bg-black/30 rounded-lg p-6 backdrop-blur-sm border border-gray-800">
                    <h3 class="text-xl font-semibold mb-3 text-[#81C14B]">Do you offer music production services?</h3>
                    <p class="text-gray-300">Yes! We offer professional music production, mixing, and mastering services through OSVE Studios. Contact us with your project details for more information.</p>
                </div>
                
                <div class="bg-black/30 rounded-lg p-6 backdrop-blur-sm border border-gray-800">
                    <h3 class="text-xl font-semibold mb-3 text-[#81C14B]">Can I license your music for my project?</h3>
                    <p class="text-gray-300">Absolutely! We offer music licensing for films, commercials, games, and other media. Please reach out with specific details about your project for licensing options.</p>
                </div>
                
                <div class="bg-black/30 rounded-lg p-6 backdrop-blur-sm border border-gray-800">
                    <h3 class="text-xl font-semibold mb-3 text-[#81C14B]">How can I join as an artist?</h3>
                    <p class="text-gray-300">We're always looking for talented artists to join our collective. Visit our <a href="/artists" class="text-[#81C14B] hover:underline">Artists page</a> and fill out the artist application form to be considered.</p>
                </div>
            </div>
        </section>
    </div>
</div>

<style>
    .highlight {
        color: #81C14B;
        background: linear-gradient(90deg, #81C14B, #6A9A52);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0px 0px 10px rgba(129, 193, 75, 0.9);
    }
    
    /* Form focus effects */
    input:focus, textarea:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(129, 193, 75, 0.5);
    }
    
    /* Animation for form fields */
    .form-group {
        transition: transform 0.3s ease;
    }
    
    .form-group:focus-within {
        transform: translateY(-2px);
    }
    
    /* Smooth scrolling for the entire page */
    :global(html) {
        scroll-behavior: smooth;
    }
</style> 