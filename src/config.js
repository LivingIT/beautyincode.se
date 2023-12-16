import {
  PUBLIC_BASE_URL,
  PUBLIC_SITE_TITLE,
  PUBLIC_GOOGLE_SITE_VERIFICATION,
  PUBLIC_META_DESCRIPTION,
  PUBLIC_OG_IMAGE,
} from '$env/static/public';

import { DEPLOY_TIMESTAMP } from '$env/static/private';

const config = {
  baseUrl: PUBLIC_BASE_URL,
  title: PUBLIC_SITE_TITLE,
  googleSiteVerification: PUBLIC_GOOGLE_SITE_VERIFICATION,
  metaDescription: PUBLIC_META_DESCRIPTION,
  ogImage: PUBLIC_OG_IMAGE,
  deployTime: DEPLOY_TIMESTAMP || '',
};

export default config;
