<script lang="ts">
  import ArticleSection from '$lib/components/articleSection.svelte';
  import PageHead from '$lib/components/pageHead.svelte';
  import ParallaxSection from '$lib/components/parallaxSection.svelte';
  import SpeakersList from '$lib/components/speakers/speakersList.svelte';

  const pageTitle = 'Speakers';
</script>

<PageHead {pageTitle} />

<ParallaxSection backgroundImage="/images/covers/speakers.webp" isSemi>
  <h1>{pageTitle}</h1>
</ParallaxSection>

<ArticleSection>
  <SpeakersList />
</ArticleSection>
