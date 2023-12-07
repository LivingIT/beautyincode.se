<script>
  import { page } from '$app/stores';
  // import config from '../../config';

  export let id = '';
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
