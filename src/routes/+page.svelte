<script lang="ts">
    import Hero from "../components/Hero.svelte";
    import About from "../components/About.svelte";
    import FeaturedArtists from "../components/FeaturedArtists.svelte";
    import LatestReleases from "../components/LatestReleases.svelte";
    import StreetTalent from "../components/StreetTalent.svelte";
  
    let featuredArtists = [
        { name: "Artist 1", img: "/artist1.jpg" },
        { name: "Artist 2", img: "/artist2.jpg" },
        { name: "Artist 3", img: "/artist3.jpg" }
    ];
    
    let latestReleases = [
        { title: "Track 1", img: "/track1.jpg" },
        { title: "Track 2", img: "/track2.jpg" }
    ];
  </script>
  
  <main class="bg-black text-white min-h-screen">
      <Hero />
      <About />
      <FeaturedArtists {featuredArtists} />
      <LatestReleases {latestReleases} />
      <StreetTalent />
  </main>
  