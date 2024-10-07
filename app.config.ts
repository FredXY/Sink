export default defineAppConfig({
  title: 'CPI Links',
  description: 'CPI Links Shortener - Deployment of Sink ',
  image: 'https://cpipg.com/themes/cpipg/assets/images/CPIPG_logo_RGB.svg',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
