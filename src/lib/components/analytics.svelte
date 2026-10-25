<script lang="ts">
  import { page } from '$app/state';

  import { googleAnalyticsId } from '#lib/config.ts';

  $effect(() => {
    if (typeof gtag !== 'undefined') {
      gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_path: page.url.pathname,
      });
    }
  });
</script>

<svelte:head>
  {#if googleAnalyticsId}
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}>
    </script>
    <script data-id={googleAnalyticsId}>
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }

      gtag('js', new Date());
      gtag('config', document.currentScript.dataset.id);
    </script>
  {/if}
</svelte:head>
