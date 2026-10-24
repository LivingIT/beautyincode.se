<script lang="ts">
  import speakers, { speakerPhoto } from '$lib/data/speakers';

  const sortedSpeakers = Object.entries(speakers).sort(([, a], [, b]) =>
    a.name.localeCompare(b.name),
  );
</script>

{#each sortedSpeakers as [slug, speaker] (slug)}
  <section class="speaker" id={slug}>
    <h2>{speaker.name}</h2>
    <img
      src={speakerPhoto(slug)}
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
