<script lang="ts">
  import { page } from '$app/stores';
  import config from '../../config';

  $: {
    if (typeof gtag !== 'undefined') {
      gtag('config', config.analytics, {
        page_title: document.title,
        page_path: $page.url.pathname
      });
    }
  }
</script>

<svelte:head>
  {@html `<script async src="https://www.googletagmanager.com/gtag/js?id=${config.analytics}"}>
  </script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', ${config.analytics});
  </script>`}
</svelte:head>
