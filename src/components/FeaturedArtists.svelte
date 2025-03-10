<script lang="ts">
    export let featuredArtists;
  </script>
  
  <section class="py-20 px-6">
      <h2 class="text-3xl font-bold text-center text-[#81C14B]">Featured Artists</h2>
      <div class="flex flex-wrap justify-center mt-8 gap-6">
          {#each featuredArtists as artist}
              <div class="w-40 h-40 bg-[#6A9A52] hover:bg-[#81C14B] transition-all duration-300 rounded-lg p-2 text-center">
                  <img src={artist.img} alt={artist.name} class="w-full h-32 object-cover rounded-md" />
                  <p class="mt-2 py-5">{artist.name}</p>
              </div>
          {/each}
      </div>
  </section>
  