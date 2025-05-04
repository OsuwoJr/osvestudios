<script lang="ts">
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import Hero from "../components/Hero.svelte";    
    import FeaturedArtists from "../components/FeaturedArtists.svelte";
    import LatestReleases from "../components/LatestReleases.svelte";
    import StreetTalent from "../components/StreetTalent.svelte";
  
    let featuredArtists = [
        { name: "OsuwoJr", img: "/OsuwoJr.png", href: "https://linktr.ee/osuwojr" },
        {name:"theKenyanTroublers", img:"/10.jpeg", href:"https://linktr.ee/thekenyantroublers"},
       
    ];
    
    let latestReleases = [
        { 
            title: "SAKA", 
            img: "/saka.png",
            spotify: "https://open.spotify.com/album/1ENsjj2JWxfqLBGmVnc6G6?si=e2mW_eA1Qg29swqrC3E2hw",
            boomplay: "https://www.boomplay.com/albums/109814902?",
            apple: "https://music.apple.com/us/album/saka-single/1810874242"
         },

        {
            title:"Plan-OsuwoJr",
            img:"/plan.jpg",
            spotify: "https://open.spotify.com/track/33BiJ3hVO7Ggea5NDQBMtJ?si=ca32e86f3aaf4479",
            boomplay: "https://www.boomplay.com/albums/102719268?",
            apple: "https://music.apple.com/us/album/plan-single/1783189938"
        },

        {
            title:"Troublers Arise Album-theKenyanTroublers", 
            img:"/forbidden2.png",
            spotify: "https://open.spotify.com/album/3s7ra6pxhU6qF8fYw8sr5l?si=UVzz_o_STtGoRJ9pL8Rc-Q",
            boomplay: "https://www.boomplay.com/albums/104748378?",
            apple: "https://music.apple.com/us/album/troublers-arise/1789614835",
        }
        
    ];
  </script>
  
  <main class="text-white min-h-screen">
      <Hero />      
      <FeaturedArtists {featuredArtists} />
      <LatestReleases {latestReleases} />
      <StreetTalent />
  </main>
  