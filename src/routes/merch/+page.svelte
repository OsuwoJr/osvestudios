<script lang="ts">
    import HeroSection from "../../components/MerchHeroSection.svelte";
    import ShopCatalog from "../../components/MerchShopCatalog.svelte";
    import NFTMarketplace from "../../components/MerchNFTMarketplace.svelte";
    
    // Nav state
    let activeTab = "physical";
</script>

<main class="bg-black text-white min-h-screen">
    <HeroSection />
    
    <!-- Navigation Tabs -->
    <div class="relative z-10 flex justify-center px-4 py-6 border-b border-[#81C14B]/30">
        <div class="inline-flex rounded-lg bg-black/50 p-1 border border-[#81C14B]/50 shadow-[0_0_15px_#81C14B]/20">
            <button 
                class="{activeTab === 'physical' ? 'bg-[#81C14B] text-black font-bold' : 'bg-transparent text-[#81C14B]'} px-6 py-2 rounded-lg transition-all duration-300"
                on:click={() => activeTab = 'physical'}>
                👕 Physical Merch
            </button>
            <button 
                class="{activeTab === 'nft' ? 'bg-purple-600 text-white font-bold' : 'bg-transparent text-purple-400'} px-6 py-2 rounded-lg transition-all duration-300"
                on:click={() => activeTab = 'nft'}>
                🎨 NFT Collection
            </button>
        </div>
    </div>
    
    <!-- Conditional Content Based on Tab -->
    {#if activeTab === 'physical'}
        <ShopCatalog />
    {:else if activeTab === 'nft'}
        <NFTMarketplace />
    {/if}
    
    <!-- Footer -->
    <footer class="p-8 text-center text-gray-400 border-t border-[#81C14B]/30">
        <p class="max-w-2xl mx-auto">All merchandise is officially licensed by theKenyanTroublers. 
        Limited quantities available. Physical items ship within Kenya and internationally.</p>
        <p class="mt-4">&copy; {new Date().getFullYear()} theKenyanTroublers. All rights reserved.</p>
    </footer>
</main>

<style>
    /* Add any additional styles here */
</style>
