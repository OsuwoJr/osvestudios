<script lang="ts">
    import { onMount } from "svelte";
    
    let comments = [
        { name: "Alex", text: "Love the new track! 🔥🔥" },
        { name: "Jay", text: "TheKenyanTroublers always delivering top-tier vibes!" },
        { name: "Sara", text: "Can't wait for the next release! 💯" },
    ];

    let name = "";
    let text = "";
    let commentList: HTMLDivElement;

    function addComment() {
        if (name.trim() && text.trim()) {
            comments = [...comments, { name, text }];
            name = "";
            text = "";

            // Scroll to latest comment smoothly
            setTimeout(() => {
                commentList.scrollTop = commentList.scrollHeight;
            }, 100);
        }
    }
</script>

<section class="fan-comments">
    <!-- Floating Messaging Icons -->
    <div class="floating-icons">
        {#each Array(30) as _, i}
            <i class="{['fas fa-comment-dots', 'fas fa-phone-alt', 'fas fa-pen-fancy'][Math.floor(Math.random() * 3)]} floating" 
               style="
                left: {Math.random() * 100}vw; 
                top: {Math.random() * 100}vh; 
                animation-duration: {Math.random() * 8 + 5}s;
                font-size: {Math.random() * 25 + 15}px;">
            </i>
        {/each}
    </div>

    <h2 class="title">🎤 Fan Comments</h2>
    
    <div class="comments-list" bind:this={commentList}>
        {#each comments as comment}
            <div class="comment fade-in">
                <strong>{comment.name}:</strong>
                <p>{comment.text}</p>
            </div>
        {/each}
    </div>

    <form class="comment-form" on:submit|preventDefault={addComment}>
        <input type="text" placeholder="Your Name" bind:value={name} required />
        <textarea placeholder="Drop a comment..." bind:value={text} required></textarea>
        <button type="submit">🚀 Post Comment</button>
    </form>
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
/* Main Container */
.fan-comments {
    position: relative;
    background: rgba(0, 0, 0, 0.9);
    padding: 40px;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.6);
    color: white;
    max-width: 600px;
    margin: auto;
    overflow: hidden;
}

/* Floating Messaging Icons */
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

/* Comment List */
.comments-list {
    max-height: 300px;
    overflow-y: auto;
    margin-bottom: 20px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: inset 0px 0px 10px rgba(129, 193, 75, 0.5);
    scrollbar-width: thin;
    position: relative;
    z-index: 2;
}

/* Individual Comment */
.comment {
    background: rgba(255, 255, 255, 0.1);
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 10px;
    transition: 0.3s;
    position: relative;
    z-index: 2;
}

/* Smooth fade-in effect */
.fade-in {
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Input Fields */
.comment-form input,
.comment-form textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 10px;
    border: 2px solid transparent;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    transition: border 0.3s ease-in-out;
    position: relative;
    z-index: 2;
}

/* Glow effect on focus */
.comment-form input:focus,
.comment-form textarea:focus {
    border: 2px solid #81C14B;
    outline: none;
}

/* Submit Button */
.comment-form button {
    background: #81C14B;
    color: black;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    z-index: 2;
}

.comment-form button:hover {
    background: #6A9A52;
    transform: scale(1.05);
}

/* Custom scrollbar for WebKit browsers */
.comments-list::-webkit-scrollbar {
    width: 6px;
}

.comments-list::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
}

.comments-list::-webkit-scrollbar-thumb {
    background: #81C14B;
    border-radius: 10px;
}
</style>
