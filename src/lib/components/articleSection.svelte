<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
    isSubPage?: boolean;
  }

  let { children, isSubPage = false }: Props = $props();
</script>

<section class:subpage={isSubPage}>
  <article>
    {@render children?.()}
  </article>
</section>

<style>
  section {
    background-color: hsl(0 0 100);
    padding: 4rem 1rem;
  }

  .subpage {
    margin-block-start: 5rem;
  }

  article {
    margin: 0 auto;
    max-width: 55ch;
  }
</style>
