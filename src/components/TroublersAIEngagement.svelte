<script>
    let messages = [{ text: "Welcome! How can I help?", sender: "bot" }];
    let userInput = "";

    function sendMessage() {
        if (userInput.trim()) {
            messages = [...messages, { text: userInput, sender: "user" }];
            userInput = "";
        }
    }
</script>

<section class="p-6 text-white">
    <h2 class="text-4xl font-bold text-center mb-6">🤖 AI Community Bot</h2>
    <div class="bg-gray-900 p-4 rounded-lg">
        {#each messages as msg}
            <p class="{msg.sender === 'bot' ? 'text-green-400' : 'text-blue-400'}">{msg.text}</p>
        {/each}
    </div>
    <input type="text" bind:value={userInput} placeholder="Ask something..." class="mt-4 w-full p-2 rounded-lg bg-gray-800 text-white">
    <button on:click={sendMessage} class="mt-2 px-4 py-2 bg-[#81C14B] rounded-lg">
        Send
    </button>
</section>
