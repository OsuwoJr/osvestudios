<script lang="ts">
  import Button from "./Button.svelte";
  export let y;
  let tabs = [
      { name: "Artists", link: "/artists" },
      { name: "Music", link: "/music" },
      { name: "TTST", link: "/street-talent" },
      { name: "Merch", link: "/merch" },
      { name: "Blog", link: "/blog" },
      { name: "The Troublers", link: "/troublers" },
  ];
  let menuOpen = false;
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

      <!-- Search Icon -->
      <button class="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#81C14B] hover:bg-[#6A9A52] transition-all duration-300">
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
