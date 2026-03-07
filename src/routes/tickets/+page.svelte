<script lang="ts">
  import { eventUrl, ticketSalesClosed, title } from '$lib/config';

  import ArticleSection from '$lib/components/articleSection.svelte';
  import ParallaxSection from '$lib/components/parallaxSection.svelte';
  import ButtonCTA from '$lib/components/buttonCTA.svelte';

  const pageTitle = 'Tickets';
</script>

<svelte:head>
  <title>{pageTitle} - {title}</title>
</svelte:head>

<ParallaxSection backgroundImage="/images/covers/tickets.webp" isSemi={true}>
  <h1>Tickets for Beauty in Code 2026</h1>
</ParallaxSection>

<ArticleSection>
  <p>
    Beauty in Code aims to keep conference attendance accessible, with ticket prices reflecting only
    the actual per-attendee costs, including venue and catering.
  </p>

  <aside>
    {#if ticketSalesClosed}
      <p>Ticket sales have closed!</p>
    {:else}
      <ButtonCTA url={eventUrl} text="Get tickets now" />
    {/if}
  </aside>
</ArticleSection>

<style>
  aside {
    margin-block: 4rem;
    text-align: center;

    p {
      font-size: 2em;
    }
  }
</style>
