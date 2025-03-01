<script lang=" ts">
    import Button from "./Button.svelte";
    export let y;
    let tabs = [
        { name: "Artists", link: "#artists" },
        { name: "Beats/Instrumentals", link: "#beats" },
        { name: "Music", link: "/music" },
        { name: "Merch", link: "/merch" },
        { name: "The Movement", link: "#movement" },
        { name: "Join Us", link: "/join" }
    ];
    
    let menuOpen = false;
</script>

<header class={"sticky z-[50] top-0 px-6 flex items-center justify-between border border-solid transition-all duration-300 backdrop-blur-md " + (
    y > 0 ? "py-4 bg-black/80 border-[#6A9A52] shadow-lg" : "py-6 bg-transparent border-transparent"
)}>
    <!-- Logo -->
    <a href="/" class="text-white font-medium text-xl flex items-center">
        <img src="/logo.png" alt="KenyanTroublers Logo" class="h-10 w-10 mr-2" />
        the<b class="font-extrabold text-[#81C14B]">KenyanTroublers</b>
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden sm:flex ml-auto pr-4 items-center gap-6">
        {#each tabs as tab}
            <a href={tab.link} 
               class="text-white text-lg transition-all duration-300 hover:text-[#81C14B] relative group">
                {tab.name}
                <span class="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#81C14B] transition-all duration-300 group-hover:w-full"></span>
            </a>
        {/each}
    </nav>

    <!-- Right Section (Buttons + Icons) -->
    <div class="flex items-center gap-4">
        <!-- Music Player Icon -->
        <button class="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#81C14B] hover:bg-[#6A9A52] transition-all duration-300">
            🎵 <!-- Placeholder icon -->
        </button>

        <!-- Search Icon -->
        <button class="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#81C14B] hover:bg-[#6A9A52] transition-all duration-300">
            🔍 <!-- Placeholder icon -->
        </button>

        <!-- Call to Action Buttons -->
        <Button text="Troublers!" phone="+254790932575" />
        

        <!-- Mobile Menu Button -->
        <button class="sm:hidden block text-white text-2xl" on:click={() => menuOpen = !menuOpen}>
            ☰
        </button>
    </div>

    <!-- Mobile Menu Overlay -->
    {#if menuOpen}
        <div class="fixed inset-0 bg-black/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center text-white space-y-6 text-xl">
            {#each tabs as tab}
                <a href={tab.link} class="hover:text-[#81C14B] transition-all duration-300" on:click={() => menuOpen = false}>
                    {tab.name}
                </a>
            {/each}
            <button class="text-3xl absolute top-6 right-6" on:click={() => menuOpen = false}>✖</button>
        </div>
    {/if}
</header>
```