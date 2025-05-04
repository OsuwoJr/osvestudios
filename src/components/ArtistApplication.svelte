<script lang="ts">
    import { onMount } from "svelte";
    import { browser } from '$app/environment';
    
    // Form state variables
    let artistName = "";
    let genre = "";
    let demoLink = "";
    let email = "";
    let phone = "";
    let message = "";
    
    // Form submission status
    let isSubmitting = false;
    let submissionStatus = "";
    
    // Formspree endpoint - updated to match the working one from footer
    const formspreeEndpoint = "https://formspree.io/f/xyzweeav";
    
    // Handle form submission
    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault();
        
        if (!browser) return; // Skip on server
        
        // Basic validation
        if (!artistName || !genre || !demoLink || !email) {
            submissionStatus = "Please fill all required fields";
            return;
        }
        
        isSubmitting = true;
        submissionStatus = "";
        
        try {
            // Simplify form data creation to match working footer implementation
            const formData = new FormData();
            formData.append("artistName", artistName);
            formData.append("genre", genre);
            formData.append("demoLink", demoLink);
            formData.append("email", email);
            formData.append("phone", phone || "Not provided");
            formData.append("message", message || "No additional information");
            formData.append("formType", "Artist Application");
            
            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });
            
            if (response.ok) {
                // Success handling
                console.log("Form submission successful!");
                submissionStatus = "Application submitted successfully! We'll be in touch soon.";
                // Reset form fields
                artistName = "";
                genre = "";
                demoLink = "";
                email = "";
                phone = "";
                message = "";
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    submissionStatus = "";
                }, 5000);
            } else {
                const errorData = await response.json().catch(e => ({ error: "Could not parse error response" }));
                console.error("Form submission error response:", response.status, response.statusText);
                console.error("Error details:", errorData);
                submissionStatus = "Something went wrong. Please try again.";
            }
        } catch (error) {
            console.error("Form submission exception:", error);
            submissionStatus = "Something went wrong. Please try again.";
        } finally {
            isSubmitting = false;
        }
    };
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

    <form id="ArtistApplication" class="apply-form" on:submit={handleSubmit} action={formspreeEndpoint} method="POST">
        <h2>Join <span>theKenyanTroublers</span></h2>
        <p class="form-intro">Share your talent with us and become part of our growing family.</p>
        
        <!-- Hidden field for form type -->
        <input type="hidden" name="formType" value="Artist Application" />
        
        <!-- Honeypot field to prevent spam -->
        <div class="honeypot-field">
            <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
        </div>
        
        <!-- Redirect after submission for non-JS form submissions -->
        <input type="hidden" name="_next" value="https://thekenyantroublers.com/thanks" />
        
        <!-- Prevents auto-reply email confirmation from Formspree -->
        <input type="hidden" name="_autoresponse" value="Thank you for applying to join theKenyanTroublers! We've received your application and will review it shortly." />
        
        <div class="input-group">
            <label for="artistName">Artist Name <span class="required">*</span></label>
            <input 
                type="text" 
                id="artistName" 
                name="artistName"
                bind:value={artistName} 
                placeholder="Your Stage Name" 
                required 
            />
        </div>
        
        <div class="input-group">
            <label for="genre">Music Genre <span class="required">*</span></label>
            <input 
                type="text" 
                id="genre" 
                name="genre"
                bind:value={genre} 
                placeholder="e.g. Hip-Hop, Afrobeat, etc." 
                required 
            />
        </div>
        
        <div class="input-group">
            <label for="demoLink">Demo Link <span class="required">*</span></label>
            <input 
                type="url" 
                id="demoLink" 
                name="demoLink"
                bind:value={demoLink} 
                placeholder="YouTube, SoundCloud, etc." 
                required 
            />
        </div>
        
        <div class="input-group">
            <label for="email">Email <span class="required">*</span></label>
            <input 
                type="email" 
                id="email" 
                name="email"
                bind:value={email} 
                placeholder="Your Email Address" 
                required 
            />
        </div>
        
        <div class="input-group">
            <label for="phone">Phone Number</label>
            <input 
                type="tel" 
                id="phone" 
                name="phone"
                bind:value={phone} 
                placeholder="Your Contact Number" 
            />
        </div>
        
        <div class="input-group">
            <label for="message">Additional Info</label>
            <textarea 
                id="message" 
                name="message"
                bind:value={message} 
                placeholder="Tell us more about yourself and your music..." 
                rows="3"
            ></textarea>
        </div>
        
        {#if submissionStatus}
            <div class="status-message {submissionStatus.includes('successfully') ? 'success' : 'error'}">
                {submissionStatus}
            </div>
        {/if}

        <button type="submit" disabled={isSubmitting}>
            {#if isSubmitting}
                <i class="fas fa-circle-notch fa-spin"></i> Submitting...
            {:else}
                🚀 Apply Now
            {/if}
        </button>
        
        <p class="privacy-note">
            By submitting, you agree to our <a href="/privacy">Privacy Policy</a>.
        </p>
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
    margin-top: 40px;
    margin-bottom: 40px; 
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
    text-align: left;
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
    margin-bottom: 10px;
    text-align: center;
}

.apply-form h2 span {
    background: linear-gradient(90deg, #81C14B, #FFD700);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.form-intro {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    margin-bottom: 20px;
    text-align: center;
}

/* Input Groups */
.input-group {
    margin-bottom: 15px;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
}

.required {
    color: #81C14B;
}

/* Input Fields */
.apply-form input,
.apply-form textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid transparent;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.apply-form input::placeholder,
.apply-form textarea::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

/* Input Hover and Focus Effects */
.apply-form input:focus,
.apply-form textarea:focus {
    border: 2px solid #81C14B;
    outline: none;
    box-shadow: 0px 0px 10px #81C14B;
}

/* Status Message */
.status-message {
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
    font-size: 0.9rem;
    text-align: center;
}

.success {
    background: rgba(129, 193, 75, 0.2);
    color: #81C14B;
    border: 1px solid rgba(129, 193, 75, 0.5);
}

.error {
    background: rgba(220, 53, 69, 0.2);
    color: #dc3545;
    border: 1px solid rgba(220, 53, 69, 0.5);
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

.apply-form button:hover:not(:disabled) {
    background: #6A9A52;
    transform: scale(1.02);
    box-shadow: 0px 0px 10px #81C14B;
}

.apply-form button:disabled {
    background: #4e7a31;
    cursor: not-allowed;
    opacity: 0.8;
}

/* Privacy Note */
.privacy-note {
    margin-top: 15px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
}

.privacy-note a {
    color: #81C14B;
    text-decoration: underline;
}

.privacy-note a:hover {
    color: #6A9A52;
}

/* Responsive */
@media (max-width: 500px) {
    .apply-section {
        padding: 30px;
    }

    .apply-form {
        max-width: 100%;
        padding: 20px;
    }

    .apply-form h2 {
        font-size: 1.5rem;
    }

    .apply-form input,
    .apply-form textarea {
        font-size: 0.9rem;
    }
}

/* Honeypot field to prevent spam */
.honeypot-field {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    z-index: -1;
    overflow: hidden;
}
</style>
