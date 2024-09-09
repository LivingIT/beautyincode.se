<script>
  import config from '../config';

  import ContentBlock from '$lib/components/ContentBlock.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import FigureText from '$lib/components/FigureText.svelte';
  // import Schedule from '$lib/components/Schedule.svelte';
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<ContentBlock theme="theme-hero">
  <Hero />
</ContentBlock>

<ContentBlock theme="theme-1">
  <FigureText />
</ContentBlock>

<ContentBlock theme="theme-4" id="schedule" heading="Schedule">
  <!-- <Schedule /> -->
  <p>We will release the schedule for 2025 soon, so be sure to check back!</p>
</ContentBlock>

<ContentBlock theme="theme-1" id="code-of-conduct" heading="Code of Conduct">
  <p>
    Our conference is dedicated to providing a harassment-free conference experience for everyone,
    regardless of gender, gender identity and expression, age, sexual orientation, disability,
    physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology
    choices. We do not tolerate harassment of conference participants in any form. Sexual language
    and imagery is not appropriate for any conference venue, including talks, workshops, parties,
    Twitter and other online media. Conference participants violating these rules may be sanctioned
    or expelled from the conference without a refund at the discretion of the conference organisers.
  </p>
</ContentBlock>
