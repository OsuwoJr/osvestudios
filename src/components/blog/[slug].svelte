<script lang="ts">
    import { onMount } from "svelte";
    import CommentSection from "../../components/BlogCommentSection.svelte";
    import AIQuickSummary from "../../components/BlogAIQuickSummary.svelte";
    export let params;

    let title = "";
    let content = "";
    let videoURL = "";

    // Simulated blog content fetch
    onMount(() => {
        if (params.slug === "music-marketing-2025") {
            title = "How to Market Your Music in 2025";
            content = "Music marketing strategies for 2025...";
            videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ";
        }
    });
</script>

<section class="p-6 text-white max-w-4xl mx-auto">
    <h1 class="text-5xl font-bold">{title}</h1>

    <AIQuickSummary content={content} />

    <div class="mt-6">
        <h2 class="text-2xl font-semibold">🎥 Watch & Learn</h2>
        <iframe width="100%" height="400" src={videoURL} frameborder="0" allowfullscreen class="rounded-lg" title="Video tutorial on {title}"></iframe>
    </div>

    <article class="mt-6 text-lg leading-relaxed">
        {@html content}
    </article>

    <CommentSection />
</section>
