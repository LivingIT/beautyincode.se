<script lang="ts">
  import ArticleSection from '#lib/components/articleSection.svelte';
  import PageHead from '#lib/components/pageHead.svelte';
  import ParallaxSection from '#lib/components/parallaxSection.svelte';
  import Schedule from '#lib/components/schedule.svelte';

  const pageTitle = 'Schedule';
</script>

<PageHead {pageTitle} />

<ParallaxSection backgroundImage="/images/covers/schedule.webp" isSemi>
  <h1>{pageTitle}</h1>
</ParallaxSection>

<ArticleSection>
  <Schedule />
</ArticleSection>
