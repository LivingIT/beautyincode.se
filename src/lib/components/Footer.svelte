<script>
  import Icon from './Icon.svelte';
  import { footerLinks } from '$lib/data/footerLinks';
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
            <Icon name={icon} height={48} width={48} />
            <span class="at-only">{label}</span>
          </a>
        </li>
      {/each}
    </ul>

    <h2 class="at-only">Presented by</h2>

    <a href="https://livingit.se" class="founder-logo">
      <img src="/images/living-it.svg" alt="Living IT" />
    </a>
  </div>
</footer>

<style>
  footer {
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
