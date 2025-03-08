<script lang="ts">
    import Button from "./Button.svelte";
</script>

<section class="h-screen flex flex-col items-center justify-center text-center relative">
    <div class="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
    <h1 class="text-2xl md:text-5xl font-extrabold z-10">
        Welcome to <span class="text-[#81C14B]">theKenyanTroublers</span>
    </h1>
    <p class="text-lg md:text-2xl mt-4 z-10">The Global Hitmakers.</p>
    
    <!-- Pass the link prop to the Button component -->
    <Button text="Explore Music" link="https://open.spotify.com/artist/6F05EgCahYw9U2th0SZVtP?si=OB0niz1DSfCSOdflfSQT1Q" />
</section>
