<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  import Icon from './Icon.svelte';

  /** @type {Boolean} */
  let isNavExpanded = false;

  /** @type {HTMLElement} */
  let navTriggerElem;

  onMount(() => {
    document.addEventListener('keyup', handleKeyUp);
  });

  $: {
    $page; // reactive statement that runs on route change
    isNavExpanded = false; // close nav when the route changes
  }

  function toggleNav() {
    isNavExpanded = !isNavExpanded;
  }

  /** @param {KeyboardEvent} e */
  const handleKeyUp = (e) => {
    if (e.code === 'Tab' && !navTriggerElem.contains(document.activeElement)) {
      isNavExpanded = false;
    }
  };
</script>

<nav id="main-nav" aria-label="Main" data-expanded={isNavExpanded}>
  <button
    type="button"
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
  <ul class="nav" aria-hidden={!isNavExpanded}>
    <li class="nav__item"><a href="/">Home</a></li>
    <li class="nav__item"><a href="/speakers/">Speakers</a></li>
    <li class="nav__item"><a href="/videos/">Videos</a></li>
  </ul>
</nav>

<style>
  #main-nav {
    margin-top: 0;
  }

  #main-nav {
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

  #main-nav[data-expanded='true'] {
    filter: drop-shadow(0 0 0.5em hsla(0, 0%, 0%, 0.5));
  }

  #main-nav[data-expanded='false'] {
    right: calc(var(--nav-width) * -1);
  }

  /* Main navigation trigger */
  #main-nav-trigger {
    display: none;
  }

  #main-nav-trigger {
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

    background: hsl(20, 10%, 18%);
    border: 0;
  }

  #main-nav-trigger span {
    margin-inline-start: 0.25em;
    margin-top: 0;
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
    #main-nav {
      --nav-width: unset;

      position: static;
    }

    #main-nav[data-expanded] {
      filter: none;
    }

    #main-nav-trigger {
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
</style>
