<script lang="ts">
  interface Props {
    items: Array<string>;
  }

  let { items }: Props = $props();
</script>

<ul class="article-toc">
  {#each items as item}
    <li><a href="#y{item}">{item}</a></li>
  {/each}
</ul>

<style>
  .article-toc {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding-block: 0.5em;
  }

  .article-toc a {
    display: inline-block;
    text-decoration: none;
    background-color: var(--text-color);
    color: var(--bg-color);
    padding: 0 0.9em;
    border-radius: 50em;
    transition: opacity 200ms ease-in-out;
  }

  .article-toc a:hover,
  .article-toc a:focus,
  .article-toc a:active {
    opacity: 0.7;
  }
</style>
