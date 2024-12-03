<script lang="ts">
  import { schedule } from '$lib/data/schedule';
</script>

{#each schedule as { time, speakerSlug, name, description, title, image }}
  <h2>{time}</h2>
  <section>
    <img src={speakerSlug ? `/images/speakers/${speakerSlug}.webp` : image} alt="" />
    <div>
      <h3>
        {#if title}
          {title} -
        {/if}
        {#if speakerSlug}
          <a href={`/speakers/#${speakerSlug}`}>{name}</a>
        {:else}
          {name}
        {/if}
      </h3>
      {@html description}
    </div>
  </section>
{/each}

<style>
  h2 {
    font-size: 0.875em;
    background-color: light-dark(hsl(0 0 94), hsl(0 0 12));
    border: 2px solid var(--bg-color);
    border-radius: 50em;
    position: sticky;
    top: 5.2em;
    padding: 0.4em 1em;
    margin-block-start: 4em;
  }

  h3 {
    font-size: 1.2em;
  }

  section {
    margin-inline: 1rem;
    clear: both;
    overflow: hidden;
  }

  div {
    margin-block-start: 0;
  }

  img {
    width: 25vw;
    min-width: 7rem;
    max-width: 10rem;
    float: inline-start;
    margin-inline: 0 1em;
    margin-block-end: 1em;
  }

  section:nth-of-type(odd) img {
    float: inline-end;
    margin-inline: 1em 0;
  }

  @media (min-width: 40em) {
    section {
      clear: unset;
      overflow: unset;
      display: grid;
      gap: 1rem;
      grid-template-columns: auto 1fr;
    }

    img {
      float: none;
      grid-column: 1 / 2;
    }

    div {
      grid-column: 2 / 3;
    }

    img,
    div {
      grid-row: 1;
    }

    section:nth-of-type(odd) {
      grid-template-columns: 1fr auto;

      img {
        grid-column: 2 / 3;
      }

      div {
        grid-column: 1 / 2;
      }
    }
  }
</style>
