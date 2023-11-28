<script>
  import VideoItem from './VideoItem.svelte';
  import { videosByYear } from '$lib/data/videos';

  /**
   * @type {Array<string>} - An array of sorted years in descending order.
   */
  const sortedYears = Object.keys(videosByYear).sort((a, b) => Number(b) - Number(a));
</script>

<ul class="article-toc">
  {#each sortedYears as year}
    <li><a href="#y{year}">{year}</a></li>
  {/each}
</ul>

{#each sortedYears as year}
  {#if videosByYear[year].length > 0}
    <h2 id="y{year}">{year}</h2>
    <ul class="videos">
      {#each videosByYear[year] as video}
        <VideoItem {video} />
      {/each}
    </ul>
  {/if}
{/each}

<style>
  .videos {
    margin-left: 0;
  }
</style>
