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
      <li>
        <a href="mailto:beautyincode@livingit.se">
          <svg class="icon" height="24" width="24" aria-hidden="true">
            <use xlink:href="/images/sprite.svg#email" />
          </svg>

          <span class="at-only">E-mail</span>
        </a>
      </li>

      <li>
        <a href="https://twitter.com/beautyincode">
          <svg class="icon" height="24" width="24" aria-hidden="true">
            <use xlink:href="/images/sprite.svg#twitter" />
          </svg>

          <span class="at-only">Twitter</span>
        </a>
      </li>

      <li>
        <a href="https://www.facebook.com/beautyincode/">
          <svg class="icon" height="24" width="24" aria-hidden="true">
            <use xlink:href="/images/sprite.svg#facebook" />
          </svg>

          <span class="at-only">Facebook</span>
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/company/living-it">
          <svg class="icon" height="24" width="24" aria-hidden="true">
            <use xlink:href="/images/sprite.svg#linkedin" />
          </svg>

          <span class="at-only">LinkedIn</span>
        </a>
      </li>

      <li>
        <a href="https://www.instagram.com/LivingITConsulting/">
          <svg class="icon" height="24" width="24" aria-hidden="true">
            <use xlink:href="/images/sprite.svg#instagram" />
          </svg>

          <span class="at-only">Instagram</span>
        </a>
      </li>
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
  /**
 * Footer
 */

  @media screen {
    #footer {
      padding: 4em 1em;
      color: hsl(20, 10%, 18%);
      text-align: center;
      background-color: hsl(32, 100%, 87%);
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
  }
</style>
