<script lang="ts">
  import speakers from '$lib/data/speakers';
  import slugify from '$lib/utils/slugify';

  interface Speaker {
    name: string;
    image: string;
    bio: string;
  }

  const sortedSpeakers: Array<Speaker> = Object.values(speakers).sort((a, b) => {
    // Compare based on the speaker's ID
    return a.name.localeCompare(b.name);
  });
</script>

{#each sortedSpeakers as speaker}
  <section class="speaker" id={slugify(speaker.name)}>
    <h2>{speaker.name}</h2>
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
