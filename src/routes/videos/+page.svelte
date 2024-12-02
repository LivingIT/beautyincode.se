<script lang="ts">
  import ArticleSection from '$lib/components/articleSection.svelte';
  import ParallaxSection from '$lib/components/parallaxSection.svelte';
  import VideoList from '$lib/components/videos/videoList.svelte';
</script>

<ParallaxSection backgroundImage="/images/covers/mingel_10.webp" isSemi>
  <h1>Videos</h1>
</ParallaxSection>

<ArticleSection>
  <VideoList />
</ArticleSection>
