<script lang="ts">
    let email = "";

    function subscribe() {
        if (email) {
            alert(`Subscribed successfully: ${email}`);
            email = "";
        }
    }
</script>

<section class="newsletter">
    <h2>📩 Stay Updated</h2>
    <p>Join our newsletter and never miss a release!</p>
    
    <form on:submit|preventDefault={subscribe} class="newsletter-form">
        <input type="email" placeholder="Enter your email..." bind:value={email} required />
        <button type="submit">Subscribe</button>
    </form>
</section>

<style>
.newsletter {
    background: linear-gradient(135deg, #111, #222);
    padding: 40px;
    text-align: center;
    border-radius: 10px;
    color: white;
    box-shadow: 0px 0px 10px #81C14B;
}

.newsletter-form {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

.newsletter-form input {
    width: 250px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    transition: 0.3s;
}

.newsletter-form button {
    background: #81C14B;
    padding: 10px 20px;
    border-radius: 5px;
    transition: 0.3s;
}

.newsletter-form button:hover {
    background: #6A9A52;
}
</style>
