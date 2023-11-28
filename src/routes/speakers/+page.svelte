<script>
  import SpeakersList from '$lib/components/SpeakersList.svelte';
  import config from '../../config';
</script>

<svelte:head>
  <title>{config.title} - Speakers</title>
</svelte:head>

<div class="landmark-content">
  <article>
    <h1>Speakers</h1>
    <SpeakersList />
  </article>
</div>
