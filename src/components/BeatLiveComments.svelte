<script lang="ts">
    let comments = [{ name: "Alex", text: "This beat is 🔥🔥!" }];
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

<section class="comments">
    <h2>💬 Fan Comments</h2>
    <div>
        {#each comments as comment}
            <p><strong>{comment.name}:</strong> {comment.text}</p>
        {/each}
    </div>

    <form on:submit|preventDefault={addComment}>
        <input type="text" placeholder="Your Name" bind:value={name} required />
        <textarea placeholder="Write a comment..." bind:value={text} required></textarea>
        <button type="submit">Post Comment</button>
    </form>
</section>
