<script lang="ts">
  import { navToggle } from '../../state/navToggle.svelte';
  let isMenuOpen = $state(false);

  function toggleIcon() {
    isMenuOpen = !isMenuOpen;
    console.log(isMenuOpen);
    navToggle.isNavOpen = isMenuOpen;
  }
</script>

<button aria-label="Show main navigation" onclick={() => toggleIcon()}>
  <svg
    width="30"
    height="30"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    class:is-open={isMenuOpen}
  >
    <path stroke-width="2" d="M4 8 L26 8"></path>
    <path stroke-width="2" d="M4 15 L26 15"></path>
    <path stroke-width="2" d="M4 22 L26 22"></path>
  </svg>
</button>

<style>
  button {
    border: 0;
    background-color: transparent;
    font: inherit;
    color: currentColor;
    position: absolute;
    inset-block-start: 1.5rem;
    inset-inline-end: 1rem;
    margin-block-start: 0;
  }

  svg {
    fill: currentColor;
    stroke: currentColor;
    height: 2rem;
    width: 2rem;
  }

  svg path {
    transform-origin: 50% 8px;
    transition:
      stroke 0.3s ease-in-out,
      fill 0.3s ease-in-out;
  }
  svg path:nth-of-type(1) {
    animation: hamburgerTopReset 300ms ease-in-out forwards;
  }
  svg path:nth-of-type(2) {
    transform-origin: 50% 15px;
    animation: hamburgerMiddleReset 300ms ease-in-out forwards;
  }
  svg path:nth-of-type(3) {
    transform-origin: 50% 22px;
    animation: hamburgerBottomReset 300ms ease-in-out forwards;
  }

  /* Hamburger turns into X, i.e. menu open */
  .is-open path:nth-of-type(1) {
    animation: hamburgerTopDeform 300ms ease-in-out forwards;
  }
  .is-open path:nth-of-type(2) {
    animation: hamburgerMiddleDeform 300ms ease-in-out forwards;
  }
  .is-open path:nth-of-type(3) {
    animation: hamburgerBottomDeform 300ms ease-in-out forwards;
  }

  @keyframes hamburgerTopReset {
    0% {
      transform: translateY(7px) rotate(45deg);
    }
    50% {
      transform: translateY(7px) rotate(0deg);
    }
    100% {
      transform: translateY(0) rotate(0deg);
    }
  }

  @keyframes hamburgerMiddleReset {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes hamburgerBottomReset {
    0% {
      transform: translateY(-7px) rotate(-45deg);
    }
    50% {
      transform: translateY(-7px) rotate(0deg);
    }
    100% {
      transform: translateY(0) rotate(0deg);
    }
  }

  @keyframes hamburgerTopDeform {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(7px) rotate(0deg);
    }
    100% {
      transform: translateY(7px) rotate(45deg);
    }
  }

  @keyframes hamburgerMiddleDeform {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes hamburgerBottomDeform {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-7px) rotate(0deg);
    }
    100% {
      transform: translateY(-7px) rotate(-45deg);
    }
  }
</style>
