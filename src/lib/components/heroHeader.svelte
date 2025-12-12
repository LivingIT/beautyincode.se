<script>
  // import { eventUrl } from '$lib/config';
  // import ButtonCTA from '$lib/components/buttonCTA.svelte';
</script>

<header class="hero-header">
  <h1><img src="/images/logo.svg" alt="Beauty in Code" /></h1>
  <div>
    <p>March 7, 2026</p>
    <p>Malmö, Sweden</p>
    <!--
    <ButtonCTA url={eventUrl} text="Get tickets now" />
    <p class="notabene"><small>Ticket sales close on March 4</small></p>
    -->
  </div>
</header>

<style>
  .hero-header {
    filter: drop-shadow(0 0 4px hsl(0deg 0% 0% /0.4));
    background-color: hsl(0deg 0% 0% /0.8);
    text-shadow: 0 0 1px hsl(0deg 0% 0% / 0.5);
    color: hsl(0deg 0% 100%);
    padding: 5vmax;
    max-height: 80vh;
    max-width: 90vw;
    text-align: center;
  }

  @supports (backdrop-filter: blur(1rem)) {
    .hero-header {
      background-color: hsl(0deg 0% 0% /0.3);
      backdrop-filter: blur(0.6rem);
    }

    @media (orientation: landscape) and (max-width: 62.5em) {
      .hero-header {
        display: grid;
        gap: 2rem;
        grid-template-columns: 1fr 1fr;
      }
    }

    h1 {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
  }

  /*
  .notabene {
    margin-block-start: 2rem;
    font-style: italic;

    small {
      font-size: max(min(0.5vw, 0.5em), 1rem);
    }
  }
  */

  @media (min-width: 56em) {
    .hero-header {
      padding: 5rem;
    }

    p {
      font-size: 2rem;
    }
  }
</style>
