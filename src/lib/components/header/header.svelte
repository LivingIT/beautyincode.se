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
    background-color: hsl(0deg 0% 0% / 0.8);
    color: hsl(0deg 0% 100%);
    padding: 1rem;
    min-height: 5rem;
    margin-block-end: -7rem;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-content: center;
    z-index: 1;

    transition: background-color 200ms ease-in-out;
  }

  @supports (backdrop-filter: blur(1rem)) {
    header {
      background-color: hsl(0deg 0% 0% / 0.6);
      backdrop-filter: blur(1rem);
    }
  }

  .expanded {
    position: static;
  }

  .expanded.js {
    background-color: hsl(0deg 0% 0% / 0.9);
    position: fixed;
    inset-inline: 0;
    inset-block-start: 0;
    height: 100dvh;
    z-index: 10;
  }
</style>
