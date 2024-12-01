import {
  PUBLIC_BASE_URL,
  PUBLIC_SITE_TITLE,
  PUBLIC_GOOGLE_SITE_VERIFICATION,
  PUBLIC_META_DESCRIPTION,
  PUBLIC_OG_IMAGE,
  // PUBLIC_DEPLOY_TIMESTAMP,
  CF_PAGES_URL,
} from '$env/static/public';

export const baseUrl = CF_PAGES_URL || PUBLIC_BASE_URL;
export const title = PUBLIC_SITE_TITLE;
export const googleSiteVerification = PUBLIC_GOOGLE_SITE_VERIFICATION;
export const metaDescription = PUBLIC_META_DESCRIPTION;
export const ogImage = PUBLIC_OG_IMAGE;
export const deployTime = '';
export const cfPagesURL = CF_PAGES_URL;
