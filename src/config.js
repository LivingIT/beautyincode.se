import {
  PUBLIC_BASE_URL,
  PUBLIC_SITE_TITLE,
  PUBLIC_GOOGLE_SITE_VERIFICATION,
  PUBLIC_META_DESCRIPTION,
  PUBLIC_OG_IMAGE,
  PUBLIC_DEPLOY_TIMESTAMP,
} from '$env/static/public';

const config = {
  baseUrl: PUBLIC_BASE_URL,
  title: PUBLIC_SITE_TITLE,
  googleSiteVerification: PUBLIC_GOOGLE_SITE_VERIFICATION,
  metaDescription: PUBLIC_META_DESCRIPTION,
  ogImage: PUBLIC_OG_IMAGE,
  deployTime: PUBLIC_DEPLOY_TIMESTAMP,
};

export default config;
