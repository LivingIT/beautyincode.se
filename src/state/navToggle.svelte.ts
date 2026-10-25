import { browser } from '$app/env';
import { MediaQuery } from 'svelte/reactivity';

class NavToggle {
  #wideViewport = new MediaQuery('min-width: 34em', false);

  // Open on the server, so the menu works without JavaScript. In the browser it follows the
  // viewport: a toggle overrides it until the viewport crosses the breakpoint.
  isNavOpen = $derived(!browser || this.#wideViewport.current);

  get isWideViewport() {
    return this.#wideViewport.current;
  }
}

export const navToggle = new NavToggle();
