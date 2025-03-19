<script>
    let plans = [
        { name: "Fan Plan", price: "$5/month", benefits: ["Early Music Access", "Exclusive Content", "Private Forum"] },
        { name: "Artist Plan", price: "$15/month", benefits: ["Sell NFTs", "Feature on Blog", "Recording Priority"] },
        { name: "VIP Plan", price: "$50/month", benefits: ["Direct Artist Access", "Behind-the-Scenes", "Custom Beats"] }
    ];
</script>

<section class="p-6 text-white">
    <h2 class="text-4xl font-bold text-center mb-6">💳 Subscription Plans</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each plans as plan}
            <div class="bg-gray-800 p-6 rounded-lg text-center">
                <h3 class="text-2xl font-bold">{plan.name}</h3>
                <p class="text-lg text-[#81C14B] font-semibold">{plan.price}</p>
                <ul class="mt-4">
                    {#each plan.benefits as benefit}
                        <li>✅ {benefit}</li>
                    {/each}
                </ul>
                <button class="mt-4 px-6 py-2 bg-[#81C14B] hover:bg-[#6A9A52] rounded-lg">
                    Subscribe
                </button>
            </div>
        {/each}
    </div>
</section>
