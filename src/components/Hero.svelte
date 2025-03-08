<script lang="ts">
    import Button from "./Button.svelte";
  </script>
  
  <section class="h-screen flex flex-col items-center justify-center text-center relative">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
      <h1 class="text-2xl md:text-5xl font-extrabold z-10">
          Welcome to <span class="text-[#81C14B]">theKenyanTroublers</span>
      </h1>
      <p class="text-lg md:text-2xl mt-4 z-10">The Global Hitmakers.</p>
      <Button text="Explore Music" />
  </section>
  