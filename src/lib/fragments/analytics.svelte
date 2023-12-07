<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  /**
   * Global gtag function.
   * @type {Gtag.Gtag}
   */
  let gtag;

  onMount(() => {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-BXEPCBVDFX', {
        page_title: document.title,
        page_path: $page.url.pathname
      });
    }
  });
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-BXEPCBVDFX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-BXEPCBVDFX');
  </script>
</svelte:head>
