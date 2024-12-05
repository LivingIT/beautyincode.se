<script lang="ts">
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { eventUrl } from '$lib/config';

  import { navToggle } from '../../state/navToggle.svelte';

  const navItems = [
    { url: '/speakers/', label: 'Speakers' },
    { url: '/schedule/', label: 'Schedule' },
    { url: '/videos/', label: 'Videos' },
    {
      url: eventUrl,
      label: 'Tickets',
      isExternal: true,
    },
  ];

  // Close navigation when user navigates
  $effect(() => {
    $page;
    if (!navToggle.isWideViewport && browser) navToggle.isNavOpen = false;
  });
</script>

<nav class:collapsed={!navToggle.isNavOpen} class:js={browser}>
  <ul>
    <li class="logo">
      <a href="/">Beauty in Code</a>
    </li>
    {#each navItems as { url, label, isExternal }}
      <li>
        <a
          href={url}
          aria-current={$page.url.pathname == url ? 'page' : undefined}
          target={isExternal ? '_blank' : undefined}
        >
          {label}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: start;
    margin-block-start: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    justify-items: center;
    align-items: center;
  }

  li + li {
    align-self: start;
    overflow: hidden;
  }

  .collapsed {
    ul {
      gap: 0;
    }

    li + li {
      max-height: 0;
    }
  }

  :not(.logo) a {
    color: inherit;
    text-decoration: none;
    display: block;
    padding-block: 0.4rem calc(0.4rem - 4px);
    border-block-end: 4px solid transparent;
    transition: border-block-end-color ease-in-out 200ms;
  }

  :not(.logo) a:hover,
  :not(.logo) a:focus,
  :not(.logo) a:active,
  :not(.logo) [aria-current='page'] {
    border-block-end-color: var(--primary-brand-color);
  }

  .logo a {
    display: block;
    padding: 0;
    height: 3rem;
    width: 5rem;
    margin-inline: 1rem;
    border: 0;
    background-position: center;
    background-image: url('/images/logo-monochrome.svg');
    background-repeat: no-repeat;
    background-size: contain;
    text-indent: -200%;
    overflow: hidden;
  }

  .logo a:hover,
  .logo a:focus,
  .logo a:active {
    background-image: url('/images/logo.svg');
    border-block-end-color: transparent;
  }

  @media (min-width: 34em) {
    nav {
      align-items: center;
    }

    ul {
      grid-template-columns: repeat(5, 1fr);
    }

    li,
    li + li {
      align-self: center;
    }

    li:nth-child(2) {
      order: 1;
    }

    li:nth-child(3) {
      order: 2;
    }

    .logo {
      order: 3;
    }

    li:nth-child(4) {
      order: 4;
    }

    li:nth-child(5) {
      order: 5;
    }
  }
</style>
