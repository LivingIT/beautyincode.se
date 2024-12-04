<script lang="ts">
  import { browser } from '$app/environment';
  import { navToggle } from '../../../state/navToggle.svelte';

  import HeaderToggle from './headerToggle.svelte';
  import MainNav from '../mainNav.svelte';
</script>

<header class:expanded={navToggle.isNavOpen && !navToggle.isWideViewport} class:js={browser}>
  <MainNav />
  {#if !navToggle.isWideViewport}
    <HeaderToggle />
  {/if}
</header>

<style>
  header {
    position: sticky;
    inset-block-start: 0;
    background-color: hsl(0 0 0 / 0.6);
    backdrop-filter: blur(1rem);
    color: hsl(0 0 100);
    padding: 1rem;
    min-height: 5rem;
    margin-block-end: -7rem;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-content: center;
    z-index: 1;
  }

  .expanded.js {
    position: fixed;
    inset-inline: 0;
    inset-block-start: 0;
    height: 100dvh;
    z-index: 10;
  }

  @media (min-width: 34em) {
    .expanded {
      position: static;
    }
  }
</style>
