<script lang="ts">
    import Microphone from "../lib/components/Microphone.svelte";
    import Piano from "../lib/components/Piano.svelte";
    import Guitar from "../lib/components/Guitar.svelte";
    import Drum from "../lib/components/Drum.svelte";
    import Trumpet from "../lib/components/Trumpet.svelte";
    import Violin from "../lib/components/Violin.svelte";
    import TrebleClef from "../lib/components/TrebleClef.svelte";
    import EighthNote from "../lib/components/EighthNote.svelte";
    import BeamedEighthNotes from "../lib/components/BeamedEighthNotes.svelte";

    const svgs = [
        { component: Microphone, size: "50", top: "10%", left: "5%" },
        { component: Piano, size: "60", top: "30%", left: "80%" },
        { component: Guitar, size: "70", top: "50%", left: "20%" },
        { component: Drum, size: "55", top: "75%", left: "65%" },
        { component: Trumpet, size: "50", top: "40%", left: "10%" },
        { component: Violin, size: "60", top: "85%", left: "30%" },
        { component: TrebleClef, size: "50", top: "20%", left: "50%" },
        { component: EighthNote, size: "40", top: "60%", left: "70%" },
        { component: BeamedEighthNotes, size: "50", top: "90%", left: "40%" }
    ];
</script>

<style>
    .floating {
        animation: float 6s ease-in-out infinite;
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
</style>

<div class="absolute inset-0 z-0 overflow-hidden">
    {#each svgs as { component: Icon, size, top, left }, i}
        <Icon
            class="absolute opacity-30 floating"
            width={size}
            height={size}
            style="top: {top}; left: {left}; animation-delay: {i * 0.5}s;"
        />
    {/each}
</div>
