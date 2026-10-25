<script lang="ts">
  import '../styles/main.css';

  import type { Snippet } from 'svelte';

  import { page } from '$app/state';

  import {
    metaDescription,
    googleSiteVerification,
    baseUrl,
    title,
    ogImage,
    deployTime,
  } from '$lib/config';

  import Analytics from '$lib/components/analytics.svelte';
  import Footer from '$lib/components/footer/footer.svelte';
  import Header from '$lib/components/header/header.svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={metaDescription} />
  <meta name="google-site-verification" content={googleSiteVerification} />
  <meta property="og:url" content={`${baseUrl}${page.url.pathname}`} />
  <meta property="og:type" content="website" />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:image" content={`${baseUrl}/${ogImage}`} />
  <meta name="twitter:description" content={metaDescription} />
  <meta name="twitter:image" content={`${baseUrl}/${ogImage}`} />

  {@html `<!-- Deployed: ${deployTime} -->`}
  <meta name="deploy-time" content={deployTime} />
</svelte:head>

<Header />

<main id="main-content">
  {@render children()}
</main>

<Footer />

<Analytics />
