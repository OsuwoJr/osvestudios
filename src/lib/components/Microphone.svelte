<script lang="ts">
	// You can optionally define default properties if needed.
	export let width = "40";
	export let height = "40";
</script>

<svg 
	{...$$props} 
	width={width} 
	height={height} 
	viewBox="0 0 24 24"
>
	<path d="M12 2C10.9 2 10 2.9 10 4V12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12V4C14 2.9 13.1 2 12 2ZM19 11V10H17V11C17 13.8 14.8 16 12 16C9.2 16 7 13.8 7 11V10H5V11C5 14.1 7.1 16.8 10 17.7V20H8V22H16V20H14V17.7C16.9 16.8 19 14.1 19 11Z"/>
</svg>
