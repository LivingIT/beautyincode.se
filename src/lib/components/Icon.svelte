<script>
  /** @type {string} */
  export let height = '24';

  /** @type {string} */
  export let width = '24';

  /** @type {boolean} */
  export let isHidden = true;

  /** @type {'twitter' | 'arrow_up' | 'email' | 'facebook' | 'instagram' | 'linkedin' | 'living-it' | 'logo' | 'mail' | 'menu'} */
  export let href;

  /** @type {string} */
  export let className = '';
</script>

<svg class={`icon ${className}`} {height} {width} aria-hidden={isHidden}>
  <use xlink:href="/images/sprite.svg#{href}" />
</svg>

<style>
  .icon {
    display: inline-block;
    width: 1.2em;
    height: 1.2em;
    vertical-align: -0.2em;
    fill: currentcolor;
  }
</style>
