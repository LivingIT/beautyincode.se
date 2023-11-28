<script>
  import speakers from '$lib/data/speakers';
</script>

{#each Object.values(speakers) as speaker}
  <section class="speaker" id="roy-osherove">
    <h3>{speaker.name}</h3>
    <img
      src={speaker.image}
      class="speaker__image"
      height="400"
      width="400"
      alt=""
      loading="lazy"
    />
    {@html speaker.bio}
  </section>
{/each}

<style>
  .speaker + .speaker {
    margin-top: 2.5em;
  }

  .speaker::after {
    display: block;
    clear: both;
    content: '';
  }

  @media (min-width: 31.25em) {
    .speaker__image {
      float: left;
      max-width: 40%;
      margin-right: 1em;
    }
  }
</style>
