<script>
  import config from '../config';
  import '../styles/main.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <meta name="description" content={config.metaDescription} />
  <meta name="google-site-verification" content={config.googleSiteVerification} />
  <meta property="og.url" content={config.baseUrl} />
  <meta property="og:title" content={config.title} />
  <meta property="og:description" content={config.metaDescription} />
  <meta property="og:image" content={`${config.baseUrl}/${config.ogImage}`} />
  <meta property="og:image.url" content={`${config.baseUrl}/${config.ogImage}`} />
  <meta property="twitter:image" content={`${config.baseUrl}/${config.ogImage}`} />
</svelte:head>

<Header />

<main id="main-content">
  <slot />
</main>

<Footer />
