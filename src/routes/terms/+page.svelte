<script lang="ts">
  import { title } from '$lib/config';

  import ArticleSection from '$lib/components/articleSection.svelte';
  import ParallaxSection from '$lib/components/parallaxSection.svelte';

  const pageTitle = 'Terms and conditions';
</script>

<svelte:head>
  <title>{pageTitle} - {title}</title>
</svelte:head>

<ParallaxSection backgroundImage="/images/covers/terms.webp" isSemi>
  <h1>{pageTitle}</h1>
</ParallaxSection>

<ArticleSection>
  <h2 id="cancellation-policy">Cancellation policy</h2>
  <p>
    Please note that once the registration has been made and the confirmation email has been sent
    out, the registration fee is non-refundable. In case of illness or unforeseen circumstances,
    ticket(s) can be transferred to a colleague without any charge, just
    <a href="mailto:beautyincode@livingit.se">contact us</a>.
  </p>

  <p>
    Living IT Consulting Group AB will carry out the event with respect to participants’ health and
    follow current restrictions and regulations from the Public Health Agency of Sweden. You can get
    a full refund if we postpone or cancel the event or have to limit the number of participants.
    You can as well get a full refund because of national or international restrictions or state
    enforced quarantine.
  </p>

  <h2 id="vat">VAT</h2>
  <p>
    According to Swedish regulations from Skatteverket, we must charge Swedish VAT on the ticket
    price (25%) to all attendees, both Swedish and International companies.
  </p>
</ArticleSection>
