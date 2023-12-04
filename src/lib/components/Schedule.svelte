<script>
  import schedule from '$lib/data/schedule';
  import speakers from '$lib/data/speakers';
  import slugify from '$lib/utils/slugify';
</script>

<ul class="schedule">
  {#each schedule as item}
    <li class="schedule__item">
      <div class="schedule__item-timeslot">
        <p aria-label="From {item.start} to {item.end}">
          <time>{item.start}</time> -
          <time>{item.end}</time>
        </p>
      </div>
      <div class="schedule__item-content">
        {#if item.id}
          {@const speaker = speakers[item.id]}
          <h3><a href="/speakers/#{slugify(speaker.name)}">{speaker.name}</a></h3>
          <div class="schedule__item-m-image">
            <img src={speaker.image} alt="" height="400" width="400" loading="lazy" />
          </div>
          <h4>{item.title}</h4>
        {:else}
          <h3>{item.name}</h3>
          {#if item.title}<h4>{item.title}</h4>{/if}
        {/if}
        {#if item.description}
          <div class="schedule__item-description">
            {@html item.description}
          </div>
        {/if}
      </div>
      <div class="schedule__item-image">
        {#if item.id}
          {@const speaker = speakers[item.id]}
          <img src={speaker.image} alt="" height="400" width="400" loading="lazy" />
        {:else}
          <img src={item.image} alt="" height="400" width="400" loading="lazy" />
        {/if}
      </div>
    </li>
  {/each}
</ul>

<style>
  @media screen {
    .schedule {
      margin-left: 0;
    }

    .schedule__item {
      padding: 2em 1em;
      margin-top: 0;
      background-color: hsla(0, 0%, 100%, 0.1);
    }

    .schedule__item img {
      display: block;
    }

    .schedule__item:nth-child(odd) {
      background-color: hsla(0, 0%, 100%, 0.2);
    }

    .schedule__item-timeslot p {
      padding: 0.1em 0.2em;
      font-size: 0.8em;
      font-weight: 500;
    }

    .schedule__item-m-image {
      margin: 1em 0;
    }

    .schedule__item-image {
      display: none;
    }

    .schedule__item-content h3 {
      margin-bottom: 0;
      font-size: 1.3em;
    }

    .schedule__item-content h4 {
      display: block;
      margin: 1.2em 0 0.6em;
      font-size: 1.1em;
      font-weight: 600;
      text-transform: none;
    }

    @supports (display: grid) {
      .schedule__item {
        display: grid;
        grid-template-rows:
          [main-start] auto
          [content] auto
          [main-end];
        grid-gap: 1em;
      }

      .schedule__item > * {
        margin-top: 0;
      }

      .schedule__item-timeslot {
        border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
      }
    }
  }

  @media screen and (min-width: 28rem) {
    @supports (display: grid) {
      .schedule__item {
        grid-template-rows:
          [main-start] auto
          [content] auto
          [main-end];
        grid-template-columns:
          [image] minmax(8rem, 1fr)
          [content] 2fr
          [main-end];
      }

      .schedule__item-timeslot {
        grid-column: image / main-end;
      }

      .schedule__item-m-image {
        display: none;
      }

      .schedule__item-image {
        display: block;
        grid-row: content / main-end;
        grid-column: image / content;
      }

      .schedule__item-content {
        grid-row: content / main-end;
        grid-column: content / main-end;
      }
    }
  }

  @media screen and (min-width: 44em) {
    @supports (display: grid) {
      .schedule__item {
        grid-template-rows: 1fr;
        grid-template-columns:
          [timeslot] 6.4rem
          [image] 10rem
          [content] 1fr
          [main-end];
      }

      .schedule__item-timeslot {
        grid-row: 1;
        grid-column: timeslot / content;
        border-bottom: 0;
      }

      .schedule__item-image {
        grid-row: 1;
        grid-column: image / content;
      }

      .schedule__item-content {
        grid-row: 1;
        grid-column: content / main-end;
      }
    }
  }
</style>
