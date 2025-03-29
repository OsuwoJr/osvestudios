<section class="hero-section relative text-white text-center py-32 overflow-hidden">
    <!-- Background Layers -->
    <div class="absolute inset-0 bg-black">
        <div class="absolute inset-0 bg-gradient-to-r from-black via-[#81C14B]/30 to-black opacity-80"></div>
        <div class="absolute inset-0 flex items-center justify-center">
            <div class="bg-effect w-[200%] h-[200%] animate-pulse-slow"></div>
        </div>
    </div>

    <!-- Floating Music Particles -->
    <div class="floating-icons">
        {#each Array(30) as _, i}
            <i class="fas fa-music floating" style="
                left: {Math.random() * 100}vw; 
                top: {Math.random() * 100}vh; 
                animation-duration: {Math.random() * 8 + 5}s;
                font-size: {Math.random() * 25 + 15}px;">
            </i>
        {/each}
    </div>

    <!-- Grid Animation -->
    <div class="grid-overlay"></div>

    <!-- Main Content -->
    <div class="relative z-10 px-6">
        <h1 class="hero-title">🎤 The Troublers Street Talent</h1>
        <p class="hero-subtitle">
            The rawest freestyle movement in <span class="font-bold">Nairobi’s streets</span>.  
            🔥 <span class="font-bold">Download beats, watch your freestyle, and grab exclusive media.</span>
        </p>
    </div>
</section>

<style>
/* Main Hero Section */
.hero-section {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

/* Background Effect */
.bg-effect {
    background: radial-gradient(circle, rgba(129, 193, 75, 0.4) 20%, transparent 80%);
    filter: blur(100px);
}

/* Floating Icons */
.floating-icons {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.floating {
    position: absolute;
    color: rgba(129, 193, 75, 0.5);
    animation: float 8s infinite ease-in-out alternate;
    text-shadow: 0 0 10px rgba(129, 193, 75, 0.8);
}

@keyframes float {
    0% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
    50% { transform: translateY(-20px) rotate(10deg); opacity: 1; }
    100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
}

/* Grid Overlay */
.grid-overlay {
    position: absolute;
    inset: 0;
    background-size: 50px 50px;
    background-image: linear-gradient(rgba(129, 193, 75, 0.15) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(129, 193, 75, 0.15) 1px, transparent 1px);
    animation: gridMove 6s infinite linear;
}

@keyframes gridMove {
    from { background-position: 0 0; }
    to { background-position: -50px -50px; }
}

/* Hero Text */
.hero-title {
    font-size: 4rem;
    font-weight: 900;
    text-transform: uppercase;
    background: linear-gradient(90deg, #81C14B, #FFD700);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 15px #81C14B, 0 0 30px #81C14B, 0 0 50px #81C14B;
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    opacity: 0.9;
    margin-top: 15px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-title {
        font-size: 3rem;
    }
    .hero-subtitle {
        font-size: 1.2rem;
    }
}
</style>
