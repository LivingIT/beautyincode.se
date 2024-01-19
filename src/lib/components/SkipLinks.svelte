<script>
  /** @type {String} */
  export let href;
</script>

<div id="skip">
  <a {href}>Skip to main content</a>
</div>

<style>
  #skip {
    position: absolute;
    top: 0;
    left: -9999px;
    z-index: 100;
    width: 100%;
  }

  #skip a:focus,
  #skip a:active {
    position: absolute;
    top: 0;
    left: 9999px;
    display: block;
    width: 100%;
    padding: 0.5em 0;
    font-weight: bold;
    line-height: 1;
    color: var(--light-text-color);
    text-align: center;
    background: var(--dark-bg-color);
  }
</style>
