import { defineEnvVars } from '@sveltejs/kit/env';

const publicStatic = { public: true, static: true } as const;

export const variables = defineEnvVars({
  PUBLIC_BASE_URL: publicStatic,
  PUBLIC_DEPLOY_TIMESTAMP: publicStatic,
  PUBLIC_EVENT_URL: publicStatic,
  PUBLIC_GOOGLE_SITE_VERIFICATION: publicStatic,
  PUBLIC_META_DESCRIPTION: publicStatic,
  PUBLIC_OG_IMAGE: publicStatic,
  PUBLIC_SITE_TITLE: publicStatic,
  PUBLIC_TICKET_SALES_CLOSED: publicStatic,
});
