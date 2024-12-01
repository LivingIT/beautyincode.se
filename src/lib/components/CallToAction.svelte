<script lang="ts">
  interface Props {
    url: string;
    text: string;
  }

  let { url, text }: Props = $props();
</script>

<a href={url}>{text}</a>

<style>
  a {
    display: inline-block;
    padding: 1em 2em;
    font-size: calc(0.8em + 1vw);
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--light-text-color);
    background-color: var(--primary-brand-color);
    border-radius: 50em;
    transition: transform 500ms;
  }

  a:hover,
  a:focus {
    transform: scale(1.1);
  }
</style>
