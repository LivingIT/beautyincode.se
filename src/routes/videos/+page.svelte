<script>
  import config from '../../config';
  import VideoList from '$lib/components/VideoList.svelte';
</script>

<svelte:head>
  <title>{config.title} - Videos</title>
</svelte:head>

<div class="landmark-content">
  <article>
    <h1>Videos</h1>

    <VideoList />
  </article>
</div>
