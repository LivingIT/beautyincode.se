<script>
  /** @type {string} */
  export let url;

  /** @type {string} */
  export let text;

  /**
   * send a click event to Google Analytics.
   * @param {MouseEvent} event - The mouse event
   */
  const trackClick = () => {
    gtag('event', 'click', {
      event_category: 'cta_click',
      event_label: url,
      value: 1,
    });
  };
</script>

<a href={url} on:click={trackClick}>{text}</a>

<style>
  a {
    display: inline-block;
    padding: 1em 2em;
    font-size: calc(0.8em + 1vw);
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--light-text-color);
    background-color: var(--primary-brand-color);
    border-radius: 50em;
    transition: transform 500ms;
  }

  a:hover,
  a:focus {
    transform: scale(1.1);
  }
</style>
