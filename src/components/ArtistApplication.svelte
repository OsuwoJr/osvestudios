<form class="apply-form">
    <h2>Join TheKenyanTroublers</h2>

    <input type="text" placeholder="Your Name" required />
    <input type="text" placeholder="Music Genre (e.g. Hip-Hop, Afrobeat)" required />
    <input type="url" placeholder="Demo Link (YouTube, SoundCloud, etc.)" required />

    <button type="submit">🚀 Apply Now</button>
</form>

<style>
/* Form Styling */
.apply-form {
    background: rgba(0, 0, 0, 0.9);
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.6);
    max-width: 400px;
    margin: auto;
    text-align: center;
    transition: 0.3s;
}

.apply-form:hover {
    box-shadow: 0px 0px 25px rgba(129, 193, 75, 0.9);
}

/* Heading */
.apply-form h2 {
    color: #81C14B;
    font-size: 1.5rem;
    margin-bottom: 15px;
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
    transition: border 0.3s ease-in-out;
}

.apply-form input::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

.apply-form input:focus {
    border: 2px solid #81C14B;
    outline: none;
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
}
</style>
