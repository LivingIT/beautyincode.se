<script lang="ts">
  import { title } from '$lib/config';

  // import ArticleSection from '$lib/components/articleSection.svelte';
  import ParallaxSection from '$lib/components/parallaxSection.svelte';

  const pageTitle = 'Tickets';
</script>

<svelte:head>
  <title>{pageTitle} - {title}</title>
</svelte:head>

<ParallaxSection backgroundImage="/images/covers/mingel_9.webp" isSemi={false}>
  <h1>Ticket sales have closed!</h1>
</ParallaxSection>

<!-- <ArticleSection> -->
<!--   <h2>Ticket sales have closed!</h2> -->
<!--   <p>See you all on Saturday!</p> -->
<!-- </ArticleSection> -->
