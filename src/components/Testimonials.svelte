<script lang="ts">
    import { onMount } from 'svelte';

    interface Testimonial {
        name: string;
        role: string;
        quote: string;
        img: string;
    }
    
    export let testimonials: Testimonial[] = [];
    
    let activeIndex = 0;
    
    function nextTestimonial() {
        activeIndex = (activeIndex + 1) % testimonials.length;
    }
    
    function prevTestimonial() {
        activeIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    }
    
    // Auto rotate testimonials
    onMount(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 8000);
        
        return () => clearInterval(interval);
    });
</script>

<section id="testimonials" class="py-16 md:py-24 px-4 bg-[#00BFFF]/5">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p class="text-gray-300 max-w-2xl mx-auto">Hear from the artists who have recorded with us.</p>
        </div>
        
        <div class="relative max-w-4xl mx-auto">
            <!-- Controls -->
            <div class="absolute top-1/2 -left-4 sm:-left-8 transform -translate-y-1/2 z-10">
                <button 
                    on:click={prevTestimonial}
                    class="bg-black/50 hover:bg-[#00BFFF]/50 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
                    aria-label="Previous testimonial"
                >
                    <i class="fas fa-chevron-left"></i>
                </button>
            </div>
            
            <div class="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 z-10">
                <button 
                    on:click={nextTestimonial}
                    class="bg-black/50 hover:bg-[#00BFFF]/50 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
                    aria-label="Next testimonial"
                >
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            
            <!-- Testimonials -->
            <div class="relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm p-8 sm:p-10 min-h-[16rem]">
                <div class="testimonial-slider">
                    {#each testimonials as testimonial, index}
                        <div class="testimonial-slide absolute inset-0 p-8 sm:p-10 transition-opacity duration-500 flex flex-col md:flex-row items-center gap-8"
                             style="opacity: {index === activeIndex ? '1' : '0'}; pointer-events: {index === activeIndex ? 'auto' : 'none'}">
                            <div class="flex-shrink-0">
                                <div class="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#00BFFF]/30">
                                    <img src={testimonial.img} alt={testimonial.name} class="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div class="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                                <div class="text-[#00BFFF] text-4xl mb-4">
                                    <i class="fas fa-quote-left"></i>
                                </div>
                                <p class="text-lg sm:text-xl mb-4 italic font-light">{testimonial.quote}</p>
                                <div class="mt-auto">
                                    <p class="font-bold text-white text-lg">{testimonial.name}</p>
                                    <p class="text-[#00BFFF]">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
                
                <!-- Dots -->
                <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {#each testimonials as _, index}
                        <button 
                            class="w-3 h-3 rounded-full transition-all {index === activeIndex ? 'bg-[#00BFFF]' : 'bg-gray-500'}"
                            on:click={() => activeIndex = index}
                            aria-label={`Go to testimonial ${index + 1}`}
                        ></button>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .testimonial-slider {
        position: relative;
        width: 100%;
        height: 100%;
    }
    
    .testimonial-slide {
        transition: opacity 0.5s ease-in-out;
    }
</style> 