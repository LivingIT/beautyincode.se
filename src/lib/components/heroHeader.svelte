<script>
  import { eventUrl } from '$lib/config';

  import ButtonCTA from '$lib/components/buttonCTA.svelte';
</script>

<header class="hero-header">
  <h1><img src="/images/logo.svg" alt="Beauty in Code" /></h1>
  <p>March 1, 2025</p>
  <p>Malmö, Sweden</p>
  <ButtonCTA url={eventUrl} text="Get tickets now" />
</header>

<style>
  .hero-header {
    filter: drop-shadow(0 0 4px hsl(0 0 0 /0.4));
    background-color: hsl(0 0 0 /0.3);
    backdrop-filter: blur(0.6rem);
    text-shadow: 0 0 1px hsl(0 0 0 / 0.5);
    color: hsl(0 0 100);
    padding: 5vmax;
    min-height: 5rem;
    max-width: 90vw;
    text-align: center;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
  }

  @media (min-width: 40em) {
    .hero-header {
      padding: 5rem;
    }

    p {
      font-size: 2rem;
    }
  }
</style>
