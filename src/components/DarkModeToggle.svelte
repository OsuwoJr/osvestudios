<script>
    let darkMode = false;

    function toggleDarkMode() {
        darkMode = !darkMode;
        document.documentElement.classList.toggle("dark", darkMode);
    }
</script>

<button on:click={toggleDarkMode} class="fixed bottom-6 right-6 p-4 bg-[#81C14B] hover:bg-[#6A9A52] rounded-full">
    🌙
</button>
