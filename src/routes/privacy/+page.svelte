<script lang="ts">
  import { title } from '$lib/config';

  import ArticleSection from '$lib/components/articleSection.svelte';
  import ParallaxSection from '$lib/components/parallaxSection.svelte';

  const pageTitle = 'Privacy Policy';
</script>

<svelte:head>
  <title>{pageTitle} - {title}</title>
</svelte:head>

<ParallaxSection backgroundImage="/images/covers/privacy.webp" isSemi>
  <h1>{pageTitle}</h1>
</ParallaxSection>

<ArticleSection>
  <p>We take your privacy seriously and handle your personal data in
  accordance with the General Data Protection Regulation (GDPR).</p>
  
  <h2 id="data-controller">Data Controller</h2>
  <p><strong>Living IT Consulting Group AB</strong> Gustav Adolfs Torg 12,
  211 39 Malmö, Sweden Email: <a
  href="mailto:beautyincode@livingit.se">beautyincode@livingit.se</a></p>
  
  <hr />
  
  <h2 id="what-information-do-we-collect">What information do we
  collect?</h2>
  <p>When you purchase a ticket for the Beauty in Code conference, we
  collect:</p>
  
  <ul>
    <li>Name</li>
    <li>Email address</li>
    <li>Billing and payment details</li>
    <li>Any information you provide during registration</li>
  </ul>
  
  <p>Photography &amp; video are handled separately as described
  below.</p>
  
  <hr />
  
  <h2 id="why-do-we-process-your-data">Why do we process your data?</h2>
  <p>We process your data for the following purposes:</p>
  
  <ul>
    <li>Fulfilling our contract with you (ticket purchase, receipt/invoice,
        badge printing, and event-related communication)</li>
    <li>Sending you event information and important updates</li>
    <li>Marketing emails</li>
    <li>Ensuring smooth administration of the conference</li>
  </ul>
  
  <p><strong>Legal basis:</strong> Performance of contract, consent, and
  legitimate interest (event administration).</p>
  
  <hr />
  
  <h2 id="photography-video">Photography &amp; Video</h2>
  <p>By attending Beauty in Code, you may appear in photos or videos used
  to promote the event in print and digital media.</p>
  
  <p>Legal basis: <strong>Your consent / legitimate interest</strong>.</p>
  
  <p>If you prefer not to appear in photos or recordings, please contact
  us before or during the event, and we will do our best to accommodate
  your request.</p>
  
  <p>Images published online may be visible worldwide and may remain in
  our archives permanently.</p>
  
  <hr />
  
  <h2 id="how-long-do-we-keep-your-data">How long do we keep your
  data?</h2>
  
  <ul>
    <li><strong>Registration data:</strong> Kept for <strong>three
        years</strong> after the event.</li>
    <li><strong>Marketing communication:</strong> Kept until you withdraw
        your consent.</li>
    <li><strong>Financial records:</strong> Kept as required by Swedish
        accounting law.</li>
  </ul>
  
  <hr />

  <h2 id="who-can-access-your-data">Who can access your data?</h2>
  <p>Your data is stored in secure systems provided by trusted and
  GDPR-compliant service providers. Access is restricted according to the
  “need to know” principle. We never sell your data to third parties.</p>
  
  <hr />
  
  <h2 id="your-rights">Your rights</h2>
  <p>Under the GDPR, you have the right to:</p>
  
  <ul>
    <li>Access your personal data</li>
    <li>Request correction or deletion</li>
    <li>Restrict or object to processing</li>
    <li>Withdraw your consent at any time</li>
    <li>Data portability</li>
  </ul>
  
  <p>To exercise any of these rights, contact us at <strong><a
  href="mailto:beautyincode@livingit.se">beautyincode@livingit.se</a></strong>.</p>
  
  <hr />
  
  <h2 id="questions">Questions?</h2>
  <p>If you have any questions or suggestions, feel free to reach out.
  We’re happy to help!</p>

</ArticleSection>
