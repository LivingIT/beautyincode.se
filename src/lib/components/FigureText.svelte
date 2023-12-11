<div class="figure-text">
  <figure role="presentation">
    <img src="/images/logo.svg" height="149" width="300" alt="" loading="lazy" />
    <img
      src="/images/malmo-live-night-w200.jpg"
      srcset="/images/malmo-live-night-w400.jpg, 
              /images/malmo-live-night-w800.jpg 2x"
      height="1000"
      width="1000"
      alt=""
      loading="lazy"
    />
  </figure>
  <article>
    <h2 id="about-the-conference">About the conference</h2>

    <p>
      <strong>Beauty in Code</strong> is a single-track IT conference at Malmö Live, Sweden, brought
      to you by <a href="https://livingit.se">Living IT</a>. Every year in March we gather amazing
      speakers that are bringing new exciting material for a full day of learning.
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

<style>
  article {
    padding: 0;
  }

  figure {
    display: grid;
  }

  img {
    grid-row-start: 1;
    grid-column: 1 / -1;
    margin: 0;
  }

  img:nth-child(1) {
    order: 1;
    padding: 1em;
  }

  @media screen and (min-width: 32em) {
    .figure-text {
      --figure-columns: 2fr 3fr;

      display: grid;
      grid-template-columns: var(--figure-columns);
      grid-column-gap: 2em;
    }

    .figure-text > * {
      margin-top: 0;
    }

    figure {
      display: block;
    }

    img:nth-child(1) {
      padding: 0;
    }

    img:nth-child(2) {
      margin-top: 1em;
    }
  }

  @media (min-width: 45em) {
    .figure-text {
      --figure-columns: repeat(2, 1fr);
    }
  }
</style>
