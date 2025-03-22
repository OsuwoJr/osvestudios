<script lang="ts">
    import { onMount } from "svelte";
</script>

<section class="apply-section">
    <!-- Floating Music-Related Icons -->
    <div class="floating-icons">
        {#each Array(25) as _, i}
            <i class="{['fas fa-microphone', 'fas fa-headphones', 'fas fa-guitar', 'fas fa-music'][Math.floor(Math.random() * 4)]} floating" 
               style="
                left: {Math.random() * 100}vw; 
                top: {Math.random() * 100}vh; 
                animation-duration: {Math.random() * 10 + 5}s;
                font-size: {Math.random() * 25 + 15}px;">
            </i>
        {/each}
    </div>

    <form class="apply-form">
        <h2>Join <span>theKenyanTroublers</span></h2>

        <input type="text" placeholder="Your Name" required />
        <input type="text" placeholder="Music Genre (e.g. Hip-Hop, Afrobeat)" required />
        <input type="url" placeholder="Demo Link (YouTube, SoundCloud, etc.)" required />

        <button type="submit">🚀 Apply Now</button>
    </form>
</section>

<style>
/* Main Application Section */
.apply-section {
    position: relative;
    background: rgba(0, 0, 0, 0.9);
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.6);
    text-align: center;
    max-width: 500px;
    margin: auto;
    overflow: hidden;
}

/* Floating Music-Related Icons */
.floating-icons {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
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

/* Form Styling */
.apply-form {
    position: relative;
    background: rgba(0, 0, 0, 0.95);
    padding: 30px;
    border-bottom: 2px solid #81C14B;
    border-radius: 15px;
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.6);
    max-width: 400px;
    margin: auto;
    text-align: center;
    transition: 0.3s;
    z-index: 2;
}

.apply-form:hover {
    box-shadow: 0px 0px 25px rgba(129, 193, 75, 0.9);
}

/* Heading */
.apply-form h2 {
    color: #81C14B;
    font-size: 1.8rem;
    margin-bottom: 15px;
}

.apply-form h2 span {
    background: linear-gradient(90deg, #81C14B, #FFD700);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Input Fields */
.apply-form input {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 2px solid transparent;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.apply-form input::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

/* Input Hover and Focus Effects */
.apply-form input:focus {
    border: 2px solid #81C14B;
    outline: none;
    box-shadow: 0px 0px 10px #81C14B;
}

/* Submit Button */
.apply-form button {
    background: #81C14B;
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
}

.apply-form button:hover {
    background: #6A9A52;
    transform: scale(1.05);
    box-shadow: 0px 0px 10px #81C14B;
}

/* Responsive */
@media (max-width: 500px) {
    .apply-section {
        padding: 30px;
    }

    .apply-form {
        max-width: 100%;
    }

    .apply-form h2 {
        font-size: 1.5rem;
    }

    .apply-form input {
        font-size: 0.9rem;
    }
}
</style>
