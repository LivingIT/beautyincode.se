<script lang="ts">
  import VideoItem from './videoItem.svelte';
  import { videosByYear } from '$lib/data/videos';
  import ArticleToc from '../articleToc.svelte';

  const sortedYears: Array<string> = Object.keys(videosByYear).sort(
    (a, b) => Number(b) - Number(a),
  );
</script>

<ArticleToc items={sortedYears} />

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
