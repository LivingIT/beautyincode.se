<script>
  import config from '../config';
  import '../styles/main.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Analytics from '$lib/fragments/analytics.svelte';
  import SkipLinks from '$lib/components/SkipLinks.svelte';
</script>

<svelte:head>
  <meta name="description" content={config.metaDescription} />
  <meta name="google-site-verification" content={config.googleSiteVerification} />
  <meta property="og.url" content={config.baseUrl} />
  <meta property="og:title" content={config.title} />
  <meta property="og:description" content={config.metaDescription} />
  <meta property="og:image" content={`${config.baseUrl}/${config.ogImage}`} />
  <meta name="twitter:title" content={config.title} />
  <meta name="twitter:description" content={config.metaDescription} />
  <meta property="twitter:image" content={`${config.baseUrl}/${config.ogImage}`} />

  <!-- Deployed: {config.deployTime} -->
  <meta name="deploy-time" content={config.deployTime} />
</svelte:head>

<SkipLinks href="#main-content" />

<Header />

<main id="main-content">
  <slot />
</main>

<Footer />

<Analytics />
