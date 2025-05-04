<script lang="ts">
    import HeroSection from "../../components/ArtistHeroSection.svelte";
    import FeaturedArtists from "../../components/ArtistFeaturedArtists.svelte";
    import VideoShowcase from "../../components/ArtistVideoShowcase.svelte";
    import ArtistApplication from "../../components/ArtistApplication.svelte";
    import FanComments from "../../components/ArtistFanComments.svelte";
    import { onMount } from "svelte";
    import { browser } from '$app/environment';
    
    // Make sure content is visible by default
    let mounted = true;
    
    onMount(() => {
        if (browser) {
            // Add intersection observer for smooth animations
            const sections = document.querySelectorAll('.animate-section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            sections.forEach(section => {
                // Make all sections visible initially, then let animations take over
                section.classList.add('visible');
                observer.observe(section);
            });
            
            // Add smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href') || '';
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.getBoundingClientRect().top + window.scrollY,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
    });
</script>

<svelte:head>
    <title>The Kenyan Troublers | Artists</title>
    <meta name="description" content="Discover talented artists signed under theKenyanTroublers music label.">
</svelte:head>

<div id="top" class="artists-page">
    <!-- Animated background elements -->
    <div class="bg-elements">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
        <div class="blur-gradient blur-1"></div>
        <div class="blur-gradient blur-2"></div>
    </div>
    
    <!-- Hero Section -->
    <div class="hero-wrapper">
        <HeroSection />
    </div>
    
    <!-- Content Sections -->
    <div class="content-wrapper">
        <!-- Featured Artists Section -->
        <div id="featured-artists" class="section-container">
            <div class="debug-indicator">FEATURED ARTISTS SECTION</div>
            <div class="section-heading">
                <div class="section-divider">
                    <span class="divider-icon">🎤</span>
                </div>
                <h2 class="section-title">Our Artists</h2>
            </div>
            <div class="section-wrapper animate-section">
                <FeaturedArtists />
            </div>
        </div>
        
        <div class="section-gradient-separator"></div>
        
        <!-- Video Section -->
        <div id="video-section" class="section-container">
            <div class="debug-indicator">VIDEO SECTION</div>
            <div class="section-heading">
                <div class="section-divider">
                    <span class="divider-icon">🎬</span>
                </div>
                <h2 class="section-title">Latest Video</h2>
            </div>
            <div class="video-section animate-section">
                <VideoShowcase />
            </div>
        </div>
        
        <div class="section-gradient-separator"></div>
        
        <!-- Application and Comments Section -->
        <div id="connect-section" class="section-container">
            <div class="debug-indicator">CONNECT SECTION</div>
            <div class="section-heading">
                <div class="section-divider">
                    <span class="divider-icon">🔗</span>
                </div>
                <h2 class="section-title">Connect With Us</h2>
            </div>
            <div class="dual-section">
                <div class="application-section animate-section">
                    <div class="section-divider">
                        <span class="divider-icon">🌟</span>
                    </div>
                    <div id="ArtistApplication">
                        <ArtistApplication />
                    </div>
                </div>
                
                <div class="comments-section animate-section">
                    <div class="section-divider">
                        <span class="divider-icon">💬</span>
                    </div>
                    <FanComments />
                </div>
            </div>
        </div>
        
        <div class="back-to-top animate-section">
            <a href="#top" class="top-button" aria-label="Back to top">
                <i class="fas fa-chevron-up"></i>
            </a>
        </div>
    </div>
</div>

<style>
.artists-page {
    background: black;
    color: white;
    font-family: 'Poppins', sans-serif;
    position: relative;
    overflow-x: hidden;
    /* Forces the main container to take up space */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Animated background elements */
.bg-elements {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; /* Keep behind content */
    overflow: hidden;
    pointer-events: none;
}

.circle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.15;
    filter: blur(40px);
}

.circle-1 {
    top: -10%;
    right: -5%;
    width: 50vw;
    height: 50vw;
    background: linear-gradient(135deg, #81C14B, rgba(0, 0, 0, 0));
    animation: floatCircle 25s infinite alternate ease-in-out;
}

.circle-2 {
    bottom: -20%;
    left: -10%;
    width: 60vw;
    height: 60vw;
    background: linear-gradient(225deg, #444, #222, rgba(0, 0, 0, 0));
    animation: floatCircle 20s infinite alternate-reverse ease-in-out;
}

.circle-3 {
    top: 40%;
    right: 35%;
    width: 30vw;
    height: 30vw;
    background: linear-gradient(45deg, #222, #333, rgba(0, 0, 0, 0));
    animation: floatCircle 17s infinite alternate ease-in-out;
}

.blur-gradient {
    position: absolute;
    filter: blur(60px);
    opacity: 0.1;
}

.blur-1 {
    top: 30%;
    left: 10%;
    width: 40vw;
    height: 40vh;
    background: radial-gradient(circle, #81C14B, transparent 70%);
    animation: pulse 8s infinite alternate;
}

.blur-2 {
    bottom: 10%;
    right: 15%;
    width: 35vw;
    height: 35vh;
    background: radial-gradient(circle, #444, transparent 70%);
    animation: pulse 12s infinite alternate-reverse;
}

@keyframes floatCircle {
    0% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(5%, 5%) rotate(15deg); }
}

@keyframes pulse {
    0% { opacity: 0.1; transform: scale(1); }
    100% { opacity: 0.2; transform: scale(1.2); }
}

/* Clear spacing between hero and content */
.hero-wrapper {
    position: relative;
    min-height: 100vh;
    z-index: 2;
    /* Debug border */
    border-bottom: 4px dashed rgba(129, 193, 75, 0.5);
}

/* Content wrapper takes remaining space */
.content-wrapper {
    position: relative;
    z-index: 10;
    flex: 1;
    /* Debug padding */
    padding-top: 40px;
}

/* Section container styling */
.section-container {
    padding: 40px 20px;
    margin: 60px 0;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 10;
    /* Debug border */
    border: 2px solid rgba(129, 193, 75, 0.3);
}

/* Force all content to be visible */
.section-wrapper, .video-section, .application-section, .comments-section, .back-to-top {
    position: relative;
    margin: 0 auto;
    opacity: 1 !important; /* Always visible */
    transform: translateY(0) !important; /* Always in position */
    transition: opacity 0.8s ease, transform 0.8s ease;
    /* Debug border */
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 10px;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 900;
    text-align: center;
    background: linear-gradient(90deg, #81C14B, #FFD700);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 20px 0 40px;
}

.video-section {
    position: relative;
    padding: 80px 0;
    margin-top: 100px;
    background: rgba(0, 0, 0, 0.5);
    border-top: 2px solid rgba(129, 193, 75, 0.3);
    border-bottom: 2px solid rgba(129, 193, 75, 0.3);
}

.dual-section {
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    padding: 40px 20px 80px;
    position: relative;
    max-width: 1200px;
    margin: 100px auto 0;
}

.application-section, .comments-section {
    flex: 1;
    min-width: 300px;
}

.section-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
}

.section-divider::before,
.section-divider::after {
    content: "";
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(129, 193, 75, 0.5), transparent);
}

.divider-icon {
    font-size: 24px;
    margin: 0 15px;
}

.back-to-top {
    display: flex;
    justify-content: center;
    margin: 20px 0 40px;
}

.top-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #81C14B;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(129, 193, 75, 0.6);
}

.top-button:hover {
    transform: translateY(-5px);
    background: #6A9A52;
    box-shadow: 0 0 20px rgba(129, 193, 75, 0.8);
}

/* Animation class that gets added via JS */
.animate-section.visible, .visible {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 768px) {
    .dual-section {
        flex-direction: column;
        padding: 20px;
    }
    
    .section-title {
        font-size: 2rem;
    }
}

.section-gradient-separator {
    height: 4px;
    width: 100%;
    background: linear-gradient(90deg, transparent, #81C14B, transparent);
    opacity: 0.4;
    margin: 20px 0;
    position: relative;
    z-index: 5;
}

.section-heading {
    text-align: center;
    margin-bottom: 30px;
}

.debug-indicator {
    background-color: #81C14B;
    color: black;
    font-weight: bold;
    text-align: center;
    padding: 5px;
    margin-bottom: 20px;
    border-radius: 5px;
}
</style>
