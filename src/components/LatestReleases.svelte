<script lang="ts">
    export let latestReleases;
  </script>
  
  <section class="py-20 px-6 bg-[#111]">
      <h2 class="text-3xl font-bold text-center text-[#81C14B]">Latest Releases</h2>
      <div class="flex flex-wrap justify-center mt-8 gap-6">
          {#each latestReleases as release}
              <div class="w-40 h-40 bg-[#6A9A52] hover:bg-[#81C14B] rounded-lg p-2 text-center">
                  <img src={release.img} alt={release.title} class="w-full h-32 object-cover rounded-md" />
                  <p class="mt-2 py-5">{release.title}</p>
              </div>
          {/each}
      </div>
  </section>
  