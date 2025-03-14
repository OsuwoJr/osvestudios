<script lang="ts">
    export let track = { title: "Hit Song", artist: "Artist", src: "/1. ONE DAY.wav" };
</script>

<audio controls>
    <source src={track.src} type="audio/mpeg" />
</audio>
