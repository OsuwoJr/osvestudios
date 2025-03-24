<script>
    import HeroSection from "../../components/BlogHeroSection.svelte";
    import BlogGrid from "../../components/BlogGrid.svelte";
    import DarkModeToggle from "../../components/DarkModeToggle.svelte";
</script>

<main class="bg-black text-white min-h-screen">
    <HeroSection />
    <div id="articles-section">
        <BlogGrid />
    </div>
    
    <DarkModeToggle />
</main>
