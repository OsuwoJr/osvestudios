<script lang="ts">
    import Hero from "../components/Hero.svelte";
    import About from "../components/About.svelte";
    import FeaturedArtists from "../components/FeaturedArtists.svelte";
    import LatestReleases from "../components/LatestReleases.svelte";
    import StreetTalent from "../components/StreetTalent.svelte";
  
    let featuredArtists = [
        { name: "OsuwoJr", img: "/OsuwoJr.png" },
       
    ];
    
    let latestReleases = [
        { title: "Forbidden", img: "/Forbidden.png" },
        
    ];
  </script>
  
  <main class="bg-black text-white min-h-screen">
      <Hero />
      <About />
      <FeaturedArtists {featuredArtists} />
      <LatestReleases {latestReleases} />
      <StreetTalent />
  </main>
  