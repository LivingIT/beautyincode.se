<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  /** @type {string} */
  export let id = '';

  /**
   * Global gtag function.
   * @type {Gtag.Gtag}
   */
  let gtag;

  onMount(() => {
    if (typeof gtag !== 'undefined') {
      gtag('config', id, {
        page_title: document.title,
        page_path: $page.url.pathname
      });
    }
  });
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id={id}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', id);
  </script>
</svelte:head>
