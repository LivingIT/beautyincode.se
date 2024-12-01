<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
    backgroundImage: string;
  }

  let { children, backgroundImage }: Props = $props();
</script>

<section style="--section-bg: url({backgroundImage});">
  {@render children?.()}
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 101dvh;
    color: hsl(0 0 100);
    background-image: var(--section-bg);
    background-position: top center;
    background-attachment: fixed;
    background-size: cover;
    margin-block-start: 0;
  }

  /* Safari iOS can’t handle fixed yet */
  @supports (-webkit-touch-callout: none) {
    section {
      background-attachment: initial !important;
    }
  }
</style>
