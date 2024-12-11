<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
    backgroundImage: string;
    isSemi?: boolean;
  }

  let { children, backgroundImage, isSemi = false }: Props = $props();
</script>

<section style="--section-bg: url({backgroundImage});" class:semi={isSemi}>
  {@render children?.()}
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 101vh;
    color: hsl(0deg 0% 100%);
    background-color: var(--dark-bg-color);
    background-image: var(--section-bg);
    background-position: top center;
    background-attachment: fixed;
    background-size: cover;
    margin-block-start: 0;
  }

  :global(section > h1) {
    font-size: 4rem;
    text-shadow: 0 0 5px var(--dark-bg-color);
    margin-block-start: 3rem;
  }

  .semi {
    height: 50dvh;
    align-items: end;
  }

  /* Safari iOS can’t handle fixed yet */
  @supports (-webkit-touch-callout: none) {
    section {
      background-attachment: initial !important;
    }
  }
</style>
