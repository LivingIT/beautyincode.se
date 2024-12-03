import { browser } from '$app/environment';

export const navToggle = $state({
  isNavOpen: false,
  isWideViewport: false,
});

if (browser) {
  function updateViewportState() {
    navToggle.isWideViewport = window.matchMedia('(min-width: 34em)').matches;

    if (navToggle.isWideViewport) {
      navToggle.isNavOpen = true;
    } else {
      navToggle.isNavOpen = false;
    }
  }

  // Initial check
  updateViewportState();

  // Create a media query listener
  const mediaQuery = window.matchMedia('(min-width: 34em)');
  mediaQuery.addEventListener('change', updateViewportState);
}
