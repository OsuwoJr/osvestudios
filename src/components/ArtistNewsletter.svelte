<script lang="ts">
    import { onMount } from "svelte";

    let email = "";
    let message = "";
    let isSubmitting = false;

    function validateEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function subscribe() {
        if (!validateEmail(email)) {
            message = "⚠️ Please enter a valid email!";
            return;
        }

        isSubmitting = true;
        setTimeout(() => {
            message = `✅ Subscribed successfully: ${email}`;
            email = "";
            isSubmitting = false;
        }, 1500);
    }
</script>

<section class="newsletter">
    <h2 class="title">📩 Stay Updated</h2>
    <p>Join our newsletter and never miss a release!</p>

    <form on:submit|preventDefault={subscribe} class="newsletter-form">
        <input type="email" placeholder="Enter your email..." bind:value={email} required />
        <button type="submit" class:isSubmitting={isSubmitting} disabled={isSubmitting}>
            {isSubmitting ? "⏳ Subscribing..." : "Subscribe"}
        </button>
    </form>

    {#if message}
        <p class="message">{message}</p>
    {/if}
</section>

<style>
    .title {
    font-size: 1.5rem;
    font-weight: 900;
    text-transform: uppercase;
    background: linear-gradient(90deg, #81C14B, #FFD700);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.newsletter {
    background: linear-gradient(135deg, #111, #222);
    padding: 40px;
    text-align: center;
    border-radius: 12px;
    color: white;
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.7);
    transition: transform 0.3s ease-in-out;
}

.newsletter:hover {
    transform: scale(1.02);
}

.newsletter-form {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

.newsletter-form input {
    width: 260px;
    padding: 12px;
    border-radius: 8px;
    border: 2px solid transparent;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    transition: border 0.3s ease-in-out, box-shadow 0.3s;
}

.newsletter-form input::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

.newsletter-form input:focus {
    border: 2px solid #81C14B;
    box-shadow: 0px 0px 10px rgba(129, 193, 75, 0.7);
    outline: none;
}

.newsletter-form button {
    background: #81C14B;
    color: black;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease-in-out, transform 0.2s;
}

.newsletter-form button:hover {
    background: #6A9A52;
    transform: scale(1.05);
}

.newsletter-form button:disabled {
    background: #4f7040;
    cursor: not-allowed;
}

.message {
    margin-top: 15px;
    font-weight: bold;
    color: #81C14B;
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 480px) {
    .newsletter {
        width: 90%;
    }

    .newsletter-form {
        flex-direction: column;
    }

    .newsletter-form input {
        width: 100%;
    }
}
</style>
