<script>
  let footerLinks = [
    { label: 'E-mail', link: 'mailto:beautyincode@livingit.se', icon: 'email' },
    { label: 'Twitter', link: 'https://twitter.com/beautyincode', icon: 'twitter' },
    { label: 'Facebook', link: 'https://www.facebook.com/beautyincode/', icon: 'facebook' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/living-it', icon: 'linkedin' },
    {
      label: 'Instagram',
      link: 'https://www.instagram.com/LivingITConsulting/',
      icon: 'instagram',
    },
  ];
</script>

<footer id="footer">
  <div class="landmark-content" id="contact">
    <div class="colophon">
      <p>
        The name <strong>Beauty in Code</strong> is inspired by a chapter in Adam Tornhill's book
        <a href="https://pragprog.com/titles/atcrime2/your-code-as-a-crime-scene-second-edition/"
          >Your Code As A Crime Scene</a
        >.
      </p>
    </div>

    <h2 class="at-only">Contact us</h2>

    <ul class="footer-links">
      {#each footerLinks as { label, link, icon }}
        <li>
          <a href={link}>
            <svg class="icon" height="24" width="24" aria-hidden="true">
              <use xlink:href="/images/sprite.svg#{icon}" />
            </svg>

            <span class="at-only">{label}</span>
          </a>
        </li>
      {/each}
    </ul>

    <h2 class="at-only">Presented by</h2>

    <a href="https://livingit.se" class="founder-logo">
      <span class="at-only">Living IT</span>
      <svg class="icon" height="24" width="24" aria-hidden="true">
        <use xlink:href="/images/sprite.svg#living-it" />
      </svg>
    </a>
  </div>
</footer>

<style>
  #footer {
    padding: 4em 1em;
    color: var(--secondary-brand-color);
    text-align: center;
    background-color: var(--light-bg-color);
  }

  .colophon {
    max-width: 28em;
    margin-right: auto;
    margin-bottom: 4em;
    margin-left: auto;
    font-size: 0.8em;
  }

  /**
   * Footer links
   */
  .footer-links {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;
  }

  .footer-links li + li {
    margin-left: 1em;
  }

  .footer-links a {
    display: block;
  }

  .footer-links .icon {
    fill: currentColor;
    width: 3em;
    height: 3em;
  }

  /**
   * Founder logo
   */
  .founder-logo {
    display: inline-block;
    margin-top: 2em;
    text-align: center;
  }

  .founder-logo .icon {
    width: 6em;
    height: 2em;
  }
</style>
