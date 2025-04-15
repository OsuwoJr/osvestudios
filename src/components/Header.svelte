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
      { name: "The Troublers", link: "/troublers" }
    ];
  
    let menuOpen = false;
  
    // Super Search
    let showSearch = false;
    let searchQuery = "";
    let filteredTabs = tabs;
  
    const toggleSearch = () => {
      showSearch = !showSearch;
      searchQuery = "";
      filteredTabs = tabs;
    };
  
    const updateSearch = () => {
      filteredTabs = tabs.filter(tab =>
        tab.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
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
  
  <header class={"sticky z-[50] top-0 px-6 flex items-center justify-between border border-solid transition-all duration-300 backdrop-blur-md " + (
    y > 0 ? "py-4 bg-black/80 border-[#6A9A52] shadow-lg" : "py-6 bg-transparent border-transparent"
  )}>
    <!-- Logo -->
    <a href="/" class="text-white font-medium text-xl flex items-center">
      <img src="/logo.png" alt="KenyanTroublers Logo" class="h-10 w-10 mr-2" />
      <div class="hidden md:flex font-bold text-2xl tracking-tighter">
        <span class="text-white">the</span>
        <span class="text-[#81C14B] ml-1.5">Kenyan</span>
        <span class="text-white">Troublers</span>
      </div>
    </a>
  
    <!-- Desktop Navigation -->
    <nav class="hidden lg:flex ml-auto pr-4 items-center gap-6">
      {#each tabs as tab}
        <a href={tab.link}
          class="text-white text-lg transition-all duration-300 hover:text-[#81C14B] relative group">
          {tab.name}
          <span class="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#81C14B] transition-all duration-300 group-hover:w-full"></span>
        </a>
      {/each}
    </nav>
  
    <!-- Right Section (Buttons + Icons) -->
    <div class="flex sm:text-sm items-center gap-4">
      <!-- Music Player Icon -->
      <button class="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#81C14B] hover:bg-[#6A9A52] transition-all duration-300">
        🎵
      </button>
  
      <!-- Super Search Button -->
      <button
        class="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#81C14B] hover:bg-[#6A9A52] transition-all duration-300"
        on:click={toggleSearch}
      >
        🔍
      </button>
  
      <!-- CTA Button -->
      <Button text="OSVE STUDIOS" phone="+254790932575" />
  
      <!-- Mobile Menu Toggle -->
      <button class="lg:hidden block text-white text-2xl" on:click={() => menuOpen = !menuOpen}>
        ☰
      </button>
    </div>
  </header>
  
  <!-- Mobile Menu Overlay -->
  {#if menuOpen}
    <div class="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-lg flex flex-col animate-fade-slide-in">
      <!-- Close Button -->
      <button
        on:click={() => menuOpen = false}
        class="absolute top-6 right-6 text-white text-4xl hover:text-[#81C14B] transition-transform duration-500 hover:rotate-90 z-[10000]"
        aria-label="Close menu"
      >
        ✕
      </button>
  
      <!-- Scrollable Content -->
      <div class="flex-1 overflow-y-auto mt-24 px-6 pb-20 flex flex-col items-center justify-start text-center space-y-8 text-3xl font-semibold text-white">
        {#each tabs as tab}
          <a
            href={tab.link}
            on:click={() => menuOpen = false}
            class="block hover:text-[#81C14B] transition-transform hover:scale-105 duration-300"
          >
            {tab.name}
          </a>
        {/each}
  
        <div class="mt-20 text-sm text-gray-400 opacity-70">
          Powered by <span class="text-[#81C14B] font-bold">theKenyanTroublers</span>
        </div>
      </div>
    </div>
  {/if}
  
  <!-- SUPER SEARCH MODAL -->
  {#if showSearch}
    <div class="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center backdrop-blur-md">
      <div class="bg-[#111] rounded-xl w-[90%] sm:w-[500px] p-6 border border-[#81C14B]/40 shadow-lg">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-white text-lg font-semibold">Super Search</h2>
          <button on:click={toggleSearch} class="text-white text-xl hover:text-[#81C14B]">✕</button>
        </div>
  
        <input
          type="text"
          placeholder="Search anything..."
          bind:value={searchQuery}
          on:input={updateSearch}
          class="w-full px-4 py-3 rounded-md bg-[#222] text-white border border-[#81C14B]/40 focus:outline-none focus:ring-2 focus:ring-[#81C14B] mb-4"
        />
  
        <ul class="space-y-2">
          {#each filteredTabs as tab}
            <li>
              <a href={tab.link}
                on:click={toggleSearch}
                class="block px-4 py-2 bg-[#1a1a1a] hover:bg-[#81C14B] hover:text-black text-white rounded-md transition-all"
              >
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
  
  <style>
    @keyframes fade-slide-in {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    .animate-fade-slide-in {
      animation: fade-slide-in 0.4s ease-out;
    }
  </style>
  