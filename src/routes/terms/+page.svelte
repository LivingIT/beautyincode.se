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
  <p>All registrations are binding. Once your registration is completed
     and you have received the confirmation email, the ticket fee is
     <strong>non-refundable</strong>.</p>

  <p>If you are unable to attend due to illness or unforeseen
     circumstances, your ticket may be <strong>transferred to a colleague at
     no additional cost</strong>. Please contact us for assistance at
     beautyincode@livingit.se.</p>
	 
  <p>You are entitled to a <strong>full refund</strong> if the event is
     postponed or cancelled.</p>
	 
  <h2 id="vat">VAT</h2>
  <p>In accordance with Swedish tax regulations (Skatteverket),
     <strong>25% Swedish VAT</strong> must be charged on all conference
     tickets — this applies to both Swedish and international attendees,
     including foreign companies.</p>

</ArticleSection>
