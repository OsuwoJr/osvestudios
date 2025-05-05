<script>
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    
    let isLoaded = false;
    
    onMount(() => {
        if (browser) {
            setTimeout(() => {
                isLoaded = true;
            }, 300);
        }
    });
</script>

<section class="relative text-white text-center py-32 overflow-hidden">
    <!-- Background Animation -->
    <div class="absolute inset-0 bg-black">
        <div class="absolute inset-0 bg-gradient-to-r from-black via-[#81C14B]/30 to-black opacity-80"></div>
        <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-[200%] h-[200%] bg-gradient-radial from-[#81C14B]/40 via-transparent to-transparent animate-pulse-slow"></div>
        </div>
        
        <!-- Futuristic Grid -->
        <div class="absolute inset-0 cyber-grid"></div>
    </div>

    <!-- Animated Floating Elements -->
    <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-72 h-72 rounded-full bg-[#81C14B]/20 blur-3xl animate-pulse"></div>
    </div>
    
    <!-- Digital Particles -->
    <div class="absolute inset-0 particles-container"></div>

    <!-- Main Content -->
    <div class="relative z-10 px-6">
        <div class="glitch-container">
            <h1 class="text-6xl font-extrabold tracking-wide neon-text glitch" data-text="Welcome to The Troublers">
                🚀 Welcome to <span class="text-[#81C14B]">The Troublers</span>
            </h1>
        </div>
        
        <!-- Animated Tagline -->
        <div class="cyber-box mt-8 max-w-3xl mx-auto">
            <p class="text-2xl mt-6 max-w-3xl mx-auto opacity-90 typing-animation">
                The <span class="font-bold">ultimate</span> movement where <span class="font-bold">artists, visionaries, and game-changers</span> unite.  
                <span class="font-bold">We're not just a community—we're a revolution.</span>
            </p>
        </div>

        <!-- Holographic Stats -->
        <div class="mt-10 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div class="holo-stat">
                <div class="text-4xl font-bold text-[#FFD700]">300+</div>
                <div class="text-sm uppercase">Artists</div>
            </div>
            <div class="holo-stat">
                <div class="text-4xl font-bold text-[#FFD700]">10K+</div>
                <div class="text-sm uppercase">Members</div>
            </div>
            <div class="holo-stat">
                <div class="text-4xl font-bold text-[#FFD700]">50+</div>
                <div class="text-sm uppercase">Events</div>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="mt-10">
            <a href="#join" 
               class="inline-block px-8 py-4 text-lg font-bold text-black bg-[#81C14B] rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-[#81C14B]/50 cyber-button">
                🚀 Join the Future Now
            </a>
        </div>
    </div>
</section>

<style>
@keyframes pulse-slow {
    0% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.1); opacity: 0.8; }
    100% { transform: scale(1); opacity: 0.6; }
}

.neon-text {
    text-shadow: 0 0 15px #81C14B, 0 0 30px #81C14B, 0 0 50px #81C14B;
}

/* Glitch effect */
.glitch-container {
    position: relative;
    display: inline-block;
}

.glitch {
    position: relative;
}

.glitch::before,
.glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.glitch::before {
    left: -2px;
    text-shadow: 2px 0 #ff00ff;
    animation: glitch-animation-1 3s infinite linear alternate-reverse;
}

.glitch::after {
    left: 2px;
    text-shadow: -2px 0 #00ffff;
    animation: glitch-animation-2 2s infinite linear alternate-reverse;
}

@keyframes glitch-animation-1 {
    0% { clip-path: inset(20% 0 80% 0); }
    20% { clip-path: inset(30% 0 70% 0); }
    40% { clip-path: inset(40% 0 60% 0); }
    60% { clip-path: inset(50% 0 50% 0); }
    80% { clip-path: inset(60% 0 40% 0); }
    100% { clip-path: inset(70% 0 30% 0); }
}

@keyframes glitch-animation-2 {
    0% { clip-path: inset(70% 0 30% 0); }
    20% { clip-path: inset(60% 0 40% 0); }
    40% { clip-path: inset(50% 0 50% 0); }
    60% { clip-path: inset(40% 0 60% 0); }
    80% { clip-path: inset(30% 0 70% 0); }
    100% { clip-path: inset(20% 0 80% 0); }
}

/* Cyber grid background */
.cyber-grid {
    background-size: 50px 50px;
    background-image: 
        linear-gradient(to right, #81C14B10 1px, transparent 1px),
        linear-gradient(to bottom, #81C14B10 1px, transparent 1px);
    z-index: 0;
    transform: perspective(500px) rotateX(60deg);
    transform-origin: center top;
    animation: grid-move 15s linear infinite;
}

@keyframes grid-move {
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
}

/* Cyber button */
.cyber-button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.cyber-button::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: rotate(45deg);
    animation: shine 3s infinite;
}

@keyframes shine {
    0% { left: -50%; }
    100% { left: 150%; }
}

/* Holographic stats */
.holo-stat {
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid #81C14B30;
    border-radius: 10px;
    padding: 1rem;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 15px rgba(129, 193, 75, 0.3);
    transform: perspective(500px) rotateX(10deg);
    animation: float 6s ease-in-out infinite;
}

.holo-stat::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        45deg, 
        transparent 20%, 
        rgba(129, 193, 75, 0.1) 40%, 
        rgba(255, 215, 0, 0.1) 50%, 
        rgba(129, 193, 75, 0.1) 60%, 
        transparent 80%
    );
    transform: rotate(45deg);
    animation: holo-shine 4s linear infinite;
}

@keyframes holo-shine {
    0% { transform: rotate(45deg) translateX(-100%); }
    100% { transform: rotate(45deg) translateX(100%); }
}

@keyframes float {
    0% { transform: perspective(500px) rotateX(10deg) translateY(0); }
    50% { transform: perspective(500px) rotateX(10deg) translateY(-10px); }
    100% { transform: perspective(500px) rotateX(10deg) translateY(0); }
}

/* Cyber box */
.cyber-box {
    position: relative;
    border: 1px solid rgba(129, 193, 75, 0.3);
    border-radius: 5px;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 10px rgba(129, 193, 75, 0.2);
}

.cyber-box::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #81C14B, #FFD700, #81C14B);
    z-index: -1;
    filter: blur(10px);
    opacity: 0.3;
    animation: cyber-border 3s linear infinite;
}

@keyframes cyber-border {
    0% { filter: blur(10px) hue-rotate(0deg); }
    100% { filter: blur(10px) hue-rotate(360deg); }
}

/* Typing animation */
.typing-animation {
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid #81C14B;
    width: 0;
    animation: typing 4s steps(40) 0.5s forwards, blink-caret 0.75s step-end infinite;
    animation-delay: 0.5s;
}

@keyframes typing {
    from { width: 0; white-space: nowrap; }
    to { width: 100%; white-space: normal; }
}

@keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #81C14B; }
}

/* Particles container */
.particles-container {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 70%);
}

.particles-container::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
        radial-gradient(circle at 20% 20%, rgba(129, 193, 75, 0.3) 0%, transparent 5%),
        radial-gradient(circle at 80% 40%, rgba(129, 193, 75, 0.2) 0%, transparent 5%),
        radial-gradient(circle at 40% 60%, rgba(255, 215, 0, 0.2) 0%, transparent 5%),
        radial-gradient(circle at 70% 90%, rgba(129, 193, 75, 0.25) 0%, transparent 5%);
    filter: blur(1px);
    animation: particle-float 10s ease-in-out infinite;
}

@keyframes particle-float {
    0% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(1.05); }
    100% { transform: translateY(0) scale(1); }
}
</style>
