<script lang="ts">
    import { onMount } from "svelte";

    let comments = [
        { name: "Alex", text: "This beat is 🔥🔥!", avatar: "🦊" },
        { name: "Jordan", text: "Loving the vibe! 🎶", avatar: "🐻" }
    ];

    let name = "";
    let text = "";
    let commentContainer: HTMLDivElement;

    const avatars = ["🐵", "🐶", "🦊", "🐯", "🐻", "🐼", "🦄", "🐸", "🐢", "🐧"];

    function getRandomAvatar() {
        return avatars[Math.floor(Math.random() * avatars.length)];
    }

    function addComment() {
        if (name.trim() && text.trim()) {
            comments = [...comments, { name, text, avatar: getRandomAvatar() }];
            name = "";
            text = "";

            setTimeout(() => {
                commentContainer?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }

    $: if (commentContainer) {
        let lastComment = commentContainer.lastElementChild;
        if (lastComment) {
            lastComment.classList.add("fade-in");
            setTimeout(() => lastComment.classList.remove("fade-in"), 1000);
        }
    }
</script>

<section class="comments">
    <h2 class="title">💬 Fan Comments</h2>

    <div class="comment-list" bind:this={commentContainer}>
        {#each comments as comment, i}
            <div class="comment {i === comments.length - 1 ? 'fade-in' : ''}">
                <span class="avatar">{comment.avatar}</span>
                <div class="comment-content">
                    <p><strong>{comment.name}:</strong> {comment.text}</p>
                </div>
            </div>
        {/each}
    </div>

    <form on:submit|preventDefault={addComment}>
        <input type="text" placeholder="Your Name" bind:value={name} required />
        <textarea placeholder="Write a comment..." bind:value={text} required></textarea>
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
/* UI Styles */
.comments {
    max-width: 600px;
    margin: auto;
    margin-bottom: 40px;
    padding: 20px;
    background: #222;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 0px 15px rgba(129, 193, 75, 0.7);
}

.comment-list {
    max-height: 250px;
    overflow-y: auto;
    padding: 10px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    margin-bottom: 15px;
    scrollbar-width: thin;
    scrollbar-color: #81C14B #333;
}

.comment {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    margin-bottom: 10px;
    opacity: 0.9;
    transition: 0.3s ease-in-out;
}

.avatar {
    font-size: 1.8rem;
    background: rgba(255, 255, 255, 0.2);
    padding: 8px 10px;
    border-radius: 50%;
}

.comment-content {
    text-align: left;
    flex-grow: 1;
}

form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

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

input::placeholder, textarea::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

input:focus, textarea:focus {
    border: 2px solid #81C14B;
    box-shadow: 0px 0px 10px rgba(129, 193, 75, 0.7);
    outline: none;
}

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

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in {
    animation: fadeIn 0.5s ease-in-out;
}

@media (max-width: 480px) {
    .comments {
        width: 90%;
    }
}
</style>
