<script lang="ts">
    let comments: { text: string; timestamp: Date }[] = [];
    let newComment = "";

    function postComment() {
        if (newComment.trim()) {
            comments = [...comments, { text: newComment, timestamp: new Date() }];
            newComment = "";
        }
    }
</script>

<section class="p-6">
    <h2 class="text-3xl font-semibold text-white">💬 Comments</h2>
    <div class="mt-4 bg-gray-800 p-4 rounded-lg">
        {#each comments as comment}
            <div class="border-b border-gray-700 py-2">
                <p>{comment.text}</p>
                <span class="text-xs text-gray-500">{comment.timestamp.toLocaleString()}</span>
            </div>
        {/each}
    </div>

    <input type="text" bind:value={newComment} placeholder="Leave a comment..."
        class="mt-4 w-full p-2 rounded-lg bg-gray-900 text-white">
    <button on:click={postComment} class="mt-2 px-4 py-2 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg">
        Post Comment
    </button>
</section>
