<script lang="ts">
  import Footer from '$lib/components/footer_.svelte';
  import Header from '$lib/components/header_.svelte';
  import {
    metaDescription,
    googleSiteVerification,
    baseUrl,
    title,
    ogImage,
    deployTime,
  } from '$lib/config';
  import '../styles/main.css';
</script>

<svelte:head>
  <meta name="description" content={metaDescription} />
  <meta name="google-site-verification" content={googleSiteVerification} />
  <meta property="og.url" content={baseUrl} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:image" content={`${baseUrl}/${ogImage}`} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={metaDescription} />
  <meta property="twitter:image" content={`${baseUrl}/${ogImage}`} />

  <!-- Deployed: {deployTime} -->
  <meta name="deploy-time" content={deployTime} />
</svelte:head>

<Header />

<main id="main-content">
  <slot />
</main>

<Footer />
