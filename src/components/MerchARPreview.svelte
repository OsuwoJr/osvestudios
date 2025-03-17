<script>
    let modelURL = "/3d-hoodie.glb";  // 3D Model File
</script>

<section class="p-6 text-center">
    <h2 class="text-4xl text-white">🕶️ Try Before You Buy</h2>
    <model-viewer src={modelURL} ar camera-controls auto-rotate class="w-full h-96"></model-viewer>
</section>

<!-- Include the Web Component -->
<script type="module" src="https://unpkg.com/@google/model-viewer"></script>
