<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { writable } from "svelte/store";
    import { browser } from '$app/environment';

    export let featuredArtists;

    let currentIndex = 0;
    const interval = writable<number | null>(null);
    let isAutoScrolling = true;
    let sliderTrack: HTMLElement;
    let sliderContainer: HTMLElement;
    let isDragging = false;
    let startPositionX = 0;
    let currentTranslateX = 0;
    let prevTranslateX = 0;
    let cardWidth = 220; // Default width
    let animationId = 0;

    // Responsive card width calculation
    function updateCardWidth() {
        if (!browser) return; // Skip on server
        
        if (window.innerWidth <= 640) {
            cardWidth = 190;
        } else if (window.innerWidth <= 768) {
            cardWidth = 210;
        } else {
            cardWidth = 250;
        }
        
        if (sliderTrack) {
            goToSlide(currentIndex, false);
        }
    }

    // Start Auto Slider
    function startAutoSlider() {
        if (!browser) return; // Skip on server
        
        if (isAutoScrolling) {
            interval.set(setInterval(() => {
                if (currentIndex >= featuredArtists.length - 1) {
                    currentIndex = 0;
                } else {
                    currentIndex += 1;
                }
                goToSlide(currentIndex, true);
            }, 4000));
        }
    }

    // Go to specific slide
    function goToSlide(index: number, animate = true) {
        if (!browser) return; // Skip on server
        if (!sliderTrack) return;
        
        // Ensure index is within bounds
        index = Math.max(0, Math.min(index, featuredArtists.length - 1));
        currentIndex = index;
        
        // Calculate the transform value
        const translateX = -(currentIndex * cardWidth);
        prevTranslateX = translateX;
        
        // Apply the transform
        if (animate) {
            sliderTrack.style.transition = "transform 0.5s ease-out";
        } else {
            sliderTrack.style.transition = "none";
        }
        
        sliderTrack.style.transform = `translateX(${translateX}px)`;
        
        // Reset transition after animation
        if (animate) {
            setTimeout(() => {
                if (sliderTrack) {
                    sliderTrack.style.transition = "none";
                }
            }, 500);
        }
    }

    // Touch/mouse events for draggable slider
    function onDragStart(e: MouseEvent | TouchEvent) {
        if (!browser) return; // Skip on server
        
        if (isAutoScrolling && $interval) {
            clearInterval($interval);
            interval.set(null);
        }
        
        isDragging = true;
        startPositionX = getPositionX(e);
        currentTranslateX = prevTranslateX;
        
        cancelAnimationFrame(animationId);
        animate();
    }

    function onDragMove(e: MouseEvent | TouchEvent) {
        if (!browser) return; // Skip on server
        
        if (isDragging) {
            const currentPosition = getPositionX(e);
            currentTranslateX = prevTranslateX + currentPosition - startPositionX;
        }
    }

    function onDragEnd() {
        if (!browser) return; // Skip on server
        
        isDragging = false;
        cancelAnimationFrame(animationId);
        
        // Determine which slide to snap to
        const movedBy = currentTranslateX - prevTranslateX;
        
        if (movedBy < -100) {
            // Dragged left - go to next slide
            currentIndex = Math.min(currentIndex + 1, featuredArtists.length - 1);
        } else if (movedBy > 100) {
            // Dragged right - go to previous slide
            currentIndex = Math.max(currentIndex - 1, 0);
        }
        
        goToSlide(currentIndex, true);
        
        if (isAutoScrolling) {
            startAutoSlider();
        }
    }

    function getPositionX(e: MouseEvent | TouchEvent): number {
        if (!browser) return 0; // Skip on server
        
        return 'type' in e && e.type.includes('mouse') 
            ? (e as MouseEvent).clientX 
            : (e as TouchEvent).touches[0].clientX;
    }

    function animate() {
        if (!browser) return; // Skip on server
        
        if (isDragging) {
            sliderTrack.style.transform = `translateX(${currentTranslateX}px)`;
            animationId = requestAnimationFrame(animate);
        }
    }

    // Toggle auto scrolling
    function toggleAutoScroll() {
        if (!browser) return; // Skip on server
        
        isAutoScrolling = !isAutoScrolling;
        if (isAutoScrolling) {
            startAutoSlider();
        } else if ($interval) {
            clearInterval($interval);
            interval.set(null);
        }
    }

    onMount(() => {
        // This only runs in the browser
        updateCardWidth();
        window.addEventListener('resize', updateCardWidth);
        
        // Initialize draggable behavior
        sliderTrack.addEventListener('mousedown', onDragStart);
        sliderTrack.addEventListener('touchstart', onDragStart);
        window.addEventListener('mousemove', onDragMove);
        window.addEventListener('touchmove', onDragMove);
        window.addEventListener('mouseup', onDragEnd);
        window.addEventListener('touchend', onDragEnd);
        
        startAutoSlider();
    });

    onDestroy(() => {
        // This only runs in the browser
        if (!browser) return;
        
        if ($interval) {
            clearInterval($interval);
            interval.set(null);
        }
        window.removeEventListener('resize', updateCardWidth);
        
        // Cleanup event listeners
        if (sliderTrack) {
            sliderTrack.removeEventListener('mousedown', onDragStart);
            sliderTrack.removeEventListener('touchstart', onDragStart);
        }
        window.removeEventListener('mousemove', onDragMove);
        window.removeEventListener('touchmove', onDragMove);
        window.removeEventListener('mouseup', onDragEnd);
        window.removeEventListener('touchend', onDragEnd);
        
        cancelAnimationFrame(animationId);
    });
</script>

<section id="affiliated-artists" class="affiliated-artists py-16 lg:py-24">
    <div class="container mx-auto px-4">
        <div class="section-header mb-12 md:mb-16">
            <h2 class="section-title text-center">
                Affiliated <span class="highlight">Artists</span>
            </h2>
            <p class="subtitle text-center max-w-2xl mx-auto">
                Discover the talents that collaborate with theKenyanTroublers on our musical journey
            </p>
        </div>

        <!-- Slider Container -->
        <div bind:this={sliderContainer} class="slider-container relative mx-auto">
            <div class="slider overflow-hidden mx-auto">
                <div bind:this={sliderTrack} class="slider-track flex gap-4 md:gap-6">
                    {#each featuredArtists as artist, index}
                        <div class="artist-card-wrapper">
                            <a 
                                href={artist.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                class="artist-card group relative block"
                            >
                                <div class="image-container overflow-hidden rounded-xl">
                                    <img 
                                        src={artist.img} 
                                        alt={artist.name} 
                                        class="artist-image w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                                        loading="lazy"
                                    />
                                </div>
                                
                                <div class="artist-gradient absolute inset-0 rounded-xl opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                                <div class="artist-info absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 class="artist-name text-xl font-bold text-white mb-1">{artist.name}</h3>
                                    
                                    <div class="artist-links flex items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span class="text-xs bg-black/50 text-white px-3 py-1 rounded-full backdrop-blur-sm">View Profile</span>
                                    </div>
                                </div>
                                
                                <div class="pulse-effect"></div>
                            </a>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Navigation Controls -->
            <div class="controls flex items-center justify-center mt-8">
                <button 
                    class="prev-btn control-btn mr-2" 
                    on:click={() => {
                        if ($interval) {
                            clearInterval($interval);
                            interval.set(null);
                        }
                        currentIndex = Math.max(currentIndex - 1, 0);
                        goToSlide(currentIndex);
                        if (isAutoScrolling) startAutoSlider();
                    }}
                    aria-label="Previous artist"
                >
                    <i class="fas fa-chevron-left"></i>
                </button>
                
                <div class="indicators flex space-x-2">
                    {#each featuredArtists as _, index}
                        <button 
                            class="indicator-dot w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 {currentIndex === index ? 'bg-[#81C14B] scale-125' : 'bg-white/50 hover:bg-white/70'}"
                            on:click={() => {
                                if ($interval) {
                                    clearInterval($interval);
                                    interval.set(null);
                                }
                                currentIndex = index;
                                goToSlide(currentIndex);
                                if (isAutoScrolling) startAutoSlider();
                            }}
                            aria-label={`Go to artist ${index + 1}`}
                        ></button>
                    {/each}
                </div>
                
                <button 
                    class="next-btn control-btn ml-2" 
                    on:click={() => {
                        if ($interval) {
                            clearInterval($interval);
                            interval.set(null);
                        }
                        currentIndex = Math.min(currentIndex + 1, featuredArtists.length - 1);
                        goToSlide(currentIndex);
                        if (isAutoScrolling) startAutoSlider();
                    }}
                    aria-label="Next artist"
                >
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            
            <!-- Auto-play toggle -->
            <button 
                class="autoplay-toggle absolute bottom-0 right-0 text-sm text-white/70 hover:text-white flex items-center space-x-1 transition-colors duration-300 p-2"
                on:click={toggleAutoScroll}
                aria-label={isAutoScrolling ? 'Pause auto-scroll' : 'Start auto-scroll'}
            >
                <i class="fas {isAutoScrolling ? 'fa-pause' : 'fa-play'} text-xs"></i>
                <span class="hidden sm:inline text-xs">{isAutoScrolling ? 'Auto-scroll on' : 'Auto-scroll off'}</span>
            </button>
        </div>
    </div>
</section>

<style>
/* Section Styling */
.affiliated-artists {
    position: relative;
    overflow: hidden;
}

/* Title Styling */
.section-title {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(90deg, #ffffff 0%, #81C14B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    width: 100%;
    text-align: center;
}

.section-title:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: #81C14B;
    border-radius: 2px;
}

.subtitle {
    font-size: 1.1rem;
    color: #ccc;
}

/* Slider Container */
.slider-container {
    max-width: 1200px;
    position: relative;
}

.slider {
    width: 100%;
    position: relative;
    padding: 20px 0;
}

.slider-track {
    user-select: none;
    cursor: grab;
}

.slider-track:active {
    cursor: grabbing;
}

/* Artist Card Styling */
.artist-card-wrapper {
    min-width: calc(190px + 1rem);
    height: 280px;
    flex-shrink: 0;
}

.artist-card {
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.image-container {
    width: 100%;
    height: 100%;
    position: relative;
}

.artist-gradient {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 70%);
}

/* Control Buttons */
.control-btn {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.control-btn:hover {
    background: #81C14B;
    transform: scale(1.1);
}

.control-btn:active {
    transform: scale(0.95);
}

/* Pulse Animation */
.pulse-effect {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 10px;
    height: 10px;
    background-color: #81C14B;
    border-radius: 50%;
    box-shadow: 0 0 0 rgba(129, 193, 75, 0.4);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(129, 193, 75, 0.6);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(129, 193, 75, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(129, 193, 75, 0);
    }
}

/* Responsive */
@media (min-width: 640px) {
    .artist-card-wrapper {
        min-width: calc(210px + 1.5rem);
        height: 300px;
    }
}

@media (min-width: 768px) {
    .section-title {
        font-size: 3rem;
    }
    
    .artist-card-wrapper {
        min-width: calc(250px + 1.5rem);
        height: 340px;
    }
}
</style>
