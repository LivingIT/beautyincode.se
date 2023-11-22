<script>
  /**
   * @type {Video}
   */
  export let video;
</script>

<li class="videos__item">
  <div class="videos__container">
    <h3>{video.title}</h3>
    <p>
      {video.description}
    </p>
    <div class="embed-container">
      <iframe
        src="https://www.youtube.com/embed/{video.videoId}"
        title=""
        frameborder="0"
        allowfullscreen
      />
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
</style>
