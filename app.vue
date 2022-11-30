<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
</script>
<template>
  <div>
    <Head>
      <!-- <meta name="robots" content="all" /> -->
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Carrosserie Ollivier" />
      <meta name="twitter_card" content="summary_large_image" />
      <link rel="apple-touch-icon-precomposed" sizes="57x57" :href="(runtimeConfig.public.siteUrl + '/favicon/apple-touch-icon-57x57.png')" />
      <link rel="apple-touch-icon-precomposed" sizes="114x114" :href="(runtimeConfig.public.siteUrl + '/favicon/apple-touch-icon-114x114.png')" />
      <link rel="apple-touch-icon-precomposed" sizes="72x72" :href="(runtimeConfig.public.siteUrl + '/favicon/apple-touch-icon-72x72.png')" />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" :href="(runtimeConfig.public.siteUrl + '/favicon/apple-touch-icon-144x144.png')" />
      <link rel="apple-touch-icon-precomposed" sizes="60x60" :href="(runtimeConfig.public.siteUrl + '/favicon/apple-touch-icon-60x60.png')" />
      <link rel="apple-touch-icon-precomposed" sizes="120x120" :href="(runtimeConfig.public.siteUrl + '/favicon/apple-touch-icon-120x120.png')" />
      <link rel="apple-touch-icon-precomposed" sizes="76x76" :href="(runtimeConfig.public.siteUrl + '/favicon/apple-touch-icon-76x76.png')" />
      <link rel="apple-touch-icon-precomposed" sizes="152x152" :href="(runtimeConfig.public.siteUrl + '/favicon/apple-touch-icon-152x152.png')" />
      <link rel="icon" type="image/png" :href="(runtimeConfig.public.siteUrl + '/favicon/favicon-196x196.png')" sizes="196x196" />
      <link rel="icon" type="image/png" :href="(runtimeConfig.public.siteUrl + '/favicon/favicon-96x96.png')" sizes="96x96" />
      <link rel="icon" type="image/png" :href="(runtimeConfig.public.siteUrl + '/favicon/favicon-32x32.png')" sizes="32x32" />
      <link rel="icon" type="image/png" :href="(runtimeConfig.public.siteUrl + '/favicon/favicon-16x16.png')" sizes="16x16" />
      <link rel="icon" type="image/png" :href="(runtimeConfig.public.siteUrl + '/favicon/favicon-128.png')" sizes="128x128" />
      <link rel="icon" type="image/x-icon" :href="(runtimeConfig.public.siteUrl + '/favicon/favicon.ico')" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" :content="(runtimeConfig.public.siteUrl + '/favicon/mstile-144x144.png')" />
      <meta name="msapplication-square70x70logo" :content="(runtimeConfig.public.siteUrl + '/favicon/mstile-70x70.png')" />
      <meta name="msapplication-square150x150logo" :content="(runtimeConfig.public.siteUrl + '/favicon/mstile-150x150.png')" />
      <meta name="msapplication-wide310x150logo" :content="(runtimeConfig.public.siteUrl + '/favicon/mstile-310x150.png')" />
      <meta name="msapplication-square310x310logo" :content="(runtimeConfig.public.siteUrl + '/favicon/mstile-310x310.png')" />
    </Head>
    <NuxtLayout />
  </div>
</template>
