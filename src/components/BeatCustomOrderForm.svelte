<script lang="ts">
    let name = "";
    let request = "";
    let submitted = false;

    let recording = false;
    let mediaRecorder: MediaRecorder | null = null;
    let recordedChunks: Blob[] = [];
    let recordings: { url: string; blob: Blob }[] = [];

    // Handle Form Submission
    function handleSubmit(event: Event) {
        event.preventDefault();
        if (name.trim() && request.trim()) {
            submitted = true;
            setTimeout(() => (submitted = false), 3000); // Reset after 3 seconds
        }
    }

    // Start Recording
    async function startRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            recordedChunks = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) recordedChunks.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(recordedChunks, { type: "audio/wav" });
                const audioUrl = URL.createObjectURL(audioBlob);
                recordings.push({ url: audioUrl, blob: audioBlob });
            };

            mediaRecorder.start();
            recording = true;

            // Stop after 1 minute
            setTimeout(() => stopRecording(), 60000);
        } catch (error) {
            console.error("Error accessing microphone:", error);
        }
    }

    // Stop Recording
    function stopRecording() {
        if (mediaRecorder) {
            mediaRecorder.stop();
            recording = false;
        }
    }
</script>

<section class="custom-order">
    <h2 class="title">🎵 Custom Beat Request</h2>
    <p class="subtitle">Describe your dream beat, and send a voice sample if you have an idea! 🚀</p>

    {#if submitted}
        <div class="success-message">✅ Request Submitted! We'll get back to you soon.</div>
    {:else}
        <form on:submit={handleSubmit}>
            <input type="text" placeholder="Your Name" bind:value={name} required />
            <textarea placeholder="Describe your custom beat..." bind:value={request} required></textarea>

            <!-- Recording Section -->
            <div class="recording-section">
                <button type="button" class="record-btn" on:click={recording ? stopRecording : startRecording}>
                    {recording ? "🛑 Stop Recording" : "🎙️ Start Recording"}
                </button>

                <!-- Display Recorded Files -->
                {#each recordings as rec, index}
                    <div class="recorded-file">
                        <audio controls>
                            <source src={rec.url} type="audio/wav" />
                            Your browser does not support the audio element.
                        </audio>
                        <span>Recording {index + 1}</span>
                    </div>
                {/each}
            </div>

            <button type="submit">🔥 Submit Request</button>
        </form>
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
/* Custom Order Section */
.custom-order {
    max-width: 500px;
    margin: auto;
    margin-bottom: 40px;
    text-align: center;
    background: #222;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.7);
    transition: 0.3s;
}

/* Subtitle */
.subtitle {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 15px;
}

/* Form Styling */
form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

/* Input Fields */
input, textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid transparent;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    transition: border 0.3s ease-in-out, box-shadow 0.3s;
}

/* Placeholder Styling */
input::placeholder, textarea::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

/* Input Focus */
input:focus, textarea:focus {
    border: 2px solid #81C14B;
    box-shadow: 0px 0px 10px rgba(129, 193, 75, 0.7);
    outline: none;
}

/* Textarea */
textarea {
    resize: none;
    min-height: 100px;
}

/* Submit Button */
button {
    background: #81C14B;
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}

button:hover {
    background: #6A9A52;
    transform: scale(1.05);
}

/* Success Message */
.success-message {
    background: rgba(129, 193, 75, 0.2);
    color: #81C14B;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    animation: fadeIn 0.5s ease-in-out;
}

/* Recording Section */
.recording-section {
    margin-top: 15px;
    padding: 15px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    text-align: center;
}

/* Record Button */
.record-btn {
    background: #ff4c4c;
    color: white;
    padding: 10px 15px;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
    transition: 0.3s;
}

.record-btn:hover {
    background: #cc3a3a;
}

/* Recorded Files */
.recorded-file {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    background: rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 6px;
}

.recorded-file audio {
    flex-grow: 1;
}

/* Fade-in animation */
@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}
</style>
