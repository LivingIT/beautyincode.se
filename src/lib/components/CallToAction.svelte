<script>
  /** @type {string} */
  export let url;

  /** @type {string} */
  export let text;
</script>

<a href={url}>{text}</a>

<style>
  a {
    display: inline-block;
    padding: 1em 2em;
    font-size: calc(0.8em + 1vw);
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    background-color: hsl(25, 83%, 56%);
    border-radius: 50em;
    transition: transform 500ms;
  }

  a:hover,
  a:focus {
    transform: scale(1.1);
  }

  /* TODO keep this?
  a.cta__secondary {
    padding: 0.75em 1.75em;
    font-size: 1.4em;
    color: hsl(0, 0%, 100%);
    background-color: hsl(20, 10%, 18%);
  }
  */
</style>
