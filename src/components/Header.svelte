<script lang="ts">
  import Button from "./Button.svelte";
  import { onMount } from "svelte";

  export let y;

  let tabs = [
    { name: "Artists", link: "/artists" },
    { name: "Music", link: "/music" },
    { name: "TTST", link: "/street-talent" },
    { name: "Merch", link: "/merch" },
    { name: "Blog", link: "/blog" },
    { name: "The Troublers", link: "/troublers" },
    { name: "Contact", link: "/contact" },
    { name: "Events", link: "/events" }
  ];

  // Additional links for search but not navbar
  let additionalSearchOptions = [
    { name: "Terms of Service", link: "/terms" },
    { name: "Privacy Policy", link: "/privacy" }
  ];

  let menuOpen = false;
  let showSearch = false;
  let searchQuery = "";
  let filteredTabs = [...tabs, ...additionalSearchOptions];
  let showMusicPanel = false;

  const toggleSearch = () => {
    showSearch = !showSearch;
    searchQuery = "";
    filteredTabs = [...tabs, ...additionalSearchOptions];
  };

  const updateSearch = () => {
    // Search in both tabs and additionalSearchOptions
    const mainResults = tabs.filter(tab =>
      tab.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const additionalResults = additionalSearchOptions.filter(option =>
      option.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    filteredTabs = [...mainResults, ...additionalResults];
  };

  onMount(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "k" && e.ctrlKey) {
        e.preventDefault();
        toggleSearch();
      }
    });
  });
</script>

<header class={"sticky z-[50] top-0 w-full flex items-center justify-between transition-all duration-300 backdrop-blur-md " + (
  y > 0 ? "py-2 md:py-3 bg-black/80 border-b border-[#6A9A52] shadow-lg" : "py-3 md:py-4 bg-transparent"
)}>
  <div class="container mx-auto px-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="text-white font-medium flex items-center">
      <img src="/logo.png" alt="KenyanTroublers Logo" class="h-8 w-8 md:h-10 md:w-10 mr-2" />
      <div class="hidden sm:flex font-bold text-xl md:text-2xl tracking-tighter">
        <span class="text-white">the</span>
        <span class="text-[#81C14B] ml-1">Kenyan</span>
        <span class="text-white">Troublers</span>
      </div>
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-4 lg:gap-6">
      {#each tabs as tab}
        <a href={tab.link}
          class="text-white text-base lg:text-lg transition-all duration-300 hover:text-[#81C14B] relative group whitespace-nowrap">
          {tab.name}
          <span class="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#81C14B] transition-all duration-300 group-hover:w-full"></span>
        </a>
      {/each}
    </nav>

    <!-- Right Section -->
    <div class="flex items-center gap-2 sm:gap-3">
      <!-- Music Panel Trigger -->
      <button class="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full glow-green" on:click={() => showMusicPanel = !showMusicPanel} aria-label="Music platforms">
        🎵
      </button>

      <!-- Search Button -->
      <button class="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full glow-green" on:click={toggleSearch} aria-label="Search">
        🔍
      </button>

      <!-- Studio CTA -->
      <div class="hidden sm:block">
        <Button text="OSVE STUDIOS" phone="+254790932575" />
      </div>

      <!-- Mobile Toggle -->
      <button class="md:hidden flex items-center justify-center w-8 h-8 text-white" on:click={() => menuOpen = !menuOpen} aria-label="Toggle menu">
        {#if menuOpen}
          <span class="text-2xl">✕</span>
        {:else}
          <span class="text-2xl">☰</span>
        {/if}
      </button>
    </div>
  </div>
</header>

<!-- Mobile Menu -->
{#if menuOpen}
  <div class="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-lg flex flex-col animate-fade-slide-in">
    <div class="flex-1 mt-16 px-6 pb-16 flex flex-col items-center justify-start text-center space-y-5 text-2xl font-semibold text-white">
      {#each tabs as tab}
        <a
          href={tab.link}
          on:click={() => menuOpen = false}
          class="block hover:text-[#81C14B] transition-transform hover:scale-105 duration-300 py-2"
        >
          {tab.name}
        </a>
      {/each}
      <div class="mt-8 py-4">
        <Button text="OSVE STUDIOS" phone="+254790932575" />
      </div>
      <div class="mt-8 text-sm text-gray-400 opacity-70">
        Powered by <span class="text-[#81C14B] font-bold">theKenyanTroublers</span>
      </div>
    </div>
  </div>
{/if}

<!-- Super Search -->
{#if showSearch}
  <div class="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center backdrop-blur-md p-4">
    <div class="bg-[#111] rounded-xl w-full max-w-[500px] p-6 border border-[#81C14B]/40 shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-white text-lg font-semibold">Search</h2>
        <button on:click={toggleSearch} class="text-white text-xl hover:text-[#81C14B]" aria-label="Close search">✕</button>
      </div>
      <input
        type="text"
        placeholder="Search anything... (Ctrl+K)"
        bind:value={searchQuery}
        on:input={updateSearch}
        class="w-full px-4 py-3 rounded-md bg-[#222] text-white border border-[#81C14B]/40 focus:outline-none focus:ring-2 focus:ring-[#81C14B] mb-4"
      />
      <ul class="space-y-2 max-h-[300px] overflow-y-auto">
        {#each filteredTabs as tab}
          <li>
            <a href={tab.link} on:click={toggleSearch} class="block px-4 py-2 bg-[#1a1a1a] hover:bg-[#81C14B] hover:text-black text-white rounded-md transition-all">
              {tab.name}
            </a>
          </li>
        {/each}
        {#if filteredTabs.length === 0}
          <li class="text-center text-gray-400 text-sm">No match found.</li>
        {/if}
      </ul>
    </div>
  </div>
{/if}

<!-- Music Panel Modal -->
{#if showMusicPanel}
  <div class="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center backdrop-blur-md p-4">
    <div class="bg-[#111] rounded-xl w-full max-w-[500px] p-6 border border-[#81C14B]/40 shadow-lg text-white space-y-4">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold">Listen on Platforms</h2>
        <button on:click={() => showMusicPanel = false} class="text-2xl hover:text-[#81C14B]" aria-label="Close music panel">✕</button>
      </div>
      <a href="https://open.spotify.com/artist/6F05EgCahYw9U2th0SZVtP?si=CpkXfxfsSEGUfRkgfw_T1w" target="_blank" rel="noopener noreferrer" class="block text-center py-3 font-semibold rounded-md bg-[#1DB954] hover:shadow-[0_0_15px_#1DB954] transition-all">Spotify</a>
      <a href="https://music.apple.com/us/artist/thekenyantroublers/1606960956" target="_blank" rel="noopener noreferrer" class="block text-center py-3 font-semibold rounded-md bg-white text-black hover:shadow-[0_0_15px_rgba(251,45,49,0.7)] transition-all">Apple Music</a>
      <a href="https://www.boomplay.com/artists/39520564?" target="_blank" rel="noopener noreferrer" class="block text-center py-3 font-semibold rounded-md bg-[#0066FF] hover:shadow-[0_0_15px_#0066FF] transition-all">
        <span class="font-bold italic">B</span>oomplay
      </a>
    </div>
  </div>
{/if}

<style>
  @keyframes fade-slide-in {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-slide-in {
    animation: fade-slide-in 0.4s ease-out;
  }
  .glow-green {
    background-color: #81C14B;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px #81C14B88;
  }
  .glow-green:hover {
    background-color: #6A9A52;
    box-shadow: 0 0 18px #81C14B;
  }
</style>
