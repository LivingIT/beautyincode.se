<script>
  /** @type {Theme} */
  export let theme;

  /** @type {string | null} */
  export let id = null;
</script>

<div class="content-block {theme}" id={id || null}>
  <div class="landmark-content">
    <slot />
  </div>
</div>
