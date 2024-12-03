import {
  PUBLIC_BASE_URL,
  PUBLIC_SITE_TITLE,
  PUBLIC_GOOGLE_SITE_VERIFICATION,
  PUBLIC_META_DESCRIPTION,
  PUBLIC_OG_IMAGE,
  PUBLIC_EVENT_URL,
  PUBLIC_DEPLOY_TIMESTAMP,
} from '$env/static/public';

const cfPagesUrl = import.meta.env.VITE_CF_PAGES_URL || process.env.CF_PAGES_URL;

export const baseUrl = cfPagesUrl || PUBLIC_BASE_URL; // Use Cloudflare's URL if available
export const title = PUBLIC_SITE_TITLE;
export const googleSiteVerification = PUBLIC_GOOGLE_SITE_VERIFICATION;
export const metaDescription = PUBLIC_META_DESCRIPTION;
export const ogImage = PUBLIC_OG_IMAGE;
export const eventUrl = PUBLIC_EVENT_URL;
export const deployTime = PUBLIC_DEPLOY_TIMESTAMP;
