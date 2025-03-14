<script lang="ts">
    import { onMount } from "svelte";
    
    let comments = [
        { name: "Alex", text: "Love the new track! 🔥🔥" },
        { name: "Jay", text: "TheKenyanTroublers always delivering top-tier vibes!" },
        { name: "Sara", text: "Can't wait for the next release! 💯" },
    ];

    let name = "";
    let text = "";

    function addComment() {
        if (name && text) {
            comments = [...comments, { name, text }];
            name = "";
            text = "";
        }
    }
</script>

<section class="fan-comments">
    <h2>🎤 Fan Comments</h2>
    
    <div class="comments-list">
        {#each comments as comment, i}
            <div class="comment">
                <strong>{comment.name}:</strong>
                <p>{comment.text}</p>
            </div>
        {/each}
    </div>

    <form class="comment-form" on:submit|preventDefault={addComment}>
        <input type="text" placeholder="Your Name" bind:value={name} required />
        <textarea placeholder="Drop a comment..." bind:value={text} required></textarea>
        <button type="submit">Post Comment</button>
    </form>
</section>

<style>
.fan-comments {
    background: black;
    padding: 40px;
    text-align: center;
    border-radius: 10px;
    color: white;
}

.comments-list {
    max-height: 300px;
    overflow-y: auto;
    margin-bottom: 20px;
    padding: 10px;
}

.comment {
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.comment-form input, .comment-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
}

.comment-form button {
    background: #81C14B;
    padding: 10px 20px;
    border-radius: 5px;
    transition: 0.3s;
}

.comment-form button:hover {
    background: #6A9A52;
}
</style>
