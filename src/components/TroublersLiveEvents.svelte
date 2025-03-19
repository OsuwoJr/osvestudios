<script>
    let events = [
        { title: "VR Concert with MoJu Records", date: "April 20, 2025", link: "#" },
        { title: "Fan Cypher Battle", date: "May 5, 2025", link: "#" }
    ];
</script>

<section class="p-6 text-white">
    <h2 class="text-4xl font-bold text-center mb-6">🎤 Upcoming Events</h2>
    <ul>
        {#each events as event}
            <li class="mb-4">
                <span class="font-bold">{event.title}</span> - <span class="text-gray-400">{event.date}</span>
                <a href={event.link} class="text-[#81C14B] ml-2">Join Now</a>
            </li>
        {/each}
    </ul>
</section>
