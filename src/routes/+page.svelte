<script lang="ts">
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import Hero from "../components/Hero.svelte";    
    import FeaturedArtists from "../components/FeaturedArtists.svelte";
    import LatestReleases from "../components/LatestReleases.svelte";
    import StreetTalent from "../components/StreetTalent.svelte";
  
    let featuredArtists = [
        { name: "OsuwoJr", img: "/OsuwoJr.png" },
        {name:"theKenyanTroublers", img:"/10.jpeg" },
       
    ];
    
    let latestReleases = [
        { title: "Forbidden Abum-OsuwoJr", img: "/Forbidden.png" },
        {title:"Plan-OsuwoJr",img:"/plan.jpg"},
        {title:"Troublers Arise Album-theKenyanTroublers", img:"/forbidden2.png"}
        
    ];
  </script>
  
  <main class="text-white min-h-screen">
      <Hero />      
      <FeaturedArtists {featuredArtists} />
      <LatestReleases {latestReleases} />
      <StreetTalent />
  </main>
  