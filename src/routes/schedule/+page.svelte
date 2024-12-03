<script lang="ts">
  import { title } from '$lib/config';

  import ArticleSection from '$lib/components/articleSection.svelte';
  import ParallaxSection from '$lib/components/parallaxSection.svelte';

  const pageTitle = 'Schedule';
</script>

<svelte:head>
  <title>{pageTitle} - {title}</title>
</svelte:head>

<ParallaxSection backgroundImage="/images/covers/mingel_49.webp" isSemi>
  <h1>{pageTitle}</h1>
</ParallaxSection>

<ArticleSection>
  <p>We will release the schedule for 2025 soon, so be sure to check back!</p>
</ArticleSection>
