<script lang="ts">
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import Hero from "../components/Hero.svelte";    
    import StudioServices from "../components/StudioServices.svelte";
    import RecentProjects from "../components/RecentProjects.svelte";
    import StudioOverview from "../components/StudioOverview.svelte";
    import Testimonials from "../components/Testimonials.svelte";
  
    let services = [
        { 
            name: "Music Production", 
            icon: "fa-solid fa-sliders", 
            description: "Full-service music production with experienced producers to bring your vision to life."
        },
        { 
            name: "Recording", 
            icon: "fa-solid fa-microphone-alt", 
            description: "High-quality vocal and instrument recording in our acoustically-treated studio spaces."
        },
        { 
            name: "Mixing & Mastering", 
            icon: "fa-solid fa-volume-up", 
            description: "Professional audio mixing and mastering to give your tracks that polished, industry-standard sound."
        },
        { 
            name: "Songwriting", 
            icon: "fa-solid fa-pen-fancy", 
            description: "Professional songwriting and lyric development to create compelling, memorable songs."
        },
        { 
            name: "Music Video Production", 
            icon: "fa-solid fa-video", 
            description: "Professional music video production from concept to final edit."
        },
        { 
            name: "Artist Development", 
            icon: "fa-solid fa-user-graduate", 
            description: "Comprehensive artist development and coaching to elevate your career."
        },
        { 
            name: "Beat Licensing", 
            icon: "fa-solid fa-music", 
            description: "High-quality beats for licensing with flexible rights options."
        },
        { 
            name: "Podcast Production", 
            icon: "fa-solid fa-podcast", 
            description: "Complete podcast production services for content creators."
        }
    ];
    
    let projects = [
        { 
            title: "SAKA", 
            artist: "OsuwoJr",
            description: "Full production and mastering", 
            img: "/saka.png",
            link: "https://open.spotify.com/album/1ENsjj2JWxfqLBGmVnc6G6"
        },
        {
            title: "Plan",
            artist: "OsuwoJr",
            description: "Recording and production",
            img: "/plan.jpg",
            link: "https://open.spotify.com/track/33BiJ3hVO7Ggea5NDQBMtJ"
        },
        {
            title: "Troublers Arise",
            artist: "theKenyanTroublers",
            description: "Full album production",
            img: "/forbidden2.png",
            link: "https://open.spotify.com/album/3s7ra6pxhU6qF8fYw8sr5l"
        }
    ];

    let testimonials = [
        {
            name: "OsuwoJr",
            role: "Artist",
            quote: "Working with OSVE Studios was a game-changer for my music. Their attention to detail and professional approach helped take my sound to the next level.",
            img: "/OsuwoJr.png"
        },
        {
            name: "theKenyanTroublers",
            role: "Music Label",
            quote: "The team at OSVE Studios understood our vision from day one. The recording environment and equipment are top-notch!",
            img: "/10.jpeg"
        }
    ];
</script>
  
<main class="text-white min-h-screen">
    <Hero />  
    <StudioOverview />    
    <StudioServices {services} />
    <RecentProjects {projects} />
    <Testimonials {testimonials} />
</main>
  