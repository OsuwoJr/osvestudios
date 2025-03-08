<script lang="ts">
    import '../app.css';
    import Header from "../components/Header.svelte";
    import BackgroundSVGs from "../components/BackgroundSVGs.svelte";
    let { children } = $props();
</script>

<main class="bg-[#000000] flex flex-col item-center text-white relative z-[1]" data-sveltekit-preload-data="hover">
    <BackgroundSVGs />

    <Header y={0} />

    <div class="relative flex flex-col item-center justify-center max-w-[1400px] mx-auto px-4 w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl min-h-screen">
        {@render children()}
    </div>
</main>
