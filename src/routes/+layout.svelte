<script lang="ts">
	import '../app.css';
	import Header from "../components/Header.svelte";
	let { children } = $props();
</script>


<main class="bg-[#000000] text-white relative z-[1]" data-sveltekit-preload-data="hover">

	<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
		<Header y={0} />
	    {@render children()}

	</div>
	
</main>



