<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();
    
    let formData = {
        name: '',
        artistName: '',
        email: '',
        phone: '',
        instagram: '',
        tiktok: '',
        twitter: '',
        facebook: '',
        youtube: '',
        smartLink: '',
        message: ''
    };
    
    let isSubmitting = false;
    let showForm = false;
    let submitStatus = '';
    
    async function handleSubmit() {
        isSubmitting = true;
        submitStatus = '';
        
        try {
            // Create FormData object for proper Formspree submission
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('artistName', formData.artistName);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('instagram', formData.instagram);
            formDataToSend.append('tiktok', formData.tiktok);
            formDataToSend.append('twitter', formData.twitter);
            formDataToSend.append('facebook', formData.facebook);
            formDataToSend.append('youtube', formData.youtube);
            formDataToSend.append('smartLink', formData.smartLink);
            formDataToSend.append('message', formData.message);
            
            const response = await fetch('https://formspree.io/f/mnnzbyzb', {
                method: 'POST',
                body: formDataToSend
            });
            
            if (response.ok) {
                submitStatus = 'success';
                formData = {
                    name: '',
                    artistName: '',
                    email: '',
                    phone: '',
                    instagram: '',
                    tiktok: '',
                    twitter: '',
                    facebook: '',
                    youtube: '',
                    smartLink: '',
                    message: ''
                };
                setTimeout(() => {
                    showForm = false;
                    submitStatus = '';
                }, 3000);
            } else {
                submitStatus = 'error';
            }
        } catch (error) {
            console.error('Form submission error:', error);
            submitStatus = 'error';
        } finally {
            isSubmitting = false;
        }
    }
    
    function toggleForm() {
        showForm = !showForm;
        if (!showForm) {
            submitStatus = '';
        }
    }
</script>

<div class="relative">
    <!-- Invitation Button -->
    <button 
        on:click={toggleForm}
        class="relative overflow-hidden px-4 md:px-6 py-2 text-lg font-medium rounded-full bg-white hover:bg-[#00BFFF] text-slate-950 hover:text-white border border-transparent transition-all duration-300 ease-in-out focus:outline-none hover:border-[#0099CC] active:scale-95"
        aria-label="Send Invitation"
    >
        SEND INVITATION
    </button>
    
    <!-- Modal Form -->
    {#if showForm}
        <div class="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 pt-8 sm:pt-16">
            <div class="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[85vh] overflow-y-auto my-8">
                <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-lg">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold text-gray-900">Artist Invitation</h3>
                        <button 
                            on:click={toggleForm}
                            class="text-gray-400 hover:text-gray-600 transition-colors p-1"
                            aria-label="Close form"
                        >
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                </div>
                <div class="p-6">
                    
                    <form on:submit|preventDefault={handleSubmit} class="space-y-4">
                        <!-- Basic Info -->
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                            <input
                                type="text"
                                id="name"
                                bind:value={formData.name}
                                required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent text-gray-900 placeholder-gray-500"
                                placeholder="Your full name"
                            />
                        </div>
                        
                        <div>
                            <label for="artistName" class="block text-sm font-medium text-gray-700 mb-1">Artist Name *</label>
                            <input
                                type="text"
                                id="artistName"
                                bind:value={formData.artistName}
                                required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent text-gray-900 placeholder-gray-500"
                                placeholder="Your stage name or artist name"
                            />
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                            <input
                                type="email"
                                id="email"
                                bind:value={formData.email}
                                required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent text-gray-900 placeholder-gray-500"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                bind:value={formData.phone}
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent text-gray-900 placeholder-gray-500"
                                placeholder="+254 700 000 000"
                            />
                        </div>
                        
                        <!-- Required Social Media Links -->
                        <div class="border-t pt-4">
                            <h4 class="text-sm font-semibold text-gray-800 mb-3">Social Media Links (Required)</h4>
                            
                            <div class="space-y-3">
                                <div>
                                    <label for="instagram" class="block text-sm font-medium text-gray-700 mb-1">
                                        <i class="fab fa-instagram text-[#E1306C] mr-2"></i>Instagram *
                                    </label>
                                    <input
                                        type="url"
                                        id="instagram"
                                        bind:value={formData.instagram}
                                        required
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent text-gray-900 placeholder-gray-500"
                                        placeholder="https://instagram.com/yourusername"
                                    />
                                </div>
                                
                                <div>
                                    <label for="tiktok" class="block text-sm font-medium text-gray-700 mb-1">
                                        <i class="fab fa-tiktok text-black mr-2"></i>TikTok *
                                    </label>
                                    <input
                                        type="url"
                                        id="tiktok"
                                        bind:value={formData.tiktok}
                                        required
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent text-gray-900 placeholder-gray-500"
                                        placeholder="https://tiktok.com/@yourusername"
                                    />
                                </div>
                                
                                <div>
                                    <label for="twitter" class="block text-sm font-medium text-gray-700 mb-1">
                                        <i class="fab fa-x-twitter text-[#1DA1F2] mr-2"></i>X (Twitter) *
                                    </label>
                                    <input
                                        type="url"
                                        id="twitter"
                                        bind:value={formData.twitter}
                                        required
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent text-gray-900 placeholder-gray-500"
                                        placeholder="https://x.com/yourusername"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <!-- Optional Social Media Links -->
                        <div class="border-t pt-4">
                            <h4 class="text-sm font-semibold text-gray-800 mb-3">Additional Social Media (Optional)</h4>
                            
                            <div class="space-y-3">
                                <div>
                                    <label for="facebook" class="block text-sm font-medium text-gray-700 mb-1">
                                        <i class="fab fa-facebook text-[#1877F2] mr-2"></i>Facebook
                                    </label>
                                    <input
                                        type="url"
                                        id="facebook"
                                        bind:value={formData.facebook}
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent text-gray-900 placeholder-gray-500"
                                        placeholder="https://facebook.com/yourpage"
                                    />
                                </div>
                                
                                <div>
                                    <label for="youtube" class="block text-sm font-medium text-gray-700 mb-1">
                                        <i class="fab fa-youtube text-[#FF0000] mr-2"></i>YouTube
                                    </label>
                                    <input
                                        type="url"
                                        id="youtube"
                                        bind:value={formData.youtube}
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent text-gray-900 placeholder-gray-500"
                                        placeholder="https://youtube.com/@yourchannel"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <!-- Smart Link -->
                        <div class="border-t pt-4">
                            <label for="smartLink" class="block text-sm font-medium text-gray-700 mb-1">
                                <i class="fas fa-link text-[#00BFFF] mr-2"></i>Smart Link (Optional)
                            </label>
                            <input
                                type="url"
                                id="smartLink"
                                bind:value={formData.smartLink}
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent text-gray-900 placeholder-gray-500"
                                placeholder="Linktree, Push.fm, or other smart link"
                            />
                            <p class="text-xs text-gray-500 mt-1">Share your music, merch, or other content links</p>
                        </div>
                        
                        <!-- Message -->
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                            <textarea
                                id="message"
                                bind:value={formData.message}
                                rows="3"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent resize-none text-gray-900 placeholder-gray-500"
                                placeholder="Tell us about your music style, goals, or any specific requests..."
                            ></textarea>
                        </div>
                        
                        <!-- Submit Button -->
                        <div class="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                class="w-full bg-[#00BFFF] hover:bg-[#0099CC] disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2"
                            >
                                {#if isSubmitting}
                                    <i class="fas fa-spinner fa-spin mr-2"></i>Sending...
                                {:else}
                                    Send Invitation
                                {/if}
                            </button>
                        </div>
                        
                        <!-- Status Messages -->
                        {#if submitStatus === 'success'}
                            <div class="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                                <i class="fas fa-check-circle mr-2"></i>
                                Invitation sent successfully! We'll get back to you soon.
                            </div>
                        {/if}
                        
                        {#if submitStatus === 'error'}
                            <div class="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                                <i class="fas fa-exclamation-circle mr-2"></i>
                                Something went wrong. Please try again or contact us directly.
                            </div>
                        {/if}
                    </form>
                </div>
            </div>
        </div>
    {/if}
</div> 