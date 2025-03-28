<script lang=" ts">
    import Button from "./Button.svelte";
    export let y;
    let tabs = [
        { name: "Artists", link: "/artists" },
        { name: "Music", link: "/music" },
        { name: "Merch", link: "/merch" },
        {name: "Blog", link: "/blog" },
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
            🎵 <!-- Placeholder icon -->
        </button>

        <!-- Search Icon -->
        <button class="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#81C14B] hover:bg-[#6A9A52] transition-all duration-300">
            🔍 <!-- Placeholder icon -->
        </button>

        <!-- Call to Action Buttons -->
        <Button  text="OSVE STUDIOS" phone="+254790932575" />
        

        <!-- Mobile Menu Button -->
        <button class=" lg:hidden block text-white text-2xl" on:click={() => menuOpen = !menuOpen}>
            ☰
        </button>
    </div>

    <!-- Mobile Menu Overlay -->
  {#if menuOpen}
  <div 
  class="fixed inset-0 flex items-center justify-center top-70 bg-black/95 backdrop-blur-xl z-40"
  role="dialog"
  aria-label="Mobile menu"
>
  <!-- Modal Content -->
  <div class="relative bg-black p-10 rounded-lg shadow-lg text-center space-y-8">
    
    <!-- Close Button (Top Right Inside Modal) -->
    <button 
      class="absolute top-4 right-4 p-2 text-white text-3xl hover:text-[#81C14B] transition-transform hover:rotate-90 duration-500"
      on:click={() => menuOpen = false}
    >
      ✕
    </button>

    <!-- Menu Items -->
    <div class="flex flex-col items-center space-y-6 text-2xl">
      {#each tabs as tab}
        <a 
          href={tab.link} 
          class="text-white/90 hover:text-[#81C14B] transition-all duration-300 hover:scale-105"
          on:click={() => menuOpen = false}
        >
          {tab.name}
        </a>
      {/each}
    </div>
  </div>
</div>

{/if}
</header>
