<script lang="ts">
  import { title } from '$lib/config';

  // import ArticleSection from '$lib/components/articleSection.svelte';
  import ParallaxSection from '$lib/components/parallaxSection.svelte';

  const pageTitle = 'Tickets';
</script>

<svelte:head>
  <title>{pageTitle} - {title}</title>
</svelte:head>

<ParallaxSection backgroundImage="/images/covers/tickets.webp" isSemi={false}>
  <h1>Ticket sales for 2026 will open soon!</h1>
</ParallaxSection>

<!-- <ArticleSection> -->
<!--   <h2>Ticket sales have closed!</h2> -->
<!--   <p>See you all on Saturday!</p> -->
<!-- </ArticleSection> -->
