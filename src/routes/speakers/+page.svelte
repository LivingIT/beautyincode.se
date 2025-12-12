<script lang="ts">
  import { title } from '$lib/config';

  import ArticleSection from '$lib/components/articleSection.svelte';
  import ParallaxSection from '$lib/components/parallaxSection.svelte';
  import SpeakersList from '$lib/components/speakers/speakersList.svelte';

  const pageTitle = 'Speakers';
</script>

<svelte:head>
  <title>{pageTitle} - {title}</title>
</svelte:head>

<ParallaxSection backgroundImage="/images/covers/speakers.webp" isSemi>
  <h1>{pageTitle}</h1>
</ParallaxSection>

<ArticleSection>
  <SpeakersList />
</ArticleSection>
