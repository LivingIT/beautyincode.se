<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  import YouTube from '../../../svg/youtube.svg';
  import VideoThumbnail from './VideoThumbnail.svelte';
  const youtubeEncoded = `data:image/svg+xml,${encodeURIComponent(YouTube)}`;

  /** @type {Video} video */
  export let video;

  /** @type {boolean} */
  let showVideo = false;

  onMount(() => {
    showVideo = false;
  });

  const revealVideo = () => {
    return (showVideo = true);
  };
</script>

<li class="videos__item">
  <div class="videos__container">
    <h3>{video.title}</h3>
    <p>
      {video.description}
    </p>
    <div class="embed-container">
      {#if showVideo}
        <iframe
          src="https://www.youtube.com/embed/{video.videoId}"
          title=""
          frameborder="0"
          allowfullscreen
          loading="lazy"
        />
      {:else if browser}
        <button
          type="button"
          on:click={revealVideo}
          aria-label="Click the button to load the video"
        >
          <VideoThumbnail {video} />
        </button>
      {:else}
        <a
          href={`https://www.youtube.com/watch?v=${video.videoId}`}
          aria-label="Click the button to view the video on YouTube"
        >
          <VideoThumbnail {video} />
        </a>
      {/if}
    </div>
  </div>
</li>

<style>
  .videos__item {
    background-color: hsla(0, 0%, 100%, 0.1);
  }

  .videos__item:nth-child(odd) {
    background-color: hsla(0, 0%, 100%, 0.2);
  }

  .videos__container {
    padding: 1em;
  }

  button,
  a {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    display: grid;
    grid-template: 1fr / 1fr;
    justify-items: center;
    align-items: center;
  }

  a::after,
  button::after {
    content: '';
    display: block;
    background-image: url(/images/youtube.svg);
    background-position: center;
    background-size: 4rem 6rem;
    background-repeat: no-repeat;
    position: absolute;
    inset: 0;
  }

  .youtube {
    height: 4rem;
    width: 6rem;
  }
</style>
