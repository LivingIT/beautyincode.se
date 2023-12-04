<script>
  import config from '../config';

  import ContentBlock from '$lib/components/ContentBlock.svelte';
  import Schedule from '$lib/components/Schedule.svelte';
  import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<ContentBlock theme="theme-hero">
  <Hero />
</ContentBlock>

<ContentBlock theme="theme-1">
  <div class="figure-text">
    <figure>
      <img src="/images/logo.svg" height="149" width="300" alt="" loading="lazy" />
      <img src="/images/malmo-live-night.jpg" height="1000" width="1000" alt="" loading="lazy" />
    </figure>
    <article>
      <h2 id="about-the-conference">About the conference</h2>

      <p>
        <strong>Beauty in Code</strong> is a single-track IT conference at Malmö Live, Sweden,
        brought to you by <a href="https://livingit.se">Living IT</a>. Every year in March we gather
        amazing speakers that are bringing new exciting material for a full day of learning.
      </p>

      <p>
        Our idea is to create a conference for everyone involved in the software industry. We put it
        on a Saturday so no-one gets denied due to work. We keep the fee very low so everyone can
        afford to attend. In fact, you only pay for the lunch and fika; the actual conference is on
        us, because we love to share knowledge and this is our way of giving back to the community.
      </p>

      <p>We wish <em>you</em> welcome to an inspiring day at Malmö Live!</p>
    </article>
  </div>
</ContentBlock>

<ContentBlock theme="theme-4" id="schedule" heading="Schedule">
  <Schedule />
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
