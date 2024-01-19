<script>
  import { page } from '$app/stores';
  import config from '../../config';

  import Navigation from './Navigation.svelte';
</script>

<header class="header" id="header">
  <div class="header__landmark landmark-content">
    <div class="header__logo">
      <a href="/">
        {#if $page.url.pathname === '/'}
          <h1 class="at-only">{config.title}</h1>
        {:else}
          <p class="at-only">{config.title}</p>
        {/if}
        <img class="header__logo-icon" src="/images/logo.svg" alt="" />
      </a>
    </div>

    <Navigation />
  </div>
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 2;
    padding: 0.5em 1em;
    color: hsl(0, 0%, 100%);
    background-color: var(--secondary-brand-color);
    margin-block-start: 0;
  }

  .header__landmark {
    display: flex;
    align-items: center;
  }

  .header__logo {
    margin-right: auto;
  }

  .header__logo-icon {
    width: 6rem;
    height: 4rem;
    margin-top: 0;
  }
</style>
