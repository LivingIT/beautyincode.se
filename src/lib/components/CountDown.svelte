<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  /** @type {string} */
  export let endDate;

  /** @type {number} */
  let days = 0;

  /** @type {number} */
  let hours = 0;

  /** @type {number} */
  let minutes = 0;

  /** @type {number} */
  let seconds = 0;

  const calculateDaysLeft = () => {
    const end = new Date(endDate).getTime();
    let start = new Date().getTime();
    let timeRemaining = Math.floor((end - start) / 1000);

    if (timeRemaining >= 0) {
      days = Math.floor(timeRemaining / 86400);
    }
  };

  // Reactive statement to calculate days left
  $: calculateDaysLeft();

  // Client-side countdown logic
  if (browser) {
    const calculate = () => {
      const end = new Date(endDate).getTime();
      let start = new Date().getTime();
      let timeRemaining = Math.floor((end - start) / 1000);

      if (timeRemaining >= 0) {
        days = Math.floor(timeRemaining / 86400);
        hours = Math.floor((timeRemaining % 86400) / 3600);
        minutes = Math.floor((timeRemaining % 3600) / 60);
        seconds = timeRemaining % 60;
      }
    };

    onMount(() => {
      const interval = setInterval(calculate, 1000);
      return () => clearInterval(interval);
    });
  }
</script>

<p id="countdown" class="countdown">
  {#if browser}
    {#if days > 0}
      <span class="countdown__unit days">{days}</span>
    {/if}
    {#if hours > 0 || days > 0}
      <span class="countdown__unit hours">{hours}</span>
    {/if}
    {#if minutes > 0 || hours > 0 || days > 0}
      <span class="countdown__unit minutes">{minutes}</span>
    {/if}
    <span class="countdown__unit seconds">{seconds}</span>
  {:else}
    <span class="countdown__ssr">
      Doors open in <em class="countdown__ssr-days">{days}</em> days
    </span>
  {/if}
</p>

<style>
  .countdown {
    padding: 1rem 0.5rem;
    font-size: calc(1.4em + 2.6vw);
    font-weight: 500;
    line-height: 1;
    white-space: nowrap;
    animation: countDownFadeIn 1500ms ease-in;
  }

  .countdown__ssr {
    font-size: 0.5em;
    display: inline-flex;
    align-items: center;
  }

  .countdown__ssr-days {
    font-size: 1.4em;
    font-style: normal;
    padding-inline: 0.25em;
  }

  .countdown__unit {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-block-start: 0;
  }

  .countdown__unit + .countdown__unit {
    margin: 0 0 0 0.25em;
  }

  .countdown__unit::after {
    font-size: 0.3em;
    font-weight: 300;
    text-transform: uppercase;
  }

  .countdown__unit.days::after {
    content: 'days';
  }

  .countdown__unit.hours::after {
    content: 'hours';
  }

  .countdown__unit.minutes::after {
    content: 'minutes';
  }

  .countdown__unit.seconds::after {
    content: 'seconds';
  }

  @keyframes countDownFadeIn {
    0% {
      opacity: 0;
    }

    66% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>
