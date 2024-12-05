<script lang="ts">
  type Video = {
    title: string;
    videoId: string;
    description: string;
  };

  export let video: Video;
</script>

<img src="https://i.ytimg.com/vi_webp/{video.videoId}/maxresdefault.webp" loading="lazy" alt="" />
