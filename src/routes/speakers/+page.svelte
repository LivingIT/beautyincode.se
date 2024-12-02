<script lang="ts">
  import ArticleSection from '$lib/components/articleSection.svelte';
  import ParallaxSection from '$lib/components/parallaxSection.svelte';
  import SpeakersList from '$lib/components/speakers/speakersList.svelte';
</script>

<ParallaxSection backgroundImage="/images/covers/henney_4.webp" isSemi>
  <h1>Speakers</h1>
</ParallaxSection>

<ArticleSection>
  <SpeakersList />
</ArticleSection>
