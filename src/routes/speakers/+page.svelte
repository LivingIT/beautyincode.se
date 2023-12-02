<script>
  import SpeakersList from '$lib/components/SpeakersList.svelte';
  import config from '../../config';
</script>

<svelte:head>
  <title>Speakers - {config.title}</title>
</svelte:head>

<div class="landmark-content">
  <article>
    <h1>Speakers</h1>
    <SpeakersList />
  </article>
</div>
