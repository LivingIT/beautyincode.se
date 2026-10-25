<script lang="ts">
  import { title } from '#lib/config.ts';

  interface Props {
    pageTitle?: string;
  }

  let { pageTitle }: Props = $props();

  const documentTitle = $derived(pageTitle ? `${pageTitle} - ${title}` : title);
</script>

<svelte:head>
  <title>{documentTitle}</title>
  <meta property="og:title" content={documentTitle} />
  <meta name="twitter:title" content={documentTitle} />
</svelte:head>
