<script>
  /** @type {Theme} */
  export let theme;

  /** @type {string} */
  export let heading = '';

  /** @type {string | null} */
  export let id = null;
</script>

<div class="content-block {theme}" id={id || null}>
  <div class="landmark-content">
    {#if heading}
      <h2>{heading}</h2>
    {/if}
    <slot />
  </div>
</div>

<style>
  .content-block {
    --vertical-padding: 4em;
    padding: var(--vertical-padding) 1em;
    margin-top: 0;
    background-color: hsl(0, 0%, 100%);
  }

  .content-block + .content-block {
    margin-top: 0;
  }

  /* Themes */
  .content-block.theme-1 {
    color: hsl(25, 83%, 56%);
    background-color: hsl(20, 10%, 18%);
  }

  .content-block.theme-2 {
    color: hsla(0, 0%, 100%, 0.8);
    background-color: hsl(153, 100%, 13%);
  }

  .content-block.theme-3 {
    color: hsl(20, 10%, 18%);
    background-color: hsl(30, 79%, 65%);
  }

  .content-block.theme-4 {
    background-color: hsl(32, 100%, 87%);
  }

  /* Hero theme */
  .content-block.theme-hero {
    --hero-offset: 0;
    position: relative;
    min-height: 24em;
    margin-top: calc(var(--hero-offset) * -1);
    overflow: hidden;
    color: hsl(0, 0%, 100%);
    background-color: hsl(0, 0%, 0%);
    background-image: url('/images/hero-2023-w942.jpg');
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: cover;
  }

  @media (min-width: 30em) {
    .content-block.theme-hero {
      --hero-offset: 5.2em;
      padding-top: calc(var(--vertical-padding) + var(--hero-offset));

      background-image: url('/images/hero-2023-w1400.jpg');
    }
  }

  /* Content block heading */
  .content-block h2 {
    font-size: 2em;
  }
</style>
