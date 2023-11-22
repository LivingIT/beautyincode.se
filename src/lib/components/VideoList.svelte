<script>
  import VideoItem from './VideoItem.svelte';
  import { videosByYear } from '$lib/data/videos';
</script>

<ul class="article-toc">
  {#each Object.keys(videosByYear) as year}
    <li><a href="#y{year}">{year}</a></li>
  {/each}
</ul>

{#each Object.entries(videosByYear) as [year, videos]}
  <h2 id="y{year}">{year}</h2>
  <ul class="videos">
    {#each videos as video}
      <VideoItem {video} />
    {/each}
  </ul>
{/each}

<style>
  .videos {
    margin-left: 0;
  }
</style>
