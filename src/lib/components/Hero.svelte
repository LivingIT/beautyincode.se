<script>
  import CountDown from '$lib/components/CountDown.svelte';
  import CallToAction from './CallToAction.svelte';
</script>

<div class="hero">
  <div class="hero__message">
    <p class="hero__time-date">March 2, 2024 — Malmö, Sweden</p>
    <CountDown endDate="2024/03/02 09:00:00" />
    <CallToAction
      text="Register now"
      url="https://events.magnetevents.com/Event/beauty-in-code-2024-56171/"
    />
    <p class="hero__price-tag">550 SEK <span class="hero__price-tag-vat">including VAT</span></p>
  </div>
</div>

<style>
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    text-shadow: 0 -1px 0 hsla(0, 0%, 0%, 0.9);
    text-transform: uppercase;
  }

  .hero__message {
    padding: 1rem;
    text-align: center;
  }

  .hero__time-date {
    font-size: calc(1em + 1vw);
    font-weight: bold;
  }

  .hero__price-tag {
    position: absolute;
    top: -2.8em;
    right: -5.9em;
    padding: 3em 5em 0.3em;
    font-size: 1.2em;
    font-weight: bold;
    line-height: 1;
    background-color: hsl(25, 83%, 56%);
    transform: rotate(45deg);
  }

  .hero__price-tag-vat {
    display: block;
    font-size: 0.5em;
    font-weight: normal;
  }

  @media (min-width: 30em) {
    .hero__price-tag {
      top: 0.9em;
      font-size: 1.4em;
    }
  }

  @media (min-width: 50em) {
    .hero__price-tag {
      top: 0;
      font-size: 1.8em;
    }
  }
</style>
