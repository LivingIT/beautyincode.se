<script>
  import { onMount } from 'svelte';

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

  /** @type {boolean} */
  let isActive = false;

  /**
   * Calculate the time remaining and update the countdown
   */
  const calculate = () => {
    const end = new Date(endDate).getTime();
    let start = new Date().getTime();
    let timeRemaining = Math.floor((end - start) / 1000);

    if (timeRemaining >= 0) {
      days = Math.floor(timeRemaining / 86400);
      hours = Math.floor((timeRemaining % 86400) / 3600);
      minutes = Math.floor((timeRemaining % 3600) / 60);
      seconds = timeRemaining % 60;

      isActive = true;
    } else {
      isActive = false;
    }
  };

  onMount(() => {
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  });
</script>

<p id="countdown" class="countdown {isActive ? 'countdown--active' : ''}">
  <span class="at-only">Event begins in</span>
  <span class="countdown__unit days">{days}</span>
  <span class="countdown__unit hours">{hours < 10 ? '0' + hours : hours}</span>
  <span class="countdown__unit minutes">{minutes < 10 ? '0' + minutes : minutes}</span>
  <span class="countdown__unit seconds">{seconds < 10 ? '0' + seconds : seconds}</span>
</p>

<style>
  .countdown {
    padding: 1rem 0.5rem;
    font-size: calc(1.4em + 2.6vw);
    font-weight: 500;
    line-height: 1;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 250ms ease-in-out;
  }

  .countdown--active {
    opacity: 1;
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
</style>
