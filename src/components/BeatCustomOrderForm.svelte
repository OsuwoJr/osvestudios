<script lang="ts">
    let name = "";
    let request = "";
</script>

<section class="custom-order">
    <h2>🛠️ Custom Beat Request</h2>
    <form>
        <input type="text" placeholder="Your Name" bind:value={name} required />
        <textarea placeholder="Describe your custom beat..." bind:value={request} required></textarea>
        <button type="submit">Submit Request</button>
    </form>
</section>
