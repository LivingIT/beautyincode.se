import {
  PUBLIC_BASE_URL,
  PUBLIC_SITE_TITLE,
  PUBLIC_GOOGLE_ANALYTICS,
  PUBLIC_GOOGLE_SITE_VERIFICATION,
  PUBLIC_META_DESCRIPTION,
  PUBLIC_OG_IMAGE
  // PUBLIC_BUILD_TIME
} from '$env/static/public';

import { PRIVATE_BUILD_TIME } from '$env/static/private';

const config = {
  baseUrl: PUBLIC_BASE_URL,
  title: PUBLIC_SITE_TITLE,
  analytics: PUBLIC_GOOGLE_ANALYTICS,
  googleSiteVerification: PUBLIC_GOOGLE_SITE_VERIFICATION,
  metaDescription: PUBLIC_META_DESCRIPTION,
  ogImage: PUBLIC_OG_IMAGE,
  deployTime: PRIVATE_BUILD_TIME
};

export default config;
