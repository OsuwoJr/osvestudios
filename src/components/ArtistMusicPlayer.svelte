<script lang="ts">
    export let track = { title: "Hit Song", artist: "Artist", src: "/track.mp3" };
</script>

<audio controls>
    <source src={track.src} type="audio/mpeg" />
</audio>
