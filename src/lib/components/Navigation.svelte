<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';

  import Icon from './Icon.svelte';

  const navItems = [
    { text: 'Home', url: '/' },
    { text: 'Speakers', url: '/speakers/' },
    { text: 'Videos', url: '/videos/' }
  ];

  /** @type {Boolean} */
  let isNavExpanded = false;

  /** @type {Boolean | undefined} */
  let ariaHidden;

  /** @type {HTMLElement} */
  let navTriggerElem;

  /**
   * Do not set aria-hidden on SSR or above 40em viewport
   */
  const updateAriaHidden = () => {
    const isHorizontalNav = browser && window.matchMedia('(min-width: 40em)').matches;
    ariaHidden = browser && !isHorizontalNav ? !isNavExpanded : undefined;
  };

  function toggleNav() {
    isNavExpanded = !isNavExpanded;
  }

  /**
   * Listen for tab input. If focus is outside mainNavElem, close it.
   *
   * @param {KeyboardEvent} e
   */
  const handleKeyUp = (e) => {
    if (e.code === 'Tab') {
      const mainNavElem = document.getElementById('main-nav');
      if (!mainNavElem?.contains(document.activeElement)) {
        isNavExpanded = false;
      }
    }
  };

  onMount(() => {
    updateAriaHidden();
    document.addEventListener('keyup', handleKeyUp);
    window.addEventListener('resize', updateAriaHidden);
  });

  $: {
    $page; // reactive statement that runs on route change
    isNavExpanded = false; // close nav when the route changes
  }

  $: updateAriaHidden();
</script>

<nav
  id="main-nav"
  class="main-nav"
  class:main-nav--js={browser}
  aria-label="Main"
  data-expanded={isNavExpanded}
>
  {#if browser}
    <button
      type="button"
      class="main-nav__trigger"
      id="main-nav-trigger"
      aria-controls="main-nav"
      aria-expanded={isNavExpanded}
      aria-label="Menu: open main navigation"
      on:click={toggleNav}
      bind:this={navTriggerElem}
    >
      <Icon href="menu" />
      <span>Menu</span>
    </button>
  {/if}
  <ul class="nav" aria-hidden={ariaHidden}>
    {#each navItems as { text, url }}
      <li class="nav__item"><a href={url} tabindex={isNavExpanded ? 0 : -1}>{text}</a></li>
    {/each}
  </ul>
</nav>

<style>
  @media screen {
    .main-nav {
      margin-top: 0;
    }

    .main-nav--js {
      --nav-width: 12em;

      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: var(--nav-width);
      padding: 1em;
      background-color: hsla(20, 10%, 18%, 1);
      transition:
        right 200ms ease-in-out,
        filter 200ms ease-in-out;
    }

    .main-nav--js[data-expanded='true'] {
      filter: drop-shadow(0 0 0.5em hsla(0, 0%, 0%, 0.5));
    }

    .main-nav--js[data-expanded='false'] {
      right: calc(var(--nav-width) * -1);
    }

    .main-nav__trigger {
      --width: 5.2em;

      position: absolute;
      top: 1em;
      left: calc((var(--width) - 0.2em) * -1);
      display: flex;
      align-items: center;
      padding: 0.5em 1em 0.5em 0.5em;
      margin-top: 0;
      font-size: 1.12em;
      color: inherit;
      cursor: pointer;
      background: var(--secondary-brand-color);
      border: 0;
    }

    .main-nav__trigger span {
      margin-block-start: 0;
      margin-inline-start: 0.25em;
    }

    /* Navigation list */
    .nav {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin-top: 0;
      font-weight: bold;
      text-align: right;
      text-transform: uppercase;
    }

    .nav__item a {
      display: block;
      padding: 0.25em 0;
      text-decoration: none;
    }

    .nav__item a:hover,
    .nav__item a:active {
      text-decoration: underline;
    }

    @media (min-width: 40em) {
      .main-nav--js {
        --nav-width: unset;

        position: static;
      }

      .main-nav--js[data-expanded] {
        filter: none;
      }

      .main-nav__trigger {
        display: none;
      }

      .nav {
        flex-direction: row;
      }

      .nav__item a {
        padding: 0;
      }

      .nav__item + .nav__item {
        margin-left: 1em;
      }
    }
  }
</style>
