<script lang="ts">
  import Icon from '@iconify/svelte';

  const footerLinks = [
    {
      label: 'E-mail',
      link: 'mailto:beautyincode@livingit.se',
      icon: 'mdi:email',
    },
    {
      label: 'X',
      link: 'https://x.com/beautyincode',
      icon: 'ri:twitter-x-fill',
    },
    {
      label: 'Facebook',
      link: 'https://www.facebook.com/beautyincode/',
      icon: 'mdi:facebook',
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/company/living-it',
      icon: 'mdi:linkedin',
    },
    {
      label: 'Instagram',
      link: 'https://www.instagram.com/LivingITConsulting/',
      icon: 'mdi:instagram',
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
            <Icon {icon} width={32} height={32} />
            <span class="at-only">{label}</span>
          </a>
        </li>
      {/each}
    </ul>

    <h2 class="at-only">Presented by</h2>

    <a href="https://livingit.se" class="founder-logo">
      <picture>
        <source srcset="/images/living-it-dark.svg" media="(prefers-color-scheme: dark)" />
        <img src="/images/living-it.svg" alt="Living IT" />
      </picture>
    </a>
  </div>
</footer>

<style>
  footer {
    background-color: var(--footer-overlay);
    margin-block-start: 0;
    padding: 4em 1em;
    text-align: center;
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
    gap: 2em;
    align-items: center;
    justify-content: center;
    margin-left: 0;
  }

  .footer-links a {
    display: block;
    transition: color ease-in-out 200ms;
  }

  .footer-links a:hover,
  .footer-links a:focus,
  .footer-links a:active {
    color: var(--primary-brand-color);
  }

  /**
   * Founder logo
   */
  .founder-logo {
    display: inline-block;
    margin-top: 2em;
    text-align: center;
  }

  .founder-logo img {
    width: 6em;
    height: 2em;
  }
</style>
