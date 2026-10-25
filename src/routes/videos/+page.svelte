<script lang="ts">
  import ArticleSection from '#lib/components/articleSection.svelte';
  import PageHead from '#lib/components/pageHead.svelte';
  import ParallaxSection from '#lib/components/parallaxSection.svelte';
  import VideoList from '#lib/components/videos/videoList.svelte';

  const pageTitle = 'Videos';
</script>

<PageHead {pageTitle} />

<ParallaxSection backgroundImage="/images/covers/videos.webp" isSemi>
  <h1>{pageTitle}</h1>
</ParallaxSection>

<ArticleSection>
  <VideoList />
</ArticleSection>
