<script lang="ts">
    // Define the post object structure
    export let post: {
        title: string;
        image: string;
        link: string;
        excerpt: string;
        date: string;
        author: string;
        authorImage: string;
        readTime: string;
        category: string;
        tags: string[];
    };
    
    // Optionally highlight featured posts
    export let featured = false;
</script>

<a href={post.link} class="block h-full">
    <article class={`relative overflow-hidden rounded-xl transition-all duration-300 flex flex-col h-full bg-black/20 border border-gray-800 hover:border-[#81C14B]/50 hover:shadow-[0_0_20px_#81C14B]/10 ${featured ? 'scale-[1.02]' : ''}`}>
        <!-- Image Container -->
        <div class="relative aspect-[16/9] overflow-hidden">
            <img 
                src={post.image} 
                alt={post.title} 
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                loading="lazy"
            />
            
            <!-- Category Badge -->
            <div class="absolute top-0 right-0 m-3">
                <span class="px-3 py-1 bg-[#81C14B] text-black text-xs font-bold rounded-full">
                    {post.category}
                </span>
            </div>
            
            <!-- Featured Badge -->
            {#if featured}
                <div class="absolute top-0 left-0 m-3">
                    <span class="px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-black text-xs font-bold rounded-full flex items-center">
                        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Featured
                    </span>
                </div>
            {/if}
        </div>
        
        <!-- Content -->
        <div class="p-5 flex flex-col flex-grow">
            <h3 class="text-xl font-bold mb-2 text-white">{post.title}</h3>
            <p class="text-gray-400 text-sm mb-4 flex-grow">{post.excerpt}</p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
                {#each post.tags as tag}
                    <span class="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-md hover:bg-[#81C14B]/20 transition-colors">
                        #{tag}
                    </span>
                {/each}
            </div>
            
            <!-- Author & Meta Info -->
            <div class="flex items-center justify-between mt-auto">
                <div class="flex items-center">
                    <img src={post.authorImage} alt={post.author} class="w-8 h-8 rounded-full mr-2" />
                    <span class="text-sm text-gray-400">{post.author}</span>
                </div>
                <div class="flex items-center space-x-2 text-xs text-gray-500">
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTime}
                    </span>
                </div>
            </div>
        </div>
    </article>
</a>

<style>
    /* Additional styling if needed */
</style> 